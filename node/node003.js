"use strict";
 
 const fs = require("fs");

//  获取文件的状态

 fs.stat('./assets/output.txt',function(err,stat){
 	if(err){
 		console.log(err);
 	}else{
 		console.log("is a file:"	+	stat.isFile());
 		console.log("is an directory:"	+	stat.isDirectory());
 		if(stat.isFile()){
 			console.log("size:"+stat.size);	// 文件大小
 			console.log("birth tile:"+stat.birthtime); // 创建时间
 			console.log("modified time:"+stat.mtime); //修改时间
 		}
  	}
 });