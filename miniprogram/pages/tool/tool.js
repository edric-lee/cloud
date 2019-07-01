const db = wx.cloud.database()
const role = db.collection('role')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOrHidden: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    role.get({
      success: res => {
        var financial = res.data[0].financial
        if (financial.indexOf(wx.getStorageSync('openid')) == -1){
          console.log("财务权限")
          this.setData({
            showOrHidden: false,
          })
        }
        this.setData({
          financial: financial
        })

        console.log(this.data.financial)
      }
    })
  },
  scanInvoice: function () {
    wx.navigateTo({
      url: '../scanInvoice/scanInvoice'
    })
  },
})