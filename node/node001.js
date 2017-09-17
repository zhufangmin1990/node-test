'use strict';
// nodejs 内置模块
const http= require("http");

const fs = require("fs");
//   异步读取数据
// fs.readFile("./assets/sample.txt","utf-8",function(err,data){
// 	if(err){
// 		console.log("err");
// 	}else{
// 		console.log(data);
// 	}

// });

//	 同步读取数据
try{
	var data = fs.readFileSync("./assets/sample.txd","utf-8");

	console.log(data);
}catch(err){
	console.log(err);
}

console.log('readfile is an async function for reading files !');
