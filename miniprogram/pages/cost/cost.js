// pages/cost/cost.js
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

  },
  costClass: function () {
    wx.navigateTo({
      url: '../costClass/costClass'
    })
  },
  payClass: function () {
    wx.navigateTo({
      url: '../payClass/payClass'
    })
  },
  reimbursement: function () {
    wx.navigateTo({
      url: '../reimbursement/reimbursement'
    })
  },
})