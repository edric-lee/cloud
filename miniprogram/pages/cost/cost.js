const db = wx.cloud.database()
const cost = db.collection('cost')
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  btn: function (e) {
    var num=e.currentTarget.dataset.id;
    wx.setStorageSync('num', num);
    var url=e.currentTarget.id;
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function (options) {
    cost.get({
      success: res => {
        console.log(res.data[0].cost)
        var listData = res.data[0].cost
        this.setData({
          listData: listData
        })
         console.log(this.data.list)
      }
    })
  }
})