Page({
  http: function (e) {
    wx.cloud.callFunction({ //调用云函数
      name: 'http',
      data: {
        url: 'http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=2019/1/1&from=%E5%8D%97%E5%AE%81%E4%B8%9C&to=%E5%B9%BF%E5%B7%9E%E5%8D%97&paybyvas=false',
      },           //云函数名为http
    }).then(res => {　　　　　　//Promise
      // console.log(JSON.parse(res.result).result);
      var list = JSON.parse(res.result).result;
      var arr = new Array();
      var price = 0;
      var max = 0;    
      console.log(list)
      console.log(list.length)
      for (var i in list) {
        if (typeof list[i].ticketprice.O != 'undefined') {
          var price = parseInt(list[i].ticketprice.O.replace("￥", ""))
          arr.push(price);
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
    })
  },
  
})