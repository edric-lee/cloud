
const db = wx.cloud.database()
const jdvsp = db.collection('jdvsp')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: '步骤一',
      name: '退费',
      src: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/timg.jpg?sign=c25d8e7b4daf1d5b00791eadaf9d09c2&t=1550330559',
    }, {
      title: '步骤二',
      name: '离职'
    }, {
      title: '步骤三',
      name: '报销'
    }, {
      title: '步骤四',
      name: '报销附件',
      btn:'btn'

    }]
  },
  btn: function (e) {
    var num=e.currentTarget.dataset.id;
    wx.setStorageSync('num', num);
    var url=e.currentTarget.id;
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function (options) {
    jdvsp.get({
      success: res => {
        console.log(res.data[0].jdvsp)
        var listData = res.data[0].jdvsp
        this.setData({
          listData: listData
        })
         console.log(this.data.list)
      }
    })
  }
})