var posts=["2024/01/17/24年技能大赛广东样题/","2023/10/24/CSS第一天/","2023/10/24/CSS第二天/","2024/09/26/Dx-C511模块连接华为云下载固件/","2023/10/11/HTML第一天/","2023/10/13/HTML第三天/","2023/10/12/HTML第二天/","2023/11/27/SCREEPS/","2024/04/02/eps32连接华为云iot，并且实现arkts控制点灯/","2024/03/09/一、HarmonyOS4开发/","2024/03/30/一篇牢骚/","2024/04/20/关于使用wsl使用idf提供编译速度遇到的问题/","2024/09/04/关于在物联网竞赛中的一些感想/","2024/02/17/大学生活/","2024/03/09/利用MQTT连接华为IOT平台，进行数据上报与下发/","2023/10/30/技能大赛之Ubuntu维护/","2023/08/29/数据库常用命令/","2023/08/29/物联网比赛之Windows维护/","2024/02/08/电子工程师入门篇-入门基础/","2023/08/10/电路基础/","2024/02/18/疑难杂症/","2024/02/28/第一章 数据结构绪论/","2024/02/26/第一章 计算机系统基础知识/","2023/08/06/第一章-C数据类型及语句01/","2023/08/06/第一章-C数据类型及语句02/","2023/08/29/第一章-了解数据库/","2023/08/17/第一章-初识STM32/","2023/09/09/第一章-电路模型和电路定律/","2024/03/03/第七章 启动文件详解/","2023/08/10/第三章-函数/","2023/09/01/第三章-寄存器点亮LED/","2024/05/09/第九章 STM32中断应用/","2024/02/29/第二章 算法/","2023/08/17/第二章-寄存器/","2023/08/06/第二章-数组/","2024/02/06/第五章-初始HAL库/","2023/08/14/第五章-指针/","2024/02/02/第四章-自己创建函数库/","2023/08/14/第四章-预处理/","2024/02/18/项目测试/","2024/03/21/第八章 RCC使用HES/HSI/","2024/05/09/第十章 EXTI-外部中断/事件控制器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };