const db = wx.cloud.database()
const invoice = db.collection('invoice')
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function(options) {

    var that = this;

    //获取用户信息
    wx.getUserInfo({
      success: function(res) {
        that.data.userInfo = res.userInfo;

        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })
  },

  scanCode: function(event) {
    wx.scanCode({
      onlyFromCamera: true,
      success: res => {
        this.setData({
          invoiceCode: res.result.split(",")[2], //发票代码
          invoiceNumber: res.result.split(",")[3], //发票号码
          billTime: res.result.split(",")[5], //开票时间
          invoiceAmount: res.result.split(",")[4], //开具金额、不含税价
        })

      },
      fail: err => {
        console.log(err);
      }
    })
  },
  sub: function(res) {
    this.setData({
      cur: false,
      ref: false,

    })
    invoice.add({
      data: {
        invoiceCode: this.data.invoiceCode, //发票代码
        invoiceNumber: this.data.invoiceNumber, //发票号码
        billTime: this.data.billTime, //开票时间
        invoiceAmount: this.data.invoiceAmount, //开具金额、不含税价
        time: util.formatTime(new Date()),
        sub: this.data.userInfo.nickName,
      }
    })
    invoice.where({
      invoiceNumber: this.data.invoiceNumber
    }).count().then(res => {
      if (res.total == 0) {
        this.setData({
          cur:true,
        })
      } else {
        this.setData({
          ref: true,
        })
      }
    })
    invoice.get({
      success: res => {
        this.setData({
          invoiceList: res.data
        })
      }
    })




  }
})