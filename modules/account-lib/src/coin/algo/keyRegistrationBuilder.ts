/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BigNumber from 'bignumber.js';
import algosdk from 'algosdk';
import { BaseCoin as CoinConfig } from '@bitgo/statics';
import { InvalidTransactionError } from '../baseCoin/errors';
import { TransactionBuilder } from './transactionBuilder';
import { Transaction } from './transaction';
import { TransactionType } from '../baseCoin';
import { KeyRegTxnSchema } from './txnSchema';
export class KeyRegistrationBuilder extends TransactionBuilder {
  protected _voteKey: string;
  protected _selectionKey: string;
  protected _voteFirst: number;
  protected _voteLast: number;
  protected _voteKeyDilution: number;

  constructor(coinConfig: Readonly<CoinConfig>) {
    super(coinConfig);
  }
  /**
   * Sets the vote key
   *
   * @param {number} key The root participation public key. See Generate a Participation Key to learn more.
   * https://developer.algorand.org/docs/reference/transactions/#key-registration-transaction
   */
  voteKey(key: string): KeyRegistrationBuilder {
    this._voteKey = key;
    return this;
  }
  /**
   *Sets the selection key
   *
   * @param {number} key The VRF public key for the account.
   * https://developer.algorand.org/docs/reference/transactions/#key-registration-transaction
   */
  selectionKey(key: string): KeyRegistrationBuilder {
    this._selectionKey = key;
    return this;
  }

  /**
   *Sets the vote first round
   *
   * @param {number} round The first round that the participation key is valid. Not to be confused with the FirstValid round of the keyreg transaction.
   * https://developer.algorand.org/docs/reference/transactions/#key-registration-transaction
   */
  voteFirst(round: number): KeyRegistrationBuilder {
    this.validateValue(new BigNumber(round));
    this._voteFirst = round;

    return this;
  }

  /**
   * Sets the vote last round
   *
   * A recommended range is 3,000,000 rounds.
   *
   * @param {number} round No theoretical limit.
   * https://developer.algorand.org/docs/run-a-node/participate/generate_keys/
   */
  voteLast(round: number): KeyRegistrationBuilder {
    this.validateValue(new BigNumber(round));
    this._voteLast = round;

    return this;
  }

  /**
   * Sets the vote key dilution
   *
   * Defaults to 10,000
   *
   * @param {number} size. To reduce the size of the participation key, set the key dilution value to roughly the square root of the range that the partkey is valid for.
   * https://developer.algorand.org/docs/run-a-node/participate/generate_keys/#generate-the-participation-key-with-goal
   */
  voteKeyDilution(size: number = 10000): KeyRegistrationBuilder {
    this.validateValue(new BigNumber(size));
    this._voteKeyDilution = size;

    return this;
  }

  /** @inheritdoc */
  protected async buildImplementation(): Promise<Transaction> {
    this.transaction.setAlgoTransaction(
      algosdk.makeKeyRegistrationTxnWithSuggestedParams(
        this._sender,
        this._note,
        this._voteKey,
        this._selectionKey,
        this._voteFirst,
        this._voteLast,
        this._voteKeyDilution,
        this.suggestedParams,
      ),
    );
    this.transaction.setTransactionType(TransactionType.KeyRegistration);
    return await super.buildImplementation();
  }

  /** @inheritdoc */
  protected fromImplementation(rawTransaction: Uint8Array | string): Transaction {
    const tx = super.fromImplementation(rawTransaction);
    const algoTx = tx.getAlgoTransaction();
    if (algoTx) {
      this.voteKey(algoTx.voteKey.toString('base64'));
      this.selectionKey(algoTx.selectionKey.toString('base64'));
      this.voteFirst(algoTx.voteFirst);
      this.voteLast(algoTx.voteLast);
      this.voteKeyDilution(algoTx.voteKeyDilution);
    }
    return tx;
  }

  /** @inheritdoc */
  validateTransaction(transaction: Transaction): void {
    super.validateTransaction(transaction);
    const validationResult = KeyRegTxnSchema.validate({
      voteKey: this._voteKey,
      selectionKey: this._selectionKey,
      voteFirst: this._voteFirst,
      voteLast: this._voteLast,
      voteKeyDilution: this._voteKeyDilution,
    });
    if (validationResult.error) {
      throw new InvalidTransactionError(`Transaction validation failed: ${validationResult.error.message}`);
    }
  }
}