/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/06/第一章-C数据类型及语句01/index.html","c9b5a1af06464c204b029569839c305c"],["/2023/08/06/第一章-C数据类型及语句02/index.html","c5b31c26932e9cb8ecfc0e47f6e8e9c5"],["/2023/08/06/第二章-数组/index.html","801631d9a643a86ee85d8c8d0b698216"],["/2023/08/10/电路基础/index.html","7d3de12f166a18de0ff42614100cf03b"],["/2023/08/10/第三章-函数/index.html","f54f1cc31b3b24b56e7552eb64a5122d"],["/2023/08/14/第五章-指针/index.html","9accd4f8b770ae3273b26a8841cf38e6"],["/2023/08/14/第四章-预处理/index.html","4809de31d4e26624985e73d9c40f765c"],["/2023/08/17/第一章-初识STM32/index.html","551ce0294a6367ba278ec33c8f3c55b4"],["/2023/08/17/第二章-寄存器/index.html","fbc8ddd5c83be35079cb7ab5ecc73266"],["/2023/08/29/数据库常用命令/index.html","8ab0e810e0c01b517cba1f75311ca8f4"],["/2023/08/29/物联网比赛之Windows维护/index.html","e13ffb1fa203642c992053c7263c5529"],["/2023/08/29/第一章-了解数据库/index.html","c3ccc8ad5cd4bc9e2939387b63528cd5"],["/2023/09/01/第三章-寄存器点亮LED/index.html","245ed904c64eaa2d5e5c1f815e4adb0f"],["/2023/09/09/第一章-电路模型和电路定律/index.html","a63b233c8a892589465152d6795569ec"],["/2023/10/11/HTML第一天/index.html","2929adfd76e1f0adc1b2d7741eb6b033"],["/2023/10/12/HTML第二天/index.html","a0daca4768c4b1f385f13d8e6eef0bdc"],["/2023/10/13/HTML第三天/index.html","c8456435697f98e2a8265a1df82ff60a"],["/2023/10/24/CSS第一天/index.html","6ad1c262ff3c2d2e49abe56fa6ad4679"],["/2023/10/24/CSS第二天/index.html","770d9964b13f74213fdd56419f1e74be"],["/2023/10/30/技能大赛之Ubuntu维护/index.html","d2c9757b570010819793d2207af987f5"],["/2023/11/27/SCREEPS/index.html","f9429cfcf406e7e24e9a85af20f840e4"],["/2024/01/17/24年技能大赛广东样题/index.html","e40eff6429bb1eb3accafcc8eac30154"],["/2024/02/02/第四章-自己创建函数库/index.html","caceebb4cc382d89fd8705fe01c04e73"],["/2024/02/06/第五章-初始HAL库/index.html","303d74edaeb47ea1951d1fc1a661c0c3"],["/2024/02/08/电子工程师入门篇-入门基础/index.html","edd694bd815532871703f2873e5c035d"],["/2024/02/17/大学生活/index.html","2e2185be38a78539d26648db896a72ad"],["/2024/02/18/疑难杂症/index.html","7d230ff5cbea9664fb88c05863520dc8"],["/2024/02/18/项目测试/index.html","7511986a79250deb494a10a61b57befd"],["/2024/02/26/第一章 计算机系统基础知识/index.html","689b6b67aff25c89e38995879bbb6a1e"],["/2024/02/28/第一章 数据结构绪论/index.html","9e17e7bcacf040b9d2df90e79bdefe7f"],["/2024/02/29/第二章 算法/index.html","fe27a3dce9b798d89c935594a1259ae5"],["/2024/03/03/第七章 启动文件详解/index.html","031073ef4ac175871b444a2652b0867e"],["/2024/03/09/一、HarmonyOS4开发/index.html","a269dbe47f8025eca4a5d7e96c2e67c0"],["/2024/03/09/利用MQTT连接华为IOT平台，进行数据上报与下发/index.html","9b282ed5cdfc82f800b5251f13ca87ae"],["/2024/03/21/第八章 RCC使用HES/HSI/index.html","5475629bcd716fd04716bf8d1f1c9d25"],["/2024/03/30/一篇牢骚/index.html","b18ae371e53dbacf041491e469d18105"],["/2024/04/02/eps32连接华为云iot，并且实现arkts控制点灯/index.html","2c90c7d6da771606cc3caec8cbcfc9c4"],["/2024/04/20/关于使用wsl使用idf提供编译速度遇到的问题/index.html","54e7cf3cc3e652319e60c9eb6e119799"],["/2024/05/09/第九章 STM32中断应用/index.html","f4d7737dbdc6fefad55852f0891e4753"],["/2024/05/09/第十章 EXTI-外部中断/事件控制器/index.html","25b78bb81a490140e09d17c6789137b2"],["/2024/09/04/关于在物联网竞赛中的一些感想/index.html","dd645a94805989416a5c83bf359461b8"],["/2024/09/09/第三章 线性表/index.html","c4537cdccff8dcb4dcfd45581a0b8cc0"],["/2024/09/26/Dx-C511模块连接华为云下载固件/index.html","a5b1724b79d65c9499a21bddeb4ae13b"],["/2024/10/08/2024年金砖竞赛--云边端赛项/index.html","9fe078078f5dc84097b46b95c9d9b2e0"],["/2024/10/12/第四章 栈与队列/index.html","207e9da3316138b6531569eda9d23c53"],["/2024/11/02/第五章 串/index.html","6c738745063beb4f3bff03f12959350e"],["/2025/04/10/第一章 FreeRTOS 源码/index.html","80a73047482e48257a128b8d68ca2fef"],["/2025/04/11/第二章内存管理/index.html","46a3198fb05987e1153cf29b8d7f8b79"],["/2025/08/20/黄山派之BLE/index.html","d3cdc0badd20670d4703d8a16c9d1917"],["/2025/11/24/SF32LB52—个人毕设笔记（1）/index.html","ae4a730585c97c2b0d11efbeb01231b9"],["/2026/06/17/思澈面试笔记-RTOS/index.html","4d6ca35e668e69a6451241e196ff3210"],["/2026/06/17/思澈面试笔记-外设/index.html","377f8166e5d192e151cc3bc366e90dc2"],["/2026/06/17/思澈面试笔记-嵌入式C/index.html","aaf4afe6213884f805c5c2202552a30f"],["/2026/06/17/思澈面试笔记-构建系统/index.html","4306a4cfe6505680e625534087c79937"],["/2026/08/26/面经/index.html","4fad378e179e7623fc72f5b1c13c5147"],["/2026/08/28/ESP32-P4 骑行终端项目深挖面试准备/index.html","979ffbe29159ef2443bafe30ae788697"],["/2026/09/12/BLE 路线传输与运动数据同步深挖/index.html","00fc3dc83b37ee27541a3d800500e451"],["/2026/09/12/C 语言与嵌入式基础完整面试手册/index.html","24793eff5465b08421fccc5d2c73c4b6"],["/2026/09/12/LVGL 页面、交互与低重绘架构深挖/index.html","196c20edb15c00ed2ac5c87fcfdc748c"],["/2026/09/12/RTOS 任务、并发与内存模型深挖/index.html","7853f1cc034b0878b5ca9395e29787b5"],["/2026/09/12/Wi-Fi 与小智语音深挖/index.html","0fb4d64d516a5aa57902b2559f906aa9"],["/2026/09/12/地图数据转换与导航投影深挖/index.html","d325fbf61bf94b2982d97334818e5c4b"],["/2026/09/12/码表项目深挖/index.html","d91c4bbb380267063f97bd982b92a4b3"],["/2026/09/12/音频链路与本地主动播报深挖/index.html","b6ae28f37e8e8cc813ecd057908cf5d6"],["/2026/09/12/骑行码表项目：项目架构与面试总览/index.html","1c8da0eb4f17bd5b2e15f0f38925e6a7"],["/404.html","586ab6acf4816df7e04edea6f307f805"],["/about/index.html","5ed8ec87a03bd0df20a8fec185f6101a"],["/album/index.html","86bfa760f220e76cb8463434b0594cae"],["/anzhiyu/random.js","d001f672026553ffb4348a649be8ca89"],["/archives/2023/08/index.html","3c81e19ac464077033fbdabe65cea908"],["/archives/2023/08/page/2/index.html","eb15655596c63b9ebffe51932180b2e5"],["/archives/2023/09/index.html","0ee22e03109435dfbc8f8df2188f6246"],["/archives/2023/10/index.html","69e410e544b76cf53e4d0e2e7e2cc07a"],["/archives/2023/11/index.html","612933380116336cd200da28822a2290"],["/archives/2023/index.html","ec0352c10bd522426ae023669b4538e6"],["/archives/2023/page/2/index.html","d99f3e6b9e190b671dd5d8a01fc19fb1"],["/archives/2023/page/3/index.html","f317559ab09ac9faa559a568d54fbe88"],["/archives/2024/01/index.html","af0076e6a024bb3775fb17f56deec05a"],["/archives/2024/02/index.html","7c6fd74a856847a2ad847575e545beb6"],["/archives/2024/03/index.html","df7f80f950fd6d6d4632aa042aa03d9b"],["/archives/2024/04/index.html","13f25569cb162792c669846659d7d460"],["/archives/2024/05/index.html","3d4bff6a76e776a3800c35c5af0e211b"],["/archives/2024/09/index.html","d0bc8cfe752ac9b7475f5281cf5b9cd4"],["/archives/2024/10/index.html","26295dde221fc771f3603ecec3c815a9"],["/archives/2024/11/index.html","2dfbc65704636b2f2bc371befc06a4ea"],["/archives/2024/index.html","a95dd7ad1eabfe33c2af22ed5903296a"],["/archives/2024/page/2/index.html","99821949ef6d8d70d4eee873bb5b73e2"],["/archives/2024/page/3/index.html","636a28e5e46bc1fe6393a93f2ca239ee"],["/archives/2025/04/index.html","7d37b450cc69d512557e2cdeef296d86"],["/archives/2025/08/index.html","0996bd1981506008604aeb3f7df25e1e"],["/archives/2025/11/index.html","941d64906c6c761a0589b24aed794ebe"],["/archives/2025/index.html","e0516dd20cd004aed04f38810d153d6d"],["/archives/2026/06/index.html","2acc26494f0d294a195dbe8d69a9362c"],["/archives/2026/08/index.html","616c0cbe93be499c04e74732ca1da7c4"],["/archives/2026/09/index.html","5255737dd8457727313a4604e54c38c0"],["/archives/2026/index.html","003d5d94e7ca1018b5e79b9b739e0c6a"],["/archives/2026/page/2/index.html","feddb69154c65c1e50ff07f1eba13da8"],["/archives/index.html","6dfa24bd833cee538e9063e96f23fd51"],["/archives/page/2/index.html","0364cb85e20628eac0c057dbd6e8a8c7"],["/archives/page/3/index.html","4ca3b809fee3ca5f376e3c300ddf9311"],["/archives/page/4/index.html","bf2b2f796c7c17dc68f6309a10a28876"],["/archives/page/5/index.html","08fc5448ad192f2b41816c3d88d8b559"],["/archives/page/6/index.html","fa2ab7c5828f26b8c03c9624e3332f62"],["/archives/page/7/index.html","c2645fc48ad7eda6c9aee04e90d90565"],["/assets/24年技能大赛广东样题/1705468701401.png","f12c712f9e02a198414a3065f6680bcb"],["/assets/24年技能大赛广东样题/1705472418742.png","8c0e51ff2a4a9fbadb3df1dd5d0ca30d"],["/assets/24年技能大赛广东样题/1705472762494.png","add936c76ba8839bc813e42650966007"],["/assets/24年技能大赛广东样题/1705472834357.png","302e58be0fde48a350b94de2c33a1fc2"],["/assets/24年技能大赛广东样题/1705472874215.png","c6588caf067647590762c6f80092056c"],["/assets/24年技能大赛广东样题/1705473256503.png","a60c7e571210b76c60c44c85c91cfe9b"],["/assets/24年技能大赛广东样题/1705473265323.png","d4c1da009852a4ff96c11b526a4a2a8d"],["/assets/24年技能大赛广东样题/1705473783244.png","0a1b7bca6923f5ccacce2cec8db4d014"],["/assets/24年技能大赛广东样题/1705473825000.png","ee821608f5d323ba1128568837565379"],["/assets/24年技能大赛广东样题/1705473942700.png","f8f3db254dfcc3602f8419ca20c86782"],["/assets/24年技能大赛广东样题/1705474268550.png","a9214d8b0507bec60f2fe4b7abcd2dc0"],["/assets/24年技能大赛广东样题/1705474322751.png","9796058ba4348965fdaa422f9686a78d"],["/assets/24年技能大赛广东样题/1705474882469.png","d1605405b749a8a83326f0ef9de9c47b"],["/assets/24年技能大赛广东样题/1705474910725.png","0cbd620dbe444507c1cd91e24bebc7ba"],["/assets/24年技能大赛广东样题/1705475300335.png","7b3da6de19b999834994ee010be46cb5"],["/assets/24年技能大赛广东样题/1705475449777.png","55b46ba3df23e999830533483c3d1a1f"],["/assets/24年技能大赛广东样题/1705475461356.png","81d028da7233eaa8fe815b5afc79fcba"],["/assets/24年技能大赛广东样题/1705475668184.png","7ad345928ba64397ea9577e8d3db7da5"],["/assets/24年技能大赛广东样题/1705475763975.png","63fc4c696118c953278822a363fcf3d8"],["/assets/24年技能大赛广东样题/1705475906704.png","0dd4237443c0e74b95878e6327aefef1"],["/assets/24年技能大赛广东样题/1705476555115.png","f82477f9785cbec90a9932fb75c9ce14"],["/assets/24年技能大赛广东样题/1705476564047.png","c4758f4446df230bb7c74e378ce5ecd3"],["/assets/24年技能大赛广东样题/1705476641917.png","908536222609e32833df3af437e4bcc8"],["/assets/24年技能大赛广东样题/1705476664813.png","fc9de27492afd42d40b5054a48ed9272"],["/assets/24年技能大赛广东样题/1705654362719.png","bcfb2ff0c38c01ef5ca2d36d40c3240f"],["/assets/24年技能大赛广东样题/1705654400710.png","6d26d5464fa3f77b497d3f6d5f3c5b86"],["/assets/24年技能大赛广东样题/1705654811847.png","0e83ebf1783ae91140dee37c2dac6e6a"],["/assets/24年技能大赛广东样题/1705654843318.png","68ee26f50a24ece5a6a7327e97129bf5"],["/assets/24年技能大赛广东样题/1705655131418.png","5ee918dfae9cbc2dd267a2d3d848e20c"],["/assets/24年技能大赛广东样题/1705655155691.png","d7164000913ad14a01c7a45f5f7c8433"],["/assets/HTML第二天/1697079442675.png","b04577a10367030c19a790ed8c0ec3e6"],["/assets/尝试-Android物联网开发/1693875096988.png","09d2abac787f528fc027f7d21e5e1aab"],["/assets/尝试-Android物联网开发/1693964477356.png","1c15fe36bc9cef8e00b0f8a8db65a047"],["/assets/技能大赛之Ubuntu维护/1698852278392.png","85fe6b93cd5733b810049be2776e571c"],["/assets/技能大赛之Ubuntu维护/1698852341664.png","6caca7456248c152cb59fa6f44716b01"],["/assets/技能大赛之Ubuntu维护/1698852524750.png","789d84a46b80b9c097e6524343fe4853"],["/assets/技能大赛之Ubuntu维护/1698852634735.png","20ca5203400c0cea5b0ae724795dd62d"],["/assets/技能大赛之Ubuntu维护/1698852764405.png","45085b2f5e63a515257371d0971783e5"],["/assets/技能大赛之Ubuntu维护/1698852836682.png","c9cd8bd4b81f90dbaaef52e110b0b71f"],["/assets/技能大赛之Ubuntu维护/1698853016548.png","b64a79b81032be9f71267e50da2f0f87"],["/assets/技能大赛之Ubuntu维护/1698853060624.png","2664d52ba905fd0e94d0dc172f854009"],["/assets/技能大赛之Ubuntu维护/1698853106741.png","00c389b366240a7ba9af84e259ca1d45"],["/assets/技能大赛之Ubuntu维护/1698853202599.png","20cbd21ffa55d891322d17ed62aa07d2"],["/assets/技能大赛之Ubuntu维护/1698853451457.png","ff6871567aaf29bb2d8c8d923c54f43c"],["/assets/技能大赛之Ubuntu维护/1698853824171.png","9725a507ccddc461bfff162bb916c701"],["/assets/技能大赛之Ubuntu维护/1698884808296.png","e4589be7ca6f5c0f9adfe42aeac4343f"],["/assets/技能大赛之Ubuntu维护/1698884864394.png","581281300d8df5f9cd5c8e0b8a083403"],["/assets/技能大赛之Ubuntu维护/1698884920652.png","495db73218c845e903e998f57dba91c6"],["/assets/技能大赛之Ubuntu维护/1698885150920.png","6cc86773661c0582fbc21c8bc29c880d"],["/assets/技能大赛之Ubuntu维护/1698885224718.png","c8f129c3ea58f965c3e6e2e5b6781bfb"],["/assets/技能大赛之Ubuntu维护/1698885293763.png","fff89f8a366631133b2f4bb82110b7da"],["/assets/技能大赛之Ubuntu维护/1698885625168.png","381f9115a5c2de499e4f4cfedebf2284"],["/assets/技能大赛之Ubuntu维护/1698886136723.png","c48b0b16173091d00af694fd7f8913c3"],["/assets/技能大赛之Ubuntu维护/1698886175641.png","09b31abdcca35d6dc504fe9ce78be67c"],["/assets/技能大赛之Ubuntu维护/1698886297484.png","66ee6c35d9682cee8714881ced089549"],["/assets/技能大赛之Ubuntu维护/1698886334325.png","16637f00b956b708118fb6d842175367"],["/assets/技能大赛之Ubuntu维护/1698886374037.png","22b6c154d647507d6769e0b6e27811d5"],["/assets/技能大赛之Ubuntu维护/1698888006633.png","56a720fdf6e18fec986baf5cfa95bc31"],["/assets/技能大赛之Ubuntu维护/1698888087310.png","bd988ed10435e13a9884be7488d82bf9"],["/assets/技能大赛之Ubuntu维护/1698888389492.png","45291f92face763d7cf64ee9061a429a"],["/assets/技能大赛之Ubuntu维护/1700143228913.png","ad4bf9e74fef521068414009b6b1b69a"],["/assets/技能大赛之Ubuntu维护/1700144597727.png","760f81ad16e925686a3286b8ba44057a"],["/assets/技能大赛之Ubuntu维护/1700145383555.png","4c394d3309fab52be5e7816d3dfc2097"],["/assets/技能大赛之Ubuntu维护/1700145504953.png","8e3833a8b8448bfec75d670d3e45b219"],["/assets/技能大赛之Ubuntu维护/1701329835846.png","9e38f5769f21fe69d18fbfdcead7714b"],["/assets/技能大赛之Ubuntu维护/1701523808071.png","93b9e6d6b7a8d8477b76e9984dc6eda6"],["/assets/技能大赛之Ubuntu维护/1701524538009.png","b8533b98b99c5fd8a155c6d5b0e99f2e"],["/assets/技能大赛之Ubuntu维护/1705237206908.png","96d860320e51766e0d6f3c5357192c36"],["/assets/技能大赛之Ubuntu维护/1705237220199.png","86a6164a857d178fd0d25c37441b5a65"],["/assets/技能大赛之Ubuntu维护/1705237320499.png","1dadbf5b1a1401db7101b07c7f08383f"],["/assets/技能大赛之Ubuntu维护/1705415011698.png","36f24b6223e78c7d8a6a3b27c0560ec1"],["/assets/技能大赛之Ubuntu维护/1705415023009.png","1f38b1b4f70f32f42f7b4277eed817ee"],["/assets/技能大赛之Ubuntu维护/1705416981495.png","70f1b94b4e8e4144541df894a8fcd236"],["/assets/技能大赛之Ubuntu维护/1705474996383.png","aed19a4367a38d4a074547af8d3dae11"],["/assets/技能大赛之Ubuntu维护/1705475005240.png","002f363ab188c9c046c4d27317d83414"],["/assets/技能大赛之Ubuntu维护/1705765441912.png","a39605f13f85549e7e5078d77e3935ed"],["/assets/技能大赛之Ubuntu维护/1705765448044.png","2799777525d55e993bf80792040224b9"],["/assets/数据库常用命令/1693301573827.png","58979b7f4d5302853d0a26057a2660a6"],["/assets/数据库常用命令/1693311907411.png","af75159a515437cd6e6f707314f59b2e"],["/assets/数据库常用命令/1693311993666.png","149df6fccc2e89ef97a2ae37f0ea5444"],["/assets/数据库常用命令/1693314402433.png","267d9d34e3afe9e287c9073215bc5f95"],["/assets/数据库常用命令/1693314931707.png","e2a88cca6c22e07017c704e8f27e98f3"],["/assets/数据库常用命令/1693314952201.png","01b2973617008cde45e1c03d222a893d"],["/assets/数据库常用命令/1693315054667.png","7b6422de35902caa6d95ec6580a9227e"],["/assets/数据库常用命令/1693315128832.png","f600b34be2fd65b3e43fb1303f2f6608"],["/assets/数据库常用命令/1693315145115.png","c40863789496018c068d1b760fe88902"],["/assets/数据库常用命令/1693315209186.png","7c6321d8c79af912e1102d4081150983"],["/assets/数据库常用命令/1693315238981.png","951ec4188c83598ccf8cd10f1748a38a"],["/assets/数据库常用命令/1693315322414.png","f1c2aebf418bc0ce694161a9b16a6eeb"],["/assets/数据库常用命令/1693315552760.png","c73351732264b786448ce9f7c13feebd"],["/assets/数据库常用命令/1693317121082.png","966efb3d9e23492ce4077b69880463f3"],["/assets/数据库常用命令/1693317243938.png","b2aa8fa25beb588b49e71bca718a03f7"],["/assets/数据库常用命令/1693317695853.png","069f1ef5b7d67c98533b945ff44d2ba7"],["/assets/数据库常用命令/1693355675932.png","4c12f7d40ab5d16cb4ba171b3054a71d"],["/assets/数据库常用命令/1694239120400.png","dfb8cf67490642f2c52d8c8972dc406b"],["/assets/数据库常用命令/1694240340953.png","be732642d8ea10ccb2dc112c2c4c224e"],["/assets/数据库常用命令/1694240532823.png","f0fc1be62e982cd802126d642fb2bb23"],["/assets/数据库常用命令/1696756935287.png","47b4a4ad78aa77a64cf959383253cf4c"],["/assets/数据库常用命令/1701681099499.png","36069cc58e6eb53f7fe2e12824d87f14"],["/assets/数据库常用命令/1705417667865.png","a5e124e7cda89fc6d8979e1f377442a6"],["/assets/数据库常用命令/1705417785368.png","95dfc49d55d7dd04064b144d2c438f86"],["/assets/物联网比赛之Windows维护/1693279392763.png","5420651af69fe0c114195515a21ef923"],["/assets/物联网比赛之Windows维护/1693279711664.png","975690b287cef291b23c5565d95edfd3"],["/assets/物联网比赛之Windows维护/1693279722562.png","e92e6338dbed1e985dcbcdaa6e3b331c"],["/assets/物联网比赛之Windows维护/1693279825531.png","dcff603daf59c03ed6a9df2a6721b610"],["/assets/物联网比赛之Windows维护/1693279967063.png","bf69a1ee22150b1183b2494e5f6f9627"],["/assets/物联网比赛之Windows维护/1693281108935.png","76d879e93bd7b22039f705f1fd8d2c95"],["/assets/物联网比赛之Windows维护/1693281203914.png","18cfcbeeacc29222976ac3b3c5170096"],["/assets/物联网比赛之Windows维护/1693281331676.png","d9a91dfbd58f718f2c8b552f8d47fdf8"],["/assets/物联网比赛之Windows维护/1693281411142.png","626989b2e65b5e0bbb06e608c27b9fdd"],["/assets/物联网比赛之Windows维护/1693281443360.png","db473149954f98f445b023172e367cad"],["/assets/物联网比赛之Windows维护/1693281455441.png","369c18ba533b6f630db7313668b0d8ae"],["/assets/物联网比赛之Windows维护/1693281512027.png","d3b612f29b64440b7eef04dcb1ae9d5a"],["/assets/物联网比赛之Windows维护/1693281662496.png","c9de1f6d3fc0687ba24027d763fe668d"],["/assets/物联网比赛之Windows维护/1693281802478.png","3c3db70dcb75c21b291cf4a5a4a1f5f2"],["/assets/物联网比赛之Windows维护/1693282532248.png","ed0cbe28796c707024dca581ee6aee60"],["/assets/物联网比赛之Windows维护/1693282575271.png","41d104987658fc4d8eb0d1881ce1a118"],["/assets/物联网比赛之Windows维护/1693282697970.png","fbc1ceea1eb01baccf9ca8af6f3132b2"],["/assets/物联网比赛之Windows维护/1693282829345.png","9e81a0b9e210e5cdb845c50ce1cde2c8"],["/assets/物联网比赛之Windows维护/1693282908580.png","8ff81a112767cdf5e3ee0835435d3c40"],["/assets/物联网比赛之Windows维护/1693282978761.png","ebee2d5ab7b7ede0b098a60b2560d0b5"],["/assets/物联网比赛之Windows维护/1693283058738.png","97b43889d2a60d4b5d0c3b517c660864"],["/assets/电子工程师入门篇-入门基础/1707403891986.png","f86af30ab31401df1dd55382a61ae658"],["/assets/电子工程师入门篇-入门基础/1707404033488.png","da0399980ca3d06c88f97cfd24b8a10b"],["/assets/电子工程师入门篇-入门基础/1707404090124.png","5df5348c37e37ad9b57d0e7e89e6a5ab"],["/assets/电子工程师入门篇-入门基础/1707404106625.png","0e344b905adda4098fbea8e51ae3464a"],["/assets/电子工程师入门篇-入门基础/1707404233131.png","f1d342163f36da1c5cbd17074353c419"],["/assets/电子工程师入门篇-入门基础/1707404376520.png","619986ece8e47fde8035ca31be670ceb"],["/assets/电子工程师入门篇-入门基础/1707404504012.png","b2cebacf41fcedf4fa85b54ced497754"],["/assets/电子工程师入门篇-入门基础/1707404560995.png","054bbba91498271757a341633f70229f"],["/assets/电子工程师入门篇-入门基础/1707404684171.png","80a667fb75ea7d2bfa7362a16ab4c57b"],["/assets/电子工程师入门篇-入门基础/1707404752953.png","b3063db66a43ed4f828f5cc187273506"],["/assets/电子工程师入门篇-入门基础/1707404766965.png","deb3e202751fc30c8fb6ca5a49a6224f"],["/assets/电子工程师入门篇-入门基础/1707404773605.png","84a659e0d4b9d874ec5662df8a779ebd"],["/assets/电子工程师入门篇-入门基础/1707404801341.png","7981581d14dc993979e4108d467e92f7"],["/assets/电子工程师入门篇-入门基础/1707404824314.png","d537ee528f0f998d27c3c4f6559f2527"],["/assets/电子工程师入门篇-入门基础/1707404874218.png","f03f5ff7710de5239e034eefd18152cb"],["/assets/电子工程师入门篇-入门基础/1707404927903.png","6f7539d8b2f1a788c0af3e43443cd770"],["/assets/电子工程师入门篇-入门基础/1707405005870.png","e961784f569d7766feed57369fe3811d"],["/assets/电子工程师入门篇-入门基础/1707406123556.png","50f94d0dbe79339ba89b1146d78521bb"],["/assets/电子工程师入门篇-入门基础/1707406160307.png","234e2b79c5b09945e5f309dc26a84e20"],["/assets/电子工程师入门篇-入门基础/1707406191267.png","ce8507bcf197e8122114bda28fbfa525"],["/assets/电子工程师入门篇-入门基础/1707406215283.png","0b1f0d0bc7765b8729583f1923bd3393"],["/assets/电子工程师入门篇-入门基础/1707406263380.png","8a956b705e97758268a9c6b020782a6d"],["/assets/电子工程师入门篇-入门基础/1707406384977.png","1ba31eddfa497d727f465d2e45111f6c"],["/assets/电子工程师入门篇-入门基础/1707406435105.png","b90fe328fcb08373e34d05958fbbbdac"],["/assets/电子工程师入门篇-入门基础/1707406464006.png","9e63f845375935beefe68cabf5011801"],["/assets/电子工程师入门篇-入门基础/1707406487924.png","b0c8cf40cfb98e32807faa4c76ec238c"],["/assets/电路基础/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287081708.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/电路基础/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/电路基础/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/电路基础/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/电路基础/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/电路基础/1694242488250.png","112f9f33edc1c306c26623a70dbc0e0b"],["/assets/电路基础/1694242554424.png","81ff520ba30c49049e31218e3a18b1c8"],["/assets/电路基础/1694242617918.png","6e43b0cef3b1442f721850dc9e2378b9"],["/assets/电路基础/1694242654855.png","f24221678bb75a3ddff279ba41e080e7"],["/assets/电路基础/1694242683878.png","886038ef5df7399b27ebc94d3b937c28"],["/assets/电路基础/1694242819757.png","a1f266a51f16e1c1cd5499e2246b1a7e"],["/assets/电路基础/1694242852600.png","518a21f963733e45cda5c903807e0ad5"],["/assets/电路基础/1694242876285.png","975fe4e143a035aed7e4b578c6166bbf"],["/assets/电路基础/1694242905012.png","2ac838416f64020cd96d1c379a9b84e5"],["/assets/电路基础/1694242939314.png","691e36fe0f06f51243a0dd72d8eae659"],["/assets/电路基础/1694242973674.png","b3f4e257dcf4a890f680c02a1d593632"],["/assets/电路基础/1694242986138.png","e75cdf10ef2bab247d151c2dfb777416"],["/assets/电路基础/1694243025513.png","0b4fcc90a43705b2a080d593083fbfae"],["/assets/第一章-C数据类型及语句02/1691332523358.png","1dc765634c06f8fc3877de4100acc4f4"],["/assets/第一章-C数据类型及语句02/1691333205109.png","e9afc9ea502d9dc28c01df2049c6b8f5"],["/assets/第一章-初识STM32/1692284102687.png","ef03e09bd37e50efc2a1197357130957"],["/assets/第一章-初识STM32/1692284365745.png","c0ed7824603694893bd04d8c6b506fb7"],["/assets/第一章-初识STM32/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/第一章-初识STM32/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/第一章-初识STM32/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/第一章-初识STM32/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/第一章-初识STM32/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/第一章-初识STM32/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/第一章-电路模型和电路定律/1694263535061.png","433c7c7c3ffc48c2132f5ea2619234fa"],["/assets/第一章-电路模型和电路定律/1694263845243.png","6dc6ddbbe6b91c9d8ac4a874178ac7cf"],["/assets/第一章-电路模型和电路定律/1694263950246.png","10d8a12de1a5ec4afed94353f2c1cf8e"],["/assets/第一章-电路模型和电路定律/1694263974908.png","d0c973614a9974a3f681bc5a83006846"],["/assets/第一章-电路模型和电路定律/1694265050074.png","dcb679e7e3d19b608393e2437569cc75"],["/assets/第一章-电路模型和电路定律/1694265100359.png","c1e4386e9b8376850eb3f212d6f64f79"],["/assets/第一章-电路模型和电路定律/1694265136194.png","4cb241d332b13e878039b0d9379dddc4"],["/assets/第一章-电路模型和电路定律/1694265155728.png","1afeb5243baf0f8b52ad42b723a85f3a"],["/assets/第一章-电路模型和电路定律/1694265184041.png","c5542465a4ec4c86792e480a1562d0b3"],["/assets/第一章-电路模型和电路定律/1694265255827.png","136fec7274aeccb50330d47ff9862542"],["/assets/第一章-电路模型和电路定律/1694265274036.png","1b878aaf184c9e7642831e526945f6ab"],["/assets/第一章-电路模型和电路定律/1694265285159.png","1ecef3ba5de74294beddb5fc43ad680e"],["/assets/第一章-电路模型和电路定律/1694265305717.png","8b3a42dccea2264696e3927ca44a92de"],["/assets/第一章-电路模型和电路定律/1694265329854.png","34b71860d6dcea358f5104622fe2f970"],["/assets/第三章-函数/1691654665160.png","2aeb4e341ea7a86d822485de6e9935a7"],["/assets/第三章-函数/1691658173310.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658185939.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658329025.png","6d4c63195c23255e2f1e759ed462e037"],["/assets/第三章-函数/1691658406783.png","9a21ee8a33ae531392d28259a201df31"],["/assets/第三章-函数/1691658579818.png","26d2deede98d879bf895cb45f9874b14"],["/assets/第三章-函数/1691658688779.png","5591e4c32b51ffe25e941771d4193636"],["/assets/第三章-寄存器点亮LED/1693727391280.png","b05b13b39b97b7fc1a10990452cb02ea"],["/assets/第二章-寄存器/1692290301872.png","cd213e241e0622f16f1d9193bcd789d6"],["/assets/第二章-寄存器/1692290420600.png","9011dcef6abc59ec6f8f6639188a9b8d"],["/assets/第二章-数组/1691335523766.png","0226acbca650d87a9882890ce2ac764b"],["/assets/第五章-初始HAL库/1707232401368.png","f5696accccc84d81de88143c57532300"],["/assets/第五章-初始HAL库/1707232814478.png","de782848903a3e0cdf45a447301c4136"],["/assets/第五章-初始HAL库/1707233331041.png","07e6b1dab07c15439454d15a60bd5706"],["/assets/第五章-指针/1692111175278.png","399dfac409392a6df10d7cf6d11a95b2"],["/assets/第五章-指针/1692111376174.png","e80883c9415bef338ef58ef63f5a0225"],["/assets/第五章-指针/1692111480916.png","ebb194a9f40711100ad7d908af2fa2e8"],["/assets/第五章-指针/1692112482696.png","453548b1477bd3abf53238b1fc541fe4"],["/assets/第五章-指针/1692113002001.png","8c4def92d939756d43747534ced679fb"],["/assets/第五章-指针/1692113028355.png","896a5c0e320339fc3a672fe0eb570fbf"],["/assets/第五章-指针/1692113975759.png","0214c0315eed32de2ef3c9bb888a9ce8"],["/assets/第四章-自己创建函数库/1706848296026.png","2f9c3f14a01aea4844d91b3afb9b0427"],["/assets/第四章-自己创建函数库/1706889171120.png","7c0c50cdfbf44447b94f3347f643d6ab"],["/assets/第四章-自己创建函数库/1707148103038.png","d368af7f500e0291fbfa8a99e90471c6"],["/assets/第四章-自己创建函数库/1707231761899.png","f5696accccc84d81de88143c57532300"],["/categories/Mysql/index.html","8bccb9cb5020ea58b7d6543bbf2d2987"],["/categories/RTOS/index.html","ad92a9892fe69e2dfd67bff4427b0214"],["/categories/SF32/index.html","d3b5847f0d5879cdf28418aa20343662"],["/categories/index.html","4a713b923137603ab17c97009e00530b"],["/categories/前端/index.html","d913bc51e1af87639153446096bb1a4e"],["/categories/千锋C语言/index.html","705353a0e506b995fd04f2e75f9eabfa"],["/categories/华为IOT平台连接/index.html","ae18c8ab940593b3c382a0c718e3662d"],["/categories/华为云IOT连接/index.html","879d2f7053b28911afcddf62a50944e4"],["/categories/嵌入式/index.html","d88560e95a37474f33bff3ec36a31ff9"],["/categories/嵌入式设计/index.html","2008535dca42c9c8e99ece5efaf2c88d"],["/categories/技能大赛/index.html","e99afc35627119f3fadb55686792c79b"],["/categories/报错/index.html","76b6d9a8a9a3b859877033cd4c83dffb"],["/categories/数据结构/index.html","a1bd08b39a2acb236e5ad2d29deb4397"],["/categories/求职/index.html","061044fe663abf727a6ee2ca06a54e60"],["/categories/电子技术/index.html","b935393c7c109ad32ee7d7496097bccc"],["/categories/电路原理、电工学/index.html","e1aad659d385b90ea543047ba2eaf078"],["/categories/罗教授电路/index.html","7ca1aecdbba47047b32dcf137d2ed700"],["/categories/野火-STM32/index.html","b0b7a14dc12cfdda64da0f2cca588181"],["/categories/野火STM32/index.html","92bf3285c211ee659098c4ad6c1415e0"],["/categories/阅读/index.html","c07e1d79ce68d76656963b6eea3f0673"],["/categories/项目/index.html","1d6a97c7cd9ffe403be0352a12518065"],["/categories/鸿蒙开发/index.html","a22d814d9f7d0dd3039b64349b1612f1"],["/changsha/index.html","5228c690d9d8d82e9121777952ecf31f"],["/css/index.css","d615359d9816f6c1d4aea9fdd0eeb1f9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","6b04d7a979bd5a84349230f7a0cc9924"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/bg.jpg","21de1be0d5594c58354582cb0d7e334c"],["/img/book-open.png","f85941f030da74cbb5dd544ad392ff8f"],["/img/book.png","53a3e40e85caf4f1e6cc031772df6735"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/lxh.jpg","03cafb475c4dfc507e24bb593249d1b9"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/touxiang.jpg","5b4decade88a03fb315c9c0621843a6b"],["/index.html","a8f3fb45dab0e12619b5a4ef539a3fd4"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","ff1698bf9acd5e31d3ec6daaab816ee0"],["/link/index.html","7146aaa5bcd6be1feabc447827a3cfa8"],["/nanjing/index.html","0601908188bb1af47d655359409afe4d"],["/page/2/index.html","8c922e7f875d1093a6dd0ec5e0182839"],["/page/3/index.html","b998ea72ff994d1fd8e10d42625cd837"],["/page/4/index.html","39bfe00551fc242291e2ce1a6c54d800"],["/page/5/index.html","4e2a206cfaa3fa147f1a70baf5ce54d3"],["/page/6/index.html","369b4e6bb1fdabf2aed92a716e7bd789"],["/page/7/index.html","f5bbed6b06d511decbf87063804a3978"],["/sw-register.js","7fb0a7093002497a0202ff096426f684"],["/tags/APP开发/index.html","547b1a390578f97ca2b609228a75a79a"],["/tags/CSS/index.html","c235f629eaf3dc1fd0eb9ccc7d6fe203"],["/tags/HTML/index.html","c83146475593254256fde3d576d294f5"],["/tags/HarmonyOS/index.html","48e582f7cd8a5f714ae0cf2e12db13b6"],["/tags/RTOS/index.html","3c662bbc8a5eff409c20b90d6efcc76d"],["/tags/SF32/index.html","77dd30a56d0a4eb4e3a0623c6ae7f0db"],["/tags/STM32/index.html","526627f0e0a95bf73187c21328b4183e"],["/tags/Ubuntu维护/index.html","ce82682008c8993ed51fd2ffa0201c9c"],["/tags/index.html","661e61becfd01d87daa70cc2efd0c883"],["/tags/windows维护/index.html","cd6d91cd64b80629f61e4ad3b2627ff3"],["/tags/华为IOT/index.html","2c64cf0cccf0e3c29060cbe8fb215b18"],["/tags/华为云IOT/index.html","dec67019c86ce53afcab7e9171e8f7ed"],["/tags/嵌入式/index.html","b3fedf059f4c7e6e8e7dac05dabe2923"],["/tags/嵌入式C/index.html","750520dfafb18a7bf95c29f6d76a7bab"],["/tags/思澈/index.html","5dcb919e4d0d81bcc0efe9d9642e1e6a"],["/tags/数据库/index.html","cc16c6513d348e9ecdee8d169f87fc8d"],["/tags/样题/index.html","6453da31fa9901ce7849d6c7a18df65b"],["/tags/电子技术/index.html","5bce2c5bfd175a62a12a0a3e6fa78359"],["/tags/电路和电路模型/index.html","f6d1c181bbf926e4af989b980dbe1684"],["/tags/电路基础/index.html","1cd9f39624a3cc3afdc9f49aa73d60ee"],["/tags/算法/index.html","417cb5d0ad21f7a070db0d89e101f60c"],["/tags/软考/index.html","9974b34fd34a099817d6b0bece4cb49b"],["/tags/面试/index.html","c199be707573a18e07b0b88eb755b196"],["/tags/黄山派/index.html","bef688711e05be3dce10fa0a11846eb9"],["/wordScenery/index.html","24cbfb8a125ff27a7698ae215853d93d"],["/测试.html","d53d96efbffd6f45e4913fc7626a9d96"]];
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
