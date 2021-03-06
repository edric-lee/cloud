// pages/account/account.js
const db = wx.cloud.database()
const bank = db.collection('bank')
const role = db.collection('role')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    showOrHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (wx.getStorageSync('openid') == "o7OsQ5ZguMk306fh4Pxv_qtccbDE"||wx.getStorageSync('openid') == "o7OsQ5QxUGHuPSk0bOgv2PIj-Sg8") {
      this.setData({
        showOrHidden: true
      })
    }
    role.get({
      success: res => {
        var employee = res.data[0].employee
        this.setData({
          employee: employee
        })
        console.log(this.data.employee)
      }
    })
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

  },
  //上传
  bindFormSubmit: function(e) {
    var msg = e.detail.value.textarea
    console.log(msg.substring(msg.indexOf("对方户名:") + 5, msg.indexOf("。[建设银行]")))
    if (this.data.employee.indexOf(msg.substring(msg.indexOf("对方户名:") + 5, msg.indexOf("。[建设银行]"))) == -1) { //员工不提交
      var countNum = bank.where({
        time: msg.substring(msg.indexOf("0003的账户") + 7, msg.indexOf("分") + 1),
        money: msg.substring(msg.indexOf("收入人民币") + 5, msg.indexOf("元，余额")),
        accountName: msg.substring(msg.indexOf("对方户名:") + 5, msg.indexOf("。[建设银行]"))
      }).count().then(res => {
        if (res.total == 0) { //重复不提交
          bank.add({
            data: {
              time: msg.substring(msg.indexOf("0003的账户") + 7, msg.indexOf("分") + 1), //时间
              content: msg.substring(msg.indexOf("分") + 1, msg.indexOf("收入人民币")), //内容
              money: msg.substring(msg.indexOf("收入人民币") + 5, msg.indexOf("元，余额")), //金额
              accountName: msg.substring(msg.indexOf("对方户名:") + 5, msg.indexOf("。[建设银行]")) //对方户名
            }
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.error(err)
          })
        }
      })
    }
  },
  bindFormSubmit_zs: function(e) {
    var msg = e.detail.value.textarea_zs
    console.log(msg.substring(msg.indexOf("收到人民币")+5 , msg.indexOf(",余额")).replace(",",""))
    console.log(msg.substring(msg.indexOf("到账通知：于") + 6, msg.indexOf("收到人")))
    if (this.data.employee.indexOf(msg.substring(msg.indexOf(" ",40) , msg.indexOf(",账号"))) == -1) { //员工不提交
      var countNum = bank.where({
        time: msg.substring(msg.indexOf("到账通知：于") + 6, msg.indexOf("收到人") ),//时间
        money: msg.substring(msg.indexOf("收到人民币")+5 , msg.indexOf(",余额")).replace(",",""),//金额
        accountName: msg.substring(msg.indexOf(" ",40)+1 , msg.indexOf(",账号"))//对方户名
      }).count().then(res => {
        if (res.total == 0) { //重复不提交
          bank.add({
            data: {
              time: msg.substring(msg.indexOf("到账通知：于") + 6, msg.indexOf("收到人") ), //时间
              content: msg.substring(msg.indexOf("分") + 1, msg.indexOf("收入人民币")), //内容
              money: msg.substring(msg.indexOf("收到人民币")+5 , msg.indexOf(",余额")).replace(",",""), //金额
              accountName: msg.substring(msg.indexOf(" ",40)+1 , msg.indexOf(",账号")) //对方户名
            }
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.error(err)
          })
        }
      })
    }
  },
  accountFormSubmit: function(e) {

    var content = e.detail.value.content;
    var accountName = e.detail.value.accountName;
    console.log(accountName)
    var money = e.detail.value.money;
    console.log(content.length + accountName.length + money.length)
    if ((accountName.length + money.length) > 0) {
      bank.where(_.or([{
          accountName: accountName
        },
        {
          money: e.detail.value.money
        },
      ])).get({
        success: res => {
          this.setData({
            listData: res.data,
          })
          console.log(res.data)
        }
      })
    } else if (content.length > 0) {
      bank.where({
        content: db.RegExp({
          regexp: e.detail.value.content
        })
      }).get({
        success: res => {
          this.setData({
            listData: res.data,
          })
          console.log(res.data)
        }
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '请输入内容',
        showCancel:false,
       
      })
    }
  },
  //查询
  query: function() {
    // theExam.where({
    //   grade: wx.getStorageSync('grade') // 填入当前用户 openid
    // }).field({
    //   question: true,})
    bank.get({
      success: res => {
        this.setData({
          listData: res.data,
        })
        console.log(res.data)
      }
    })
  },

})