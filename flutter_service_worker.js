'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff9de05425d643ea2149ba787d83114b",
"index.html": "8484214911d86b3dd6d5b21172ac0ab4",
"/": "8484214911d86b3dd6d5b21172ac0ab4",
"main.dart.js": "b61c8a73170722ddbc5b80a3d955f425",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e76b29b8873aaf6717aed9fec5d95fa",
".git/ORIG_HEAD": "c3976976f9336031d270eceabc0773d6",
".git/config": "249c53064d7218832cb0330d655af04e",
".git/objects/61/47ad488945d284dc9ca8ff5af68d4ada158a8a": "21198d871a76f53ae4aaa5835834c981",
".git/objects/61/4c1cbd51e2f28a39e7d9deb511457c63c6f266": "88b17f0c153edbef392d6c5cecd74333",
".git/objects/0d/a065e68a7efe18e03bde1320d929a69a6460ce": "b0524576b6d737c7d0a9cac9a2809169",
".git/objects/95/8164fda4a603a26babeb54fc4210429a5969c2": "86bf11d430e7df845ecad8f959db321a",
".git/objects/95/0f402466ebb00b6d0bf5154ea9d90cf1dd3ee0": "3d176b662ae13df3a972766c71729d27",
".git/objects/0c/7d6f4d10308724a05812148372256968ec2875": "d98711f144e341452ca52f38e25ae9ae",
".git/objects/0c/2a5755b4c19c645e6f4f8c112ca843b60a63c2": "8316bb627cbbabfbd37c5c587e37e55e",
".git/objects/66/3232f47c8194bbd1b218ed061df73b8524d3bb": "db09c22eb530a8a27609fecbcfeae323",
".git/objects/3e/ce9b6c67b3b6a33aca097fa3223945739facec": "1c1ab872a41072d794a0de0225fb1d90",
".git/objects/3e/92bcc25d192e9a459db1bcbd235782709da7c1": "8b728eb3b8cc2ba51b0905b63c99a023",
".git/objects/3e/387070a3d1a1e2bda1e66cccf0d0bb31147d2a": "c2603abaeb4770e71202ffc9f5dff265",
".git/objects/50/748488118a2babcfd305ad0d1a70ffb78f556a": "7dc7f49249a5d08bdf973d32dd556440",
".git/objects/57/627a4892d598ad9a839e4888b58aa6cbf28ab6": "decd6c0d6adcd83538db443703477746",
".git/objects/03/3d2279c0d5a870c679c0fe53923d68edc3817d": "3daf4ec01cdc9ab4a38f7bcf2bbc6a73",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/8b60488d941ab74466a04e711b59175b0289ea": "fb2e393478c73506e10671b88abb42a4",
".git/objects/6a/2d0d6f76df50d68fe95a0e65af6e18867086fb": "2fd1f2f635b0a916ccd5ac97d67f1bb4",
".git/objects/6a/347accc171d4fddade256fa378e751e9350c90": "1bcf0d5d300597c7d633fb82d8a0e170",
".git/objects/32/986aa5b6e04d3dfea5f6d62aa441d8043f406c": "8b9aeb31a13fb7229e7a5dd1feb0cf61",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/0e27778f8ddcedaeec5039831ad395bea9324f": "fc4b2df79f94ba91cea4ccd56bf1f2c4",
".git/objects/56/6cddb5fdaf798448ba13bc829bc2f472672b9c": "8471348d632b8843af0bc36eaa4cccb7",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/fba4d364d879de535f988f621056a034cd410a": "b8b3a9253a3a3593bb4c34e127b3054a",
".git/objects/94/fd2b2715e2c51a6a6dd4626cb5360821cdb452": "a9bc571843cb79661af31c07df491cec",
".git/objects/94/2e756f56f27674f4ac7f18502bf36ff2537071": "e79471c352d54123d4aa3c386f154262",
".git/objects/0e/34b5670d8bc66ee621f4779d48d27e1529c306": "d40ab7132aa4729abc29cd9d5500f3e2",
".git/objects/34/49089985ee8e278ad8acba780f319ca2879166": "10e4e1b35fdbd175fe3a020b6f8103e6",
".git/objects/5f/56f27fdebc9501eed82cd720f1122e515f37ae": "c6dae0af1987a91e5678e6b779e0e5fb",
".git/objects/9d/982a5c82297edc1a07b27eb8a3680fcc4c7824": "bc6405894d9862a1528f326a9e211d4f",
".git/objects/a3/bc0946545f09655f6890f325d55063bec923fe": "418fae2943598936131deb840244ff2b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/fa8cd991b0467d28e06da53b4fa67e35561100": "b083fb605a30876706fd8c4dd2f142a8",
".git/objects/b2/d3a8bbffcdc83fedb6dfcc198a345690792a0f": "9cb1f3db7b16f2de5b64817625840820",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ad/c7e268b78275a726518c7fe6bd48e827ac121d": "0788f1620e84806c064a3d89072db09e",
".git/objects/bb/14197fd632e5ff435485468d7ddd20ad6018aa": "ec32eee0e2653447efea54eca1df1512",
".git/objects/bb/bf46488d297f12bcfae53ef4ad7e421e21a13c": "a9f8258a1f5e882fd0117175cf1ad63a",
".git/objects/bb/611fd5251f20d7fa4eb674efc6414f008883db": "dc567dba4098fd14f6c34a7a87404096",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/e1cf328cbb83551e9ff17b5aa655f14eb1ad63": "897010fc6d3112a01d8289fd2d084915",
".git/objects/b3/daf2ec79820b51e695cdb68ecf5e89558b59d8": "f9bb772a826dcda1275fcb2542d6d601",
".git/objects/da/231381ef4f58733d8b43b692f3ddfeb9630616": "d14ae0f0257f9b1bbd1be5af5d818015",
".git/objects/da/186e77d00ee7a820b138185944679c2f71f951": "81da59aa48df5fc367d1bd847f38b660",
".git/objects/d1/99e0bea1e1e702e3fa821570b0c54f8d896764": "9730a0095cfe0dce1fe811d48c0977dd",
".git/objects/d1/c44613e67b7dbabdbf619c3dece2fa88c81039": "94b433ca721d5fce5273b13b9d6b63ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/215633d0e5ddbad315c2cb91934088d1f4f447": "231d8d34a2b24f74b85e41b583c3bd95",
".git/objects/ae/ee4f66e944cf13df1850b064112f905f4d07b0": "831ac69126c835da64c5be912aec27f6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/641757a31488c652a5e253103cd70830842bbb": "69e3990f4dc75aeb22c8972647779a98",
".git/objects/ab/57dac50ca8dfc74428ad362772c8a63b57f6e3": "56d85a07a2d704500e0c794f7dd92e6a",
".git/objects/f4/96bade81d7be85ffb7a3db5dc93d858839cb88": "e69f87ae0a9c16e389c96312c4fbd6a0",
".git/objects/f3/4ea8bc848168f3345fd89980116cb874502cad": "95487ec65e3905f8aeed67ca3998f615",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/eec3c5f58808563bc88b92b0ce1d909327db16": "dafc2ebabc789719581a18027978a088",
".git/objects/c9/753413741ae74c960fd4763db331492d88d482": "bf8722d8d59e4c2b590475be1f63032b",
".git/objects/e3/41023a48091af23610c487a4cbfe2d29a462ba": "abf2e2a8491bdeaaf528eded465de4c6",
".git/objects/e3/273a07448f08444e660094b25feba402ee75a6": "907081ae27fe912a758c8f27de40ac79",
".git/objects/e3/499f493a5755791459f98759e5e7b14cea51c4": "17e184544879d887a57933972c757d8e",
".git/objects/e4/40aa4c17c539d06376fba6733a557bd8fac523": "d7d6a9ee32b2ec05406e83df3a1221c4",
".git/objects/c8/67da186a3663c9952121445ec3eebdcb5bac29": "a3c498c30bb055d29189ae92534e46c3",
".git/objects/c8/9e488a5c7d5f533f07061cef788e6dc7747b0c": "e03d52e074ec29aa2d84da70d0e23825",
".git/objects/fb/fcce4038ca65da1bb3c15c2db5a0a9d4ebe82a": "8320cebf50c48cc0e32eeb9a06c844af",
".git/objects/ec/4a9098dd5fc07e1346296db9f76b50860254fe": "a484dbf32c452ad541d8a8f903db3f98",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/29c1e9dbf20e29472f869cc3fbc824b9c8dda6": "ba2f3d2acdc62943189b18c7dec30c14",
".git/objects/11/97db2e3d37b1bf15e3adc574d8b5c989036461": "1ab0f5ddd6a30604d766e225d8c480ac",
".git/objects/29/ebeddbf6934141dd179d89594e7081c4073627": "480251fe833c01e9452a79a6d70e52f3",
".git/objects/7c/9ba76e0e77066147b0cbb35e7c1e56ccaa5d88": "ed1819a02bdf85b9b10405eea41f4357",
".git/objects/16/c9f0387718bcc6a000eb851eab83d9bda5ee01": "1966deb33b25547bd5198617779d388a",
".git/objects/16/a4e1b514ab00351e5e725f694cc5d4e7d1bb68": "be5de53049f02297d664025f48813ea1",
".git/objects/89/c224b16f38f51e9546c590704c0c5c1e106b77": "8f0b2c1ae989c8ed58f1bc5e228b0868",
".git/objects/1f/6e96ae35c92724225b68632470d2aff60be789": "15452cfd8144b59c2e892f2126736675",
".git/objects/73/471ec7362b2a75a33f02433239039a99e240f0": "e4c136aa94cdd6ccb8316f8fbf5ed7db",
".git/objects/1a/c52d30030e3df825d5939004d257215ddcc5f5": "a7399df6cf4bd0d8b579315cae310044",
".git/objects/28/bc96d5ae7399d2884f59fe66f7a63b1b3eb060": "98eec2382c9fdd61c09847aa39fdb67d",
".git/objects/28/87d169e6d3bd61a9cdce8f8e552b4968f8c15d": "091ab1121a865a80cb1dc3b94ee7f05a",
".git/objects/17/1a40d90cdb0eaa97f605ae7ff7439bace2e321": "6297760405d201a4852660722c87119f",
".git/objects/7b/886acd389ad42d1771bb0fc1e557717cabfd4c": "27402d027f27164ec575e09a2658ec79",
".git/objects/7b/0079afaa45bb8882a7462b7eb1585ba8c8b71a": "23ea9f5d6cac3b9b569204de17f21cdb",
".git/objects/8f/12b4ed43e904bba88ddcaa134b3343c676114f": "ccb1046b54f41100bcf5e0e08527fed2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/92a206526dbdad0ded29d220c67d468afb5ee2": "c8c504b5335295c628134f7084a09e8c",
".git/objects/8a/6de9e6346fdcf0d7a9cf792e8ef86e50a2413b": "0e2eb159b1f68f1fe0565b19b7db3926",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/57b7d004a6369a71512a467e16dcc2a45fd211": "3066dec9dce4b05ccb976f9fc730bcfe",
".git/objects/75/73403f54c8438930e6dcdb6288a409e7ae1885": "c24cb9c00986ed86ad9a05faa106675b",
".git/objects/81/e102db6061918a5150a47c6230e83be6eca96d": "ee27c525043ac363c6eacc3315b9f3d3",
".git/objects/86/1b09b5fb79910d6abcf48987caf6e22e8fe333": "6eec9eb7a40ef342c00a46ecf7a847ce",
".git/objects/72/acc5c971d4eb9926d3d691e2054793450d2ac0": "818d5779648d6304da56f8d9c16671b4",
".git/objects/43/4aa349940ddfc7b8fd4b8eb14f751aba6af4b5": "0a18e783ba24956bfe79c1a57b3e0ea7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9f5a668b66bda4a658db9983c65117bfc034d2": "9bb92c0a00032347cde13afa3ec5b9c5",
".git/objects/00/cac364e4d666af59f91fbb09deabdcaf96a6be": "e3b17bbe1a9c826a951e94936afe08c9",
".git/objects/6e/ebad69790d0f69cbdf9a7db0c738606ab9f76c": "10a2d70d86a25db28c1d11654a94a1d9",
".git/objects/9a/f69ecc3d86f47034b34ca1b4792b147fd3f559": "0296a1cadce2e9a09969f3cde1fffdcd",
".git/objects/9a/492596114c7aafce4d8e6202eb2cbdf19da3c1": "e3082b39d3212330fb7c31010d3ab8bb",
".git/objects/5d/eb1437253ac48d6a16605ab9e014e41b122b05": "2a8c441a9860d5e7e95fa07639ee5dd3",
".git/objects/31/9041eadfd8d2610a05304b28852665a3260e11": "09a523081d1fe943d48684d28ad72018",
".git/objects/91/bd9e1e2089ea704dd918bdb346330199e6af7e": "13f51fc11b1a7fec55b165ce82daf7eb",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/47c12f172e824d869b50b4f223a55401988ee5": "792ced8c3122dbfa72a002a4f54a3e2b",
".git/objects/54/43fa90ebfbef36374bc4bf9641293d51845841": "54d31a84d8a880087617b37042297492",
".git/objects/53/4ebdfcb1a5f060da9090f1053d397dca82267b": "faaa7e1258f012bf8250f4531d9a2786",
".git/objects/3f/92198bb3055e7f6137083392176b38edeed9f7": "1d2fc91f5306cdd16c2a586b4fc69d4a",
".git/objects/30/69e9e93b417e27faf95f1451987e5acd0d89ff": "ad4107ee97f95459153eb99738e9d99d",
".git/objects/30/fb5a29db23a365a19d3181eb0124a20a0d4864": "f4a0e68748161bfa8c4a7a8e8827877d",
".git/objects/5b/b4e1578476d6040ef7dbd77837883a13b2e64d": "3a28f84063169d820b38e8769e8998c9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/22c1c9f3054e605e7263d22f5fe69d5c9a6834": "2f7e9c1ccc35536ee1bd3adc39b8ef27",
".git/objects/01/024bb953ded54e5aff0aa1b5ba5e09f357cf1c": "501cc799939e85410eb79d92ad3c0fb9",
".git/objects/6c/332d75c3ddd6fee9faddcb2e93599202f52181": "f3266b73ce6d98fb3a2a952eb87ed786",
".git/objects/39/cf9022beca18e89d389e7e4e723f351817dabd": "36f4d827292c8a7bdc230b23f52c0e1e",
".git/objects/39/b483c0b40d402b9044c11b4992ca335c14227c": "102b50aec01457c532a63c8030d2c9f8",
".git/objects/99/7da8583eecc83195dfbb8635a4881a2673ae76": "389e0ee713711616044f610a90019b54",
".git/objects/d3/01f0aaa4a0d8ac84fdfb166179e533f6720bea": "4200ad5edebb77173bb309e404c67f73",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4431dc97e8d7b9064def7a984d469980850875": "fea739d2d2404c86c605b64acf9a2a49",
".git/objects/ba/73a2e8c21337f8bbc24cf5027525e39baf8b72": "b77078069feebd972dd9db214188b3fe",
".git/objects/a0/4992b3ebe6aed52da49b958f78f58061234a84": "ecce97b5dc4ed015dd6298b53c87ce5c",
".git/objects/a7/f48beb8a19433c53b2e183084c79523e3d688a": "c3048fe30bde8473e53cbaa65d656ac1",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/a9/43bb826f8321d27d41bd8f41dcf74bd4ce9926": "3c22ff3e9a5110499d09000d2bed5bf8",
".git/objects/a9/80a2a930016dd15d0a057ca2037c5dc65b81e2": "6eeee49eb3743975993c6f057675486c",
".git/objects/a9/d2b65102da7b3657a364ca652fb1599771a714": "84597b484e0dcbfd7b9f5e8162270298",
".git/objects/d5/1522a80c670d60119b8fae4298a5adb5bf4229": "5b3ca618357a45ba73191ce9fb786552",
".git/objects/d5/e09282dc720f69368f920b8ceb8262a52afdac": "0a5f4363738c036061216cf166d99e32",
".git/objects/d5/510749e10ae44caf04962e363562465b106fb8": "3f5dc3c8f3b15f82e718fd4e15b738a0",
".git/objects/d2/354b84486367edf0e9b669e9ef7b44cad1acb2": "e3923117b2c2585013743e7657ae9380",
".git/objects/aa/e90824e7a3a5de33a7d4d64bd30aa134ff1fc6": "ae72c196014ef0346b5c37298a0edc0d",
".git/objects/aa/707e6461cc4251002efabd23bb0fa52d319626": "4c0f07597fbbfdeb2180503417d2f70f",
".git/objects/af/9e8e536de7e8d45b3a3edd07906a288d881fa2": "5058621302a29547e59f93bcc333a746",
".git/objects/b7/9155a95e7c97bfa48f45c62eb86c6cc73cd427": "0ee5b810eb808d036a0a923d09b3a66c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f6a0d11bf9929fa382efb37fca53d787f8cca0": "1f0a94cf2b96e59e4fff91d4be20b836",
".git/objects/a8/1177b082f8d352ef55a1c87ef2bbdfdf22944d": "74cb1da5fdfd237960213a2165565021",
".git/objects/b0/3e7265ab10feee77b1e708776ea19178ea726f": "b04988ce63b18a2dc7fffc17faf0866a",
".git/objects/a6/405898c5f6ae629a760099316832d9cc8ebf96": "054b363009473ce88521ada841d03412",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f4175012324f1d86a03276c83df51d636e9887": "ab5a320a1a7a7a87fd05c3fd2cbe3e87",
".git/objects/b9/93a3c938f7200dc237f3768b531e206d2c46bc": "9846093feef2a742a9766aa2999559b3",
".git/objects/ea/2118be58e55eaf167c9b08112ed4cd90728e91": "272793a4721f344f7fa8aa4db7d51c30",
".git/objects/ea/dba3d3eb6fda061362dac92db75dd7c6d661cd": "e92aa80d74ec6d6b9f9153e3906b64c9",
".git/objects/e1/ef78c0f549fb22ec9f1fff00e8e5a74e23950e": "1b0bc871452ba2785c0b269c147e8dd3",
".git/objects/cd/ffe918db18bd95384b7cd330c134e629ea08c5": "a3f0a46b78839e3fecedd1d616587d36",
".git/objects/f0/6dfda7ff388385c91b8eab4bae41b6bdb921f5": "0f9db94680186f4aeeb933ad4d2523cd",
".git/objects/f7/ff6286949b7026c05050dd555738a02a4e8924": "f9c98aa43a2b3cb97352738c6fdf834e",
".git/objects/e8/4c90ed1781ffd7e9901954e3c7d7e308fc0640": "afe46501957a007d1d9b96dce3e8bc0f",
".git/objects/e8/d7ac4da35d715639e1667c97216f70d8a1e72b": "629da413f952d31de56a24b13daa3887",
".git/objects/e8/88a23dd3f38dd447e7cc9ebd73bfcd1d5439df": "9b916078997c6e274f218d21d290e488",
".git/objects/ff/d672f8cd67a9c2caf801b78c1de1d9d6a40823": "f0c2cbb2d90c5dce086b8b6c4946690c",
".git/objects/c5/da046a32a7cfe34b435a7dd125a9da36d5aa2b": "c838d97fa07a91f47e0bd6100cf5a5eb",
".git/objects/c5/ce73a74ff8490281c55da2460d503e7aa236e3": "6a848b339dd7c44bf83a7ef017547458",
".git/objects/f6/da61f7f2a1cdbc34ad2ca830b408ea189a915a": "0e7015ba82aaabe706cf0383002de2e6",
".git/objects/e9/0e1f46d929bfe73285ac4d23dd6430111534a3": "9ed3e03fb7bf468d06c3cff350d431cf",
".git/objects/e7/6a260a56f5440be526303ed15654a8d9b97967": "90315e3aae96baaa502b42f730f5dee0",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/151241e4b62fdd9718a2dba3bf645f4bd8c5e1": "b35b1c262fbb6d382bf55abd874c7687",
".git/objects/f8/23f2b237cef00818d6956d3fe4499879c42bd9": "53e4b1dd55cf62d6aa0cee0441d4f29b",
".git/objects/f8/b7e9cc4990e61aeae52869162dc8048007d1f6": "10987daf4bcb7bbec9a611bf5a935065",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8976b98f6b3bfd675d110da4650e2c080bf710": "0d9385bc150d426798c84aee3e78f7e9",
".git/objects/46/cc13710ee0e68134e16d2f7c16c3b81627c533": "bdb9bd3d8055c1da1c619881a360d312",
".git/objects/2d/6ca7e2befa572714b862f52f7857cbee5175dd": "9357a43fcdc9acd2888a38ed7a760874",
".git/objects/2d/bad5068b76510b50a1f8cea53c0d4d3405c541": "f6c3a9ef1f4154e90620c57c2231fe97",
".git/objects/41/d1481d528a6c9f4f3eeff7328e690bdf6b161f": "d31e5f85ecbd8466bcd1387b35ccf925",
".git/objects/83/7b0e645f592d98526d1634a95f25e7c9ba31c8": "42a05b53f9fb8d710a4f0ac9c747f750",
".git/objects/83/6f59b9231fb10dee38c7d262c35dce79788b55": "e6e7a51ad2f6f90ac0ca0f501dd78965",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/24/4b6be5ebf464219c7cfeb0b0052e1c30fc4010": "4d731e435a5bae17084d6b96d8b1160e",
".git/objects/23/5f75a28a96dbe332b3bc28bdd35ae1f1d86e05": "8608e18231bdfdf7f0ffce2d827a2b52",
".git/objects/4f/dfd5142f41eac0ae7ee9e1947336759b6b9358": "faf8ab65d631f5e5f31d0fdbb986f4a4",
".git/objects/4f/1d996085834a7342a9141b8a9bf662d28da4e9": "95df90a8db1abe31dc6c10fe534e9f03",
".git/objects/8d/0a89d02f7752c5ff771894c3aeb9b7ca7eb635": "1115314c472030afe74d39ac0a99aad2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/9e7af410746fec6f61400c463cc80a79c9b118": "2ab0c467e56b996ebe2fff60caed77e8",
".git/objects/76/25325a43327bbaf0f9cf0e414ae024ee79c220": "88be7ea5c6914d450ec7647aab8aad11",
".git/objects/1c/78f3b1229ac76255ddd6763db576e1403b0d1d": "ba50936ca5cf8f820b3decd2580eaf6b",
".git/objects/1c/5aeee4dd18cf10d191f86874a9799ce355dd89": "db25913913e2ced82a566ebcdb58e727",
".git/objects/82/dba64564170e8dcf3f4aedbdab9547deb93b12": "d0aea5ad151bd37dad601d55caa3e486",
".git/objects/49/2150859be7017dc0470894e27821f6c575979b": "34ed13584f3ec3caba3d0a11c1cbad5a",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/40/3078932fdd1277b8b649eca77e4bd9572b0a62": "cc4a5f7630407ceb79e7b9f8434f8eaa",
".git/objects/40/344e4f81744b17fe6440fc762457c707a75f05": "bd2d73ad90e42fb3dbb572b11f50b732",
".git/objects/2e/bc96ba9e5e846f65b07c4511ebdb74401671ef": "23706ac2656c900d69040ac148273574",
".git/objects/2b/e547004d3f6ad993d441e6ae9f23cdbccf1646": "e6f8a74f182f2588a0c2ef77fc9e6d21",
".git/objects/47/f6c2408d26987e402ff9aaa9caeec4057b2783": "31c7f72ee41a65619623ebdefa7e7ca3",
".git/objects/47/24350eac474ec74a08f2c80bc9e9d240c985ba": "b17f5fefa71e89c122de53e10a02c345",
".git/objects/47/fd2ab54e083119b0040d8b6f992a5c04c716d2": "bb671f3f84908cf392feda0840a5bbc4",
".git/objects/8b/a13b795b5e6410aff64b22297917b96a8f1512": "784ff222a8ca29cb49c0fe65c079065b",
".git/objects/7a/4cf3893af1ff80345dad67f11bf58955d5c9b5": "d2c0d03752f7b2d60a41e0ff0f012023",
".git/objects/14/de53ee7c5cf80e7e9bea9dfb3eee9954844314": "3566b85af4ee02066577cf33e0bed03e",
".git/objects/14/ea3abefe9a1fea9277959fe4fc0ef30050ff70": "efff0861b97e3d4f185a9bcd386572a5",
".git/objects/14/015f7dbd56a0077c42c5bfd273f25db765fd6a": "815ae6e95b4ac3fde0cf9c25ca58f1e9",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/8b141896c0cf51d9dc4268ff849120100185af": "6f6c3c6de7805645bf02b7b0f73a7ae1",
".git/objects/25/21f5297e38520ac0aa0e81275aac03f4903c6f": "cb35891e1011dddff0059ffd8d4d2887",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "652f2ce506d264bb489674a29cbbc084",
".git/logs/refs/heads/master": "fb92eac6859b3ee70c5bf74ec8f54858",
".git/logs/refs/remotes/origin/master": "520a339eb80a42df6706b6d59d4bba88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e85dae18e60a5a03c710d7636bf73da4",
".git/refs/remotes/origin/master": "e85dae18e60a5a03c710d7636bf73da4",
".git/index": "328081729717d233ef67b32cb02d2821",
".git/COMMIT_EDITMSG": "15e4b69104e189894160380403bf6dd1",
".git/FETCH_HEAD": "cf813badc1ae672222ba1a79952c569b",
"assets/asset/check.png": "110182c89f88ca08c3db2c6861c2c524",
"assets/asset/shop.png": "c87cb7df0f8e468dcf8bf127462adb8a",
"assets/asset/font/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/asset/font/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/AssetManifest.json": "530ccb41c31eb427a9cf946f01631eb8",
"assets/NOTICES": "6da0ec8a413bb0207f5e2ac83348327d",
"assets/FontManifest.json": "f2ac81091753dc185407e83eac0a004f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2acc376a16cde6ec822de6a37098e695",
"assets/fonts/MaterialIcons-Regular.otf": "c0719aed5f4fbb4819d6e277f79081e7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
