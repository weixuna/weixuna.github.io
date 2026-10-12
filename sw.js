/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/06/第一章-C数据类型及语句01/index.html","16f43b7e03661f7550cd91cf3b41ccc7"],["/2023/08/06/第一章-C数据类型及语句02/index.html","3452e9d59165ee0e62d505ce3749498f"],["/2023/08/06/第二章-数组/index.html","5c8826ffbce10f5d2291518e70e49c00"],["/2023/08/10/电路基础/index.html","94d73c41f445c1cfca7434835fa2afd6"],["/2023/08/10/第三章-函数/index.html","3dd727a6fcb0a4a8db790d0363885eb2"],["/2023/08/14/第五章-指针/index.html","fb125ff1ee2c411e4e69aa542f50c0b7"],["/2023/08/14/第四章-预处理/index.html","e95bfe87c72b8d20dd6ff6c4fc856f53"],["/2023/08/17/第一章-初识STM32/index.html","4cf5b68e2e043836d31efdbfeeea6fdb"],["/2023/08/17/第二章-寄存器/index.html","78a3f9ff255bfdea197c43a541c72782"],["/2023/08/29/数据库常用命令/index.html","a9b27c890e6045d0f6cd5f2978d0ed47"],["/2023/08/29/物联网比赛之Windows维护/index.html","84c3dbe20167abc5735e1a6990cfe03b"],["/2023/08/29/第一章-了解数据库/index.html","1d2a4710fdab93cd13be1d07e2636e48"],["/2023/09/01/第三章-寄存器点亮LED/index.html","c210b659b67d7a8aa684f68ee8db0142"],["/2023/09/09/第一章-电路模型和电路定律/index.html","713927b024fb76f533f834603990c598"],["/2023/10/11/HTML第一天/index.html","b64a32890946511d5eac5043657d39e8"],["/2023/10/12/HTML第二天/index.html","51a39702414d479724843d56daa6ef6b"],["/2023/10/13/HTML第三天/index.html","8e0cc2de4848284a2007ea65e2c4d68e"],["/2023/10/24/CSS第一天/index.html","40e94931d4207bafaa84e7f82cc7876f"],["/2023/10/24/CSS第二天/index.html","da968ec9afc3d839a3bc19820ec201a7"],["/2023/10/30/技能大赛之Ubuntu维护/index.html","4ae1b814309824b62ee12f45eb970db6"],["/2023/11/27/SCREEPS/index.html","b204fb4199cf2970596f8682f7d5f674"],["/2024/01/17/24年技能大赛广东样题/index.html","70fe16ff86fbdd4de2838281406c76f0"],["/2024/02/02/第四章-自己创建函数库/index.html","c7bfcb0643194345c8ddb595bd1c370a"],["/2024/02/06/第五章-初始HAL库/index.html","58e32e3bdd1a97423e82ed905d574f20"],["/2024/02/08/电子工程师入门篇-入门基础/index.html","1219427156dcc2bca7dbbf3d5bc9dec4"],["/2024/02/17/大学生活/index.html","d13a3104c28ba28a5c92225593553da4"],["/2024/02/18/疑难杂症/index.html","6ba86a22ff4a87d9ea825477a3caadd5"],["/2024/02/18/项目测试/index.html","00b4fa7a7b4be9d215880557c49edf42"],["/2024/02/26/第一章 计算机系统基础知识/index.html","cf8fbad3eb3aaa2944a871f263248a52"],["/2024/02/28/第一章 数据结构绪论/index.html","c1c3a536b49115e66ecacd2d0f4ea3cf"],["/2024/02/29/第二章 算法/index.html","9d347fcbdcae99ea5ab53a327e868c43"],["/2024/03/03/第七章 启动文件详解/index.html","6f7a4acb0304a981c44c56037a2b2777"],["/2024/03/09/一、HarmonyOS4开发/index.html","3a03393757696b3d542927efec16bdba"],["/2024/03/09/利用MQTT连接华为IOT平台，进行数据上报与下发/index.html","5cfb4da3b6eee96943dc43d195486cc3"],["/2024/03/21/第八章 RCC使用HES/HSI/index.html","62c295c8e84e9f4aa9c76bfbc25b7ce7"],["/2024/03/30/一篇牢骚/index.html","efef9f5ae9bbb70099a6b0bb63b9ff38"],["/2024/04/02/eps32连接华为云iot，并且实现arkts控制点灯/index.html","04d3276e38510e7877509e56528ce7ee"],["/2024/04/20/关于使用wsl使用idf提供编译速度遇到的问题/index.html","c4923a4baca5f4bc33a3a5fde99d7993"],["/2024/05/09/第九章 STM32中断应用/index.html","eddd9afd7eddcd92343a84855b8e3751"],["/2024/05/09/第十章 EXTI-外部中断/事件控制器/index.html","9a6b3d145f12a036da9c35e2661173b5"],["/2024/09/04/关于在物联网竞赛中的一些感想/index.html","e82803202ae4b5b3e0ca4ccda85e1305"],["/2024/09/09/第三章 线性表/index.html","1f020455bd0923de2533965e79019bb2"],["/2024/09/26/Dx-C511模块连接华为云下载固件/index.html","3cf4f3ab0b4a9740910a10de78b34251"],["/2024/10/08/2024年金砖竞赛--云边端赛项/index.html","cab507772fb5cd78686b5b9b127d4144"],["/2024/10/12/第四章 栈与队列/index.html","5451e6d0887c72cc3dc0d6756099064f"],["/2024/11/02/第五章 串/index.html","0a4633ef0ad3f311712cdf57a552ddef"],["/2025/04/10/第一章 FreeRTOS 源码/index.html","49b2868a9cfe519a0f37d32d91dbf896"],["/2025/04/11/第二章内存管理/index.html","7a7a51d43b94fc4d020d13ea0aff0cb7"],["/2025/08/20/黄山派之BLE/index.html","a9349b7d97e02d8d8a417cc06764175d"],["/2025/11/24/SF32LB52—个人毕设笔记（1）/index.html","973d2d8609ba8ef84a2cbf41e1f92716"],["/2026/06/17/思澈面试笔记-RTOS/index.html","9d647422876e58551b8a92ac56723413"],["/2026/06/17/思澈面试笔记-外设/index.html","1eaa71609e8e28a663f3c78c6639b577"],["/2026/06/17/思澈面试笔记-嵌入式C/index.html","c9fe90a6e4268160a1bb7aac4b7c2433"],["/2026/06/17/思澈面试笔记-构建系统/index.html","aac7d46d4ee90c988aaed6a8c4c00ace"],["/2026/08/26/面经/index.html","951b54bee71a48a7776ba44eef9e34ae"],["/2026/08/28/ESP32-P4 骑行终端项目深挖面试准备/index.html","40617690eef47883218331ae18830f08"],["/2026/09/12/BLE 路线传输与运动数据同步深挖/index.html","ea66ebcf2d95043276828c0269d7fc5a"],["/2026/09/12/LVGL 页面、交互与低重绘架构深挖/index.html","a322ee447c1057318957b1cb10234a39"],["/2026/09/12/RTOS 任务、并发与内存模型深挖/index.html","b007afc6ddbec0c04b32286886e67f1e"],["/2026/09/12/Wi-Fi 与小智语音深挖/index.html","365764592ba166d869683e9d09846057"],["/2026/09/12/地图数据转换与导航投影深挖/index.html","7bba24e0f805593079929c58c8636098"],["/2026/09/12/码表项目深挖/index.html","a30e39bf24d4a6357e9567c712843715"],["/2026/09/12/音频链路与本地主动播报深挖/index.html","e0b4b16316acd075e220f600f9bcc583"],["/2026/09/12/骑行码表面试深挖问答手册/index.html","ff47089f4451d6ab4b2f29aa1d84bc13"],["/2026/09/12/骑行码表项目：项目架构与面试总览/index.html","4432947d4e47ff6747e83e459a74626a"],["/2026/09/14/嵌入式面试八股文/index.html","47327ab86b4c980b3bb6b60482874148"],["/2026/10/12/C 语言与嵌入式基础完整面试手册/index.html","e9be85f81092f1ec26a7f6436ab63731"],["/404.html","d621e3a45d7661209ebb600467eb4ca5"],["/about/index.html","4c52b187d76c2c047fe72f018db309ba"],["/album/index.html","f7c59589617a65787a2455a4c4e13f46"],["/anzhiyu/random.js","3750b4d2df8eeffac810969698edf683"],["/archives/2023/08/index.html","b60d8f456e779d2b2b9c42496d8df845"],["/archives/2023/08/page/2/index.html","044763620061d9239c5c02c853607397"],["/archives/2023/09/index.html","9d88d2765eb81ce2ef6a284d5d249d8f"],["/archives/2023/10/index.html","50daabb3728fb262f03fb8e864cb8275"],["/archives/2023/11/index.html","81a9d4577c3056f3145bcaa0316c8be1"],["/archives/2023/index.html","9f33f4ec8110ea608ce644ed6153bc1e"],["/archives/2023/page/2/index.html","19b7dd60b63c4710dc3c43d8866f5210"],["/archives/2023/page/3/index.html","2a27e0cf68bb005b8c1fd40b44fff2fc"],["/archives/2024/01/index.html","b6ca6aca82aefb4ac948227e3945f7c6"],["/archives/2024/02/index.html","39469d68c5c745db632c6a250a9ba879"],["/archives/2024/03/index.html","1efc346d6afcaaf223a96efdf416490d"],["/archives/2024/04/index.html","0303059b6007d33ce2f94504bd690833"],["/archives/2024/05/index.html","09e4c074b445f1aedfee0416f1426e3c"],["/archives/2024/09/index.html","fdc8e19869e126eebc4ff818d545a0ef"],["/archives/2024/10/index.html","5c8095fcbc56d34a5928657b0e75968b"],["/archives/2024/11/index.html","f12a2a4ee32947e93ca1de0edcd55742"],["/archives/2024/index.html","1301cb5daad4365cd0a350e7c816a727"],["/archives/2024/page/2/index.html","9ac973d0ac0858cb26d79b331a3e8651"],["/archives/2024/page/3/index.html","a181e34388fc4d3e878008372210249e"],["/archives/2025/04/index.html","5a55319733aee818d8b9dceaaa328e8c"],["/archives/2025/08/index.html","b7a0e332596fc1b7d103bd48bdb56c27"],["/archives/2025/11/index.html","81070a5eafa02288230d183d2fb69060"],["/archives/2025/index.html","29d700ec463e037e1e415ffeb60e748e"],["/archives/2026/06/index.html","133ae81a96809c1dda5eb10562301115"],["/archives/2026/08/index.html","009d58fa263228c75f36793994269e9f"],["/archives/2026/09/index.html","2cc7452eaab4f6e1922a00b67b064051"],["/archives/2026/10/index.html","4b1923b5bfbef42c4c5641f133a4074f"],["/archives/2026/index.html","4cdd2e126765277b1ed036e605458a07"],["/archives/2026/page/2/index.html","68de11935c9c8bb3772d8a39bf5e7eea"],["/archives/index.html","6c67f416ae1b774fda3143f5543e38c0"],["/archives/page/2/index.html","a537490ae4e611c555a32b05d6eec239"],["/archives/page/3/index.html","1535a49cb33457347bf770945a27fba8"],["/archives/page/4/index.html","0724c96b156882330b65c4c6252e4fb4"],["/archives/page/5/index.html","dd8b1812186d079eedb2f1245c9a5b2f"],["/archives/page/6/index.html","9faafccde649453ab545775571cdc6f1"],["/archives/page/7/index.html","4a3ea73130f69c30251aa37e601ba025"],["/assets/24年技能大赛广东样题/1705468701401.png","f12c712f9e02a198414a3065f6680bcb"],["/assets/24年技能大赛广东样题/1705472418742.png","8c0e51ff2a4a9fbadb3df1dd5d0ca30d"],["/assets/24年技能大赛广东样题/1705472762494.png","add936c76ba8839bc813e42650966007"],["/assets/24年技能大赛广东样题/1705472834357.png","302e58be0fde48a350b94de2c33a1fc2"],["/assets/24年技能大赛广东样题/1705472874215.png","c6588caf067647590762c6f80092056c"],["/assets/24年技能大赛广东样题/1705473256503.png","a60c7e571210b76c60c44c85c91cfe9b"],["/assets/24年技能大赛广东样题/1705473265323.png","d4c1da009852a4ff96c11b526a4a2a8d"],["/assets/24年技能大赛广东样题/1705473783244.png","0a1b7bca6923f5ccacce2cec8db4d014"],["/assets/24年技能大赛广东样题/1705473825000.png","ee821608f5d323ba1128568837565379"],["/assets/24年技能大赛广东样题/1705473942700.png","f8f3db254dfcc3602f8419ca20c86782"],["/assets/24年技能大赛广东样题/1705474268550.png","a9214d8b0507bec60f2fe4b7abcd2dc0"],["/assets/24年技能大赛广东样题/1705474322751.png","9796058ba4348965fdaa422f9686a78d"],["/assets/24年技能大赛广东样题/1705474882469.png","d1605405b749a8a83326f0ef9de9c47b"],["/assets/24年技能大赛广东样题/1705474910725.png","0cbd620dbe444507c1cd91e24bebc7ba"],["/assets/24年技能大赛广东样题/1705475300335.png","7b3da6de19b999834994ee010be46cb5"],["/assets/24年技能大赛广东样题/1705475449777.png","55b46ba3df23e999830533483c3d1a1f"],["/assets/24年技能大赛广东样题/1705475461356.png","81d028da7233eaa8fe815b5afc79fcba"],["/assets/24年技能大赛广东样题/1705475668184.png","7ad345928ba64397ea9577e8d3db7da5"],["/assets/24年技能大赛广东样题/1705475763975.png","63fc4c696118c953278822a363fcf3d8"],["/assets/24年技能大赛广东样题/1705475906704.png","0dd4237443c0e74b95878e6327aefef1"],["/assets/24年技能大赛广东样题/1705476555115.png","f82477f9785cbec90a9932fb75c9ce14"],["/assets/24年技能大赛广东样题/1705476564047.png","c4758f4446df230bb7c74e378ce5ecd3"],["/assets/24年技能大赛广东样题/1705476641917.png","908536222609e32833df3af437e4bcc8"],["/assets/24年技能大赛广东样题/1705476664813.png","fc9de27492afd42d40b5054a48ed9272"],["/assets/24年技能大赛广东样题/1705654362719.png","bcfb2ff0c38c01ef5ca2d36d40c3240f"],["/assets/24年技能大赛广东样题/1705654400710.png","6d26d5464fa3f77b497d3f6d5f3c5b86"],["/assets/24年技能大赛广东样题/1705654811847.png","0e83ebf1783ae91140dee37c2dac6e6a"],["/assets/24年技能大赛广东样题/1705654843318.png","68ee26f50a24ece5a6a7327e97129bf5"],["/assets/24年技能大赛广东样题/1705655131418.png","5ee918dfae9cbc2dd267a2d3d848e20c"],["/assets/24年技能大赛广东样题/1705655155691.png","d7164000913ad14a01c7a45f5f7c8433"],["/assets/HTML第二天/1697079442675.png","b04577a10367030c19a790ed8c0ec3e6"],["/assets/尝试-Android物联网开发/1693875096988.png","09d2abac787f528fc027f7d21e5e1aab"],["/assets/尝试-Android物联网开发/1693964477356.png","1c15fe36bc9cef8e00b0f8a8db65a047"],["/assets/技能大赛之Ubuntu维护/1698852278392.png","85fe6b93cd5733b810049be2776e571c"],["/assets/技能大赛之Ubuntu维护/1698852341664.png","6caca7456248c152cb59fa6f44716b01"],["/assets/技能大赛之Ubuntu维护/1698852524750.png","789d84a46b80b9c097e6524343fe4853"],["/assets/技能大赛之Ubuntu维护/1698852634735.png","20ca5203400c0cea5b0ae724795dd62d"],["/assets/技能大赛之Ubuntu维护/1698852764405.png","45085b2f5e63a515257371d0971783e5"],["/assets/技能大赛之Ubuntu维护/1698852836682.png","c9cd8bd4b81f90dbaaef52e110b0b71f"],["/assets/技能大赛之Ubuntu维护/1698853016548.png","b64a79b81032be9f71267e50da2f0f87"],["/assets/技能大赛之Ubuntu维护/1698853060624.png","2664d52ba905fd0e94d0dc172f854009"],["/assets/技能大赛之Ubuntu维护/1698853106741.png","00c389b366240a7ba9af84e259ca1d45"],["/assets/技能大赛之Ubuntu维护/1698853202599.png","20cbd21ffa55d891322d17ed62aa07d2"],["/assets/技能大赛之Ubuntu维护/1698853451457.png","ff6871567aaf29bb2d8c8d923c54f43c"],["/assets/技能大赛之Ubuntu维护/1698853824171.png","9725a507ccddc461bfff162bb916c701"],["/assets/技能大赛之Ubuntu维护/1698884808296.png","e4589be7ca6f5c0f9adfe42aeac4343f"],["/assets/技能大赛之Ubuntu维护/1698884864394.png","581281300d8df5f9cd5c8e0b8a083403"],["/assets/技能大赛之Ubuntu维护/1698884920652.png","495db73218c845e903e998f57dba91c6"],["/assets/技能大赛之Ubuntu维护/1698885150920.png","6cc86773661c0582fbc21c8bc29c880d"],["/assets/技能大赛之Ubuntu维护/1698885224718.png","c8f129c3ea58f965c3e6e2e5b6781bfb"],["/assets/技能大赛之Ubuntu维护/1698885293763.png","fff89f8a366631133b2f4bb82110b7da"],["/assets/技能大赛之Ubuntu维护/1698885625168.png","381f9115a5c2de499e4f4cfedebf2284"],["/assets/技能大赛之Ubuntu维护/1698886136723.png","c48b0b16173091d00af694fd7f8913c3"],["/assets/技能大赛之Ubuntu维护/1698886175641.png","09b31abdcca35d6dc504fe9ce78be67c"],["/assets/技能大赛之Ubuntu维护/1698886297484.png","66ee6c35d9682cee8714881ced089549"],["/assets/技能大赛之Ubuntu维护/1698886334325.png","16637f00b956b708118fb6d842175367"],["/assets/技能大赛之Ubuntu维护/1698886374037.png","22b6c154d647507d6769e0b6e27811d5"],["/assets/技能大赛之Ubuntu维护/1698888006633.png","56a720fdf6e18fec986baf5cfa95bc31"],["/assets/技能大赛之Ubuntu维护/1698888087310.png","bd988ed10435e13a9884be7488d82bf9"],["/assets/技能大赛之Ubuntu维护/1698888389492.png","45291f92face763d7cf64ee9061a429a"],["/assets/技能大赛之Ubuntu维护/1700143228913.png","ad4bf9e74fef521068414009b6b1b69a"],["/assets/技能大赛之Ubuntu维护/1700144597727.png","760f81ad16e925686a3286b8ba44057a"],["/assets/技能大赛之Ubuntu维护/1700145383555.png","4c394d3309fab52be5e7816d3dfc2097"],["/assets/技能大赛之Ubuntu维护/1700145504953.png","8e3833a8b8448bfec75d670d3e45b219"],["/assets/技能大赛之Ubuntu维护/1701329835846.png","9e38f5769f21fe69d18fbfdcead7714b"],["/assets/技能大赛之Ubuntu维护/1701523808071.png","93b9e6d6b7a8d8477b76e9984dc6eda6"],["/assets/技能大赛之Ubuntu维护/1701524538009.png","b8533b98b99c5fd8a155c6d5b0e99f2e"],["/assets/技能大赛之Ubuntu维护/1705237206908.png","96d860320e51766e0d6f3c5357192c36"],["/assets/技能大赛之Ubuntu维护/1705237220199.png","86a6164a857d178fd0d25c37441b5a65"],["/assets/技能大赛之Ubuntu维护/1705237320499.png","1dadbf5b1a1401db7101b07c7f08383f"],["/assets/技能大赛之Ubuntu维护/1705415011698.png","36f24b6223e78c7d8a6a3b27c0560ec1"],["/assets/技能大赛之Ubuntu维护/1705415023009.png","1f38b1b4f70f32f42f7b4277eed817ee"],["/assets/技能大赛之Ubuntu维护/1705416981495.png","70f1b94b4e8e4144541df894a8fcd236"],["/assets/技能大赛之Ubuntu维护/1705474996383.png","aed19a4367a38d4a074547af8d3dae11"],["/assets/技能大赛之Ubuntu维护/1705475005240.png","002f363ab188c9c046c4d27317d83414"],["/assets/技能大赛之Ubuntu维护/1705765441912.png","a39605f13f85549e7e5078d77e3935ed"],["/assets/技能大赛之Ubuntu维护/1705765448044.png","2799777525d55e993bf80792040224b9"],["/assets/数据库常用命令/1693301573827.png","58979b7f4d5302853d0a26057a2660a6"],["/assets/数据库常用命令/1693311907411.png","af75159a515437cd6e6f707314f59b2e"],["/assets/数据库常用命令/1693311993666.png","149df6fccc2e89ef97a2ae37f0ea5444"],["/assets/数据库常用命令/1693314402433.png","267d9d34e3afe9e287c9073215bc5f95"],["/assets/数据库常用命令/1693314931707.png","e2a88cca6c22e07017c704e8f27e98f3"],["/assets/数据库常用命令/1693314952201.png","01b2973617008cde45e1c03d222a893d"],["/assets/数据库常用命令/1693315054667.png","7b6422de35902caa6d95ec6580a9227e"],["/assets/数据库常用命令/1693315128832.png","f600b34be2fd65b3e43fb1303f2f6608"],["/assets/数据库常用命令/1693315145115.png","c40863789496018c068d1b760fe88902"],["/assets/数据库常用命令/1693315209186.png","7c6321d8c79af912e1102d4081150983"],["/assets/数据库常用命令/1693315238981.png","951ec4188c83598ccf8cd10f1748a38a"],["/assets/数据库常用命令/1693315322414.png","f1c2aebf418bc0ce694161a9b16a6eeb"],["/assets/数据库常用命令/1693315552760.png","c73351732264b786448ce9f7c13feebd"],["/assets/数据库常用命令/1693317121082.png","966efb3d9e23492ce4077b69880463f3"],["/assets/数据库常用命令/1693317243938.png","b2aa8fa25beb588b49e71bca718a03f7"],["/assets/数据库常用命令/1693317695853.png","069f1ef5b7d67c98533b945ff44d2ba7"],["/assets/数据库常用命令/1693355675932.png","4c12f7d40ab5d16cb4ba171b3054a71d"],["/assets/数据库常用命令/1694239120400.png","dfb8cf67490642f2c52d8c8972dc406b"],["/assets/数据库常用命令/1694240340953.png","be732642d8ea10ccb2dc112c2c4c224e"],["/assets/数据库常用命令/1694240532823.png","f0fc1be62e982cd802126d642fb2bb23"],["/assets/数据库常用命令/1696756935287.png","47b4a4ad78aa77a64cf959383253cf4c"],["/assets/数据库常用命令/1701681099499.png","36069cc58e6eb53f7fe2e12824d87f14"],["/assets/数据库常用命令/1705417667865.png","a5e124e7cda89fc6d8979e1f377442a6"],["/assets/数据库常用命令/1705417785368.png","95dfc49d55d7dd04064b144d2c438f86"],["/assets/物联网比赛之Windows维护/1693279392763.png","5420651af69fe0c114195515a21ef923"],["/assets/物联网比赛之Windows维护/1693279711664.png","975690b287cef291b23c5565d95edfd3"],["/assets/物联网比赛之Windows维护/1693279722562.png","e92e6338dbed1e985dcbcdaa6e3b331c"],["/assets/物联网比赛之Windows维护/1693279825531.png","dcff603daf59c03ed6a9df2a6721b610"],["/assets/物联网比赛之Windows维护/1693279967063.png","bf69a1ee22150b1183b2494e5f6f9627"],["/assets/物联网比赛之Windows维护/1693281108935.png","76d879e93bd7b22039f705f1fd8d2c95"],["/assets/物联网比赛之Windows维护/1693281203914.png","18cfcbeeacc29222976ac3b3c5170096"],["/assets/物联网比赛之Windows维护/1693281331676.png","d9a91dfbd58f718f2c8b552f8d47fdf8"],["/assets/物联网比赛之Windows维护/1693281411142.png","626989b2e65b5e0bbb06e608c27b9fdd"],["/assets/物联网比赛之Windows维护/1693281443360.png","db473149954f98f445b023172e367cad"],["/assets/物联网比赛之Windows维护/1693281455441.png","369c18ba533b6f630db7313668b0d8ae"],["/assets/物联网比赛之Windows维护/1693281512027.png","d3b612f29b64440b7eef04dcb1ae9d5a"],["/assets/物联网比赛之Windows维护/1693281662496.png","c9de1f6d3fc0687ba24027d763fe668d"],["/assets/物联网比赛之Windows维护/1693281802478.png","3c3db70dcb75c21b291cf4a5a4a1f5f2"],["/assets/物联网比赛之Windows维护/1693282532248.png","ed0cbe28796c707024dca581ee6aee60"],["/assets/物联网比赛之Windows维护/1693282575271.png","41d104987658fc4d8eb0d1881ce1a118"],["/assets/物联网比赛之Windows维护/1693282697970.png","fbc1ceea1eb01baccf9ca8af6f3132b2"],["/assets/物联网比赛之Windows维护/1693282829345.png","9e81a0b9e210e5cdb845c50ce1cde2c8"],["/assets/物联网比赛之Windows维护/1693282908580.png","8ff81a112767cdf5e3ee0835435d3c40"],["/assets/物联网比赛之Windows维护/1693282978761.png","ebee2d5ab7b7ede0b098a60b2560d0b5"],["/assets/物联网比赛之Windows维护/1693283058738.png","97b43889d2a60d4b5d0c3b517c660864"],["/assets/电子工程师入门篇-入门基础/1707403891986.png","f86af30ab31401df1dd55382a61ae658"],["/assets/电子工程师入门篇-入门基础/1707404033488.png","da0399980ca3d06c88f97cfd24b8a10b"],["/assets/电子工程师入门篇-入门基础/1707404090124.png","5df5348c37e37ad9b57d0e7e89e6a5ab"],["/assets/电子工程师入门篇-入门基础/1707404106625.png","0e344b905adda4098fbea8e51ae3464a"],["/assets/电子工程师入门篇-入门基础/1707404233131.png","f1d342163f36da1c5cbd17074353c419"],["/assets/电子工程师入门篇-入门基础/1707404376520.png","619986ece8e47fde8035ca31be670ceb"],["/assets/电子工程师入门篇-入门基础/1707404504012.png","b2cebacf41fcedf4fa85b54ced497754"],["/assets/电子工程师入门篇-入门基础/1707404560995.png","054bbba91498271757a341633f70229f"],["/assets/电子工程师入门篇-入门基础/1707404684171.png","80a667fb75ea7d2bfa7362a16ab4c57b"],["/assets/电子工程师入门篇-入门基础/1707404752953.png","b3063db66a43ed4f828f5cc187273506"],["/assets/电子工程师入门篇-入门基础/1707404766965.png","deb3e202751fc30c8fb6ca5a49a6224f"],["/assets/电子工程师入门篇-入门基础/1707404773605.png","84a659e0d4b9d874ec5662df8a779ebd"],["/assets/电子工程师入门篇-入门基础/1707404801341.png","7981581d14dc993979e4108d467e92f7"],["/assets/电子工程师入门篇-入门基础/1707404824314.png","d537ee528f0f998d27c3c4f6559f2527"],["/assets/电子工程师入门篇-入门基础/1707404874218.png","f03f5ff7710de5239e034eefd18152cb"],["/assets/电子工程师入门篇-入门基础/1707404927903.png","6f7539d8b2f1a788c0af3e43443cd770"],["/assets/电子工程师入门篇-入门基础/1707405005870.png","e961784f569d7766feed57369fe3811d"],["/assets/电子工程师入门篇-入门基础/1707406123556.png","50f94d0dbe79339ba89b1146d78521bb"],["/assets/电子工程师入门篇-入门基础/1707406160307.png","234e2b79c5b09945e5f309dc26a84e20"],["/assets/电子工程师入门篇-入门基础/1707406191267.png","ce8507bcf197e8122114bda28fbfa525"],["/assets/电子工程师入门篇-入门基础/1707406215283.png","0b1f0d0bc7765b8729583f1923bd3393"],["/assets/电子工程师入门篇-入门基础/1707406263380.png","8a956b705e97758268a9c6b020782a6d"],["/assets/电子工程师入门篇-入门基础/1707406384977.png","1ba31eddfa497d727f465d2e45111f6c"],["/assets/电子工程师入门篇-入门基础/1707406435105.png","b90fe328fcb08373e34d05958fbbbdac"],["/assets/电子工程师入门篇-入门基础/1707406464006.png","9e63f845375935beefe68cabf5011801"],["/assets/电子工程师入门篇-入门基础/1707406487924.png","b0c8cf40cfb98e32807faa4c76ec238c"],["/assets/电路基础/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287081708.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/电路基础/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/电路基础/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/电路基础/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/电路基础/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/电路基础/1694242488250.png","112f9f33edc1c306c26623a70dbc0e0b"],["/assets/电路基础/1694242554424.png","81ff520ba30c49049e31218e3a18b1c8"],["/assets/电路基础/1694242617918.png","6e43b0cef3b1442f721850dc9e2378b9"],["/assets/电路基础/1694242654855.png","f24221678bb75a3ddff279ba41e080e7"],["/assets/电路基础/1694242683878.png","886038ef5df7399b27ebc94d3b937c28"],["/assets/电路基础/1694242819757.png","a1f266a51f16e1c1cd5499e2246b1a7e"],["/assets/电路基础/1694242852600.png","518a21f963733e45cda5c903807e0ad5"],["/assets/电路基础/1694242876285.png","975fe4e143a035aed7e4b578c6166bbf"],["/assets/电路基础/1694242905012.png","2ac838416f64020cd96d1c379a9b84e5"],["/assets/电路基础/1694242939314.png","691e36fe0f06f51243a0dd72d8eae659"],["/assets/电路基础/1694242973674.png","b3f4e257dcf4a890f680c02a1d593632"],["/assets/电路基础/1694242986138.png","e75cdf10ef2bab247d151c2dfb777416"],["/assets/电路基础/1694243025513.png","0b4fcc90a43705b2a080d593083fbfae"],["/assets/第一章-C数据类型及语句02/1691332523358.png","1dc765634c06f8fc3877de4100acc4f4"],["/assets/第一章-C数据类型及语句02/1691333205109.png","e9afc9ea502d9dc28c01df2049c6b8f5"],["/assets/第一章-初识STM32/1692284102687.png","ef03e09bd37e50efc2a1197357130957"],["/assets/第一章-初识STM32/1692284365745.png","c0ed7824603694893bd04d8c6b506fb7"],["/assets/第一章-初识STM32/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/第一章-初识STM32/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/第一章-初识STM32/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/第一章-初识STM32/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/第一章-初识STM32/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/第一章-初识STM32/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/第一章-电路模型和电路定律/1694263535061.png","433c7c7c3ffc48c2132f5ea2619234fa"],["/assets/第一章-电路模型和电路定律/1694263845243.png","6dc6ddbbe6b91c9d8ac4a874178ac7cf"],["/assets/第一章-电路模型和电路定律/1694263950246.png","10d8a12de1a5ec4afed94353f2c1cf8e"],["/assets/第一章-电路模型和电路定律/1694263974908.png","d0c973614a9974a3f681bc5a83006846"],["/assets/第一章-电路模型和电路定律/1694265050074.png","dcb679e7e3d19b608393e2437569cc75"],["/assets/第一章-电路模型和电路定律/1694265100359.png","c1e4386e9b8376850eb3f212d6f64f79"],["/assets/第一章-电路模型和电路定律/1694265136194.png","4cb241d332b13e878039b0d9379dddc4"],["/assets/第一章-电路模型和电路定律/1694265155728.png","1afeb5243baf0f8b52ad42b723a85f3a"],["/assets/第一章-电路模型和电路定律/1694265184041.png","c5542465a4ec4c86792e480a1562d0b3"],["/assets/第一章-电路模型和电路定律/1694265255827.png","136fec7274aeccb50330d47ff9862542"],["/assets/第一章-电路模型和电路定律/1694265274036.png","1b878aaf184c9e7642831e526945f6ab"],["/assets/第一章-电路模型和电路定律/1694265285159.png","1ecef3ba5de74294beddb5fc43ad680e"],["/assets/第一章-电路模型和电路定律/1694265305717.png","8b3a42dccea2264696e3927ca44a92de"],["/assets/第一章-电路模型和电路定律/1694265329854.png","34b71860d6dcea358f5104622fe2f970"],["/assets/第三章-函数/1691654665160.png","2aeb4e341ea7a86d822485de6e9935a7"],["/assets/第三章-函数/1691658173310.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658185939.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658329025.png","6d4c63195c23255e2f1e759ed462e037"],["/assets/第三章-函数/1691658406783.png","9a21ee8a33ae531392d28259a201df31"],["/assets/第三章-函数/1691658579818.png","26d2deede98d879bf895cb45f9874b14"],["/assets/第三章-函数/1691658688779.png","5591e4c32b51ffe25e941771d4193636"],["/assets/第三章-寄存器点亮LED/1693727391280.png","b05b13b39b97b7fc1a10990452cb02ea"],["/assets/第二章-寄存器/1692290301872.png","cd213e241e0622f16f1d9193bcd789d6"],["/assets/第二章-寄存器/1692290420600.png","9011dcef6abc59ec6f8f6639188a9b8d"],["/assets/第二章-数组/1691335523766.png","0226acbca650d87a9882890ce2ac764b"],["/assets/第五章-初始HAL库/1707232401368.png","f5696accccc84d81de88143c57532300"],["/assets/第五章-初始HAL库/1707232814478.png","de782848903a3e0cdf45a447301c4136"],["/assets/第五章-初始HAL库/1707233331041.png","07e6b1dab07c15439454d15a60bd5706"],["/assets/第五章-指针/1692111175278.png","399dfac409392a6df10d7cf6d11a95b2"],["/assets/第五章-指针/1692111376174.png","e80883c9415bef338ef58ef63f5a0225"],["/assets/第五章-指针/1692111480916.png","ebb194a9f40711100ad7d908af2fa2e8"],["/assets/第五章-指针/1692112482696.png","453548b1477bd3abf53238b1fc541fe4"],["/assets/第五章-指针/1692113002001.png","8c4def92d939756d43747534ced679fb"],["/assets/第五章-指针/1692113028355.png","896a5c0e320339fc3a672fe0eb570fbf"],["/assets/第五章-指针/1692113975759.png","0214c0315eed32de2ef3c9bb888a9ce8"],["/assets/第四章-自己创建函数库/1706848296026.png","2f9c3f14a01aea4844d91b3afb9b0427"],["/assets/第四章-自己创建函数库/1706889171120.png","7c0c50cdfbf44447b94f3347f643d6ab"],["/assets/第四章-自己创建函数库/1707148103038.png","d368af7f500e0291fbfa8a99e90471c6"],["/assets/第四章-自己创建函数库/1707231761899.png","f5696accccc84d81de88143c57532300"],["/categories/Mysql/index.html","10c4f164bd1606506b2ebf9401ceb175"],["/categories/RTOS/index.html","c64836e9bb24ada8bffa21e33059a2b0"],["/categories/SF32/index.html","77c302d61ce0ec29cf568d854d635961"],["/categories/index.html","69eec268d213003e91cdc13eb6506e96"],["/categories/前端/index.html","1654e7b3be5f3ad6e8a813e1fd0ae79d"],["/categories/千锋C语言/index.html","9fedbd9e40b424b9e0883c3c7913914f"],["/categories/华为IOT平台连接/index.html","c63ecc704a418060d4116448cdd1c23d"],["/categories/华为云IOT连接/index.html","3f496f3aa261eb79321379e2b4f8b1bd"],["/categories/嵌入式/index.html","d417293e9b6b81a93a826d7e49227514"],["/categories/嵌入式设计/index.html","d3df108e8bfd06721fc1f231b9e00b5e"],["/categories/技能大赛/index.html","a37397fe1fac792ba56cbff917ee3e30"],["/categories/报错/index.html","8e7d414470de706c14ef65b557157ab1"],["/categories/数据结构/index.html","00eaa2a440b1c5ca82477ae23683f7f7"],["/categories/求职/index.html","756ef14e578758ca71d57388f53ab8da"],["/categories/电子技术/index.html","335f492966330a5a2fbb0e8bb74a030e"],["/categories/电路原理、电工学/index.html","98a6720e4f206e9985e38bc4de4b199e"],["/categories/罗教授电路/index.html","9669babe6c377e2950cbd2f9e04c2d7a"],["/categories/野火-STM32/index.html","05238b73680f1221324a972f28514c0a"],["/categories/野火STM32/index.html","48497566eba25e7e428d927c20b22c38"],["/categories/阅读/index.html","cdf11dfa563676fe6cada8301c8164d2"],["/categories/面试/index.html","65069246a7cc132c4117631096487834"],["/categories/项目/index.html","d58a8d92e61af15340ffb4ded0180ce2"],["/categories/鸿蒙开发/index.html","4c41305c60cf71cc0b86b07681d2de2a"],["/changsha/index.html","e499c002ab1a174312bd58aa229e3dcf"],["/css/index.css","d615359d9816f6c1d4aea9fdd0eeb1f9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","41fa2014811aed9e4c5ed06c3336bcd4"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/bg.jpg","21de1be0d5594c58354582cb0d7e334c"],["/img/book-open.png","f85941f030da74cbb5dd544ad392ff8f"],["/img/book.png","53a3e40e85caf4f1e6cc031772df6735"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/lxh.jpg","03cafb475c4dfc507e24bb593249d1b9"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/touxiang.jpg","5b4decade88a03fb315c9c0621843a6b"],["/index.html","dae39e1a1dfd165efce281e1fdd847ba"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","ff1698bf9acd5e31d3ec6daaab816ee0"],["/link/index.html","f0f4d3abfa5910c204b7c169686a48ff"],["/nanjing/index.html","a986521912662960c0c5e580b3279d05"],["/page/2/index.html","07fc8207fba5c4cbf284b757c2f05d88"],["/page/3/index.html","fffb07a6cefa04c11938decbe7fab888"],["/page/4/index.html","e4ee2b17d4b613215873321fbdfbd7c2"],["/page/5/index.html","a6b339e075653599bfb92bf64ac55447"],["/page/6/index.html","6a121b138355766fd1f34c53b3e512b0"],["/page/7/index.html","f72d9df8ffb4c1ed65b2fc824ef15a4a"],["/sw-register.js","60aec120bab9779e32208288e81ce2eb"],["/tags/APP开发/index.html","6f41fc55db1a175cba51e1ae802c5168"],["/tags/CSS/index.html","63e1ed8c2905089c813dc494c1cde8db"],["/tags/HTML/index.html","886ffa467b31890e9543fb9b8dfd8e72"],["/tags/HarmonyOS/index.html","c7a989b055f06106ca0afeaf457a3518"],["/tags/RTOS/index.html","12dadafd9d03fb240f04f3ad285d9672"],["/tags/SF32/index.html","e715da54ada131d49ccbc0810f33a994"],["/tags/STM32/index.html","f26227a05e2f921b532c66c4d05f8b56"],["/tags/Ubuntu维护/index.html","25a3b28c7666d447c03ff0c1e9275e0e"],["/tags/index.html","85bffc8ffe75c1bb86c66e8b3dea4cfb"],["/tags/windows维护/index.html","90b70062152a6dbc680e4bcfbaef0b27"],["/tags/八股文/index.html","dccaf4e60e697d5fb27342f565f887ad"],["/tags/华为IOT/index.html","922bfe198707965181a6d7dba3ad28cf"],["/tags/华为云IOT/index.html","4a4c18e6f441f3c8689244652ac018f7"],["/tags/嵌入式/index.html","3f8cd1123d5012f4bf34d216fa5647c6"],["/tags/嵌入式C/index.html","5d8e0a7740d2ed01ac337c358979fa13"],["/tags/思澈/index.html","4ba5dfd882494ca38ae4e94aa8e13d63"],["/tags/数据库/index.html","92cb20133617146344fb1a2f1ce9f935"],["/tags/样题/index.html","c95089c546a3dc1a5ca3d8cb8f1b73e1"],["/tags/电子技术/index.html","73961f2ca80156114c7b25b1d16e44f3"],["/tags/电路和电路模型/index.html","3b0b2d5334ead97d89d9d96778aeaaa9"],["/tags/电路基础/index.html","1689437e8729df8c3af2158d9712a640"],["/tags/算法/index.html","e25b87fc687772af78b38a4d2bf145b1"],["/tags/软考/index.html","facea9c69faebb7443248c21c8c6a522"],["/tags/面试/index.html","a21ccc821f5dbbd985bf1077c8c4744e"],["/tags/黄山派/index.html","480b04415757723af0a7f86746026bda"],["/wordScenery/index.html","5949b551efb761554bc6f59c1b12066b"],["/测试.html","723d24a6b014310b4f384c5a4e165e0d"]];
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
