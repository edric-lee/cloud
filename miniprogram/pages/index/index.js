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
    crowdText: 'ADULT', //普通或学生的参数值
    startName: '南宁东',
    endName: '目的站',
    selectDate: '', //选择的日期

    dateList: [], //60天的日期列表
    dateIndex: 0, //列表索引

  },
  gotoStartTrainStation: function() {
    wx.setStorageSync('station', "start");
    wx.navigateTo({
      url: '../trainStation/trainStation'
    })
  },
  gotoEndTrainStation: function() {
    wx.setStorageSync('station', "end");
    wx.navigateTo({
      url: '../trainStation/trainStation'
    })
  },
  gotoStartAirport: function () {
    wx.setStorageSync('station', "start");
    wx.navigateTo({
      url: '../airport/airport'
    })
  },
  gotoEndAirport: function () {
    wx.setStorageSync('station', "end");
    wx.navigateTo({
      url: '../airport/airport'
    })
  },
  bindPickerChange: function(e) {
    var str = this.data.dateList[e.detail.value];
    this.setData({
      selectDate: str
    });
  },
  radioChange: function(e) {
    this.setData({
      crowdText: e.detail.value
    });
  },
  //查询按钮
  // bindBtnTap: function() {
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
  //   var url = ("http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=" + that.data.date + "&from=" + wx.getStorageSync('startName') + "&to=" + wx.getStorageSync('endName') + "&paybyvas=false");
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
    console.log("startName:", name1);
    if (name1) {
      this.setData({
        startName: name1
      });
    }
    //目的站点
    var name2 = wx.getStorageSync('endName');
    console.log("endName:", name2);
    if (name2) {
      this.setData({
        endName: name2
      });
    }
  },
  //  点击日期组件确定事件
  bindDateChange: function(e) {
    var dt=e.detail.value;
    var dt = dt.replace(/-/g, "/");
    this.setData({
      date: dt
    })
    
  },
  bindBtnTap: function(e) {
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
        // url:'http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=2019/1/1&from=%E5%8D%97%E5%AE%81%E4%B8%9C&to=%E5%B9%BF%E5%B7%9E%E5%8D%97&paybyvas=false',
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

      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      var mean = sum / arr.length;
      console.log(mean);
    })
  },
})