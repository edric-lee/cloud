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
  sql: function (e) {
    wx.cloud.callFunction({ //调用云函数
      name: 'sql',
      data: {
        url: 'https://br.xdf.cn/br-base-rest/sqlSearchController.do?columnsAjax&userToken=75e578ce57dddc7c4c4657872899536172009d5f41ae9043566b9288c1d92581efea89fd282351c00ce807af7515e3cc49224d512beece6a1df7db95b0d8d3d0c503e4ff940b99f99e45c91e87cd2ec5f5dff08dd3dcbce932b9e07be30255855f3f40c58ced2b96a9a3051bcc12b583c17c7821cea05a936250633b8bca989b8f9729414e5e97335f839f0eb8de0414ca6aff2bd3f4e2d8f2fc2844c25f02011f7deb546e2e5ca6c51d01f7beb0a78d2c3dc2fe2ce2080ab3b0b7cd613834c87d7d460de2efcb99766304f804df80ed8891a3de25ab60f416ec5db1b5245848bec7bbb7de889bf1',
        dataSourceId: 44,
        textareaSql: "select * from BS_class where BS_class.dtBeginDate = TO_DATE('2018-9-1','YYYY-MM-DD')",
        selSeaCou : 10,
      },           //云函数名为http
    }).then(res => {　　　　　　//Promise
      console.log(JSON.parse(res));
    })
  }
})