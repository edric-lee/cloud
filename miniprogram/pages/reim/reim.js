// pages/reim/reim.js
const db = wx.cloud.database()
const reim = db.collection('reim')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    reim.get({
      success: res => {
        console.log(res.data[0])
        var listData = res.data
        this.setData({
          listData: listData
        })
        console.log(this.data.listData)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  showModal(e) {
    console.log(e.currentTarget.dataset.target)
    this.setData({
      url: e.currentTarget.dataset.target,
      showModal: true,
      flag: false 
    })
  },

  hideModal(e) {
    this.setData({
      showModal: false,
       flag: true 
    })
  }
})