/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/06/第一章-C数据类型及语句01/index.html","664be1e19f38645b9bfbea23c0bc99e3"],["/2023/08/06/第一章-C数据类型及语句02/index.html","113de40d4fee878536a34b3126a73d95"],["/2023/08/06/第二章-数组/index.html","db4d2a0968247bdca0a28bb056084a3f"],["/2023/08/10/电路基础/index.html","a2284ba74ae8a694dd587a17626df75f"],["/2023/08/10/第三章-函数/index.html","a4889caed04a31e8cd545ccc4bb2fb87"],["/2023/08/14/第五章-指针/index.html","0befe919ed2bf61f6b94c747b6b20cba"],["/2023/08/14/第四章-预处理/index.html","d486e0a15efaff19da44e0dfe878520c"],["/2023/08/17/第一章-初识STM32/index.html","c3811ced758c4492e95368aaceb33243"],["/2023/08/17/第二章-寄存器/index.html","a826b3cd68fb20e64fe22d6ac5f19cd9"],["/2023/08/29/数据库常用命令/index.html","a3c1e8ef43ecdf804544b6a54aac844a"],["/2023/08/29/物联网比赛之Windows维护/index.html","5277566d0eb3956f1d3e06f5bb25a0a5"],["/2023/08/29/第一章-了解数据库/index.html","b0c5450ef25b1cfd93736ec3b75fe3f9"],["/2023/09/01/第三章-寄存器点亮LED/index.html","e49f22043da844940b8bcd4ac029b400"],["/2023/09/09/第一章-电路模型和电路定律/index.html","bbf3c0372839bf8c7f1b7a4dfcac1de8"],["/2023/10/11/HTML第一天/index.html","82f9b980efdfcfa3a87c09bd21e23336"],["/2023/10/12/HTML第二天/index.html","a662866ec1beb6fbec921f14ce729b3d"],["/2023/10/13/HTML第三天/index.html","ffb1d4085e319a3c619e74e754cbd7ef"],["/2023/10/24/CSS第一天/index.html","f37d46611f5d017b249acf6bf0d28e81"],["/2023/10/24/CSS第二天/index.html","8d791948bee5dd657651ff1fc88a2097"],["/2023/10/30/技能大赛之Ubuntu维护/index.html","517016ae4f241bace96a40019fd7640f"],["/2023/11/27/SCREEPS/index.html","a95bc12fabdb4a39e5feff4ae6798385"],["/2024/01/17/24年技能大赛广东样题/index.html","27f16aa188a76dfc3830940a62497f42"],["/2024/02/02/第四章-自己创建函数库/index.html","f50224222e7902a14ec534ff72776e32"],["/2024/02/06/第五章-初始HAL库/index.html","2cd11e14420267f074bbe9b178836804"],["/2024/02/08/电子工程师入门篇-入门基础/index.html","5a59ce25160a3162aaa7029480c94de6"],["/2024/02/17/大学生活/index.html","628f24df320f1f17fa18666260afd054"],["/2024/02/18/疑难杂症/index.html","df9f4d49f2694fa7b654ad948462605b"],["/2024/02/18/项目测试/index.html","2e5cc8b1bb578f940962fcb977307b81"],["/2024/02/26/第一章 计算机系统基础知识/index.html","ac9897c2756fd788d8cdc5f2f1fd5299"],["/2024/02/28/第一章 数据结构绪论/index.html","cc0314d86a66b7fd21c3324a1bb925bb"],["/2024/02/29/第二章 算法/index.html","76cbdb8d3cd993fe78bec5f6364b5d9f"],["/2024/03/03/第七章 启动文件详解/index.html","e6fb29680cc37c345066d9b05cc5b32c"],["/2024/03/09/一、HarmonyOS4开发/index.html","de4f29b0035bbbe9d57e026a444f8eed"],["/2024/03/09/利用MQTT连接华为IOT平台，进行数据上报与下发/index.html","b50d48b6168a8a4d16e34e9b8570debd"],["/2024/03/21/第八章 RCC使用HES/HSI/index.html","46be111dc61a728d79a83a457000bc0a"],["/2024/03/30/一篇牢骚/index.html","d4aa6b31ff6dd6062c1a5dd485ee96af"],["/2024/04/02/eps32连接华为云iot，并且实现arkts控制点灯/index.html","45c380ac5a902bdbe26495b54b5febc7"],["/2024/04/20/关于使用wsl使用idf提供编译速度遇到的问题/index.html","ea5f75ec50b421dccbb87cf25f5e1d4c"],["/2024/05/09/第九章 STM32中断应用/index.html","19ba77c9e336c16e302cdfe51b011ef9"],["/2024/05/09/第十章 EXTI-外部中断/事件控制器/index.html","4f3239fbde1ab7bfd8a3302d550a8259"],["/2024/09/04/关于在物联网竞赛中的一些感想/index.html","b1b58bd015dc3b821ceeba132b9a8333"],["/2024/09/09/第三章 线性表/index.html","e52851a2dcbce35713b57921be07cd19"],["/2024/09/26/Dx-C511模块连接华为云下载固件/index.html","52e1cefad13d586587fede37b674e242"],["/2024/10/08/2024年金砖竞赛--云边端赛项/index.html","2e1d9e5afb9a34dca0564b1e85fea98c"],["/2024/10/12/第四章 栈与队列/index.html","0f426ccf78c270adb0d9b50d30789f26"],["/2024/11/02/第五章 串/index.html","e004778da7e844a93766e087caabe278"],["/2025/04/10/第一章 FreeRTOS 源码/index.html","400e1532f63b9bf144d6bb850c216e1d"],["/2025/04/11/第二章内存管理/index.html","b659be5f9fba5c047a70972f2cabb6cf"],["/2025/08/20/黄山派之BLE/index.html","bf767f9e1a6e9f2bc8be161c3aba7ade"],["/2025/11/24/SF32LB52—个人毕设笔记（1）/index.html","cc5a7d076febb949a2822605d4ab1240"],["/2026/06/17/思澈面试笔记-RTOS/index.html","934c96a84398339976b578a5ae02978f"],["/2026/06/17/思澈面试笔记-外设/index.html","9cfb7868b1bd64404c5ea81bf4bc0120"],["/2026/06/17/思澈面试笔记-嵌入式C/index.html","565be606a2155431fde71d265a8ab86b"],["/2026/06/17/思澈面试笔记-构建系统/index.html","93b1e04aedfcd5190ef7150390fbdb4e"],["/2026/08/26/面经/index.html","51e49e95502fe2a453d5bd06ffd099c6"],["/2026/08/28/ESP32-P4 骑行终端项目深挖面试准备/index.html","25b12bdf1bbac5c919fb0eac42bc837b"],["/2026/09/12/BLE 路线传输与运动数据同步深挖/index.html","1ceeb1db7a548d02d0a7c63397fe1c48"],["/2026/09/12/LVGL 页面、交互与低重绘架构深挖/index.html","f30a080af4ecaf970a2a11c5c90f1b2e"],["/2026/09/12/RTOS 任务、并发与内存模型深挖/index.html","ed1271f33f8ddaa15ceaa47c0fbb8525"],["/2026/09/12/Wi-Fi 与小智语音深挖/index.html","4b02813320863c7a1c23f548d7d0e6c1"],["/2026/09/12/地图数据转换与导航投影深挖/index.html","32fe6a5262dc859e45767afded4f6928"],["/2026/09/12/码表项目深挖/index.html","0e676d2cd14d861d3a9014249dfc7672"],["/2026/09/12/音频链路与本地主动播报深挖/index.html","2094e0182d3fb7e80d99e66c829645ea"],["/2026/09/12/骑行码表面试深挖问答手册/index.html","606f630854469fe916f5927da8c98302"],["/2026/09/12/骑行码表项目：项目架构与面试总览/index.html","db87db4c10407cc8a66186c1c891eb51"],["/2026/09/14/嵌入式面试八股文/index.html","d0a3349833019f8d44ff4d7e4656cadd"],["/2026/10/13/C 语言与嵌入式基础完整面试手册/index.html","b588eb0b1a14f7db09ea54ea653f7355"],["/404.html","03650ecad9a9529e8ef514c908824c8f"],["/about/index.html","7cc29369e75eb0ac38a9962d59e497aa"],["/album/index.html","bcdee22f459a5b33f1b716e0b5697fd3"],["/anzhiyu/random.js","c62cd932313875039c55e1c6b8c4f24b"],["/archives/2023/08/index.html","393605eff9c08f820ad99df82c7a4ca8"],["/archives/2023/08/page/2/index.html","ee147d95ddf994ab75a62f4022981a87"],["/archives/2023/09/index.html","3016762598d15afd4f812ca8c82d28f5"],["/archives/2023/10/index.html","d94b1bdd311d64542d0ecfe539ef43ed"],["/archives/2023/11/index.html","5c44978953c95cc3709bc36cd72d8f4c"],["/archives/2023/index.html","425aeaf6058bcd236b1a6930ff0624a4"],["/archives/2023/page/2/index.html","879c710d9867b1275cce2f28d8d6acd5"],["/archives/2023/page/3/index.html","b4dcae5bc22e7621fb88db4cdee7a8bd"],["/archives/2024/01/index.html","22c5593b0986575d33a151aecf6d7cde"],["/archives/2024/02/index.html","fe83a078fd3330ac0bbb150e07c425cb"],["/archives/2024/03/index.html","b4182b62d75201c8685a000b1165b1fa"],["/archives/2024/04/index.html","ecd33ddc69c88f2c12584a5e9f886b36"],["/archives/2024/05/index.html","5b6960606d5514df9ceaf9befd83cc33"],["/archives/2024/09/index.html","605851b7633f2b5c2ef7af3ea249bfb0"],["/archives/2024/10/index.html","dc06286258593a0e86e71ccdd5ea32e9"],["/archives/2024/11/index.html","fd32847f8d4e95cbc152bc03433be0cd"],["/archives/2024/index.html","3140019020c82283174c1c8b7480df48"],["/archives/2024/page/2/index.html","2513065693d1449d8d4d1de117f56afd"],["/archives/2024/page/3/index.html","fa6e4ba9c6a40c73a9ec4201f1875fb6"],["/archives/2025/04/index.html","a1046e8a13351cdb9b82794e29346f4c"],["/archives/2025/08/index.html","8eeb3d6067a12c6f283aaf04c05ee397"],["/archives/2025/11/index.html","e84e399d92cd987a2866511ed9a92a27"],["/archives/2025/index.html","f79ea1cba44187ac36ad165489b941a1"],["/archives/2026/06/index.html","9175849705609ac5c776f91301468485"],["/archives/2026/08/index.html","e6649638dcdc179898dbf5f398d354b4"],["/archives/2026/09/index.html","0a278b1f359bdf1e6331d5b4fc2e8c2a"],["/archives/2026/10/index.html","6038bae23feca6acad00af2ee6416671"],["/archives/2026/index.html","0079ccc576c5c59d36ad29d2ed07d308"],["/archives/2026/page/2/index.html","c72e9032a8f64bd8766b41df7c215dba"],["/archives/index.html","19cc2034add4d42df2b69d5e5decdeb8"],["/archives/page/2/index.html","de2b0c0f003b5085f4958443d9222e62"],["/archives/page/3/index.html","cf8c26ac6d33c2ce87062252500f9c0f"],["/archives/page/4/index.html","a66898a482be8e4e3b1a4f88f34da767"],["/archives/page/5/index.html","68fd568eecd9dfe900ec9a8a6479687e"],["/archives/page/6/index.html","a963eaa2862d9b4500c6e12afe64f8de"],["/archives/page/7/index.html","e099ed6ffb05711fff111eb2aa627de1"],["/assets/24年技能大赛广东样题/1705468701401.png","f12c712f9e02a198414a3065f6680bcb"],["/assets/24年技能大赛广东样题/1705472418742.png","8c0e51ff2a4a9fbadb3df1dd5d0ca30d"],["/assets/24年技能大赛广东样题/1705472762494.png","add936c76ba8839bc813e42650966007"],["/assets/24年技能大赛广东样题/1705472834357.png","302e58be0fde48a350b94de2c33a1fc2"],["/assets/24年技能大赛广东样题/1705472874215.png","c6588caf067647590762c6f80092056c"],["/assets/24年技能大赛广东样题/1705473256503.png","a60c7e571210b76c60c44c85c91cfe9b"],["/assets/24年技能大赛广东样题/1705473265323.png","d4c1da009852a4ff96c11b526a4a2a8d"],["/assets/24年技能大赛广东样题/1705473783244.png","0a1b7bca6923f5ccacce2cec8db4d014"],["/assets/24年技能大赛广东样题/1705473825000.png","ee821608f5d323ba1128568837565379"],["/assets/24年技能大赛广东样题/1705473942700.png","f8f3db254dfcc3602f8419ca20c86782"],["/assets/24年技能大赛广东样题/1705474268550.png","a9214d8b0507bec60f2fe4b7abcd2dc0"],["/assets/24年技能大赛广东样题/1705474322751.png","9796058ba4348965fdaa422f9686a78d"],["/assets/24年技能大赛广东样题/1705474882469.png","d1605405b749a8a83326f0ef9de9c47b"],["/assets/24年技能大赛广东样题/1705474910725.png","0cbd620dbe444507c1cd91e24bebc7ba"],["/assets/24年技能大赛广东样题/1705475300335.png","7b3da6de19b999834994ee010be46cb5"],["/assets/24年技能大赛广东样题/1705475449777.png","55b46ba3df23e999830533483c3d1a1f"],["/assets/24年技能大赛广东样题/1705475461356.png","81d028da7233eaa8fe815b5afc79fcba"],["/assets/24年技能大赛广东样题/1705475668184.png","7ad345928ba64397ea9577e8d3db7da5"],["/assets/24年技能大赛广东样题/1705475763975.png","63fc4c696118c953278822a363fcf3d8"],["/assets/24年技能大赛广东样题/1705475906704.png","0dd4237443c0e74b95878e6327aefef1"],["/assets/24年技能大赛广东样题/1705476555115.png","f82477f9785cbec90a9932fb75c9ce14"],["/assets/24年技能大赛广东样题/1705476564047.png","c4758f4446df230bb7c74e378ce5ecd3"],["/assets/24年技能大赛广东样题/1705476641917.png","908536222609e32833df3af437e4bcc8"],["/assets/24年技能大赛广东样题/1705476664813.png","fc9de27492afd42d40b5054a48ed9272"],["/assets/24年技能大赛广东样题/1705654362719.png","bcfb2ff0c38c01ef5ca2d36d40c3240f"],["/assets/24年技能大赛广东样题/1705654400710.png","6d26d5464fa3f77b497d3f6d5f3c5b86"],["/assets/24年技能大赛广东样题/1705654811847.png","0e83ebf1783ae91140dee37c2dac6e6a"],["/assets/24年技能大赛广东样题/1705654843318.png","68ee26f50a24ece5a6a7327e97129bf5"],["/assets/24年技能大赛广东样题/1705655131418.png","5ee918dfae9cbc2dd267a2d3d848e20c"],["/assets/24年技能大赛广东样题/1705655155691.png","d7164000913ad14a01c7a45f5f7c8433"],["/assets/HTML第二天/1697079442675.png","b04577a10367030c19a790ed8c0ec3e6"],["/assets/尝试-Android物联网开发/1693875096988.png","09d2abac787f528fc027f7d21e5e1aab"],["/assets/尝试-Android物联网开发/1693964477356.png","1c15fe36bc9cef8e00b0f8a8db65a047"],["/assets/技能大赛之Ubuntu维护/1698852278392.png","85fe6b93cd5733b810049be2776e571c"],["/assets/技能大赛之Ubuntu维护/1698852341664.png","6caca7456248c152cb59fa6f44716b01"],["/assets/技能大赛之Ubuntu维护/1698852524750.png","789d84a46b80b9c097e6524343fe4853"],["/assets/技能大赛之Ubuntu维护/1698852634735.png","20ca5203400c0cea5b0ae724795dd62d"],["/assets/技能大赛之Ubuntu维护/1698852764405.png","45085b2f5e63a515257371d0971783e5"],["/assets/技能大赛之Ubuntu维护/1698852836682.png","c9cd8bd4b81f90dbaaef52e110b0b71f"],["/assets/技能大赛之Ubuntu维护/1698853016548.png","b64a79b81032be9f71267e50da2f0f87"],["/assets/技能大赛之Ubuntu维护/1698853060624.png","2664d52ba905fd0e94d0dc172f854009"],["/assets/技能大赛之Ubuntu维护/1698853106741.png","00c389b366240a7ba9af84e259ca1d45"],["/assets/技能大赛之Ubuntu维护/1698853202599.png","20cbd21ffa55d891322d17ed62aa07d2"],["/assets/技能大赛之Ubuntu维护/1698853451457.png","ff6871567aaf29bb2d8c8d923c54f43c"],["/assets/技能大赛之Ubuntu维护/1698853824171.png","9725a507ccddc461bfff162bb916c701"],["/assets/技能大赛之Ubuntu维护/1698884808296.png","e4589be7ca6f5c0f9adfe42aeac4343f"],["/assets/技能大赛之Ubuntu维护/1698884864394.png","581281300d8df5f9cd5c8e0b8a083403"],["/assets/技能大赛之Ubuntu维护/1698884920652.png","495db73218c845e903e998f57dba91c6"],["/assets/技能大赛之Ubuntu维护/1698885150920.png","6cc86773661c0582fbc21c8bc29c880d"],["/assets/技能大赛之Ubuntu维护/1698885224718.png","c8f129c3ea58f965c3e6e2e5b6781bfb"],["/assets/技能大赛之Ubuntu维护/1698885293763.png","fff89f8a366631133b2f4bb82110b7da"],["/assets/技能大赛之Ubuntu维护/1698885625168.png","381f9115a5c2de499e4f4cfedebf2284"],["/assets/技能大赛之Ubuntu维护/1698886136723.png","c48b0b16173091d00af694fd7f8913c3"],["/assets/技能大赛之Ubuntu维护/1698886175641.png","09b31abdcca35d6dc504fe9ce78be67c"],["/assets/技能大赛之Ubuntu维护/1698886297484.png","66ee6c35d9682cee8714881ced089549"],["/assets/技能大赛之Ubuntu维护/1698886334325.png","16637f00b956b708118fb6d842175367"],["/assets/技能大赛之Ubuntu维护/1698886374037.png","22b6c154d647507d6769e0b6e27811d5"],["/assets/技能大赛之Ubuntu维护/1698888006633.png","56a720fdf6e18fec986baf5cfa95bc31"],["/assets/技能大赛之Ubuntu维护/1698888087310.png","bd988ed10435e13a9884be7488d82bf9"],["/assets/技能大赛之Ubuntu维护/1698888389492.png","45291f92face763d7cf64ee9061a429a"],["/assets/技能大赛之Ubuntu维护/1700143228913.png","ad4bf9e74fef521068414009b6b1b69a"],["/assets/技能大赛之Ubuntu维护/1700144597727.png","760f81ad16e925686a3286b8ba44057a"],["/assets/技能大赛之Ubuntu维护/1700145383555.png","4c394d3309fab52be5e7816d3dfc2097"],["/assets/技能大赛之Ubuntu维护/1700145504953.png","8e3833a8b8448bfec75d670d3e45b219"],["/assets/技能大赛之Ubuntu维护/1701329835846.png","9e38f5769f21fe69d18fbfdcead7714b"],["/assets/技能大赛之Ubuntu维护/1701523808071.png","93b9e6d6b7a8d8477b76e9984dc6eda6"],["/assets/技能大赛之Ubuntu维护/1701524538009.png","b8533b98b99c5fd8a155c6d5b0e99f2e"],["/assets/技能大赛之Ubuntu维护/1705237206908.png","96d860320e51766e0d6f3c5357192c36"],["/assets/技能大赛之Ubuntu维护/1705237220199.png","86a6164a857d178fd0d25c37441b5a65"],["/assets/技能大赛之Ubuntu维护/1705237320499.png","1dadbf5b1a1401db7101b07c7f08383f"],["/assets/技能大赛之Ubuntu维护/1705415011698.png","36f24b6223e78c7d8a6a3b27c0560ec1"],["/assets/技能大赛之Ubuntu维护/1705415023009.png","1f38b1b4f70f32f42f7b4277eed817ee"],["/assets/技能大赛之Ubuntu维护/1705416981495.png","70f1b94b4e8e4144541df894a8fcd236"],["/assets/技能大赛之Ubuntu维护/1705474996383.png","aed19a4367a38d4a074547af8d3dae11"],["/assets/技能大赛之Ubuntu维护/1705475005240.png","002f363ab188c9c046c4d27317d83414"],["/assets/技能大赛之Ubuntu维护/1705765441912.png","a39605f13f85549e7e5078d77e3935ed"],["/assets/技能大赛之Ubuntu维护/1705765448044.png","2799777525d55e993bf80792040224b9"],["/assets/数据库常用命令/1693301573827.png","58979b7f4d5302853d0a26057a2660a6"],["/assets/数据库常用命令/1693311907411.png","af75159a515437cd6e6f707314f59b2e"],["/assets/数据库常用命令/1693311993666.png","149df6fccc2e89ef97a2ae37f0ea5444"],["/assets/数据库常用命令/1693314402433.png","267d9d34e3afe9e287c9073215bc5f95"],["/assets/数据库常用命令/1693314931707.png","e2a88cca6c22e07017c704e8f27e98f3"],["/assets/数据库常用命令/1693314952201.png","01b2973617008cde45e1c03d222a893d"],["/assets/数据库常用命令/1693315054667.png","7b6422de35902caa6d95ec6580a9227e"],["/assets/数据库常用命令/1693315128832.png","f600b34be2fd65b3e43fb1303f2f6608"],["/assets/数据库常用命令/1693315145115.png","c40863789496018c068d1b760fe88902"],["/assets/数据库常用命令/1693315209186.png","7c6321d8c79af912e1102d4081150983"],["/assets/数据库常用命令/1693315238981.png","951ec4188c83598ccf8cd10f1748a38a"],["/assets/数据库常用命令/1693315322414.png","f1c2aebf418bc0ce694161a9b16a6eeb"],["/assets/数据库常用命令/1693315552760.png","c73351732264b786448ce9f7c13feebd"],["/assets/数据库常用命令/1693317121082.png","966efb3d9e23492ce4077b69880463f3"],["/assets/数据库常用命令/1693317243938.png","b2aa8fa25beb588b49e71bca718a03f7"],["/assets/数据库常用命令/1693317695853.png","069f1ef5b7d67c98533b945ff44d2ba7"],["/assets/数据库常用命令/1693355675932.png","4c12f7d40ab5d16cb4ba171b3054a71d"],["/assets/数据库常用命令/1694239120400.png","dfb8cf67490642f2c52d8c8972dc406b"],["/assets/数据库常用命令/1694240340953.png","be732642d8ea10ccb2dc112c2c4c224e"],["/assets/数据库常用命令/1694240532823.png","f0fc1be62e982cd802126d642fb2bb23"],["/assets/数据库常用命令/1696756935287.png","47b4a4ad78aa77a64cf959383253cf4c"],["/assets/数据库常用命令/1701681099499.png","36069cc58e6eb53f7fe2e12824d87f14"],["/assets/数据库常用命令/1705417667865.png","a5e124e7cda89fc6d8979e1f377442a6"],["/assets/数据库常用命令/1705417785368.png","95dfc49d55d7dd04064b144d2c438f86"],["/assets/物联网比赛之Windows维护/1693279392763.png","5420651af69fe0c114195515a21ef923"],["/assets/物联网比赛之Windows维护/1693279711664.png","975690b287cef291b23c5565d95edfd3"],["/assets/物联网比赛之Windows维护/1693279722562.png","e92e6338dbed1e985dcbcdaa6e3b331c"],["/assets/物联网比赛之Windows维护/1693279825531.png","dcff603daf59c03ed6a9df2a6721b610"],["/assets/物联网比赛之Windows维护/1693279967063.png","bf69a1ee22150b1183b2494e5f6f9627"],["/assets/物联网比赛之Windows维护/1693281108935.png","76d879e93bd7b22039f705f1fd8d2c95"],["/assets/物联网比赛之Windows维护/1693281203914.png","18cfcbeeacc29222976ac3b3c5170096"],["/assets/物联网比赛之Windows维护/1693281331676.png","d9a91dfbd58f718f2c8b552f8d47fdf8"],["/assets/物联网比赛之Windows维护/1693281411142.png","626989b2e65b5e0bbb06e608c27b9fdd"],["/assets/物联网比赛之Windows维护/1693281443360.png","db473149954f98f445b023172e367cad"],["/assets/物联网比赛之Windows维护/1693281455441.png","369c18ba533b6f630db7313668b0d8ae"],["/assets/物联网比赛之Windows维护/1693281512027.png","d3b612f29b64440b7eef04dcb1ae9d5a"],["/assets/物联网比赛之Windows维护/1693281662496.png","c9de1f6d3fc0687ba24027d763fe668d"],["/assets/物联网比赛之Windows维护/1693281802478.png","3c3db70dcb75c21b291cf4a5a4a1f5f2"],["/assets/物联网比赛之Windows维护/1693282532248.png","ed0cbe28796c707024dca581ee6aee60"],["/assets/物联网比赛之Windows维护/1693282575271.png","41d104987658fc4d8eb0d1881ce1a118"],["/assets/物联网比赛之Windows维护/1693282697970.png","fbc1ceea1eb01baccf9ca8af6f3132b2"],["/assets/物联网比赛之Windows维护/1693282829345.png","9e81a0b9e210e5cdb845c50ce1cde2c8"],["/assets/物联网比赛之Windows维护/1693282908580.png","8ff81a112767cdf5e3ee0835435d3c40"],["/assets/物联网比赛之Windows维护/1693282978761.png","ebee2d5ab7b7ede0b098a60b2560d0b5"],["/assets/物联网比赛之Windows维护/1693283058738.png","97b43889d2a60d4b5d0c3b517c660864"],["/assets/电子工程师入门篇-入门基础/1707403891986.png","f86af30ab31401df1dd55382a61ae658"],["/assets/电子工程师入门篇-入门基础/1707404033488.png","da0399980ca3d06c88f97cfd24b8a10b"],["/assets/电子工程师入门篇-入门基础/1707404090124.png","5df5348c37e37ad9b57d0e7e89e6a5ab"],["/assets/电子工程师入门篇-入门基础/1707404106625.png","0e344b905adda4098fbea8e51ae3464a"],["/assets/电子工程师入门篇-入门基础/1707404233131.png","f1d342163f36da1c5cbd17074353c419"],["/assets/电子工程师入门篇-入门基础/1707404376520.png","619986ece8e47fde8035ca31be670ceb"],["/assets/电子工程师入门篇-入门基础/1707404504012.png","b2cebacf41fcedf4fa85b54ced497754"],["/assets/电子工程师入门篇-入门基础/1707404560995.png","054bbba91498271757a341633f70229f"],["/assets/电子工程师入门篇-入门基础/1707404684171.png","80a667fb75ea7d2bfa7362a16ab4c57b"],["/assets/电子工程师入门篇-入门基础/1707404752953.png","b3063db66a43ed4f828f5cc187273506"],["/assets/电子工程师入门篇-入门基础/1707404766965.png","deb3e202751fc30c8fb6ca5a49a6224f"],["/assets/电子工程师入门篇-入门基础/1707404773605.png","84a659e0d4b9d874ec5662df8a779ebd"],["/assets/电子工程师入门篇-入门基础/1707404801341.png","7981581d14dc993979e4108d467e92f7"],["/assets/电子工程师入门篇-入门基础/1707404824314.png","d537ee528f0f998d27c3c4f6559f2527"],["/assets/电子工程师入门篇-入门基础/1707404874218.png","f03f5ff7710de5239e034eefd18152cb"],["/assets/电子工程师入门篇-入门基础/1707404927903.png","6f7539d8b2f1a788c0af3e43443cd770"],["/assets/电子工程师入门篇-入门基础/1707405005870.png","e961784f569d7766feed57369fe3811d"],["/assets/电子工程师入门篇-入门基础/1707406123556.png","50f94d0dbe79339ba89b1146d78521bb"],["/assets/电子工程师入门篇-入门基础/1707406160307.png","234e2b79c5b09945e5f309dc26a84e20"],["/assets/电子工程师入门篇-入门基础/1707406191267.png","ce8507bcf197e8122114bda28fbfa525"],["/assets/电子工程师入门篇-入门基础/1707406215283.png","0b1f0d0bc7765b8729583f1923bd3393"],["/assets/电子工程师入门篇-入门基础/1707406263380.png","8a956b705e97758268a9c6b020782a6d"],["/assets/电子工程师入门篇-入门基础/1707406384977.png","1ba31eddfa497d727f465d2e45111f6c"],["/assets/电子工程师入门篇-入门基础/1707406435105.png","b90fe328fcb08373e34d05958fbbbdac"],["/assets/电子工程师入门篇-入门基础/1707406464006.png","9e63f845375935beefe68cabf5011801"],["/assets/电子工程师入门篇-入门基础/1707406487924.png","b0c8cf40cfb98e32807faa4c76ec238c"],["/assets/电路基础/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287081708.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/电路基础/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/电路基础/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/电路基础/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/电路基础/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/电路基础/1694242488250.png","112f9f33edc1c306c26623a70dbc0e0b"],["/assets/电路基础/1694242554424.png","81ff520ba30c49049e31218e3a18b1c8"],["/assets/电路基础/1694242617918.png","6e43b0cef3b1442f721850dc9e2378b9"],["/assets/电路基础/1694242654855.png","f24221678bb75a3ddff279ba41e080e7"],["/assets/电路基础/1694242683878.png","886038ef5df7399b27ebc94d3b937c28"],["/assets/电路基础/1694242819757.png","a1f266a51f16e1c1cd5499e2246b1a7e"],["/assets/电路基础/1694242852600.png","518a21f963733e45cda5c903807e0ad5"],["/assets/电路基础/1694242876285.png","975fe4e143a035aed7e4b578c6166bbf"],["/assets/电路基础/1694242905012.png","2ac838416f64020cd96d1c379a9b84e5"],["/assets/电路基础/1694242939314.png","691e36fe0f06f51243a0dd72d8eae659"],["/assets/电路基础/1694242973674.png","b3f4e257dcf4a890f680c02a1d593632"],["/assets/电路基础/1694242986138.png","e75cdf10ef2bab247d151c2dfb777416"],["/assets/电路基础/1694243025513.png","0b4fcc90a43705b2a080d593083fbfae"],["/assets/第一章-C数据类型及语句02/1691332523358.png","1dc765634c06f8fc3877de4100acc4f4"],["/assets/第一章-C数据类型及语句02/1691333205109.png","e9afc9ea502d9dc28c01df2049c6b8f5"],["/assets/第一章-初识STM32/1692284102687.png","ef03e09bd37e50efc2a1197357130957"],["/assets/第一章-初识STM32/1692284365745.png","c0ed7824603694893bd04d8c6b506fb7"],["/assets/第一章-初识STM32/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/第一章-初识STM32/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/第一章-初识STM32/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/第一章-初识STM32/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/第一章-初识STM32/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/第一章-初识STM32/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/第一章-电路模型和电路定律/1694263535061.png","433c7c7c3ffc48c2132f5ea2619234fa"],["/assets/第一章-电路模型和电路定律/1694263845243.png","6dc6ddbbe6b91c9d8ac4a874178ac7cf"],["/assets/第一章-电路模型和电路定律/1694263950246.png","10d8a12de1a5ec4afed94353f2c1cf8e"],["/assets/第一章-电路模型和电路定律/1694263974908.png","d0c973614a9974a3f681bc5a83006846"],["/assets/第一章-电路模型和电路定律/1694265050074.png","dcb679e7e3d19b608393e2437569cc75"],["/assets/第一章-电路模型和电路定律/1694265100359.png","c1e4386e9b8376850eb3f212d6f64f79"],["/assets/第一章-电路模型和电路定律/1694265136194.png","4cb241d332b13e878039b0d9379dddc4"],["/assets/第一章-电路模型和电路定律/1694265155728.png","1afeb5243baf0f8b52ad42b723a85f3a"],["/assets/第一章-电路模型和电路定律/1694265184041.png","c5542465a4ec4c86792e480a1562d0b3"],["/assets/第一章-电路模型和电路定律/1694265255827.png","136fec7274aeccb50330d47ff9862542"],["/assets/第一章-电路模型和电路定律/1694265274036.png","1b878aaf184c9e7642831e526945f6ab"],["/assets/第一章-电路模型和电路定律/1694265285159.png","1ecef3ba5de74294beddb5fc43ad680e"],["/assets/第一章-电路模型和电路定律/1694265305717.png","8b3a42dccea2264696e3927ca44a92de"],["/assets/第一章-电路模型和电路定律/1694265329854.png","34b71860d6dcea358f5104622fe2f970"],["/assets/第三章-函数/1691654665160.png","2aeb4e341ea7a86d822485de6e9935a7"],["/assets/第三章-函数/1691658173310.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658185939.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658329025.png","6d4c63195c23255e2f1e759ed462e037"],["/assets/第三章-函数/1691658406783.png","9a21ee8a33ae531392d28259a201df31"],["/assets/第三章-函数/1691658579818.png","26d2deede98d879bf895cb45f9874b14"],["/assets/第三章-函数/1691658688779.png","5591e4c32b51ffe25e941771d4193636"],["/assets/第三章-寄存器点亮LED/1693727391280.png","b05b13b39b97b7fc1a10990452cb02ea"],["/assets/第二章-寄存器/1692290301872.png","cd213e241e0622f16f1d9193bcd789d6"],["/assets/第二章-寄存器/1692290420600.png","9011dcef6abc59ec6f8f6639188a9b8d"],["/assets/第二章-数组/1691335523766.png","0226acbca650d87a9882890ce2ac764b"],["/assets/第五章-初始HAL库/1707232401368.png","f5696accccc84d81de88143c57532300"],["/assets/第五章-初始HAL库/1707232814478.png","de782848903a3e0cdf45a447301c4136"],["/assets/第五章-初始HAL库/1707233331041.png","07e6b1dab07c15439454d15a60bd5706"],["/assets/第五章-指针/1692111175278.png","399dfac409392a6df10d7cf6d11a95b2"],["/assets/第五章-指针/1692111376174.png","e80883c9415bef338ef58ef63f5a0225"],["/assets/第五章-指针/1692111480916.png","ebb194a9f40711100ad7d908af2fa2e8"],["/assets/第五章-指针/1692112482696.png","453548b1477bd3abf53238b1fc541fe4"],["/assets/第五章-指针/1692113002001.png","8c4def92d939756d43747534ced679fb"],["/assets/第五章-指针/1692113028355.png","896a5c0e320339fc3a672fe0eb570fbf"],["/assets/第五章-指针/1692113975759.png","0214c0315eed32de2ef3c9bb888a9ce8"],["/assets/第四章-自己创建函数库/1706848296026.png","2f9c3f14a01aea4844d91b3afb9b0427"],["/assets/第四章-自己创建函数库/1706889171120.png","7c0c50cdfbf44447b94f3347f643d6ab"],["/assets/第四章-自己创建函数库/1707148103038.png","d368af7f500e0291fbfa8a99e90471c6"],["/assets/第四章-自己创建函数库/1707231761899.png","f5696accccc84d81de88143c57532300"],["/categories/Mysql/index.html","9d1f9d2ae5071396a311e6f9c1a97ef4"],["/categories/RTOS/index.html","f1f5b0c31dd813c19a607dd9f8f0c695"],["/categories/SF32/index.html","1d2e5e47fa6486c48c5656b1ae06b06b"],["/categories/index.html","598a9f44a4dcd78985ed8aacd27525fa"],["/categories/前端/index.html","e8bcb1863533aa8a6607c8ca8965ae31"],["/categories/千锋C语言/index.html","386b4a45e8f72f412d7e4abca502e7a1"],["/categories/华为IOT平台连接/index.html","c115dbeb5a6fb25fc889a10e6fdfa2aa"],["/categories/华为云IOT连接/index.html","4b8ae6314334edbdde0fc25bf022e6fa"],["/categories/嵌入式/index.html","4ecef1269609768220fe353ba78e4cec"],["/categories/嵌入式设计/index.html","c5ceb8d67eb05427519fb03530c544be"],["/categories/技能大赛/index.html","ff2fdd73e9b29af178689986d1679f9e"],["/categories/报错/index.html","42bd5d2694feff5c6f384c61e2eedaf3"],["/categories/数据结构/index.html","1d51c8496d9a4ee986e832d57d6277bd"],["/categories/求职/index.html","a6585ebd1fac03c9c1bab1afbd901a5f"],["/categories/电子技术/index.html","12073c756fbf08fa519ad2b61e8e077c"],["/categories/电路原理、电工学/index.html","8dd6db76316d78abf226b3447c3bab62"],["/categories/罗教授电路/index.html","d7919d84c7a995faf1252cf2d528e70d"],["/categories/野火-STM32/index.html","701758dabeed9c7bab1fa4e2526e746f"],["/categories/野火STM32/index.html","08c3fb3c5b33d78f85565e4d28906481"],["/categories/阅读/index.html","2b79d36c3a4b315ce4aaaa8b97741eef"],["/categories/面试/index.html","95cb6728f92195bb78b3b3acb24ad84e"],["/categories/项目/index.html","57cfe7df9efbeb6d0d4e1778c6cab6e6"],["/categories/鸿蒙开发/index.html","7bc6df3150b90dc57e595f461c7e6add"],["/changsha/index.html","6ab1d803da48ee2476be8bb15c1287f2"],["/css/index.css","d615359d9816f6c1d4aea9fdd0eeb1f9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","8f8040703ca749300af77a5391449f72"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/bg.jpg","21de1be0d5594c58354582cb0d7e334c"],["/img/book-open.png","f85941f030da74cbb5dd544ad392ff8f"],["/img/book.png","53a3e40e85caf4f1e6cc031772df6735"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/lxh.jpg","03cafb475c4dfc507e24bb593249d1b9"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/touxiang.jpg","5b4decade88a03fb315c9c0621843a6b"],["/index.html","9902390de48d4abac58fd1c1cdf76cbd"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","ff1698bf9acd5e31d3ec6daaab816ee0"],["/link/index.html","dd66e0b0a97ce457378bf508bc1737aa"],["/nanjing/index.html","5b31cc50c4e2176828e999776b2431de"],["/page/2/index.html","1195741ccb78648ac1fbbf573d6c3e02"],["/page/3/index.html","2c3114b4a525f39137338dcd496675f1"],["/page/4/index.html","5561f6ba08cb51dabf347243b613a3f6"],["/page/5/index.html","fd3f09183a1996debc838ec993c89b02"],["/page/6/index.html","13a4f73d5c8e170343d86b718102ca8a"],["/page/7/index.html","3d672138537051e88d8a82a22ce6e74e"],["/sw-register.js","0c2de9d7880315a699aa91faf3e10612"],["/tags/APP开发/index.html","df59954d6cfc6e318df6ec452248a5a6"],["/tags/CSS/index.html","8bf90557168ac7c60f94e283ad14c492"],["/tags/HTML/index.html","702f160e4769361565f4f6a803da6305"],["/tags/HarmonyOS/index.html","f516e392e1b248f66af2fb970de56117"],["/tags/RTOS/index.html","f0e420be78861ec616031b6fc3246e04"],["/tags/SF32/index.html","faa2b3decafaf27cf958b4539e88ac74"],["/tags/STM32/index.html","ef466df9adc01fc15e89b2cafbf07c5c"],["/tags/Ubuntu维护/index.html","52b3579489c6c246205aa3d0f119a861"],["/tags/index.html","d96b33e1b0457c2e9983d193ce034b0c"],["/tags/windows维护/index.html","303f617edc6b511c598b3e533272f79b"],["/tags/八股文/index.html","a6a6d29190177ac22f81ad9ca0051088"],["/tags/华为IOT/index.html","4a43e0a61f5a85c6f2eb090333992d93"],["/tags/华为云IOT/index.html","7428e2fdeedcf97a5d7806111f924b2c"],["/tags/嵌入式/index.html","10534e85c101c127a9a6f81ad0365b1a"],["/tags/嵌入式C/index.html","678e0f862f06407810b7760af30c0bb7"],["/tags/思澈/index.html","f9c042e97a2a5f7d88c823585e73e53d"],["/tags/数据库/index.html","01a42b98a56fc90e0bac6619343231e7"],["/tags/样题/index.html","3a64172ceb18cdd3ae9b9020af251028"],["/tags/电子技术/index.html","74cda9497c2c620d44529fd80afcd3ce"],["/tags/电路和电路模型/index.html","b8079ed88fb07b8dd8ac56e80f888905"],["/tags/电路基础/index.html","9466ecb9381407a7c9c4beccc4a67aa4"],["/tags/算法/index.html","71c8aa0d01805ca151caaa86f2470e65"],["/tags/软考/index.html","16a772d014a17a42ed2ce787d0176bc1"],["/tags/面试/index.html","13e66c72795f6d9a26ec19a39cdcf9ca"],["/tags/黄山派/index.html","39da7a51cb84f4ba3b7342d81948182f"],["/wordScenery/index.html","a633af488b726d1258f5ee42e3899601"],["/测试.html","723d24a6b014310b4f384c5a4e165e0d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
