// miniprogram/pages/index/index.js
const { $Message } = require('../../dist/base/index');


Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 导航
    current: 'homepage',
    // 滑块设置
    visible2: false,
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    toggle2: false,
    actions2: [
      {
        name: '删除',
        color: '#ed3f14'
      }
    ],
    actions: [
      {
        name: '喜欢',
        color: '#fff',
        fontsize: '20',
        width: 100,
        icon: 'like',
        background: '#ed3f14'
      },
      {
        name: '返回',
        width: 100,
        color: '#80848f',
        fontsize: '20',
        icon: 'undo'
      }
    ],
    // 页面数据
    blogData1: {
      title: "工作调度 工作管理 linux 特殊的文件",
      excerpt: "例行工作网络文件分析，查询，登录日志分析，等都属于工作调度",
      image: "https://images.unsplash.com/photo-1550460238-e622bad1421a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      id: "5c6c1b80709c3e0001b09556"
    },
    blogData2: {
      title: "工作调度 工作管理 linux 特殊的文件",
      excerpt: "例行工作网络文件分析，查询，登录日志分析，等都属于工作调度",
      image: "https://images.unsplash.com/photo-1550460238-e622bad1421a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      id: "5c6c1b80709c3e0001b09556"
    },
    blogData3: {
      title: "工作调度 工作管理 linux 特殊的文件",
      excerpt: "例行工作网络文件分析，查询，登录日志分析，等都属于工作调度",
      image: "https://images.unsplash.com/photo-1550460238-e622bad1421a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      id: "5c6c1b80709c3e0001b09556"
    },
    blogData4: {
      title: "工作调度 工作管理 linux 特殊的文件",
      excerpt: "例行工作网络文件分析，查询，登录日志分析，等都属于工作调度",
      image: "https://images.unsplash.com/photo-1550460238-e622bad1421a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      id: "5c6c1b80709c3e0001b09556"
    },
    blogData5: {
      title: "工作调度 工作管理 linux 特殊的文件",
      excerpt: "例行工作网络文件分析，查询，登录日志分析，等都属于工作调度",
      image: "https://images.unsplash.com/photo-1550460238-e622bad1421a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      id: "5c6c1b80709c3e0001b09556"
    }
  },
  // 滑块
  handleCancel2() {
    this.setData({
      visible2: false,
      toggle: this.data.toggle ? false : true
    });
    console.log(this.data.toggle, 111111111)
  },
  handleClickItem2() {
    const action = [...this.data.actions2];
    action[0].loading = true;

    this.setData({
      actions2: action
    });

    setTimeout(() => {
      action[0].loading = false;
      this.setData({
        visible2: false,
        actions2: action,
        toggle: this.data.toggle ? false : true
      });

    }, 2000);
  },
  handlerCloseButton() {
    this.setData({
      toggle2: this.data.toggle2 ? false : true
    });
  },
  actionsTap() {
    this.setData({
      visible2: true
    });
  },
  // 导航栏数据更改
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数获取数据
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getContentBlog',
      // 传给云函数的参数
      data: {
        "page": 1,
      },
    })
      .then(res => {
        console.log(res.result);
      })
      .catch(console.error)
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



