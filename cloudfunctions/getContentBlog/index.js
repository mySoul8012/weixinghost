// 云函数入口文件
const cloud = require('wx-server-sdk')
var axios = require('axios')
cloud.init()

// 获取环境变量
const key = process.env.KEY;
const url = process.env.URL;
const limit = process.env.LIMIT;


// 云函数入口函数
exports.main = async (event, context) => {
  return await new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        'key': key,
        'limit': limit,
        'page': event.page
      }
    })
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      reject(error);
    });
  })
}