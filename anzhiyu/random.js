var posts=["2024/01/17/24年技能大赛广东样题/","2023/10/24/CSS第一天/","2023/10/24/CSS第二天/","2023/10/11/HTML第一天/","2023/10/13/HTML第三天/","2023/10/12/HTML第二天/","2023/11/27/SCREEPS/","2024/02/19/f/","2024/02/17/大学生活/","2023/10/30/技能大赛之Ubuntu维护/","2023/08/29/数据库常用命令/","2024/02/18/测试/","2023/08/29/物联网比赛之Windows维护/","2024/02/08/电子工程师入门篇-入门基础/","2023/08/10/电路基础/","2024/02/18/疑难杂症/","2023/08/06/第一章-C数据类型及语句01/","2023/08/06/第一章-C数据类型及语句02/","2023/08/29/第一章-了解数据库/","2023/08/17/第一章-初识STM32/","2023/09/09/第一章-电路模型和电路定律/","2023/08/10/第三章-函数/","2023/09/01/第三章-寄存器点亮LED/","2023/08/17/第二章-寄存器/","2023/08/06/第二章-数组/","2024/02/06/第五章-初始HAL库/","2023/08/14/第五章-指针/","2024/02/02/第四章-自己创建函数库/","2023/08/14/第四章-预处理/","2024/02/18/项目测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };