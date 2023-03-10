import { Keychain } from '@bitgo/sdk-core';

export const keyShares = {
  userKeyShare: {
    pShare: {
      i: 1,
      t: 2,
      c: 3,
      l: 'a1a7728d36dacf20c79bf12a2b2241c6bd891f534e58fd7f997a19af6c4d88975e3190417b1f6c61f12b4a18947f1b52123b4b87cb7cdf963d4c2ebfdf83f966f7e209b4089fcdd02a78bd259787a330d93412fd60420d20541f9fb65f0588f9f45e923d6461bc1bfbc4e779904c4664df1da2c5f858b18534dee88c098beba97496730d908f89ee78cf681dcb7d1dce416c5a064400d9ff6b61dd3c1a0654474972dbffbbc798371d77294c5f4e5dbd3581fa9c6ebabaa6fff02980a26ed230ca4682a3e3b3fa67bf0dcc80a525b0983630cf9251643114ad2ae651e32d9cdb2753f3b362822f004ad47ebaa25af4e71d19e2dfbefc13584c39135a93557589e05023653f744ad7981cb992f18fee6f9b168d1146f43edafba2c0a66dd33afb68b3a26e05ebacbef1ed0ef88abff3ccbfa7d11dba20664008fa31a546e669ce926c6836abf71df0937f78461573238726de348a530d0da19ac27c7233d7f4f5fef158e3da28db5877642341b66ba2c91451f40b908287fb343fc9a556087b18',
      m: '1e7d61cf7ba86b3677a3a254c7e1753505119112005b3e49fa5d4c7bf3b7fd40b1ef795edb0358de3b4cd57e197672157528b5e00936c1c52ff4ec08abf38be50a0327e72f12eb24d7d3c7bb8a43fea87ff2f9a288c83594d4e87a1696f63b4675d80da2325485e25bdfe2d3c204b69af4761597bfe27821784f064f98bfe0cd2beb24f208be143e1f6e5a79187904f5bb5ecbdbb4cdf02ff141d64697d63d1349d9963afc830f25327c6f309baff16641df3f502353188780d8a38d1a93ac2cb60e3e5781151bb5b6937a191423e64f3e14d6b1da8e310af18c165df222f2a6b941c95316258876a58160f62a5d42e5a8e8eba9695470d8342bb9fa6c317690789cbbccccec4483990151b38e4b90b340b63cafab3963f982562942b744383e300f26a9059302eb4fb9161f93c492f968af6337c2c4879ec389e9ab7b1250ac981d4ace0a5ae19a1b159c0b55ec6dc0e537517130a69d17b5c5b8f4e6c36b0196527092506baa774cc76f2f64d3368de2561549a24425fc9944f2725f253cef',
      n: 'a1a7728d36dacf20c79bf12a2b2241c6bd891f534e58fd7f997a19af6c4d88975e3190417b1f6c61f12b4a18947f1b52123b4b87cb7cdf963d4c2ebfdf83f966f7e209b4089fcdd02a78bd259787a330d93412fd60420d20541f9fb65f0588f9f45e923d6461bc1bfbc4e779904c4664df1da2c5f858b18534dee88c098beba97496730d908f89ee78cf681dcb7d1dce416c5a064400d9ff6b61dd3c1a0654474972dbffbbc798371d77294c5f4e5dbd3581fa9c6ebabaa6fff02980a26ed23277696fc7b03b4ef9142784d4fdadaecea436262a757549649725776a9dd2b53bd28dfb76ff67b1b99ddafe83029087833bd9d40f3b41197f05bbbee754b425a1c30ea7f4510a4e16a448dfe5c723ba9a48a16690790b637d81cfe72b836232c3e8fa82dbb3d93cc17aa19b421e086c8939e9ec3b00fb3fae67afddb412ae0d620d4e1bf05a1c4c9448a0e97e8989b32656268f7c1e286439beef8f2436b39f43741a994b1d4976244392fffd4f1407c328ce7b4881d35be3552cccca04255da7',
      y: '021360350b02fc462cd7fd9c4544cb9f262f987f64b8aab70c27f9cb8664ce70ed',
      u: 'fdf5a1261f32418128bdf68c0d55353f9fa5ad11465b6aeacee5e9ee0f2a704c',
      uu: '82688890936109449227043109426237590392531991932277444805725143192988513459692',
      chaincode: '667deabd1590aeb51476f97bdd7068a7548a6f1fb6852f5339c4375bdd2474b2',
    },
    nShares: {
      2: {
        i: 2,
        j: 1,
        n: 'a1a7728d36dacf20c79bf12a2b2241c6bd891f534e58fd7f997a19af6c4d88975e3190417b1f6c61f12b4a18947f1b52123b4b87cb7cdf963d4c2ebfdf83f966f7e209b4089fcdd02a78bd259787a330d93412fd60420d20541f9fb65f0588f9f45e923d6461bc1bfbc4e779904c4664df1da2c5f858b18534dee88c098beba97496730d908f89ee78cf681dcb7d1dce416c5a064400d9ff6b61dd3c1a0654474972dbffbbc798371d77294c5f4e5dbd3581fa9c6ebabaa6fff02980a26ed23277696fc7b03b4ef9142784d4fdadaecea436262a757549649725776a9dd2b53bd28dfb76ff67b1b99ddafe83029087833bd9d40f3b41197f05bbbee754b425a1c30ea7f4510a4e16a448dfe5c723ba9a48a16690790b637d81cfe72b836232c3e8fa82dbb3d93cc17aa19b421e086c8939e9ec3b00fb3fae67afddb412ae0d620d4e1bf05a1c4c9448a0e97e8989b32656268f7c1e286439beef8f2436b39f43741a994b1d4976244392fffd4f1407c328ce7b4881d35be3552cccca04255da7',
        y: '021360350b02fc462cd7fd9c4544cb9f262f987f64b8aab70c27f9cb8664ce70ed',
        v: '03b5b3ed128f6f40635ea2373c7aaf11ea9da5727739f60968235d071b7810a9ba',
        u: '451b0157b4d26c63f188dc916961d052f99f2cd7c6b64b4450fd254c401ec16b',
        chaincode: '667deabd1590aeb51476f97bdd7068a7548a6f1fb6852f5339c4375bdd2474b2',
      },
      3: {
        i: 3,
        j: 1,
        n: 'a1a7728d36dacf20c79bf12a2b2241c6bd891f534e58fd7f997a19af6c4d88975e3190417b1f6c61f12b4a18947f1b52123b4b87cb7cdf963d4c2ebfdf83f966f7e209b4089fcdd02a78bd259787a330d93412fd60420d20541f9fb65f0588f9f45e923d6461bc1bfbc4e779904c4664df1da2c5f858b18534dee88c098beba97496730d908f89ee78cf681dcb7d1dce416c5a064400d9ff6b61dd3c1a0654474972dbffbbc798371d77294c5f4e5dbd3581fa9c6ebabaa6fff02980a26ed23277696fc7b03b4ef9142784d4fdadaecea436262a757549649725776a9dd2b53bd28dfb76ff67b1b99ddafe83029087833bd9d40f3b41197f05bbbee754b425a1c30ea7f4510a4e16a448dfe5c723ba9a48a16690790b637d81cfe72b836232c3e8fa82dbb3d93cc17aa19b421e086c8939e9ec3b00fb3fae67afddb412ae0d620d4e1bf05a1c4c9448a0e97e8989b32656268f7c1e286439beef8f2436b39f43741a994b1d4976244392fffd4f1407c328ce7b4881d35be3552cccca04255da7',
        y: '021360350b02fc462cd7fd9c4544cb9f262f987f64b8aab70c27f9cb8664ce70ed',
        v: '03b5b3ed128f6f40635ea2373c7aaf11ea9da5727739f60968235d071b7810a9ba',
        u: '8c4061894a729746ba53c296c56e6b650e478984f659cbd992e6bf37414953cb',
        chaincode: '667deabd1590aeb51476f97bdd7068a7548a6f1fb6852f5339c4375bdd2474b2',
      },
    },
  },
  backupKeyShare: {
    pShare: {
      i: 2,
      t: 2,
      c: 3,
      l: 'dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd5dd8c6f54d31fbb5e679e4e30adde442a08ef9a49e9c06932f9c7f61cc91122bb412601e8f6c6668b595a50f638a261568a6ad6ba1657d84112573be994994141b6fa78ae0eec3a5d01acf24179d1f38ef1bc4b157d158318e1e2ab34426c85a99b66b3b99a1fa3466d19c225e807ac66322418f97941dbfdd26906e64034d6a55d59d28e66dc20c3d5c3eaa05c6db52216221f82273f6b11940a4a1c814bfbf15165cf475e148ae87e2b5e980f55a51de98aedda77e2923407b3b2e64357bb14',
      m: '1a8423324d6977cf08a81fb3c730f26b00dee9c3b7cb4b9c3576bdb9fa5ee39d62926ec8236430cc2f8bd4acc8e187c19043b87ca9972dd71be81434390f059b2a14e96ffb0bb53ebd8bf8c199282e866d2121b243015ebb3f8dbb654f913d36d35e2691ad6c6e124c1b6b65a77b51c7174d5e500a9eb9085a0d1d65eb24d5bb31c4e1625ff1dde547c8ef8ff0956fc13f185c61ccd5ce1150423fbbcfe43b23f47088ace4545f51a6d74e0b55b1be4cb18aa2b34e31479c145b9d7a2baf89bda8250b63b99827520b15554b2cd75b1e9288280a2a53c3dc49d74c84eceafea8782312d369bfe3e76cfb50c4ff4043cceb4fdf32cb24584243ee22956947896e9cfac6416708aeb358b6c33b0de3a214c73d54eda4e5311ebfbcac3d59b6d84033b8a53ba61bf862176b04f157a06e57e1d47b91840a9def99c375fee28b41eee7bd79f1eff4144210387d3d188881331a758df56a6ab99f522d1ea2b3e05c28a5bb7f5b3464df4d1e95a739ffdc42963f5b27b7801ecd3ec675b1fc5cc3ec3b',
      n: 'dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd7efac59033fe178db7cec6f4aed7f24694ce23f9e4bc67d2c12fc8c5e84d3fde1289af1f1232ae5b7537cccc38e1acfa3239b0002e08349919effed414b2d9e0d4e7adf934b9cc527001176dcf92e1596fb3a6a8540e692fac3ae9476325c0294ef04bee2a6e76c8e74eb3c7eb6457c1b0f4b84214624489b93751efa192185e9dafdfb8b6cf7700e17f9917cb6d45c3edd351ccf09d2cf334439b704b11058afac78874c1d538b1923acfb7f0cd625b3849e077e74261753afb8025d0928fd61',
      y: '03332a7a63338a6c5d36e9559af0027a07a16e04fb8ade0d50cd1aa6c03d0ba46d',
      u: '835bcba8ebddf3b00b1322621d89450c33bf4f18168217346a3921580826c06a',
      uu: '96491455441075905245134070506220690004166606482880684440774828720961296015515',
      chaincode: '952072b9e655f29fa9aca621626e92e10b7356eb729e414c684ffd109f9d1ee4',
    },
    nShares: {
      1: {
        i: 1,
        j: 2,
        n: 'dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd7efac59033fe178db7cec6f4aed7f24694ce23f9e4bc67d2c12fc8c5e84d3fde1289af1f1232ae5b7537cccc38e1acfa3239b0002e08349919effed414b2d9e0d4e7adf934b9cc527001176dcf92e1596fb3a6a8540e692fac3ae9476325c0294ef04bee2a6e76c8e74eb3c7eb6457c1b0f4b84214624489b93751efa192185e9dafdfb8b6cf7700e17f9917cb6d45c3edd351ccf09d2cf334439b704b11058afac78874c1d538b1923acfb7f0cd625b3849e077e74261753afb8025d0928fd61',
        y: '03332a7a63338a6c5d36e9559af0027a07a16e04fb8ade0d50cd1aa6c03d0ba46d',
        v: '03f746e5b4e3ece2ff90b11f1c794f7a339d19f14ed3d85a8703a26d674f5ed876',
        u: '2c58031083c8794285e16ec396fae9b00aca481a07e17c72d8132f6079a04fe2',
        chaincode: '952072b9e655f29fa9aca621626e92e10b7356eb729e414c684ffd109f9d1ee4',
      },
      3: {
        i: 3,
        j: 2,
        n: 'dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd7efac59033fe178db7cec6f4aed7f24694ce23f9e4bc67d2c12fc8c5e84d3fde1289af1f1232ae5b7537cccc38e1acfa3239b0002e08349919effed414b2d9e0d4e7adf934b9cc527001176dcf92e1596fb3a6a8540e692fac3ae9476325c0294ef04bee2a6e76c8e74eb3c7eb6457c1b0f4b84214624489b93751efa192185e9dafdfb8b6cf7700e17f9917cb6d45c3edd351ccf09d2cf334439b704b11058afac78874c1d538b1923acfb7f0cd625b3849e077e74261753afb8025d0928fd61',
        y: '03332a7a63338a6c5d36e9559af0027a07a16e04fb8ade0d50cd1aa6c03d0ba46d',
        v: '03f746e5b4e3ece2ff90b11f1c794f7a339d19f14ed3d85a8703a26d674f5ed876',
        u: 'da5f944153f36e1d9044d600a417a0685cb456162522b1f5fc5f134f96ad30f2',
        chaincode: '952072b9e655f29fa9aca621626e92e10b7356eb729e414c684ffd109f9d1ee4',
      },
    },
  },
  bitgoKeyShare: {
    pShare: {
      i: 3,
      t: 2,
      c: 3,
      l: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df5f73eff52bef90ebaaa60ffe8cfb5bff688c90c92ee3c1b20c366e044ba39f76c5a5b2120ceb46e57b109509d62ccba2a7d138f6c6a02ce6be4c5e9b065181d2700b6b4485132fd3615f687867c73be1df5e0525bef8aface335aa3426364d7df74a49f915eaf8fc967ceadf422f21999c2afad2629212a908f3ace38aae157971ac240c5a65a11ec7968fdb2e283770677d0afd0cad59eb823b5dc69bb50d7ce3b79a74c4f4bb06ca01c36e2dc51d5852d33b045e6b943a6396501b74ff08dfb8',
      m: '45315d66f88900fd2c906a89b58919bd9966bca242274886ef7eae732748e9818e1d8b7ad16819a6adc4662cf69d1d842c6910dfc36efbec53d2978ae8510a6fcd4eff706d25b660602d7c46dea73fe10f8322d6d5714322335de7bb972c47e0a311b05c1ae20dcc82a6101b1525d06c072b5ef7f3a7cf15b091c68d6e20489f1f4e1ccc9bb117322714d566a89748bd02caeb99331a56a594b556be60d24c7bc66eb9b9c6c39a0781d43f98765efd3c12707d8c0041fdb46bf360aa5e6a3cb7eeda5902371bb6ccabbd1ee10ec87d76883a96167ecc22c6e9f114d984d99c8fa72dbf88e474e8eb6bc50fa9e584b3fc701302363c11af4dc36ec4607ae84ad3ce27b788ffa1fd9f8190e7c3b9d2f2d2c08ed950adde6b15cf9a0c8f05488545fbce69209aa0c980271d6dc89d76d242f220d58c0e92e698b9cc69980c994f19765ffe2ffb802b2f0d27d1575ca0c96dd91276e8063fa6f35a043d7c95b4751770d925f5d5662a5f5daff7771206df1d34c9c7a7b8803a1fbec47a41636dd510',
      n: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b',
      y: '027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefa',
      u: 'd2dd18021e1587990a999e3d4b7962b5490d1c97a4a875d9b09dcfcc19513638',
      uu: '620148179599944014098785010506277195518356996977522257747514123370303402392',
      chaincode: 'f9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6',
    },
    nShares: {
      1: {
        i: 1,
        j: 3,
        n: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b',
        y: '027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefa',
        v: '0304f1eaada46c6372b6a2caffb50f7724fa21366cf8aefc163be9dc7d630faa5f',
        u: '4733b134fc8fdc51e82ccda1172b49c975c8e4c5621a69d3a52024429a7e8878',
        chaincode: 'f9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6',
      },
      2: {
        i: 2,
        j: 3,
        n: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b',
        y: '027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefa',
        v: '0304f1eaada46c6372b6a2caffb50f7724fa21366cf8aefc163be9dc7d630faa5f',
        u: '8d08649b8d52b1f5796335ef3152563f5f6b00ae83616fd6aadefa0759e7df58',
        chaincode: 'f9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6',
      },
    },
  },
};

export const bitgoKeychain: Keychain = {
  id: '3',
  type: 'tss',
  pub: '',
  commonKeychain:
    '03f8606a595917de4cf2244e27b7fba172505469392ad385d2dd2b3588a6bb878cf4c08deeef541dcf7196aa0d0046cb9122fa6976d698146c77ab7072b2c6864c',
  keyShares: [
    {
      from: 'bitgo',
      to: 'user',
      publicShare:
        '027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefaf9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6',
      privateShare:
        '-----BEGIN PGP MESSAGE-----\n\nwX4DPhHguHitLwYSAgME3OFZ6Ab9ATmSyjEHXuT3v/Av3422K73ykJpKnxih\nE7/fyjbt4V+UKqFkBwGaQcgPx9p3cMs1XgKQDerXh5mcaTAnLweDfXR16aOE\nySPJLBb9gyA0fmOqEWGtpZAQ2x25gQyoHxWENcQDKl0k/v9hpi3SsQFZxc6r\n0AYlXOoYLOONEF6V2OEJDTqO9Ric2OO/J5xcGsGYpJjPaXMZVDPva/LDgwWn\nUi4antzj2PKfzdsT33hRCzfTePE9XV5ZmH7R9e68bv5WxAdypoUgJIWBl6Ey\nBTyf10/j2PR1b9cLrRhtcPILkHtNPS1ISE4DvRGTptXhdkM+DUMT0nwXjfro\nwBOLI+0esYcXClGjlbKNnQhxkVZvMRDEGJFQn1QxRAwSIA8HjQ==\n=LVHx\n-----END PGP MESSAGE-----\n',
      n: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b',
      vssProof: '0304f1eaada46c6372b6a2caffb50f7724fa21366cf8aefc163be9dc7d630faa5f',
    },
    {
      from: 'bitgo',
      to: 'backup',
      publicShare:
        '027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefaf9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6',
      privateShare:
        '-----BEGIN PGP MESSAGE-----\n\nwX4DGE/9T5Rg0IgSAgMEFJddmjPLTNM/oZ7n2FOb88OYm/cEQXI+C2wL0ZyA\ncUjK9GkCeRUtwUmCJiVOIo/sgJiPAcr3HmQYo96wKMv3ejAXXUzF2CggZnnE\nYpegZaA532EBeF2Kwt5x4+Cm/nGyAXFfxWWnGPAxVAdxeJK0qoHSsQEqj002\n0LaLZw4gMzAN0fc5P1OQImPUQl2f2MxZ1pB0GZ1/4peHX3lx6HY7WtI1J42a\nJtI1x5XF1r8i07LZTL6WPUewRC1ICF97F01slcxBkA4QB1sqktb5jGbxKm8f\nIHwieuUa/A45fxXeGbSPRpT07Uo4mmXJE8ZPFlreNAmgaQTb55ttyX7TdOtQ\n24+EN2Ghk9iKQqF+MZaw2sDGWzx9wFBAGv9ZASvxHNDB0EZo3Q==\n=RSR3\n-----END PGP MESSAGE-----\n',
      n: 'e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b',
      vssProof: '0304f1eaada46c6372b6a2caffb50f7724fa21366cf8aefc163be9dc7d630faa5f',
    },
  ],
  walletHSMGPGPublicKeySigs:
    '-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxk8EY9P1bBMFK4EEAAoCAwR5fNTSY/R2WL/Z1wVgRq4Gr71yKuyo04/1GXRZ\nZHJUdKQqsQvNNFbAIoygo6ppAX58qMB/dFkEl//kvpjg7XIyzRR0ZXN0IDx0\nZXN0QHRlc3QuY29tPsKMBBATCAAdBQJj0/VsBAsJBwgDFQgKBBYAAgECGQEC\nGwMCHgEAIQkQDotrrNKK/vwWIQQCSV/4QPZl8xZ0ghcOi2us0or+/ARiAQDi\nPDKTsEBj5SIDJ5Aurk5sXPYCVi5DO82SgQHsS9nypgEAuIojPOneo+Gscyvf\nZ4VE/kztadNuRecrFgM7FVhglgXCwiYEExMIAncFAmPT9XeZFIAAAAAADgCC\nY29tbW9uS2V5Y2hhaW4wM2Y4NjA2YTU5NTkxN2RlNGNmMjI0NGUyN2I3ZmJh\nMTcyNTA1NDY5MzkyYWQzODVkMmRkMmIzNTg4YTZiYjg3OGNmNGMwOGRlZWVm\nNTQxZGNmNzE5NmFhMGQwMDQ2Y2I5MTIyZmE2OTc2ZDY5ODE0NmM3N2FiNzA3\nMmIyYzY4NjRjOhSAAAAAAAkAKHVzZXJLZXlJZDAyNDk1ZmY4NDBmNjY1ZjMx\nNjc0ODIxNzBlOGI2YmFjZDI4YWZlZmM8FIAAAAAACwAoYmFja3VwS2V5SWRl\nYjBlODIzZDQyNTA1YjY4ZjM4ZTQ1MGQ2NmY3ZmE5ZWI5OWJlNTY2oRSAAAAA\nABYAgmJpdGdvVG9Vc2VyUHVibGljU2hhcmUwMjdmN2I3YjJhZDE4MzE0Y2Y1\nNTQ3NjhjZDdkM2YwNmYzZTA2OTQwMzcwOTRjMzg3OTVhMGJkNmI5OTg4OGZl\nZmFmOTIyMzA3N2YzNmQ3YzdhYjM3MzBhNmZjMDY3ZDAwOGMyZmNhMzZiYWQ3\nNGEzY2NkNTk3M2MwNjM2MDRmMmI2oxSAAAAAABgAgmJpdGdvVG9CYWNrdXBQ\ndWJsaWNTaGFyZTAyN2Y3YjdiMmFkMTgzMTRjZjU1NDc2OGNkN2QzZjA2ZjNl\nMDY5NDAzNzA5NGMzODc5NWEwYmQ2Yjk5ODg4ZmVmYWY5MjIzMDc3ZjM2ZDdj\nN2FiMzczMGE2ZmMwNjdkMDA4YzJmY2EzNmJhZDc0YTNjY2Q1OTczYzA2MzYw\nNGYyYjYVHHRlc3QgPHRlc3RAdGVzdC5jb20+Ah4BACEJEJ7bsyxbEQ6MFiEE\nXX2SNGSBNEV6OdbintuzLFsRDozjJgEAkFBq55SZZyvAoy3c645aQuU9w/le\ndQt6xgOIvbEyuN0A/3uZB7HSZsxS3MXvCaDxqvcXCs1YBwx6aDTYs+1SD9O9\nzlMEY9P1bBIFK4EEAAoCAwQmKNmM/q3KMJcdi3wz8xudwYdU1ttbPz0cum/v\n0jZWlExhTmJtnZ8vSj2i3U1fmia/Aq2qSLG2EjWa00EQ+vTbAwEIB8J4BBgT\nCAAJBQJj0/VsAhsMACEJEA6La6zSiv78FiEEAklf+ED2ZfMWdIIXDotrrNKK\n/vwzQwD/eglyuOt5jvE+/ZabX7DIn+s/zsVJckRmcFy+7xtrbAYBAN2ksXlK\n3Wy1DQmcr5bcqCrOFQb5UOQ0Sr6pfUHn+Tn/xk8EY9P1bBMFK4EEAAoCAwRm\n/qGk2m+pIkIFVwAlHQKNGZGoqAndiwISWotiuE2TvJ9aJompH+omoEtS8QKx\n/lTQ+btpVNuvTZQ7dXwl81zEzRhiYWNrdXAgPGJhY2t1cEB0ZXN0LmNvbT7C\njAQQEwgAHQUCY9P1bAQLCQcIAxUICgQWAAIBAhkBAhsDAh4BACEJEGb3+p65\nm+VmFiEE6w6CPUJQW2jzjkUNZvf6nrmb5WbjkgD+PTg7ciYItMotQNVnSO/U\n5bhtSDBqpm4QzZF3VG1PSuQA/2ebtDPH2rTP4qcawHD5VOb8OfPa/w+MGPYj\nWoV3El9/wsIqBBMTCAJ7BQJj0/V3mRSAAAAAAA4AgmNvbW1vbktleWNoYWlu\nMDNmODYwNmE1OTU5MTdkZTRjZjIyNDRlMjdiN2ZiYTE3MjUwNTQ2OTM5MmFk\nMzg1ZDJkZDJiMzU4OGE2YmI4NzhjZjRjMDhkZWVlZjU0MWRjZjcxOTZhYTBk\nMDA0NmNiOTEyMmZhNjk3NmQ2OTgxNDZjNzdhYjcwNzJiMmM2ODY0YzoUgAAA\nAAAJACh1c2VyS2V5SWQwMjQ5NWZmODQwZjY2NWYzMTY3NDgyMTcwZThiNmJh\nY2QyOGFmZWZjPBSAAAAAAAsAKGJhY2t1cEtleUlkZWIwZTgyM2Q0MjUwNWI2\nOGYzOGU0NTBkNjZmN2ZhOWViOTliZTU2NqEUgAAAAAAWAIJiaXRnb1RvVXNl\nclB1YmxpY1NoYXJlMDI3ZjdiN2IyYWQxODMxNGNmNTU0NzY4Y2Q3ZDNmMDZm\nM2UwNjk0MDM3MDk0YzM4Nzk1YTBiZDZiOTk4ODhmZWZhZjkyMjMwNzdmMzZk\nN2M3YWIzNzMwYTZmYzA2N2QwMDhjMmZjYTM2YmFkNzRhM2NjZDU5NzNjMDYz\nNjA0ZjJiNqMUgAAAAAAYAIJiaXRnb1RvQmFja3VwUHVibGljU2hhcmUwMjdm\nN2I3YjJhZDE4MzE0Y2Y1NTQ3NjhjZDdkM2YwNmYzZTA2OTQwMzcwOTRjMzg3\nOTVhMGJkNmI5OTg4OGZlZmFmOTIyMzA3N2YzNmQ3YzdhYjM3MzBhNmZjMDY3\nZDAwOGMyZmNhMzZiYWQ3NGEzY2NkNTk3M2MwNjM2MDRmMmI2GRxiYWNrdXAg\nPGJhY2t1cEB0ZXN0LmNvbT4CHgEAIQkQntuzLFsRDowWIQRdfZI0ZIE0RXo5\n1uKe27MsWxEOjAIVAQDvAnjsY/D+03G7QXwT6IN/DSS3CyDPbZiKuP3e8VRs\nUgD/dIhftm1D/kkc67aTsooObK8wBRE1RYjOShdx/yEoJxrOUwRj0/VsEgUr\ngQQACgIDBACAP9XdQBRfRU0zAF2Tmef5gUxQ31SU1MyeqYJd+o8Sar0J2gkz\nxH24SE4T7PwN0inI81lp5jA8esfpEa4nz8IDAQgHwngEGBMIAAkFAmPT9WwC\nGwwAIQkQZvf6nrmb5WYWIQTrDoI9QlBbaPOORQ1m9/qeuZvlZiOoAP9oPK7Z\nakbrXdNgTHBRSIVo+3aCe+/sphrg+agccoJu2wEA6nMVNkvXaSDa0RhGWqDm\nqSeyZnyIWY1d44XkDSt0Ktk=\n=ATKq\n-----END PGP PUBLIC KEY BLOCK-----\n',
};

export const userKeychain: Keychain = {
  id: '1',
  pub: '',
  type: 'tss',
};

export const backupKeychain: Keychain = {
  id: '2',
  type: 'tss',
  pub: '',
  prv: '{"pShare":{"i":2,"t":2,"c":3,"l":"dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd5dd8c6f54d31fbb5e679e4e30adde442a08ef9a49e9c06932f9c7f61cc91122bb412601e8f6c6668b595a50f638a261568a6ad6ba1657d84112573be994994141b6fa78ae0eec3a5d01acf24179d1f38ef1bc4b157d158318e1e2ab34426c85a99b66b3b99a1fa3466d19c225e807ac66322418f97941dbfdd26906e64034d6a55d59d28e66dc20c3d5c3eaa05c6db52216221f82273f6b11940a4a1c814bfbf15165cf475e148ae87e2b5e980f55a51de98aedda77e2923407b3b2e64357bb14","m":"1a8423324d6977cf08a81fb3c730f26b00dee9c3b7cb4b9c3576bdb9fa5ee39d62926ec8236430cc2f8bd4acc8e187c19043b87ca9972dd71be81434390f059b2a14e96ffb0bb53ebd8bf8c199282e866d2121b243015ebb3f8dbb654f913d36d35e2691ad6c6e124c1b6b65a77b51c7174d5e500a9eb9085a0d1d65eb24d5bb31c4e1625ff1dde547c8ef8ff0956fc13f185c61ccd5ce1150423fbbcfe43b23f47088ace4545f51a6d74e0b55b1be4cb18aa2b34e31479c145b9d7a2baf89bda8250b63b99827520b15554b2cd75b1e9288280a2a53c3dc49d74c84eceafea8782312d369bfe3e76cfb50c4ff4043cceb4fdf32cb24584243ee22956947896e9cfac6416708aeb358b6c33b0de3a214c73d54eda4e5311ebfbcac3d59b6d84033b8a53ba61bf862176b04f157a06e57e1d47b91840a9def99c375fee28b41eee7bd79f1eff4144210387d3d188881331a758df56a6ab99f522d1ea2b3e05c28a5bb7f5b3464df4d1e95a739ffdc42963f5b27b7801ecd3ec675b1fc5cc3ec3b","n":"dc2ab89c3888452c814a539a9dd8faba199ab52781ff10b7e870dce72d2c5fc1cb1f039c0f9e90d201194ea1e733730bd9dc64aa239f95da246beb3198e48f274f0b0e7084f3df5aad69b4e624ac9cab5e31dd1335499c8b29e6535858d049fb33ec4933cfefd2e4b11026df3a3818d365a3ac36a120f34b74aebe0490fe90596f0efd69d1d9e5c291f99d10278bce1a4c806e52fa111654c9d9bcb0d89dcf090f58d469e406469ebadb84b16ccc5cc8beca04bb4013991b59af0fd65d24dfd7efac59033fe178db7cec6f4aed7f24694ce23f9e4bc67d2c12fc8c5e84d3fde1289af1f1232ae5b7537cccc38e1acfa3239b0002e08349919effed414b2d9e0d4e7adf934b9cc527001176dcf92e1596fb3a6a8540e692fac3ae9476325c0294ef04bee2a6e76c8e74eb3c7eb6457c1b0f4b84214624489b93751efa192185e9dafdfb8b6cf7700e17f9917cb6d45c3edd351ccf09d2cf334439b704b11058afac78874c1d538b1923acfb7f0cd625b3849e077e74261753afb8025d0928fd61","y":"03332a7a63338a6c5d36e9559af0027a07a16e04fb8ade0d50cd1aa6c03d0ba46d","u":"835bcba8ebddf3b00b1322621d89450c33bf4f18168217346a3921580826c06a","uu":"96491455441075905245134070506220690004166606482880684440774828720961296015515","chaincode":"952072b9e655f29fa9aca621626e92e10b7356eb729e414c684ffd109f9d1ee4"},"bitgoNShare":{"i":2,"j":3,"n":"e70a7827b2748c5264c70a46fb5427396d8e79605bf2507b581722f27530bcbf10e6a20e219d3bdc26083195bfb51c41a100751691126e6a9649ed2c037b356ee82f59ac6edeb278104d01a7a1d6cba0da72783834fb1da4fd5d0e7c040c665f8a0f23e57d5fb6c72599cf21d67a31949c59c3ace0a455a7e565ccc991dc5e717c027b272c888eaa016c8c9c54154cc71dab0ede8838189795511cf9d19738c8a2338320d551c38ff40358010ade95d74ae49a4bdcd10bff75d7e74fd6e6df61a2b1c541c481384c25a3eaac80bcd450333bdc414a8e89c885bac072f3c317484f9ac3c7076017c45a22c8679adad03d36e2aa1a8e6bc02ab49eac90a3451523118d45d4101d3900f622816f460dbd43621c04ba3de03f4e4ebaaaa6ba5bd2b1ede7eb1c58a5634496eb02a07714fb0c4010cc0c253b75fccc96f56a0dedd64f9371786d94e1598f16c02e1c69e8e57e214cae8247cbbb21a538bfe9888d57fd83e5ce36a0f6be4af98c5b76fce3f5531847d873fce6d457dda2ecad5322946b","y":"027f7b7b2ad18314cf554768cd7d3f06f3e0694037094c38795a0bd6b99888fefa","u":"8d08649b8d52b1f5796335ef3152563f5f6b00ae83616fd6aadefa0759e7df58","chaincode":"f9223077f36d7c7ab3730a6fc067d008c2fca36bad74a3ccd5973c063604f2b6","v":"0304f1eaada46c6372b6a2caffb50f7724fa21366cf8aefc163be9dc7d630faa5f"},"userNShare":{"i":2,"j":1,"n":"a1a7728d36dacf20c79bf12a2b2241c6bd891f534e58fd7f997a19af6c4d88975e3190417b1f6c61f12b4a18947f1b52123b4b87cb7cdf963d4c2ebfdf83f966f7e209b4089fcdd02a78bd259787a330d93412fd60420d20541f9fb65f0588f9f45e923d6461bc1bfbc4e779904c4664df1da2c5f858b18534dee88c098beba97496730d908f89ee78cf681dcb7d1dce416c5a064400d9ff6b61dd3c1a0654474972dbffbbc798371d77294c5f4e5dbd3581fa9c6ebabaa6fff02980a26ed23277696fc7b03b4ef9142784d4fdadaecea436262a757549649725776a9dd2b53bd28dfb76ff67b1b99ddafe83029087833bd9d40f3b41197f05bbbee754b425a1c30ea7f4510a4e16a448dfe5c723ba9a48a16690790b637d81cfe72b836232c3e8fa82dbb3d93cc17aa19b421e086c8939e9ec3b00fb3fae67afddb412ae0d620d4e1bf05a1c4c9448a0e97e8989b32656268f7c1e286439beef8f2436b39f43741a994b1d4976244392fffd4f1407c328ce7b4881d35be3552cccca04255da7","y":"021360350b02fc462cd7fd9c4544cb9f262f987f64b8aab70c27f9cb8664ce70ed","u":"451b0157b4d26c63f188dc916961d052f99f2cd7c6b64b4450fd254c401ec16b","chaincode":"667deabd1590aeb51476f97bdd7068a7548a6f1fb6852f5339c4375bdd2474b2","v":"03b5b3ed128f6f40635ea2373c7aaf11ea9da5727739f60968235d071b7810a9ba"}}',
  encryptedPrv:
    '{"iv":"jf2XyPMxcxASzmUaFXsczQ==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"O0C9nRLAJsc=","ct":"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"}',
};
