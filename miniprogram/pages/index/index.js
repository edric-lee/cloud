//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    date: "2019/1/1",
    url: "",
    list: [], //查询结果列表
    modalHidden: true, //显示隐藏提示框
    confirmText: '', //提示框提示内容
    startName: '始发',
    endName: '到达',
    city:"北京",
    startCode: '',
    endCode: '',
    selectDate: '', //选择的日期
    max: "",
    // dateList: [], //60天的日期列表
    // dateIndex: 0, //列表索引
    radioAir: true,
    radioTrain: false,
    radioOldtrain: false,
    price:[],
    op: 10,
    opcity:10,
    hotelPrice:"",
    radios: [{
        label: '飞机',
        value: 'air',
      },
      {
        label: '动车',
        value: 'train',
      },
      {
        label: '火车',
        value: 'oldtrain',
      }
    ],

    cityRadios: [{
      label: '一管',
    },
    {
      label: '教师/员工',
    }
    ]

  },

  cityCheck(e) {
    console.log(e.currentTarget)
    var that = this;
    var opcity = e.currentTarget.dataset.index;
    that.setData({
      opcity: opcity,
    })
    },
  check(e) {
    var that = this;
    var op = e.currentTarget.dataset.index
    that.setData({
      op: op
    })

    var option = e.currentTarget.dataset.value
    
    if (option == "air") {
      this.setData({
        radioAir: true,
        radioTrain: false,
        radioOldtrain: false,
      })
    }
    if (option == "train") {
      this.setData({
        radioAir: false,
        radioTrain: true,
        radioOldtrain: false,
      })
    }
    if (option == "oldtrain") {
      this.setData({
        radioAir: false,
        radioTrain: false,
        radioOldtrain: true,
      })
    }
  },

  hotel: function () {
    wx.navigateTo({
      url: '../city/city'
    })
  },

  startTrainStation: function() {
    wx.setStorageSync('station', "start");
    wx.navigateTo({
      url: '../trainStation/trainStation'
    })
  },
  endTrainStation: function() {
    wx.setStorageSync('station', "end");
    wx.navigateTo({
      url: '../trainStation/trainStation'
    })
  },
  startAirport: function() {
    wx.setStorageSync('station', "start");
    wx.navigateTo({
      url: '../airport/airport'
    })
  },
  endAirport: function() {
    wx.setStorageSync('station', "end");
    wx.navigateTo({
      url: '../airport/airport'
    })
  },
  
  // // 查询按钮
  // bindBtnTapAir: function() {
  //   if (this.data.startName.length < 1) {
  //     this.openModal('请输入出发站');
  //     return;
  //   }
  //   if (this.data.endName.length < 1) {
  //     this.openModal('请输入目的站');
  //     return;
  //   }
  //   if (this.data.date.length < 1) {
  //     this.openModal('请选择日期');
  //     return;
  //   }
  //   var that = this;
  //   var url = ("http://apis.haoservice.com/efficient/flight/fd?key=d291330dfe014fc1b3c4c3110c1b5c96&orgCity=" + wx.getStorageSync('startCode') + "&dstCity=" + wx.getStorageSync('endCode') + "&flightDate=" + that.data.date + "&airline=&planeModel=&passType=&paybyvas=false");
  //   console.log(url);
  // },
  //提示框
  modalChange: function() {
    this.setData({
      modalHidden: true
    })
  },
  //打开提示框
  openModal: function(msg) {
    this.setData({
      confirmText: msg
    });
    this.setData({
      modalHidden: false
    });
  },
  onLoad: function() {
    //出发站点
    var name1 = wx.getStorageSync('startName');
    var code1 = wx.getStorageSync('startCode');
    console.log("startName:", name1, code1);
    if (name1) {
      this.setData({
        startName: name1,
        startCode: code1
      });
    }

    //目的站点
    var name2 = wx.getStorageSync('endName');
    var code2 = wx.getStorageSync('endCode');
    console.log("endName:", name2, code2);
    if (name2) {
      this.setData({
        endName: name2,
        endCode: code2
      });
    }
    var priceA = wx.getStorageSync('priceA');
    var priceB = wx.getStorageSync('priceB');
    var city = wx.getStorageSync('cityName');
    // this.setData({ price: [],})
    var price = new Array()
    price.push(priceA, priceB);
    this.setData({
      price: price,
      city: city
     })
    
  },
  
  //  点击日期组件确定事件
  bindDateChangeTrain: function(e) {
    var dt = e.detail.value;
    var dt = dt.replace(/-/g, "/");
    this.setData({
      date: dt
    })

  },
  bindDateChangeAir: function(e) {
    var dt = e.detail.value;
    var dt = dt.replace(/-/g, "/");
    this.setData({
      date: dt
    })

  },
  bindBtnTapCity: function(e){
    var opcity = this.data.opcity
    var price = this.data.price
    this.setData({
      hotelPrice: price[opcity]
    })
  },
  bindBtnTapTrain: function(e) {
    if (this.data.startName.length < 1) {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName.length < 1) {
      this.openModal('请输入目的站');
      return;
    }
    if (this.data.date.length < 1) {
      this.openModal('请选择日期');
      return;
    }
    var that = this;
    wx.cloud.callFunction({ //调用云函数
      name: 'http',
      data: {
        url: encodeURI("http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=" + that.data.date + "&from=" + wx.getStorageSync('startName') + "&to=" + wx.getStorageSync('endName') + "&paybyvas=false"),
      }, //云函数名为http
    }).then(res => {　　　　　　 //Promise
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
      this.setData({
        max: max
      });
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      var mean = sum / arr.length;
      console.log(mean);
    })
  },
  bindBtnTapOldTrain: function(e) {
    if (this.data.startName.length < 1) {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName.length < 1) {
      this.openModal('请输入目的站');
      return;
    }
    if (this.data.date.length < 1) {
      this.openModal('请选择日期');
      return;
    }
    var that = this;
    wx.cloud.callFunction({ //调用云函数
      name: 'http',
      data: {
        url: encodeURI("http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=" + that.data.date + "&from=" + wx.getStorageSync('startName') + "&to=" + wx.getStorageSync('endName') + "&paybyvas=false"),
      }, //云函数名为http
    }).then(res => {　　　　　　 //Promise
      // console.log(JSON.parse(res.result).result);
      var list = JSON.parse(res.result).result;
      var arr = new Array();
      var price = 0;
      var max = 0;
      console.log(list)
      console.log(list.length)
      for (var i in list) {
        if (typeof list[i].ticketprice.A1 != 'undefined') {
          var price = parseInt(list[i].ticketprice.A1.replace("￥", ""))
          arr.push(price);
        }
      }
      console.log(arr)
      var max = Math.max.apply(Math, arr);
      console.log(max)
      this.setData({
        max: max
      });
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      var mean = sum / arr.length;
      console.log(mean);
    })
  },
  bindBtnTapAir: function(e) {
    if (this.data.startName.length < 1) {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName.length < 1) {
      this.openModal('请输入目的站');
      return;
    }
    if (this.data.date.length < 1) {
      this.openModal('请选择日期');
      return;
    }
    var that = this;
    wx.cloud.callFunction({ //调用云函数
      name: 'http',
      data: {
        url: encodeURI("http://apis.haoservice.com/efficient/flight/fd?key=d291330dfe014fc1b3c4c3110c1b5c96&orgCity=" + wx.getStorageSync('startCode') + "&dstCity=" + wx.getStorageSync('endCode') + "&flightDate=" + that.data.date + "&airline=&planeModel=&passType=&paybyvas=false"),
      }, //云函数名为http
    }).then(res => {　　　　　　 //Promise
      // console.log(JSON.parse(res.result).result);
      var list = JSON.parse(res.result).result;
      var arr = new Array();
      var price = 0;
      var max = 0;
      console.log(list)
      console.log(list.length)
      for (var i in list) {
        if (list[i].CabinType == "Y" && list[i].basicCabinType == "Y") {
          console.log(list[i].SinglePrice)
          if (typeof list[i].SinglePrice != 'undefined') {
            var price = parseInt(list[i].SinglePrice)
            arr.push(price);
          }
        }
      }
      console.log(arr)
      var max = Math.max.apply(Math, arr);
      console.log(max)
      this.setData({
        max: max
      });
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      var mean = sum / arr.length;
      console.log(mean);


    })
  },
})