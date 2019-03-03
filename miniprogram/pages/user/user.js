// miniprogram/pages/user/user.js
const { $Message } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'mine',
    userName: "",
    avatar: "",
    visible5: true,
    actions5: [
      {
        name: '取消'
      },
      {
        name: '登录',
        color: '#ed3f14',
        loading: false
      }
    ]

  },
  handleOpen5() {
    this.setData({
      visible5: true
    });
  },

  handleClick5({ detail }) {
    if (detail.index === 0) {
      this.setData({
        visible5: false
      });
    } else {
      const action = [...this.data.actions5];
      action[1].loading = true;

      this.setData({
        actions5: action
      });
      wx.login({
        success(res) {
          console.log(res)
        }
      })
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success(res) {
                console.log(res.userInfo);
              }
            })
          }
        }
      })
        action[1].loading = false;
        this.setData({
          visible5: false,
          actions5: action
        })
    }
  },
  hiddenMessage(){
    action[1].loading = false;
    this.setData({
      visible5: false,
      actions5: action
    });
  },
  handleChange({ detail }) {
    if (detail.key === "homepage") {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    }
    if (detail.key === "interactive") {
      wx.navigateTo({
        url: '/pages/interactive/interactive'
      })
    }
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})