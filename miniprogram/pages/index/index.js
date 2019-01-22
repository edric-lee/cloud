Page({
  http: function (e) {
    wx.cloud.callFunction({ //调用云函数
      name: 'http'           //云函数名为http
    }).then(res => {　　　　　　//Promise
      console.log(JSON.parse(res.result))
    })
  },

})