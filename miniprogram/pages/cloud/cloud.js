const db = wx.cloud.database()
const steps = db.collection('steps')
const process = db.collection('process')
// pages/cloud/cloud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // del: function (event) {
  //   wx.cloud.callFunction({
  //     name: 'batchDelete'
  //   }).then(res => {
  //     console.log(res)
  //   })
  // },
  steps: function(e) {
    steps.add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // list: {
        //   process: '离职流程',
        //   numList: [{
        //     title: '离职人员',
        //     name: '离职申请单填写部门和姓名',
        //     model:'离职会签单',
        //     src: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/timg.jpg?sign=c25d8e7b4daf1d5b00791eadaf9d09c2&t=1550330559',
        //   }, {
        //     title: '财务部：黄丽霞（非报名员跳过此步）',
        //       name: '审核报名款是否清理完毕并盖章'
        //   }, {
        //     title: '财务部：黄芳萍',
        //       name: '审核个人借款是否清理完毕并盖章'
        //   }, {
        //     title: '财务部：李玉坤',
        //       name: '签字审核'
        //     }]
        // }, 
        list: {
          process: '退费流程',
          numList: [{
            title: '报名员',
            name: '1、填写费用支出单\n2、打印退费凭据',
            model: '退费凭证',
            modelList: [{
              name: '费用支出单',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单（退费）.png?sign=a8b642497d1a886cbe03e82541ae3206&t=1552287472'
            }, {
              name: '退费凭据',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/退款凭证.png?sign=3948cff782283ca97fe4a61ff937bbac&t=1552287501'
              }, {
                name: '储值退款凭证',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/储值退款凭证.png?sign=2e5af04d2cf741967c4408d2c6671db7&t=1552287534'
              }]
          }, {
            title: '部门主管',
            name: '签字审核'
          }, {
            title: '财务部：黄丽霞',
            name: '审核退费真实性并盖章'
          }, {
            title: '财务部：李玉坤',
            name: '签字审核'
          }, {
            title: '校长',
            name: '签字审核'
          }, {
            title: '财务部：黄芳萍',
            name: '支付退费'
          }]
        },
        // 为待办事项添加一个地理位置（113°E，23°N）
        // list: {
        //   process: '报销流程',
        //   numList: [{
        //     title: '报销人员',
        //     name: '1、整理报销附件和发票\n（具体详见报销附件）\n2、填写费用支出单',
        //     model: '费用支出单',
        //     src: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/timg.jpg?sign=c25d8e7b4daf1d5b00791eadaf9d09c2&t=1550330559',
        //   }, {
        //     title: '财务部：何振',
        //     name: '审核报销附件、发票和填写是否规范并盖章'
        //   }, {
        //     title: '部门主管',
        //     name: '同意费用支出并签字'
        //   }, {
        //     title: '财务部：李玉坤',
        //     name: '签字审核'
        //   }, {
        //     title: '校长',
        //     name: '签字审核'
        //   }, {
        //     title: '财务部：黄芳萍',
        //     name: '支付款项'
        //   }]
        // },
      },
      success(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
    // console.log(product)
  },
  process: function(e) {
    process.add({
      // data 字段表示需新增的 JSON 数据
      data: {
        process: [{
          num: 0,
          name: '退费',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon1.png?sign=f81c8490529b9ce195d86ee28bb9e4e7&t=1550559294',
          nav: '../steps/steps'

        }, {
          num: 1,
          name: '离职',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon4.png?sign=16cb740c0b5d73464fd4f24223497357&t=1550559393',
          nav: '../steps/steps'

        }, {
          num: 2,
          name: '报销',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon2.png?sign=69dea021fd251586312ef8b24586ec37&t=1550559436',
          nav: '../steps/steps'
        }, {
          num: 3,
          name: '报销附件',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon3.png?sign=7624f4735a0952c43a6f938325134c7f&t=1550559511',
          nav: '../reim/reim'
        }],
        // 为待办事项添加一个地理位置（113°E，23°N）
      },
      success(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
    // console.log(product)
  }
})