/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/06/第一章-C数据类型及语句01/index.html","b434f359a40b6588bf3a417f90b4b07a"],["/2023/08/06/第一章-C数据类型及语句02/index.html","855d0966d0fd8cc3389a0a50cd48a309"],["/2023/08/06/第二章-数组/index.html","32cab24e44fb344b839d21fb3d19f7c8"],["/2023/08/10/电路基础/index.html","c82556c0315ff9206bf5687fe3ca1523"],["/2023/08/10/第三章-函数/index.html","fb5b3f2d019d64da948f27f14cc6527b"],["/2023/08/14/第五章-指针/index.html","d79049c6d4f52d6270e70a7f9113c794"],["/2023/08/14/第四章-预处理/index.html","a5b24892613e19103965c237f338e558"],["/2023/08/17/第一章-初识STM32/index.html","1ff4a91a2defba3a8a94d5798858f6ca"],["/2023/08/17/第二章-寄存器/index.html","cacb0b6983543f8c63f0273d41aef56b"],["/2023/08/29/数据库常用命令/index.html","9cc04def503f8a255309e518513f430f"],["/2023/08/29/物联网比赛之Windows维护/index.html","a310dca319e39ec12d4ee208193d02c1"],["/2023/08/29/第一章-了解数据库/index.html","9947f0bab59adb19e39ac48fe0124f3a"],["/2023/09/01/第三章-寄存器点亮LED/index.html","1ffef7281fc068dcda865798008f8698"],["/2023/09/09/第一章-电路模型和电路定律/index.html","fb1d8e575e4a69e9ec73dc188eb803ab"],["/2023/10/11/HTML第一天/index.html","9024da1203b5c6d47bbf884505843ee3"],["/2023/10/12/HTML第二天/index.html","a92bb30ff42a5f4cbccc14377eb46573"],["/2023/10/13/HTML第三天/index.html","c53acc5b28ac0bb0e0208740cf303534"],["/2023/10/24/CSS第一天/index.html","12a0fb47a8a1d582bb465d35dd1eb61d"],["/2023/10/24/CSS第二天/index.html","d2dd19e41ad3e82af2fe0970185ac4c6"],["/2023/10/30/技能大赛之Ubuntu维护/index.html","db3e6c0ef703937a688b0b7a0be02b30"],["/2023/11/27/SCREEPS/index.html","c3bca0d3cd64b2420c2f84e8fed87174"],["/2024/01/17/24年技能大赛广东样题/index.html","31a90a323492d3e13a26df26332d169a"],["/2024/02/02/第四章-自己创建函数库/index.html","18df4f0092bac1d7152cefd644c11a82"],["/2024/02/06/第五章-初始HAL库/index.html","36bb7d8e4b26283b7ce6950fdd3874ff"],["/2024/02/08/电子工程师入门篇-入门基础/index.html","6bc899904faca2dc4fea0d0a595e5eb0"],["/2024/02/17/大学生活/index.html","c29df772d5e5d4dfe816bc6c8ffb2d6f"],["/2024/02/18/疑难杂症/index.html","750a466f2b0b869b623a1702b7f6ea7f"],["/2024/02/18/项目测试/index.html","a8415b741108270aa9c545c997d12c7a"],["/2024/02/26/第一章 计算机系统基础知识/index.html","f5d542a0988e989a66b978a611aae9d5"],["/2024/02/28/第一章 数据结构绪论/index.html","d0661d2d073bbcefddece0a8f36ee640"],["/2024/02/29/第二章 算法/index.html","a79ce6e3857de8cf5117d2619e998c40"],["/2024/03/03/第七章 启动文件详解/index.html","193e201acc70a37015c280d5c0be5549"],["/2024/03/09/一、HarmonyOS4开发/index.html","6a57ec57c56897526bfce67826d48998"],["/2024/03/09/利用MQTT连接华为IOT平台，进行数据上报与下发/index.html","89b327ee949eb9f55daa4bee620564ba"],["/2024/03/21/第八章 RCC使用HES/HSI/index.html","414677821388a4dbc9d0bd811e6aef8a"],["/2024/03/30/一篇牢骚/index.html","6b47145ded6196aff3045d6631a6d35d"],["/2024/04/02/eps32连接华为云iot，并且实现arkts控制点灯/index.html","06e6bfa52565d48c803056e7cf1133f2"],["/2024/04/20/关于使用wsl使用idf提供编译速度遇到的问题/index.html","a353244dc5021832b7b4ad11183a6436"],["/2024/05/09/第九章 STM32中断应用/index.html","fad3bb0bc0e682a78b7f00b9e6f58518"],["/2024/05/09/第十章 EXTI-外部中断/事件控制器/index.html","806b1d0600f6116f985d78f565de94a7"],["/2024/09/04/关于在物联网竞赛中的一些感想/index.html","bb17dc00e1bc85845929359767c42df0"],["/2024/09/09/第三章 线性表/index.html","3b3309ed8735f8f06a26cb9dbc91b80f"],["/2024/09/26/Dx-C511模块连接华为云下载固件/index.html","abbac049a1b96fa8b2e5adf71efd6e42"],["/2024/10/08/2024年金砖竞赛--云边端赛项/index.html","6c62781b3a8a6977954030b62723fac4"],["/2024/10/12/第四章 栈与队列/index.html","bc9a1cba1150a56af032d710ca6f9429"],["/2024/11/02/第五章 串/index.html","2adc5d321b6e1d0cb3231402e8da2474"],["/2025/04/10/第一章 FreeRTOS 源码/index.html","fc49670b114607a142d3a6802498fe2b"],["/2025/04/11/第二章内存管理/index.html","67c09c6e8b791945ba389c025937dab0"],["/2025/08/20/黄山派之BLE/index.html","1faecc1b56cf70ed72993c72ec7a43b8"],["/2025/11/24/SF32LB52—个人毕设笔记（1）/index.html","2ce96d1f80482df43c8ceb24de407e75"],["/2026/06/17/思澈面试笔记-RTOS/index.html","6a7e012d21061d4241c20f4c2cddcae8"],["/2026/06/17/思澈面试笔记-外设/index.html","2aa67ea5b8b53b8674d6e67d5db6fa80"],["/2026/06/17/思澈面试笔记-嵌入式C/index.html","acdb2e162a6ce951b38cefffd41206d4"],["/2026/06/17/思澈面试笔记-构建系统/index.html","cbaf32fb7b38fe5851dff631e0b6abbb"],["/2026/08/26/面经/index.html","1b81ecace33b5369936a5c5ac23f4460"],["/2026/08/28/ESP32-P4 骑行终端项目深挖面试准备/index.html","16a11f077fd87bc0dadc596c1e2d322e"],["/2026/09/12/BLE 路线传输与运动数据同步深挖/index.html","16035c96df5140fe06e22c9791319f1a"],["/2026/09/12/LVGL 页面、交互与低重绘架构深挖/index.html","ecaa02a8da27cbc127c58cffc52937d5"],["/2026/09/12/RTOS 任务、并发与内存模型深挖/index.html","04781aea1c00e9e10bcb327d8a9af7f0"],["/2026/09/12/Wi-Fi 与小智语音深挖/index.html","83131d9b0e3bc5f0206601095326670f"],["/2026/09/12/地图数据转换与导航投影深挖/index.html","3b153d05c642176c9130cd2504ead674"],["/2026/09/12/码表项目深挖/index.html","2673328360a2974a3f0b0d33ad223297"],["/2026/09/12/音频链路与本地主动播报深挖/index.html","6731be111310ed4863550d020d0ec22a"],["/2026/09/12/骑行码表面试深挖问答手册/index.html","5a9f224e12bb7bc94a7cb28bbb1a0465"],["/2026/09/12/骑行码表项目：项目架构与面试总览/index.html","052e86e665c27f9f4429770d28de6994"],["/2026/09/14/嵌入式面试八股文/index.html","07698dadbd18c443df5879f47c5d773d"],["/2026/10/11/C 语言与嵌入式基础完整面试手册/index.html","15a8569161de38a4e9601fbe94b0af8e"],["/404.html","12ad925c2350af195f3526ef4d43debd"],["/about/index.html","8c1d616627e1cb0f4348db2d32241c85"],["/album/index.html","3152cc38f6c53211084b1e1e5ffaa359"],["/anzhiyu/random.js","8c8790ec8d72a31c407730466ffdb069"],["/archives/2023/08/index.html","c5207e42c20108e35ca895ff511dc38c"],["/archives/2023/08/page/2/index.html","f2251a8c4215c1f158679378e315e980"],["/archives/2023/09/index.html","d5029e725df6ed94ff35b02c1b962748"],["/archives/2023/10/index.html","383decfdf35d7c1853754ac4107b83ab"],["/archives/2023/11/index.html","61eaa1b53a26c94c2610a8631f819d02"],["/archives/2023/index.html","e8bbbf472db739a7e9ae9e0c5b6cdeb3"],["/archives/2023/page/2/index.html","f9f73c9058d46fce6bb32c0fa8705c73"],["/archives/2023/page/3/index.html","eda7afd98841abfe83bf368a53c0d9d8"],["/archives/2024/01/index.html","5e57235b3c01bdce2d1c56bae87d9a25"],["/archives/2024/02/index.html","00d74ef04aa74ea117fc32a6f0422bde"],["/archives/2024/03/index.html","ae8cddfddd82ed98bbf59a4a1ed6486d"],["/archives/2024/04/index.html","1e3ba1038352dea61dd24b649782c8ab"],["/archives/2024/05/index.html","91060957da96ad99a217a28193e9eb42"],["/archives/2024/09/index.html","8a57ee380eb79ca453d997d934b07c56"],["/archives/2024/10/index.html","e17d4daad7697b08e56a3f087270fffa"],["/archives/2024/11/index.html","f6afb75aadfda0bea78a54d13efc4658"],["/archives/2024/index.html","42023f31542844eaff538641defa38c9"],["/archives/2024/page/2/index.html","f6252ed90b8bb2932cee01007f29c122"],["/archives/2024/page/3/index.html","f6eb8a6176e535dedabef6ce3855c607"],["/archives/2025/04/index.html","74189a3965bcbe2d35d09fdacb4e5cfb"],["/archives/2025/08/index.html","c09b261fdde6bef35d96fec1909274e5"],["/archives/2025/11/index.html","1f0f93200f982ff0c0be6bfbdbc41945"],["/archives/2025/index.html","d61c019cc29e4a0f1755bccdbdd038b3"],["/archives/2026/06/index.html","05aefb4f0d97d14724ff1d94a81d5364"],["/archives/2026/08/index.html","9752e003a22c0846da994e3b06771833"],["/archives/2026/09/index.html","6fe7dac64ce9442a7dd44554f96307d4"],["/archives/2026/10/index.html","8b68311828de0f2a6b8cd734a1550531"],["/archives/2026/index.html","6d1ca417641df1ace36e933b8d58b314"],["/archives/2026/page/2/index.html","295fa728078d9bfcd88a9bbd2cbdbdbb"],["/archives/index.html","bbc7d01270960858cd1244f432fa10fe"],["/archives/page/2/index.html","df73f4d5c880a5384418a6d1097f563a"],["/archives/page/3/index.html","654a0beed808766ab47952931870c9db"],["/archives/page/4/index.html","441419d3fee57ca25082b8e4723cf1dd"],["/archives/page/5/index.html","5bb30a7ea93e7f3b8a1ce671945ab4a3"],["/archives/page/6/index.html","e39f5800be933ffee216e1b99b9fcc9f"],["/archives/page/7/index.html","f8d5f04b011f7dec73f74b6ce13a24d8"],["/assets/24年技能大赛广东样题/1705468701401.png","f12c712f9e02a198414a3065f6680bcb"],["/assets/24年技能大赛广东样题/1705472418742.png","8c0e51ff2a4a9fbadb3df1dd5d0ca30d"],["/assets/24年技能大赛广东样题/1705472762494.png","add936c76ba8839bc813e42650966007"],["/assets/24年技能大赛广东样题/1705472834357.png","302e58be0fde48a350b94de2c33a1fc2"],["/assets/24年技能大赛广东样题/1705472874215.png","c6588caf067647590762c6f80092056c"],["/assets/24年技能大赛广东样题/1705473256503.png","a60c7e571210b76c60c44c85c91cfe9b"],["/assets/24年技能大赛广东样题/1705473265323.png","d4c1da009852a4ff96c11b526a4a2a8d"],["/assets/24年技能大赛广东样题/1705473783244.png","0a1b7bca6923f5ccacce2cec8db4d014"],["/assets/24年技能大赛广东样题/1705473825000.png","ee821608f5d323ba1128568837565379"],["/assets/24年技能大赛广东样题/1705473942700.png","f8f3db254dfcc3602f8419ca20c86782"],["/assets/24年技能大赛广东样题/1705474268550.png","a9214d8b0507bec60f2fe4b7abcd2dc0"],["/assets/24年技能大赛广东样题/1705474322751.png","9796058ba4348965fdaa422f9686a78d"],["/assets/24年技能大赛广东样题/1705474882469.png","d1605405b749a8a83326f0ef9de9c47b"],["/assets/24年技能大赛广东样题/1705474910725.png","0cbd620dbe444507c1cd91e24bebc7ba"],["/assets/24年技能大赛广东样题/1705475300335.png","7b3da6de19b999834994ee010be46cb5"],["/assets/24年技能大赛广东样题/1705475449777.png","55b46ba3df23e999830533483c3d1a1f"],["/assets/24年技能大赛广东样题/1705475461356.png","81d028da7233eaa8fe815b5afc79fcba"],["/assets/24年技能大赛广东样题/1705475668184.png","7ad345928ba64397ea9577e8d3db7da5"],["/assets/24年技能大赛广东样题/1705475763975.png","63fc4c696118c953278822a363fcf3d8"],["/assets/24年技能大赛广东样题/1705475906704.png","0dd4237443c0e74b95878e6327aefef1"],["/assets/24年技能大赛广东样题/1705476555115.png","f82477f9785cbec90a9932fb75c9ce14"],["/assets/24年技能大赛广东样题/1705476564047.png","c4758f4446df230bb7c74e378ce5ecd3"],["/assets/24年技能大赛广东样题/1705476641917.png","908536222609e32833df3af437e4bcc8"],["/assets/24年技能大赛广东样题/1705476664813.png","fc9de27492afd42d40b5054a48ed9272"],["/assets/24年技能大赛广东样题/1705654362719.png","bcfb2ff0c38c01ef5ca2d36d40c3240f"],["/assets/24年技能大赛广东样题/1705654400710.png","6d26d5464fa3f77b497d3f6d5f3c5b86"],["/assets/24年技能大赛广东样题/1705654811847.png","0e83ebf1783ae91140dee37c2dac6e6a"],["/assets/24年技能大赛广东样题/1705654843318.png","68ee26f50a24ece5a6a7327e97129bf5"],["/assets/24年技能大赛广东样题/1705655131418.png","5ee918dfae9cbc2dd267a2d3d848e20c"],["/assets/24年技能大赛广东样题/1705655155691.png","d7164000913ad14a01c7a45f5f7c8433"],["/assets/HTML第二天/1697079442675.png","b04577a10367030c19a790ed8c0ec3e6"],["/assets/尝试-Android物联网开发/1693875096988.png","09d2abac787f528fc027f7d21e5e1aab"],["/assets/尝试-Android物联网开发/1693964477356.png","1c15fe36bc9cef8e00b0f8a8db65a047"],["/assets/技能大赛之Ubuntu维护/1698852278392.png","85fe6b93cd5733b810049be2776e571c"],["/assets/技能大赛之Ubuntu维护/1698852341664.png","6caca7456248c152cb59fa6f44716b01"],["/assets/技能大赛之Ubuntu维护/1698852524750.png","789d84a46b80b9c097e6524343fe4853"],["/assets/技能大赛之Ubuntu维护/1698852634735.png","20ca5203400c0cea5b0ae724795dd62d"],["/assets/技能大赛之Ubuntu维护/1698852764405.png","45085b2f5e63a515257371d0971783e5"],["/assets/技能大赛之Ubuntu维护/1698852836682.png","c9cd8bd4b81f90dbaaef52e110b0b71f"],["/assets/技能大赛之Ubuntu维护/1698853016548.png","b64a79b81032be9f71267e50da2f0f87"],["/assets/技能大赛之Ubuntu维护/1698853060624.png","2664d52ba905fd0e94d0dc172f854009"],["/assets/技能大赛之Ubuntu维护/1698853106741.png","00c389b366240a7ba9af84e259ca1d45"],["/assets/技能大赛之Ubuntu维护/1698853202599.png","20cbd21ffa55d891322d17ed62aa07d2"],["/assets/技能大赛之Ubuntu维护/1698853451457.png","ff6871567aaf29bb2d8c8d923c54f43c"],["/assets/技能大赛之Ubuntu维护/1698853824171.png","9725a507ccddc461bfff162bb916c701"],["/assets/技能大赛之Ubuntu维护/1698884808296.png","e4589be7ca6f5c0f9adfe42aeac4343f"],["/assets/技能大赛之Ubuntu维护/1698884864394.png","581281300d8df5f9cd5c8e0b8a083403"],["/assets/技能大赛之Ubuntu维护/1698884920652.png","495db73218c845e903e998f57dba91c6"],["/assets/技能大赛之Ubuntu维护/1698885150920.png","6cc86773661c0582fbc21c8bc29c880d"],["/assets/技能大赛之Ubuntu维护/1698885224718.png","c8f129c3ea58f965c3e6e2e5b6781bfb"],["/assets/技能大赛之Ubuntu维护/1698885293763.png","fff89f8a366631133b2f4bb82110b7da"],["/assets/技能大赛之Ubuntu维护/1698885625168.png","381f9115a5c2de499e4f4cfedebf2284"],["/assets/技能大赛之Ubuntu维护/1698886136723.png","c48b0b16173091d00af694fd7f8913c3"],["/assets/技能大赛之Ubuntu维护/1698886175641.png","09b31abdcca35d6dc504fe9ce78be67c"],["/assets/技能大赛之Ubuntu维护/1698886297484.png","66ee6c35d9682cee8714881ced089549"],["/assets/技能大赛之Ubuntu维护/1698886334325.png","16637f00b956b708118fb6d842175367"],["/assets/技能大赛之Ubuntu维护/1698886374037.png","22b6c154d647507d6769e0b6e27811d5"],["/assets/技能大赛之Ubuntu维护/1698888006633.png","56a720fdf6e18fec986baf5cfa95bc31"],["/assets/技能大赛之Ubuntu维护/1698888087310.png","bd988ed10435e13a9884be7488d82bf9"],["/assets/技能大赛之Ubuntu维护/1698888389492.png","45291f92face763d7cf64ee9061a429a"],["/assets/技能大赛之Ubuntu维护/1700143228913.png","ad4bf9e74fef521068414009b6b1b69a"],["/assets/技能大赛之Ubuntu维护/1700144597727.png","760f81ad16e925686a3286b8ba44057a"],["/assets/技能大赛之Ubuntu维护/1700145383555.png","4c394d3309fab52be5e7816d3dfc2097"],["/assets/技能大赛之Ubuntu维护/1700145504953.png","8e3833a8b8448bfec75d670d3e45b219"],["/assets/技能大赛之Ubuntu维护/1701329835846.png","9e38f5769f21fe69d18fbfdcead7714b"],["/assets/技能大赛之Ubuntu维护/1701523808071.png","93b9e6d6b7a8d8477b76e9984dc6eda6"],["/assets/技能大赛之Ubuntu维护/1701524538009.png","b8533b98b99c5fd8a155c6d5b0e99f2e"],["/assets/技能大赛之Ubuntu维护/1705237206908.png","96d860320e51766e0d6f3c5357192c36"],["/assets/技能大赛之Ubuntu维护/1705237220199.png","86a6164a857d178fd0d25c37441b5a65"],["/assets/技能大赛之Ubuntu维护/1705237320499.png","1dadbf5b1a1401db7101b07c7f08383f"],["/assets/技能大赛之Ubuntu维护/1705415011698.png","36f24b6223e78c7d8a6a3b27c0560ec1"],["/assets/技能大赛之Ubuntu维护/1705415023009.png","1f38b1b4f70f32f42f7b4277eed817ee"],["/assets/技能大赛之Ubuntu维护/1705416981495.png","70f1b94b4e8e4144541df894a8fcd236"],["/assets/技能大赛之Ubuntu维护/1705474996383.png","aed19a4367a38d4a074547af8d3dae11"],["/assets/技能大赛之Ubuntu维护/1705475005240.png","002f363ab188c9c046c4d27317d83414"],["/assets/技能大赛之Ubuntu维护/1705765441912.png","a39605f13f85549e7e5078d77e3935ed"],["/assets/技能大赛之Ubuntu维护/1705765448044.png","2799777525d55e993bf80792040224b9"],["/assets/数据库常用命令/1693301573827.png","58979b7f4d5302853d0a26057a2660a6"],["/assets/数据库常用命令/1693311907411.png","af75159a515437cd6e6f707314f59b2e"],["/assets/数据库常用命令/1693311993666.png","149df6fccc2e89ef97a2ae37f0ea5444"],["/assets/数据库常用命令/1693314402433.png","267d9d34e3afe9e287c9073215bc5f95"],["/assets/数据库常用命令/1693314931707.png","e2a88cca6c22e07017c704e8f27e98f3"],["/assets/数据库常用命令/1693314952201.png","01b2973617008cde45e1c03d222a893d"],["/assets/数据库常用命令/1693315054667.png","7b6422de35902caa6d95ec6580a9227e"],["/assets/数据库常用命令/1693315128832.png","f600b34be2fd65b3e43fb1303f2f6608"],["/assets/数据库常用命令/1693315145115.png","c40863789496018c068d1b760fe88902"],["/assets/数据库常用命令/1693315209186.png","7c6321d8c79af912e1102d4081150983"],["/assets/数据库常用命令/1693315238981.png","951ec4188c83598ccf8cd10f1748a38a"],["/assets/数据库常用命令/1693315322414.png","f1c2aebf418bc0ce694161a9b16a6eeb"],["/assets/数据库常用命令/1693315552760.png","c73351732264b786448ce9f7c13feebd"],["/assets/数据库常用命令/1693317121082.png","966efb3d9e23492ce4077b69880463f3"],["/assets/数据库常用命令/1693317243938.png","b2aa8fa25beb588b49e71bca718a03f7"],["/assets/数据库常用命令/1693317695853.png","069f1ef5b7d67c98533b945ff44d2ba7"],["/assets/数据库常用命令/1693355675932.png","4c12f7d40ab5d16cb4ba171b3054a71d"],["/assets/数据库常用命令/1694239120400.png","dfb8cf67490642f2c52d8c8972dc406b"],["/assets/数据库常用命令/1694240340953.png","be732642d8ea10ccb2dc112c2c4c224e"],["/assets/数据库常用命令/1694240532823.png","f0fc1be62e982cd802126d642fb2bb23"],["/assets/数据库常用命令/1696756935287.png","47b4a4ad78aa77a64cf959383253cf4c"],["/assets/数据库常用命令/1701681099499.png","36069cc58e6eb53f7fe2e12824d87f14"],["/assets/数据库常用命令/1705417667865.png","a5e124e7cda89fc6d8979e1f377442a6"],["/assets/数据库常用命令/1705417785368.png","95dfc49d55d7dd04064b144d2c438f86"],["/assets/物联网比赛之Windows维护/1693279392763.png","5420651af69fe0c114195515a21ef923"],["/assets/物联网比赛之Windows维护/1693279711664.png","975690b287cef291b23c5565d95edfd3"],["/assets/物联网比赛之Windows维护/1693279722562.png","e92e6338dbed1e985dcbcdaa6e3b331c"],["/assets/物联网比赛之Windows维护/1693279825531.png","dcff603daf59c03ed6a9df2a6721b610"],["/assets/物联网比赛之Windows维护/1693279967063.png","bf69a1ee22150b1183b2494e5f6f9627"],["/assets/物联网比赛之Windows维护/1693281108935.png","76d879e93bd7b22039f705f1fd8d2c95"],["/assets/物联网比赛之Windows维护/1693281203914.png","18cfcbeeacc29222976ac3b3c5170096"],["/assets/物联网比赛之Windows维护/1693281331676.png","d9a91dfbd58f718f2c8b552f8d47fdf8"],["/assets/物联网比赛之Windows维护/1693281411142.png","626989b2e65b5e0bbb06e608c27b9fdd"],["/assets/物联网比赛之Windows维护/1693281443360.png","db473149954f98f445b023172e367cad"],["/assets/物联网比赛之Windows维护/1693281455441.png","369c18ba533b6f630db7313668b0d8ae"],["/assets/物联网比赛之Windows维护/1693281512027.png","d3b612f29b64440b7eef04dcb1ae9d5a"],["/assets/物联网比赛之Windows维护/1693281662496.png","c9de1f6d3fc0687ba24027d763fe668d"],["/assets/物联网比赛之Windows维护/1693281802478.png","3c3db70dcb75c21b291cf4a5a4a1f5f2"],["/assets/物联网比赛之Windows维护/1693282532248.png","ed0cbe28796c707024dca581ee6aee60"],["/assets/物联网比赛之Windows维护/1693282575271.png","41d104987658fc4d8eb0d1881ce1a118"],["/assets/物联网比赛之Windows维护/1693282697970.png","fbc1ceea1eb01baccf9ca8af6f3132b2"],["/assets/物联网比赛之Windows维护/1693282829345.png","9e81a0b9e210e5cdb845c50ce1cde2c8"],["/assets/物联网比赛之Windows维护/1693282908580.png","8ff81a112767cdf5e3ee0835435d3c40"],["/assets/物联网比赛之Windows维护/1693282978761.png","ebee2d5ab7b7ede0b098a60b2560d0b5"],["/assets/物联网比赛之Windows维护/1693283058738.png","97b43889d2a60d4b5d0c3b517c660864"],["/assets/电子工程师入门篇-入门基础/1707403891986.png","f86af30ab31401df1dd55382a61ae658"],["/assets/电子工程师入门篇-入门基础/1707404033488.png","da0399980ca3d06c88f97cfd24b8a10b"],["/assets/电子工程师入门篇-入门基础/1707404090124.png","5df5348c37e37ad9b57d0e7e89e6a5ab"],["/assets/电子工程师入门篇-入门基础/1707404106625.png","0e344b905adda4098fbea8e51ae3464a"],["/assets/电子工程师入门篇-入门基础/1707404233131.png","f1d342163f36da1c5cbd17074353c419"],["/assets/电子工程师入门篇-入门基础/1707404376520.png","619986ece8e47fde8035ca31be670ceb"],["/assets/电子工程师入门篇-入门基础/1707404504012.png","b2cebacf41fcedf4fa85b54ced497754"],["/assets/电子工程师入门篇-入门基础/1707404560995.png","054bbba91498271757a341633f70229f"],["/assets/电子工程师入门篇-入门基础/1707404684171.png","80a667fb75ea7d2bfa7362a16ab4c57b"],["/assets/电子工程师入门篇-入门基础/1707404752953.png","b3063db66a43ed4f828f5cc187273506"],["/assets/电子工程师入门篇-入门基础/1707404766965.png","deb3e202751fc30c8fb6ca5a49a6224f"],["/assets/电子工程师入门篇-入门基础/1707404773605.png","84a659e0d4b9d874ec5662df8a779ebd"],["/assets/电子工程师入门篇-入门基础/1707404801341.png","7981581d14dc993979e4108d467e92f7"],["/assets/电子工程师入门篇-入门基础/1707404824314.png","d537ee528f0f998d27c3c4f6559f2527"],["/assets/电子工程师入门篇-入门基础/1707404874218.png","f03f5ff7710de5239e034eefd18152cb"],["/assets/电子工程师入门篇-入门基础/1707404927903.png","6f7539d8b2f1a788c0af3e43443cd770"],["/assets/电子工程师入门篇-入门基础/1707405005870.png","e961784f569d7766feed57369fe3811d"],["/assets/电子工程师入门篇-入门基础/1707406123556.png","50f94d0dbe79339ba89b1146d78521bb"],["/assets/电子工程师入门篇-入门基础/1707406160307.png","234e2b79c5b09945e5f309dc26a84e20"],["/assets/电子工程师入门篇-入门基础/1707406191267.png","ce8507bcf197e8122114bda28fbfa525"],["/assets/电子工程师入门篇-入门基础/1707406215283.png","0b1f0d0bc7765b8729583f1923bd3393"],["/assets/电子工程师入门篇-入门基础/1707406263380.png","8a956b705e97758268a9c6b020782a6d"],["/assets/电子工程师入门篇-入门基础/1707406384977.png","1ba31eddfa497d727f465d2e45111f6c"],["/assets/电子工程师入门篇-入门基础/1707406435105.png","b90fe328fcb08373e34d05958fbbbdac"],["/assets/电子工程师入门篇-入门基础/1707406464006.png","9e63f845375935beefe68cabf5011801"],["/assets/电子工程师入门篇-入门基础/1707406487924.png","b0c8cf40cfb98e32807faa4c76ec238c"],["/assets/电路基础/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287081708.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/电路基础/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/电路基础/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/电路基础/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/电路基础/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/电路基础/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/电路基础/1694242488250.png","112f9f33edc1c306c26623a70dbc0e0b"],["/assets/电路基础/1694242554424.png","81ff520ba30c49049e31218e3a18b1c8"],["/assets/电路基础/1694242617918.png","6e43b0cef3b1442f721850dc9e2378b9"],["/assets/电路基础/1694242654855.png","f24221678bb75a3ddff279ba41e080e7"],["/assets/电路基础/1694242683878.png","886038ef5df7399b27ebc94d3b937c28"],["/assets/电路基础/1694242819757.png","a1f266a51f16e1c1cd5499e2246b1a7e"],["/assets/电路基础/1694242852600.png","518a21f963733e45cda5c903807e0ad5"],["/assets/电路基础/1694242876285.png","975fe4e143a035aed7e4b578c6166bbf"],["/assets/电路基础/1694242905012.png","2ac838416f64020cd96d1c379a9b84e5"],["/assets/电路基础/1694242939314.png","691e36fe0f06f51243a0dd72d8eae659"],["/assets/电路基础/1694242973674.png","b3f4e257dcf4a890f680c02a1d593632"],["/assets/电路基础/1694242986138.png","e75cdf10ef2bab247d151c2dfb777416"],["/assets/电路基础/1694243025513.png","0b4fcc90a43705b2a080d593083fbfae"],["/assets/第一章-C数据类型及语句02/1691332523358.png","1dc765634c06f8fc3877de4100acc4f4"],["/assets/第一章-C数据类型及语句02/1691333205109.png","e9afc9ea502d9dc28c01df2049c6b8f5"],["/assets/第一章-初识STM32/1692284102687.png","ef03e09bd37e50efc2a1197357130957"],["/assets/第一章-初识STM32/1692284365745.png","c0ed7824603694893bd04d8c6b506fb7"],["/assets/第一章-初识STM32/1692286715541.png","adcc1002760cffeb4e150ce9166e7a51"],["/assets/第一章-初识STM32/1692287169333.png","93c0ff878b4644651150ee50fb7521f0"],["/assets/第一章-初识STM32/1692287359301.png","0632b9de3dd1e55c4892626f2b48f63a"],["/assets/第一章-初识STM32/1692287500692.png","d20457d4a5fe43228358a6a7010cde4f"],["/assets/第一章-初识STM32/1692287707507.png","8031e5cbf03bb37733a7d2e32ad466b8"],["/assets/第一章-初识STM32/1692288238634.png","610246624fc301e11a0b5d636f47bbac"],["/assets/第一章-电路模型和电路定律/1694263535061.png","433c7c7c3ffc48c2132f5ea2619234fa"],["/assets/第一章-电路模型和电路定律/1694263845243.png","6dc6ddbbe6b91c9d8ac4a874178ac7cf"],["/assets/第一章-电路模型和电路定律/1694263950246.png","10d8a12de1a5ec4afed94353f2c1cf8e"],["/assets/第一章-电路模型和电路定律/1694263974908.png","d0c973614a9974a3f681bc5a83006846"],["/assets/第一章-电路模型和电路定律/1694265050074.png","dcb679e7e3d19b608393e2437569cc75"],["/assets/第一章-电路模型和电路定律/1694265100359.png","c1e4386e9b8376850eb3f212d6f64f79"],["/assets/第一章-电路模型和电路定律/1694265136194.png","4cb241d332b13e878039b0d9379dddc4"],["/assets/第一章-电路模型和电路定律/1694265155728.png","1afeb5243baf0f8b52ad42b723a85f3a"],["/assets/第一章-电路模型和电路定律/1694265184041.png","c5542465a4ec4c86792e480a1562d0b3"],["/assets/第一章-电路模型和电路定律/1694265255827.png","136fec7274aeccb50330d47ff9862542"],["/assets/第一章-电路模型和电路定律/1694265274036.png","1b878aaf184c9e7642831e526945f6ab"],["/assets/第一章-电路模型和电路定律/1694265285159.png","1ecef3ba5de74294beddb5fc43ad680e"],["/assets/第一章-电路模型和电路定律/1694265305717.png","8b3a42dccea2264696e3927ca44a92de"],["/assets/第一章-电路模型和电路定律/1694265329854.png","34b71860d6dcea358f5104622fe2f970"],["/assets/第三章-函数/1691654665160.png","2aeb4e341ea7a86d822485de6e9935a7"],["/assets/第三章-函数/1691658173310.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658185939.png","1483dc4fefea73b02921511b28a2854c"],["/assets/第三章-函数/1691658329025.png","6d4c63195c23255e2f1e759ed462e037"],["/assets/第三章-函数/1691658406783.png","9a21ee8a33ae531392d28259a201df31"],["/assets/第三章-函数/1691658579818.png","26d2deede98d879bf895cb45f9874b14"],["/assets/第三章-函数/1691658688779.png","5591e4c32b51ffe25e941771d4193636"],["/assets/第三章-寄存器点亮LED/1693727391280.png","b05b13b39b97b7fc1a10990452cb02ea"],["/assets/第二章-寄存器/1692290301872.png","cd213e241e0622f16f1d9193bcd789d6"],["/assets/第二章-寄存器/1692290420600.png","9011dcef6abc59ec6f8f6639188a9b8d"],["/assets/第二章-数组/1691335523766.png","0226acbca650d87a9882890ce2ac764b"],["/assets/第五章-初始HAL库/1707232401368.png","f5696accccc84d81de88143c57532300"],["/assets/第五章-初始HAL库/1707232814478.png","de782848903a3e0cdf45a447301c4136"],["/assets/第五章-初始HAL库/1707233331041.png","07e6b1dab07c15439454d15a60bd5706"],["/assets/第五章-指针/1692111175278.png","399dfac409392a6df10d7cf6d11a95b2"],["/assets/第五章-指针/1692111376174.png","e80883c9415bef338ef58ef63f5a0225"],["/assets/第五章-指针/1692111480916.png","ebb194a9f40711100ad7d908af2fa2e8"],["/assets/第五章-指针/1692112482696.png","453548b1477bd3abf53238b1fc541fe4"],["/assets/第五章-指针/1692113002001.png","8c4def92d939756d43747534ced679fb"],["/assets/第五章-指针/1692113028355.png","896a5c0e320339fc3a672fe0eb570fbf"],["/assets/第五章-指针/1692113975759.png","0214c0315eed32de2ef3c9bb888a9ce8"],["/assets/第四章-自己创建函数库/1706848296026.png","2f9c3f14a01aea4844d91b3afb9b0427"],["/assets/第四章-自己创建函数库/1706889171120.png","7c0c50cdfbf44447b94f3347f643d6ab"],["/assets/第四章-自己创建函数库/1707148103038.png","d368af7f500e0291fbfa8a99e90471c6"],["/assets/第四章-自己创建函数库/1707231761899.png","f5696accccc84d81de88143c57532300"],["/categories/Mysql/index.html","0ffbc99f29b4628f228159d72cd91be7"],["/categories/RTOS/index.html","ee523fc88c2675a4c6d2f0a12e290a41"],["/categories/SF32/index.html","37f78de9cbdba5bd32fff62608a4f7a8"],["/categories/index.html","6a8917fbb08dd4fd81a1389824125bad"],["/categories/前端/index.html","5a5e171b4673c868585fe14a228bc848"],["/categories/千锋C语言/index.html","a42be5a72dff5e50c3e7f1ee72eb13f1"],["/categories/华为IOT平台连接/index.html","7f6856ea1585e35edffb827cc625e368"],["/categories/华为云IOT连接/index.html","08a446806e6a716a8881ff4fa93c0022"],["/categories/嵌入式/index.html","621ab7e7a5e4107f183705de9a3e476c"],["/categories/嵌入式设计/index.html","24b38e41cff035152d80d4299aebca65"],["/categories/技能大赛/index.html","6263ad74b44469b67d18e19840357479"],["/categories/报错/index.html","93fa9009dbf5667ac46f1e801e5e57cd"],["/categories/数据结构/index.html","687c0523dd1f6022de12cc77a4404ee4"],["/categories/求职/index.html","a13ff0d94d3d91f624d2817fa658bc80"],["/categories/电子技术/index.html","320c700f43e08d2d3b4d6c9968a5cd77"],["/categories/电路原理、电工学/index.html","372122bed8f986e8832af49eb10b3b31"],["/categories/罗教授电路/index.html","de05d679ee6c6c9f994972344caf57cb"],["/categories/野火-STM32/index.html","b56dcf1f547d53f0415ad3dbf9065a76"],["/categories/野火STM32/index.html","cf78e2bd825a70ec65d2cb5e024eab7f"],["/categories/阅读/index.html","e3ad8e366ef07197532b09499fcbd070"],["/categories/面试/index.html","2262d9a11fc1ed808b737d43a8cb3e28"],["/categories/项目/index.html","341f7c7e3adec9dc79860e10182f4af6"],["/categories/鸿蒙开发/index.html","19a942216e7fc49c60f54a698526ca89"],["/changsha/index.html","3ff19dd1937c7031031cdea90bd487f4"],["/css/index.css","d615359d9816f6c1d4aea9fdd0eeb1f9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","19c6c0c42805d6b7d967e7fdfa2754a6"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/bg.jpg","21de1be0d5594c58354582cb0d7e334c"],["/img/book-open.png","f85941f030da74cbb5dd544ad392ff8f"],["/img/book.png","53a3e40e85caf4f1e6cc031772df6735"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/lxh.jpg","03cafb475c4dfc507e24bb593249d1b9"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/touxiang.jpg","5b4decade88a03fb315c9c0621843a6b"],["/index.html","9a1b97e6dd3679eb6cb91e6dba15f9f3"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","ff1698bf9acd5e31d3ec6daaab816ee0"],["/link/index.html","dbdf1958978c1f78e4c927fed9b32a4f"],["/nanjing/index.html","ceede4a0421d9dcd7ae43623dee594e3"],["/page/2/index.html","1da3237e4560c727b2dee7d5ea57b681"],["/page/3/index.html","7d6ea186b5a68fe1ef6d657a328a6241"],["/page/4/index.html","0ee9c3d2b06dd7154f8f76e5d1d11707"],["/page/5/index.html","22d74a8771e0747dc4ae5626bf531ab7"],["/page/6/index.html","559303ad46e77146cd6424a226500ceb"],["/page/7/index.html","de17f8f4dd8d99f8bb8df91caa580537"],["/sw-register.js","e6ae57b013ada3c7d3672069f87091dd"],["/tags/APP开发/index.html","3323140c53fa5820f58a051bba2caf25"],["/tags/CSS/index.html","bd2abe958293957780c13896318ca721"],["/tags/HTML/index.html","1623afc30b9549279cf290cd5b7cf0bf"],["/tags/HarmonyOS/index.html","b89cb0ba77801a7535b34e103d054437"],["/tags/RTOS/index.html","5e2829e1117bffda0eab6050ffca1f24"],["/tags/SF32/index.html","a81f6fa0dc815f65ad50d803dbe18e1d"],["/tags/STM32/index.html","001fb5f4fead26de137025558a7fd291"],["/tags/Ubuntu维护/index.html","853b0c69f0bfb20ae623797edcdf6e86"],["/tags/index.html","23cc459c8fcc2c156f27f47694a583e0"],["/tags/windows维护/index.html","90933df4037d712cbbd7440ea36a3b54"],["/tags/八股文/index.html","9c57e71adc64f1b94b04707004563fe2"],["/tags/华为IOT/index.html","dcd33fbea39dd9783a6c077102c280ba"],["/tags/华为云IOT/index.html","fb819a146cb971ec4f80247ae9da2561"],["/tags/嵌入式/index.html","15acec365cf815d06568e44dc9d62ca6"],["/tags/嵌入式C/index.html","0c20bfc9f07704b7e30c2156a13864e9"],["/tags/思澈/index.html","a0e01b0192222abcfb838f0f123a2266"],["/tags/数据库/index.html","4c0aebd9eac06735c9172b43db1cd21f"],["/tags/样题/index.html","a81b4440a161ffbe965631ca781a9719"],["/tags/电子技术/index.html","b99bf2d98026e9a523fde57d754a213e"],["/tags/电路和电路模型/index.html","bd25d7e3225c2f16bdb772801b5110fd"],["/tags/电路基础/index.html","89052e397c936b8193de2b1c83649326"],["/tags/算法/index.html","5091fcc1107f0005c4907c8bb6c59558"],["/tags/软考/index.html","ba36965de2bf3126e4786cbe8beadc6a"],["/tags/面试/index.html","ae1efc18df80e495d84398e1e37ebb4e"],["/tags/黄山派/index.html","cc36ecf30e987ec0cf7c9776017fad58"],["/wordScenery/index.html","fd2c0601724c771ac1ab09e5b0a27fe0"],["/测试.html","723d24a6b014310b4f384c5a4e165e0d"]];
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
