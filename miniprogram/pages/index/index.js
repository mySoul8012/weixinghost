// miniprogram/pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 导航
    current: 'homepage',
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
    /*
      // 发送请求
      wx.request({
        url: "http://www.iming.info/ghost/api/v2/content/posts/",
        data: {
          key: '58fa474ea1d5841bcb00f666a0',
          limit: '5',
          page: 1
        },
        method: "GET",
        dataType: "json",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
        }
      })
    */
    wx.cloud.callFunction({
      // 需调用的云函数名
      name: 'getBlogContent',
      // 传给云函数的参数
      data: {
        page: 3
      },
      // 成功回调
      complete: console.log
    })
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



