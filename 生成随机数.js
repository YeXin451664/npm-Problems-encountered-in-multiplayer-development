(function(){
    // 引入外部工具包的模块对象
    const lodash = require("lodash")
    console.log(lodash.random(1,10));

    console.log("输出一下我们的多人开发遇到的问题!")
    // 在多人协作开发的时候,一定要注意的一点就是千万不要将npm下载安装的包的node_modules文件夹存入git版本库的仓库区中,更不可以将这个文件夹提交到远程中心仓库中.
    // 配置git的忽略文件提交
    








})()