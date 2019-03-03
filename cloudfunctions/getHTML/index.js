// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 解析函数
const weRich = require('we-rich');

// 云函数入口函数
exports.main = async (event, context) => {
  return weRich.parse(event.html)
}