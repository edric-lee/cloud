// pages/costClass/costClass.js
const db = wx.cloud.database()
const payClass = db.collection('payClass')
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
    payClass.get({
      success: res => {
        console.log(res.data[0].list)
        var listData = res.data[0].list
        this.setData({
          listData: listData
        })
        console.log(this.data.listData)
      }
    })
  },


})