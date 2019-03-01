// 云函数入口文件
const cloud = require('wx-server-sdk')
var axios = require('axios')
cloud.init()
// 获取环境变量
const key = process.env.KEY;
let url = process.env.URL;


// 云函数入口函数
exports.main = async (event, context) => {
  // 拼接URL
  url = url + event.id + "/";
  return await new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        'key': key,
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