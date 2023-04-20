import { Buffer } from 'buffer';

function bigIntFromBufferBE(buf: Buffer): bigint {
  return BigInt('0x' + buf.toString('hex'));
}
export const mockChallenge = {
  ntilde: bigIntFromBufferBE(
    new Buffer(
      'bd804551775fc81df8f42c986316fe7d17c28f9fa6d89207f9961a639c6790f1c3745133ee7ca32925f2bc9a3c2cb0748b80d0871d3f9acd188356235f4df9549fd925ca5f18a14c7d494cccee7404b593722465a1cd30119cafe9f899a1d674fcf4843ca048e2af63423158719d208aaeae94eba5afed1a02c13ccb81c54e89858c7a6f706b11b0b39395a86d8acd5fa2012ea00cff2dc7c289132e5a79e4cac9adc7a4521a60b84107f0dd9f3788348fb2675eec55ed3e375541192b10b7d806dafec85560f2834fddebba470179816992c46749f3d3b81115917790bff778afc7e1bc72c4cee3ed3d39c9f104614e0535172e5be444e5f65a77e84e81f9d172873f76234981a4d7e20606de9933fb7f76a670675cf5f7639073f6999e3e79583a1e09cdec495deb134747a0d44f035bb8f67876d671a6f95d2c68a45446e887fdc620a74707137ce29d6b7f5b59e4be32a8c2ec0525941c2ecf0142a78a2a535be8e523750e198d8b382908a75731d7ad039841ca5591231b38aabcb53e95',
      'hex'
    )
  ),
  h1: bigIntFromBufferBE(
    new Buffer(
      '83720de7ee7c3f2fc11d5c5f49ec84cc61823c250a1977ff2fb3d3bb6fbf21330dba3f73b204a042b8b7cb47ac6b8367ee202f4f4eaa7c5b5f819e4bd3dac7f82a932de30b5f25e0f5623bd8a2978e41eb4ace53be4e6ccfd2ae4fba9ef54fc6a2197701f4e010e5f965c36cbd4cd8fdc8ffea3f14129e01cff2df9f50ba3ac6917b51b21b12523cb929341a5c748ddfb243dd4f04cce944a7c6fab84ab0776ad31b5d98e06221c0ee80bc7b568b78cde7b3d310b1356d5f3377ccd8f97c2b987c1fbb038acb91c8804448146b46d96197f441ee6da48f0e89622ed7a4b29408ed7206fed14f41781206efd538c8d48df0ef4f7d0e5f4822089bed96731c7f70071e036b88d7411072fde5b3ba9e42ea16aef895e9941899b67f99b9aaa7395dc55fd0cfde3e3e986f63576cdd3703530940e4d6c093b44ae8189d8976f201341315637abc031d98206070863a5cda067de9b750b9c3f4d7a410cf4b881065d89ec7beee367d6e2673e0a129f0b69743849b47475950849b7321dd97115b43a8',
      'hex'
    )
  ),
  h2: bigIntFromBufferBE(
    new Buffer(
      '61486bc53133b3b1308029a459b3f16aed492778aaa8de939c3d2c8cc1599e11b5dce4f3d96d4e1ca905e4ddc17955fc2dedb0a09b72fe1d2001dbe8ae6e5b2830d92bd8c1986e3c8bb2f7682751466292b9fb75071f723b38a65a68df724754ca1af1c23f63c04d7a8577bb925e573f8aa0695f20eb25f4ab48d91f2999f156d4aa55a83aea18e30b39cc242ddd54b3e947568bda51aa4a6b55b3b93b055cbb7e7039c60dd66c3da90b54914cf606d2444530994eebff82dd2f1f191bb46ed61c59b556dcd0c85ff8cf292c4cea308cd095f66b66b6f99f52d30002499bbadaa6561729ad124fde5387f74772674ddd35ff355b5bf9c0fe9ea74b7fa5f6d278e9b034f9ad39cc93f03e7e08269f94a8c840b33789f90dedb9f160e775f42b9e309475d77e1fa0202181a1c646422b8af1ba34982fe9d8dfe8bf02de196b7df0b4404acadb7a8256b2e68983558a69d466ae907f8bc7e000c820b07c8d372d2c787c584d27f3267b13d908ef78eda2e78c4af0e6c53d22d575bec428288bef8f',
      'hex'
    )
  ),
};
