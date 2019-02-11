//travel.js
//获取应用实例
var app = getApp()
Page({
  data: {
    showOrHidden: true,
    transport: [{
      name: '飞机',
      checked: false
    }, {
      name: '动车',
      checked: false
    }, {
      name: '火车',
      checked: false
    }],
    lever: [{
      name: '一管',
      checked: false
    }, {
      name: '教师/员工',
      checked: false
    }],
    date: "2019/1/1",
    url: "",
    list: [], //查询结果列表
    modalHidden: true, //显示隐藏提示框
    confirmText: '', //提示框提示内容
    startName: '始发',
    endName: '到达',
    city:"",
    startCode: '',
    endCode: '',
    selectDate: '', //选择的日期
    max: "",
    // dateList: [], //60天的日期列表
    // dateIndex: 0, //列表索引
    radioAir: "",
    radioTrain: "",
    radioOldtrain: "",
    price:[],
    op: 10,
    opcity:10,
    hotelPrice:"",
    },
  radioTransport: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var transport = this.data.transport;//选项集合
    if (transport[index].checked) return;//如果点击的当前已选中则返回
    transport.forEach(item => {
      item.checked = false
    })
    transport[index].checked = true;//改变当前选中的checked值
    this.setData({
      transport: transport
    });
  },
  radioLever: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    console.log(index)
    this.setData({
      opcity: index,
    })
    var lever = this.data.lever;//选项集合
    if (lever[index].checked) return;//如果点击的当前已选中则返回
    lever.forEach(item => {
      item.checked = false
    })
    lever[index].checked = true;//改变当前选中的checked值
    this.setData({
      lever: lever
    });
  },
  radioChangeTransport: function (e) {
    var checkValue = e.detail.value;
    console.log(checkValue)
    this.setData({
      checkValue: checkValue
    });
    if (checkValue == "飞机") {
      wx.setStorageSync('radioAir', true);
      wx.setStorageSync('radioTrain', false);
      wx.setStorageSync('radioOldtrain', false);
      this.setData({
        radioAir: true,
        radioTrain: false,
        radioOldtrain: false,
      })
    }
    if (checkValue == "动车") {
      wx.setStorageSync('radioAir', false);
      wx.setStorageSync('radioTrain', true);
      wx.setStorageSync('radioOldtrain', false);
      this.setData({
        radioAir: false,
        radioTrain: true,
        radioOldtrain: false,
      })
    }
    if (checkValue == "火车") {
      wx.setStorageSync('radioAir', false);
      wx.setStorageSync('radioTrain', false);
      wx.setStorageSync('radioOldtrain', true);
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
    role.get({
      success: res => {
        var financial = res.data[0].financial
        this.setData({
          financial: financial
        })
        console.log(this.data.financial)
      }
    })
    // if (wx.getStorageSync('openid') != "o7OsQ5ZguMk306fh4Pxv_qtccbDE") {
    //   this.setData({
    //     showOrHidden: false,
    //     radioAir: false,
    //     radioTrain: false,
    //     radioOldtrain: false,
    //   })
    // }
    //出发站点
    var name1 = wx.getStorageSync('startName');
    var code1 = wx.getStorageSync('startCode');
    var radioAir = wx.getStorageSync('radioAir');
    console.log("radioAir:", radioAir);
    var radioTrain = wx.getStorageSync('radioTrain');
    var radioOldtrain = wx.getStorageSync('radioOldtrain');
    console.log("startName:", name1, code1);
    if (name1) {
      this.setData({
        startName: name1,
        startCode: code1,
        radioAir: radioAir,
        radioTrain:radioTrain,
        radioOldtrain:radioOldtrain,

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
  bindBtnTapCity: function (e) {
    if (this.data.city=="") {
      this.openModal('请选择城市');
      return;
    }
    if (this.data.opcity == 10) {
      this.openModal('请选择级别');
      return;
    }
    var opcity = this.data.opcity
    var price = this.data.price
    this.setData({
      hotelPrice: price[opcity]
    })
  },
  bindBtnTapTrain: function(e) {
    if (this.data.startName == '始发') {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName=='到达') {
      this.openModal('请输入目的站');
      return;
    }
    // if (this.data.date.length < 1) {
    //   this.openModal('请选择日期');
    //   return;
    // }
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    var that = this;
    wx.cloud.callFunction({ //调用云函数
      name: 'http',
      data: {
        url: encodeURI("http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=" + that.data.date + "&from=" + wx.getStorageSync('startName') + "&to=" + wx.getStorageSync('endName') + "&paybyvas=false"),
      }, //云函数名为http
    }).then(res => {
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
      }).catch(err => {
        this.setData({
          max: "无价格"
        });
      })
  },
  bindBtnTapOldTrain: function(e) {
    if (this.data.startName == '始发') {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName == '到达') {
      this.openModal('请输入目的站');
      return;
    }
    // if (this.data.date.length < 1) {
    //   this.openModal('请选择日期');
    //   return;
    // }
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
      }).catch(err => {
        this.setData({
          max: "无价格"
        });
      })
  },
  bindBtnTapAir: function(e) {
    if (this.data.startName =="'始发'") {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName=="到达") {
      this.openModal('请输入目的站');
      return;
    }
    // if (this.data.date.length < 1) {
    //   this.openModal('请选择日期');
    //   return;
    // }
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
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
      }).catch(err => {
        this.setData({
          max: "无价格"
        });
      })
  },
})