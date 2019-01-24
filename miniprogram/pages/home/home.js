// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var arr = new Array();
    var price = 0;
    var list = require('../../utils/allcity.js');
    var max = 0;
    console.log(list.result)
    for (var i in list.result) {
      if (list.result[i].CabinType == "Y" && list.result[i].basicCabinType == "Y") {
        console.log(list.result[i].SinglePrice)
        if (typeof list.result[i].SinglePrice != 'undefined') {
          var price = parseInt(list.result[i].SinglePrice)
          arr.push(price);
        }
      }
    }
    console.log(arr)
    var max = Math.max.apply(Math, arr);
      console.log(max)

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    var mean = sum / arr.length;
     console.log(mean);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})