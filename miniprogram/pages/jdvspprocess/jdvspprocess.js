// pages/jdvspprocess/jdvspprocess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      modalName:"Modal",
    })
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.setData({
          winH:res.windowHeight
        })

        
      }, fail(err) {
        console.log(err);
      }
    })
  },
  reim:function(){
    wx.navigateTo({
      url: '../jdreimprocess/jdreimprocess'
    })
  },
  pay:function(){
    wx.navigateTo({
      url: '../jdpayprocess/jdpayprocess'
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null,

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