// miniprogram/pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    html: "",
    feature_image: "",
    created_at: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getContentText',
      data: {
        id: options.id
      }
    }).then( res => {
      console.log(res);
      this.setData({
        title: res.result.posts[0].title,
        html: res.result.posts[0].html,
        feature_image: res.result.posts[0].feature_image,
        created_at: res.result.posts[0].created_at
      })
     } 
    )
    console.log(options)
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