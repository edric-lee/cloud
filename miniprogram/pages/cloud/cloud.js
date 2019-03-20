const db = wx.cloud.database()
const steps = db.collection('steps')
const process = db.collection('process')
const reim = db.collection('reim')
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
        list: {
          process: '离职流程',
          numList: [{
            title: '离职人员',
            name: '离职申请单填写部门和姓名',
            model: '离职会签单',
            modelList: [{
              name: '离职会签单',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/离职会签单.jpg?sign=133b861e3a514d87c85e059580827dbb&t=1552376170'
            }]
          }, {
            title: '财务部：黄丽霞（非报名员跳过此步）',
            name: '审核报名款是否清理完毕并盖章'
          }, {
            title: '财务部：黄芳萍',
            name: '审核个人借款是否清理完毕并盖章'
          }, {
            title: '财务部：李玉坤',
            name: '签字审核'
          }]
        },
        // list: {
        //   process: '退费流程',
        //   numList: [{
        //     title: '报名员',
        //     name: '1、填写费用支出单\n2、打印退费凭据',
        //     model: '退费凭证',
        //     modelList: [{
        //       name: '费用支出单',
        //       img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单（退费）.png?sign=a8b642497d1a886cbe03e82541ae3206&t=1552287472'
        //     }, {
        //       name: '退费凭据',
        //         img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/退款凭证.png?sign=3948cff782283ca97fe4a61ff937bbac&t=1552287501'
        //       }, {
        //         name: '储值退款凭证',
        //         img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/储值退款凭证.png?sign=2e5af04d2cf741967c4408d2c6671db7&t=1552287534'
        //       }]
        //   }, {
        //     title: '部门主管',
        //     name: '签字审核'
        //   }, {
        //     title: '财务部：黄丽霞',
        //     name: '审核退费真实性并盖章'
        //   }, {
        //     title: '财务部：李玉坤',
        //     name: '签字审核'
        //   }, {
        //     title: '校长',
        //     name: '签字审核'
        //   }, {
        //     title: '财务部：黄芳萍',
        //     name: '支付退费（收到单据后三个工作日完成支付）'
        //   }]
        // },
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
  },
  reim: function(e) {
    reim.add({
      data: {
        list: [{
          matter: '部门季度团建',
          acce: '1、发票\n2、《团建活动申请表》',
          modelList: [{
            name: '费用支出单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单(团建).png?sign=2cc60b6136a77cc4c92f095eda2e3381&t=1552899928'
          }, {
            name: '团建活动申请表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/南宁市新东方部门团建活动申请表.png?sign=26bf94b4fe53ac455ffc4c33ec83aebb&t=1552899845'
          }]
        }, {
          matter: '出差差旅',
          acce: '1、发票（行程单）\n2、《出差申请单》\n3、填写《交通明细表》',
          modelList: [{
            name: '费用支出单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单（差旅）.png?sign=34b631da5d8af7ee7298b02239ea1941&t=1552900342'
          }, {
            name: '《出差申请单》',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/出差申请表.png?sign=3442d879020563458a1557f492566788&t=1552900373'
          }, {
            name: '填写《交通明细表》',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/差旅费及室内交通费明细表.png?sign=15b8244a5772c63c610c05cb65d5f738&t=1552900416'
          }]
        }, {
          matter: '会议活动费用\n（差旅、住宿、交通、伙食、茶歇）',
          acce: '1、发票\n2、填写《会议费用汇总表》\n3、填写《会议车费明细表》\n4、《会议签到表》',
          modelList: [{
            name: '费用支出单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单(会议费).png?sign=e91f38004eb164a967ed0435937345c0&t=1552978896'
          }, {
            name: '会议费用汇总表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/会议费用汇总表.png?sign=3d554a320d09417f45655c89b5167483&t=1552978922'
          }, {
            name: '会议车费明细表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/会议车费明细表.png?sign=25c7cdb2be546f2a74436c9e5c811d95&t=1552979009'
          }, {
            name: '会议签到表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/会议签到表.png?sign=e98049baebc3caf0d22bb2dfe29ca1eb&t=1552979055'
          }]
          }, {
            matter: '物资采购',
            acce: '1、发票\n2、采购申请\n3、打印：订单（电商采购）',
            modelList: [{
              name: '费用支出单',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/采购OA.png?sign=366bc1299d8b87e6df8d7a817e139561&t=1552982428'
            },{
              name: '采购申请--800元以上',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/采购OA.png?sign=366bc1299d8b87e6df8d7a817e139561&t=1552982428'
            }, {
                name: '采购申请--800元以下(含800)',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/采购（纸质）.png?sign=63d3f8e7b65d69c8638fe8b8911fa24c&t=1552982402'
            }, {
              name: '订单',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/订单.png?sign=c215d6f80908c8ad9e4c2f394d58b4af&t=1552982454'
            }]
          }, {
            matter: '内外部招待费',
            acce: '1、发票\n2、填写：《业务招待及礼品费用明细表》\n3、填写：《差旅及市内交通费用明细表》',
            modelList: [{
              name: '费用支出单',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/费用支出单（招待）.png?sign=398f03a01b749c8cfbcc1a9a019b33dc&t=1552984492'
            },{
              name: '业务招待及礼品费用明细表',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/业务招待及礼品费明细表.png?sign=d3dc97cbf4a2e87bd09af214a3dc1cad&t=1552983862'
            }, {
                name: '差旅及市内交通费用明细表',
                img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/差旅费及室内交通费明细表.png?sign=b2bd895d0dfb3afb069341d444ba3a6a&t=1552983934'
            }]
          }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  }
})