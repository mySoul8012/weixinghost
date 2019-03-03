// miniprogram/pages/interactive/interactive.js
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: [
      {
        value1: "",
        value2: "",
        value3: "",
      }
    ],
    current: 'interactive',
    height: 20,
    focus: false
  },
  // handleClick
  handleClick(event){
    const db = wx.cloud.database()
    const todosCollection = db.collection('interactive')
    console.log(this.data)
    db.collection('interactive').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        "value1": this.data.value[0].value1,
        "value2": this.data.value[0].value2,
        "value3": this.data.value[0].value3
      }
    })
      .then(res => {
        console.log(res);
        this.handleSuccess()

      })
      .catch(console.error)

  },
  handleSuccess() {
    $Toast({
      content: '提交成功',
      type: 'success'
    });
  },
  // auto
  auto(event){
    console.log(event.detail.detail.value);
    console.log(this.data.value[0].value1)
    //  console.log(this.data);
    this.setData({
      "value[0].value1": event.detail.detail.value
    })
    console.log(this.data);
  },
  // email
  email(event){
    console.log(event.detail.detail.value);
    console.log(this.data.value[0].value2)
    //  console.log(this.data);
    this.setData({
      "value[0].value2": event.detail.detail.value
    })
    console.log(this.data);
  },
  // textarea
  textarea(event){
    console.log(event.detail.detail.value);
    console.log(this.data.value[0].value3)
  //  console.log(this.data);
    this.setData({
      "value[0].value3": event.detail.detail.value
    })
    console.log(this.data);
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit(e) {
    console.log(e.detail.value.textarea)
  },
  handleChange({ detail }) {
    console.log(detail);
    if (detail.key === "homepage"){
      wx.navigateTo({
        url: '/pages/index/index'
      })
    }
    if (detail.key === "mine") {
      wx.navigateTo({
        url: '/pages/user/user'
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