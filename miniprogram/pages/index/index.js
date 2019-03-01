// miniprogram/pages/index/index.js
const { $Message } = require('../../dist/base/index');


Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 加载css
    loading: true,
    // 页数
    page: 1,
    // 加载中
    spinShow: true,
    switch: false,
    // 导航
    current: 'homepage',
    // 滑块设置
    visible2: false,
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    toggle2: false,
    blogDataList: [],
    blogDataListActions: [],
    actions: [
      {
        name: '喜欢',
        color: '#fff',
        fontsize: '20',
        width: 100,
        icon: 'like',
        background: '#2d8cf0'
      },
      {
        name: '返回',
        width: 100,
        color: '#80848f',
        fontsize: '20',
        icon: 'undo'
      }
    ]
  },
  // 加载中
  onSwitchChange() {
    this.setData({
      spinShow: false
    });
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

    console.log("3333");
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
  // 单击滑块按钮,喜欢和返回按钮
  handlerCloseButton(event) {
    console.log(event);
    if (!event.detail.index){
      // 获取到id
      const id = event.currentTarget.id;
      // 获取路径
      const actionName = "blogDataList.posts[" + id + "].actions[0].name";
      const actionColor = "blogDataList.posts[" + id + "].actions[0].color"
      // 更改
      this.setData({
        [actionName]: this.data.blogDataList.posts[id].actions[0].name === "喜欢" ? "已喜欢" : "喜欢",
        [actionColor]: this.data.blogDataList.posts[id].actions[0].color === "#fff" ? "#efbdae" : "#fff"
      })
    }
    /*
    // 获取单击id
    const targetId = event.target.id;
    // 获取需要修改的data
    const actionName = "blogDataListActions[" + targetId  + "][0].name" ;
    const actionColor = "blogDataListActions[" + targetId + "][0].color"
    this.setData({
      [actionName]: this.data.blogDataListActions[targetId][0].name === "喜欢" ? "已喜欢": "喜欢",
      [actionColor]: this.data.blogDataListActions[targetId][0].color === "#fff" ? "#efbdae" : "#fff"
    })
    */
   // console.log(this.data);
    /*
    // 获取到id
    const targetId = event.target.id;
    // 获取到需要修改的data
    const actionName = targetId + ".actions[0].name";
    const actionColor = targetId + ".actions[0].color";    // 获取单击的块
    const index = !event.detail.index;
    console.log(index);
    // 获取需要更新的数据
    if(index){
      this.setData({
        [actionName]: this.data[targetId].actions[0].name === "喜欢"? "已喜欢": "喜欢",
        [actionColor]: this.data[targetId].actions[0].color === "#fff" ? "#efbdae" : "#fff",
      });
    }
    */
    this.setData({
      toggle2: this.data.toggle2 ? false : true
    })
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
  // 单击滑块事件
  sliderEvent(event){
    console.log(event);
    // 获取到id
    const id = this.data.blogDataList.posts[event.target.id].id;
    // 新页面入栈
    wx.navigateTo({
      url: '/pages/content/content?id=' + id
    })
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
        this.setData({
          blogDataList: res.result
        })
        // 动态添加属性
        for(let i = 0; i < 5; i++){
          let actionsPath = "blogDataList.posts[" + i + "].actions";
          this.setData({
            [actionsPath] : this.data.actions
          })
        }
        console.log(this.data);
        /*
        let blogDataListActions = [];
        for(let i = 0; i < 5; i++){
          blogDataListActions[i] = this.data.actions;
          //this.data.blogDataList.posts[i].actions = [];
        }
        this.setData({
          ["blogDataListActions"]: blogDataListActions,
          "blogDataList.posts[1].actions": blogDataListActions
        })
        
        console.log(this.data.blogDataList)
        for(let i = 1; i < 6; i++){
          let title = "blogData" + i + ".title";
          let excerpt = "blogData" + i  + ".excerpt";
          this.setData({
            [title]: res.result.posts[i - 1].title,
            [excerpt]: res.result.posts[i - 1].excerpt,
          })
        }
        */
      })
      .catch(console.error);
      console.log(this.data);
    //this.onSwitchChange()
  },  

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      this.onSwitchChange()
    }, 1500)
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
    wx.cloud.callFunction({
      name: 'getContentBlog',
      data: {
        page: this.data.page + 1,
      }
    }).then(res => {
      console.log(res.result.posts);
      // 动态添加属性
      for(let i = 0; i < 5; i++){
        res.result.posts[i].actions =  this.data.actions;
      }
      // 当前page
      let page = this.data.page + 1;
      this.setData({
        page: page,
      })
      // 获取当前data
      let blogDataListPosts = [];
      blogDataListPosts = this.data.blogDataList.posts;
      console.log(blogDataListPosts)
      // 数组相加
      console.log(res.result.posts);
      blogDataListPosts = blogDataListPosts.concat(res.result.posts);
      console.log(blogDataListPosts);
      this.setData({
        "blogDataList.posts": blogDataListPosts,
        "blogDataList.meta": res.result.meta
      })
      console.log(this.data);
      // 判断是否到页底
      if (this.data.page == this.data.blogDataList.meta.pagination.pages){
        this.setData({
          loading: !this.data.loading
        })
        console.log(23333333);
        console.log(this.data);
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})



