// 云函数入口文件
const cloud = require('wx-server-sdk')
// 请求模块
const request = require("request")
var axios = require('axios')

cloud.init()

// 云函数入口函数
exports.main = async (page) => {
  request('https://www.fundebug.com', function (error, response, body) { 
      return body;	
  });
}