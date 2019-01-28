// pages/demo/demo.js
let City = require('../../utils/trainStation.js');
var app = getApp()
Page({

  data: {
    station:"",
    city: [],
    config: {
      horizontal: true, // 第一个选项是否横排显示（一般第一个数据选项为 热门城市，常用城市之类 ，开启看需求）
      animation: true, // 过渡动画是否开启
      search: true, // 是否开启搜索
      searchHeight: 45, // 搜索条高度
      suctionTop: true // 是否开启标题吸顶
    }
  },
  onLoad() {
    var station = wx.getStorageSync('station');
    this.setData({ station: station });


    // wx.showLoading({
    //   title: '加载数据中...',
    // })
    // // 模拟服务器请求异步加载数据
    // setTimeout(()=>{
    this.setData({
      city: City
    })
    //   wx.hideLoading()
    // },2000)

  },
  bindtap(e) {
    if (this.data.station=="start"){
      wx.setStorageSync('startName', e.detail.name);
      wx.setStorageSync('radioTrain', wx.getStorageSync('radioTrain'));
      wx.setStorageSync('radioOldtrain', wx.getStorageSync('radioOldtrain'));
      this.setData({ station: "" });
      console.log(e.detail.name)
  }
    if (this.data.station == "end") {
      wx.setStorageSync('endName', e.detail.name);
      wx.setStorageSync('radioTrain', wx.getStorageSync('radioTrain'));
      wx.setStorageSync('radioOldtrain', wx.getStorageSync('radioOldtrain'));
      this.setData({ station: "" });
      console.log(e.detail.name)
    }
    wx.navigateTo({
      url: '../travel/travel'
    })
  },
  //点击选中
})