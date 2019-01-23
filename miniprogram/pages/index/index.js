//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    url:"",
    list: [], //查询结果列表
    modalHidden: true, //显示隐藏提示框
    confirmText: '', //提示框提示内容
    crowdText: 'ADULT', //普通或学生的参数值

    startName: '南宁东',
    startCode: '',

    endName: '目的站',
    endCode: '',

    selectDate: '', //选择的日期

    dateList: [], //60天的日期列表
    dateIndex: 0, //列表索引

  },
  gotosearch1: function () {
    wx.navigateTo({
      url: '../trainStation/trainStation'
    })
  },
  gotosearch2: function () {
    wx.navigateTo({
      url: '../search2/search2'
    })
  },
  bindPickerChange: function (e) {
    var str = this.data.dateList[e.detail.value];
    this.setData({ selectDate: str });
  },
  radioChange: function (e) {
    this.setData({ crowdText: e.detail.value });
  },
  //查询按钮
  bindBtnTap: function () {
    if (this.data.startName.length < 1) {
      this.openModal('请输入出发站');
      return;
    }
    if (this.data.endName.length < 1) {
      this.openModal('请输入目的站');
      return;
    }
    if (this.data.selectDate.length < 1) {
      this.openModal('请选择日期');
      return;
    }
    var that = this;
    var url = "http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=" + that.data.selectDate + "&form=" + wx.getStorageSync('startName') + "&to=" + wx.getStorageSync('endName') +"&paybyvas=false"
    console.log(url)
    // 'http://apis.haoservice.com/lifeservice/train/ypcx?key=e2cb23d7b39348fbb3121d4ec6bba895&date=2019/1/1&from=%E5%8D%97%E5%AE%81%E4%B8%9C&to=%E5%B9%BF%E5%B7%9E%E5%8D%97&paybyvas=false',
    // wx.request({
    //   url: 'https://kyfw.12306.cn/otn/leftTicket/queryC',
    //   data: {
    //     'leftTicketDTO.train_date': this.data.selectDate,
    //     'leftTicketDTO.from_station': this.data.startCode,
    //     'leftTicketDTO.to_station': this.data.endCode,
    //     'purpose_codes': this.data.crowdText
    //   },
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     var resultData = res.data;
    //     if (!resultData.status) {
    //       that.openModal('参数有误');
    //       return;
    //     } else if (resultData.messages.length > 0) {
    //       that.openModal(resultData.messages[0]);
    //       return;
    //     } else if (resultData.data.length < 1) {
    //       that.openModal('没有相关列车');
    //       return;
    //     }
    //     var dataList = [];
    //     for (var i = 0; i < resultData.data.length; i++) {
    //       var cur = resultData.data[i].queryLeftNewDTO;
    //       var lishi_arr = cur.lishi.split(':');
    //       var shangwuzuo = parseInt(cur.swz_num) ? cur.swz_num + '张' : cur.swz_num;
    //       var yidengzuo = parseInt(cur.zy_num) ? cur.zy_num + '张' : cur.zy_num;
    //       var erdengzuo = parseInt(cur.ze_num) ? cur.ze_num + '张' : cur.ze_num;
    //       var ruanwo = parseInt(cur.rw_num) ? cur.rw_num + '张' : cur.rw_num;
    //       var yingwo = parseInt(cur.yw_num) ? cur.yw_num + '张' : cur.yw_num;
    //       var ruanzuo = parseInt(cur.rz_num) ? cur.rz_num + '张' : cur.rz_num;
    //       var yingzuo = parseInt(cur.yz_num) ? cur.yz_num + '张' : cur.yz_num;
    //       var wuzuo = parseInt(cur.wz_num) ? cur.wz_num + '张' : cur.wz_num;
    //       var obj = {
    //         station_train_code: cur.station_train_code, //车次
    //         from_station_name: cur.from_station_name, //出发站
    //         start_time: cur.start_time, //出发时间
    //         to_station_name: cur.to_station_name, //目的站
    //         arrive_time: cur.arrive_time, //目的时间
    //         lishishijian: lishi_arr[0] + '小时' + lishi_arr[1] + '分', //历时时间
    //         swz_txt: shangwuzuo, zy_txt: yidengzuo, ze_txt: erdengzuo, rw_txt: ruanwo,
    //         yw_txt: yingzuo, rz_txt: ruanzuo, yz_txt: yingzuo, wz_txt: wuzuo
    //       };
    //       dataList[i] = obj;
    //     }
    //     that.setData({ list: dataList })
    //   },
    //   fail: function () {
    //     that.openModal('请求失败');
    //   }
    // })
  },
  //提示框
  modalChange: function () {
    this.setData({ modalHidden: true })
  },
  //打开提示框
  openModal: function (msg) {
    this.setData({ confirmText: msg });
    this.setData({ modalHidden: false });
  },
  onLoad: function () {
    var code1 = wx.getStorageSync('startCode');
    var name1 = wx.getStorageSync('startName');
    console.log("startName:",code1,name1);
    if (name1) {
      this.setData({ startCode: code1 });
      this.setData({ startName: name1 });
    }
    var code2 = wx.getStorageSync('endCode');
    var name2 = wx.getStorageSync('endName');
    console.log("endName:",code2,name2);
    if (code2 && name2) {
      this.setData({ endCode: code2 });
      this.setData({ endName: name2 });
    }
    var newDateList = [];
    var now = new Date();
    this.setData({ selectDate: now.getFullYear() + "-" + this.setDateValue(now.getMonth() + 1) + "-" + this.setDateValue(now.getDate()) });
    for (var i = 0; i < 60; i++) {
      var cur = new Date();
      cur.setDate(now.getDate() + i);
      newDateList[i] = cur.getFullYear() + "-" + this.setDateValue(cur.getMonth() + 1) + "-" + this.setDateValue(cur.getDate());
    }
    this.setData({ dateList: newDateList });
  },
  setDateValue: function (num) {
    return num < 10 ? "0" + num : num;
  }
})
