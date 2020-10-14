const db = wx.cloud.database()
const steps = db.collection('steps')
const process = db.collection('process')
const reim = db.collection('reim')
const costClass = db.collection('costClass')
const payClass = db.collection('payClass')
const cost = db.collection('cost')
const jdvsp = db.collection('jdvsp')
const jdpay = db.collection('jdpay')
const jdreim = db.collection('jdreim')
const jdpayprocess = db.collection('jdpayprocess')
const jdreimprocess = db.collection('jdreimprocess')
const jdpayment = db.collection('jdpayment')
const jdreimment = db.collection('jdreimment')

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
          name: '费控流程',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon4.png?sign=16cb740c0b5d73464fd4f24223497357&t=1550559393',
          nav: '../cost/cost'

        }, {
          num: 2,
          name: '报销附件',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon3.png?sign=7624f4735a0952c43a6f938325134c7f&t=1550559511',
          nav: '../reim/reim'
        }, {
          num: 3,
          name: '京东慧采（建设中）',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp.png?sign=bf70814c71fb5cfe40e28ac01ac5cb8f&t=1562914515',
          nav: ''
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
          acce: '1、发票\n2、《团建活动申请表》\n3、打印团建照片',
          modelList: [{
            name: '团建活动申请表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/南宁市新东方部门团建活动申请表.png?sign=26bf94b4fe53ac455ffc4c33ec83aebb&t=1552899845'
          }, {
            name: '团建照片',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/%E5%9B%A2%E5%BB%BA%E7%85%A7%E7%89%87.png?sign=16fdc06de8ef14bc6a0eb43e7b2e1e53&t=1561710343'
          }]
        }, {
          matter: '出差差旅',
          acce: '1、发票（行程单）\n2、《出差申请单》\n3、填写《交通明细表》',
          modelList: [{
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
            name: '业务招待及礼品费用明细表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/业务招待及礼品费明细表.png?sign=d3dc97cbf4a2e87bd09af214a3dc1cad&t=1552983862'
          }, {
            name: '差旅及市内交通费用明细表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/差旅费及室内交通费明细表.png?sign=b2bd895d0dfb3afb069341d444ba3a6a&t=1552983934'
          }]
        }, {
          matter: '市场活动兼职劳务',
          acce: '1、劳务费用发放明细表\n2、活动照片',
          modelList: [{
            name: '劳务费用发放明细表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/劳务费用发放明细表.png?sign=c4fb598f806d3b7c93d0bc634797ed91&t=1561965937'
          }, {
            name: '活动照片',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/活动照片.png?sign=6eec3710963891acd7348130288879a8&t=1561965896'
          }]
        }, {
          matter: '教学奖金',
          acce: '1、奖金汇总表\n2、奖金审批邮件',
          modelList: [{
            name: '奖金汇总表',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/奖金汇总表.png?sign=704e45ad152d1cdd9d2732caec2892ca&t=1561966410'
          }, {
            name: '奖金审批邮件-1',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/奖金申请OA(01).png?sign=3b73c05e60dee3cb762ecbe73fcd391f&t=1561966453'
          }, {
            name: '奖金审批邮件-2',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/奖金申请OA(02).png?sign=ecbe1a6e84bd8949e44becb2bf8e2970&t=1561966502'
          }]
        }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  costClass: function(e) {
    costClass.add({
      data: {
        list: [{
            matter: '活动场地租赁',
            category: '市场推广',
            detailed: '市场活动',
            type: '活动执行',
          },
          {
            matter: '活动产生的相关租赁，餐饮费用',
            category: '市场推广',
            detailed: '市场活动',
            type: '其他市场活动',
          },
          {
            matter: '市场劳务费',
            category: '市场推广',
            detailed: '市场活动',
            type: '活动劳务',
          },
          {
            matter: '活动差旅费',
            category: '市场推广',
            detailed: '市场活动',
            type: '活动差旅',
          },
          {
            matter: '朋友圈广告及订阅号（微博）年审服务费',
            category: '市场推广',
            detailed: '媒体推广',
            type: '网络广告',
          },
          {
            matter: '广告更换画面费',
            category: '市场推广',
            detailed: '媒体推广',
            type: '广告更换画面',
          },
          {
            matter: '短期户外广告（季度）',
            category: '市场推广',
            detailed: '媒体推广',
            type: '户外广告',
          },
          {
            matter: '人力核算确认无误的各类奖金',
            category: '人力资源',
            detailed: '工资劳务',
            type: '奖金',
          },
          {
            matter: '教学部门培训差旅及教研',
            category: '人力资源',
            detailed: '培训',
            type: '培训',
          },
          {
            matter: '各部门每Q部门团建费用',
            category: '人力资源',
            detailed: '团队建设',
            type: '团队建设',
          },
          {
            matter: '人力组织相关活动费用报销',
            category: '人力资源',
            detailed: '团队建设',
            type: '团队建设',
          },
          {
            matter: '人力组织异地定点招聘差旅',
            category: '人力资源',
            detailed: '招聘',
            type: '差旅',
          },
          {
            matter: '人力充值招聘账户费用',
            category: '人力资源',
            detailed: '招聘',
            type: '其他招聘',
          },
          {
            matter: '人力报销用于招聘广告费用',
            category: '人力资源',
            detailed: '招聘',
            type: '广告',
          },
          {
            matter: '资产部支付物业费',
            category: '行政后勤',
            detailed: '物业租赁',
            type: '物业',
          },
          {
            matter: '资产部支付水电费',
            category: '行政后勤',
            detailed: '物业租赁',
            type: '水电',
          },
          {
            matter: '资产部支付垃圾费',
            category: '行政后勤',
            detailed: '物业租赁',
            type: '保洁',
          },
          {
            matter: '校办报电信宽带费用',
            category: '日常运营',
            detailed: '通讯',
            type: '通讯',
          },
          {
            matter: '市内打车费',
            category: '日常运营',
            detailed: '市内交通',
            type: '市内交通',
          },
          {
            matter: '资产部报校车停车费和过路费，贴车膜或车辆维修费用',
            category: '日常运营',
            detailed: '车辆使用',
            type: '车辆',
          },
          {
            matter: '通过人力批准的差旅报销',
            category: '日常运营',
            detailed: '差旅',
            type: '差旅',
          },
          {
            matter: '举办或参加会议产生的相关费用',
            category: '日常运营',
            detailed: '会议',
            type: '会议',
          },
          {
            matter: '资产部报梦雅或锋晟印刷品费用1/2',
            category: '日常运营',
            detailed: '印刷制作',
            type: '印刷制作',
          },
          {
            matter: '资产部报梦雅或锋晟印刷品费用2/2',
            category: '日常运营',
            detailed: '印刷制作',
            type: '印刷市场',
          },
          {
            matter: '部门产生业务招待相关餐饮或礼品费',
            category: '日常运营',
            detailed: '招待及礼品',
            type: '招待礼品',
          },
          {
            matter: '校办报打印印刷费',
            category: '日常运营',
            detailed: '其他日常',
            type: '打印印刷用（校办）',
          },
          {
            matter: '校办报打印机租金',
            category: '日常运营',
            detailed: '其他日常',
            type: '打印机租金',
          },
          {
            matter: '邮寄产生费用',
            category: '日常运营',
            detailed: '其他日常',
            type: '邮寄',
          },
          {
            matter: '资产部采购各部门低值易耗品',
            category: '物资采购',
            detailed: '办公用品/耗材采购',
            type: '低值易耗品',
          },
          {
            matter: '资产部采购各部门办公用品',
            category: '物资采购',
            detailed: '办公用品/耗材采购',
            type: '办公用品',
          },
        ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  payClass: function(e) {
    payClass.add({
      data: {
        list: [{
            matter: '一管借款或采购专员采购借款',
            detailed: '申请借款',
            type: '员工个人借款（短期使用）',
          },
          {
            matter: '前台备用金',
            detailed: '申请借款',
            type: '员工公务备用（长期使用）',
          },
          {
            matter: '资产部报销支付外部供应商教材款',
            detailed: '申请付款',
            type: '教材款（外部供应商）',
          },
          {
            matter: '资产部报销支付内部供应商教材款',
            detailed: '申请付款',
            type: '教材款（集团内部供应商）',
          },
          {
            matter: '资产部报销支付装修工程款',
            detailed: '申请付款',
            type: '装修工程款',
          },
          {
            matter: '资产部报销支付房屋押金',
            detailed: '申请付款',
            type: '房屋押金',
          },
          {
            matter: '资产部报销支付房屋质保金',
            detailed: '申请付款',
            type: '质保金',
          },
          {
            matter: '资产部报销已知分摊比例校区1/2',
            detailed: '申请付款',
            type: '校区租金（1/2办公房租）',
          },
          {
            matter: '资产部报销已知分摊比例校区2/2',
            detailed: '申请付款',
            type: '校区租金（2/2教室房租）',
          },
          {
            matter: '资产部报销未知分摊比例校区',
            detailed: '申请付款',
            type: '校区租金（长期待摊费用）',
          },
          {
            matter: '资产部报销预付广告费用',
            detailed: '申请付款',
            type: '预付广告费',
          },
          {
            matter: '资产部报销预付饮水机租金',
            detailed: '申请付款',
            type: '预付饮水机租赁费',
          },
          {
            matter: '资产部报销预付物业费',
            detailed: '申请付款',
            type: '预付物业费',
          },
          {
            matter: '资产部报销预付校区保洁费',
            detailed: '申请付款',
            type: '预付校区保洁费',
          },
          {
            matter: '资产部报销预付宽带网络',
            detailed: '申请付款',
            type: '预付宽带网络费',
          },
        ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  cost: function(e) {
    cost.add({
      // data 字段表示需新增的 JSON 数据
      data: {
        cost: [{
          num: 0,
          name: '费用分类',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/note.png?sign=04bb30393ffd9bbf0f6df3396da00385&t=1562898592',
          nav: '../costClass/costClass'

        }, {
          num: 1,
          name: '借付款分类',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/note.png?sign=04bb30393ffd9bbf0f6df3396da00385&t=1562898592',
          nav: '../payClass/payClass'

        }, {
          num: 2,
          name: '报销填写',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/a5.png?sign=b20f83d1bcca9febd12bfa199fa9a011&t=1562898638',
          nav: '../reimbursement/reimbursement'
        }, {
          num: 3,
          name: '预付填写(开发中)',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/a5.png?sign=b20f83d1bcca9febd12bfa199fa9a011&t=1562898638',
          nav: '../payment/payment'
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
  jdvsp: function(e) {
    jdvsp.add({
      // data 字段表示需新增的 JSON 数据
      data: {
        jdvsp: [{
          num: 0,
          name: '款项支付',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/a3.png?sign=beb88af9911768ec3fa7211cdd942a2f&t=1562915914',
          nav: ''

        }, {
          num: 1,
          name: '验收报销',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/truck.png?sign=7d29810887bb31a8d84930c0f510f16b&t=1562915826',
          nav: ''

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
  jdpay: function(e) {
    jdpay.add({
      data: {
        list: [{
          matter: '一、准备资料',
          acce: '1、OA采购申请（资产部负责人：同意）\n2、京东慧采下订单',
          modelList: [{
            name: 'OA采购申请',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/OA%E9%87%87%E8%B4%AD%E7%94%B3%E8%AF%B7.png?sign=341b1a8a8237415619ad419d6771651a&t=1563431407'
          }, {
            name: '京东慧采订单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E6%85%A7%E9%87%87%E8%AE%A2%E5%8D%95.png?sign=ee2ccb141a2b07db9e3a3d385d1ad9cc&t=1563411021'
          }]
        }, {
          matter: '二、编制费控系统付款单',
          acce: '系统编制费控付款单据，并把单据状态提交至“待主管会计审核”',
          modelList: [{
            name: '预付单据',
            img: '../jdpayment/jdpayment'
          }]
        }, {
          matter: '三、资料传递财务部何振',
          acce: '1、打印OA申请\n2、打印京东慧采订单\n3、慧采订单上标注费控单号',
          modelList: [{
            name: 'OA采购申请',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/OA%E7%94%B3%E8%AF%B7.png?sign=d20d31817ce650d414db5bff555450d7&t=1563431804'
          }, {
            name: '京东慧采订单',
            url: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95%E6%A0%87%E6%B3%A8.png?sign=7bff00e8aa888792e16c86158a38603a&t=1563354261'
          }, {
            name: 'OA申请标注费控单号',
              img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/OA%E5%A1%AB%E5%86%99%E8%B4%B9%E6%8E%A7%E5%8D%95%E5%8F%B7.jpg?sign=0559b2c9607402a13faf6c56b033ed28&t=1566268427'
          }]
        }, {
          matter: '四、查看付款进程',
          acce: '1、查看费控单据状态（财务张文静已审核）',
          modelList: [{
            name: '费控单据状态',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BB%98%E6%AC%BE.png?sign=4b18cb2e207722292787359b64a565c2&t=1563354668'
          }]
        }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdreim: function(e) {
    jdreim.add({
      data: {
        list: [{
          matter: '一、准备资料',
          acce: '1、OA验收单\n2、京东电子发票',
          modelList: [{
            name: 'OA验收单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95%EF%BC%88%E7%94%B5%E8%84%91%EF%BC%89.png?sign=563756409b3ba26536ce0d6f63c85429&t=1563440290'
          }, {
            name: '京东电子发票',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BA%AC%E4%B8%9C%E6%85%A7%E9%87%87%E5%8F%91%E7%A5%A8.png?sign=e7ce5244455b4f7eb6d42451c57bb036&t=1563354136'
          }]
        }, {
          matter: '二、编制费控系统报销单',
          acce: '系统编制费控报销单，并把单据状态提交至“待主管会计审核”',
          modelList: [{
            name: '报销单',
            img: '../jdreimment/jdreimment'
          }]
        }, {
          matter: '三、资料传递财务部何振',
          acce: '1、打印OA验收单\n2、打印电子发票\n3、验收单单上标注费控单号',
          modelList: [{
            name: 'OA验收单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95.png?sign=f342e0c39edcdd59e56118da806801f2&t=1563354181'
          }, {
            name: '京东电子发票',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BA%AC%E4%B8%9C%E6%85%A7%E9%87%87%E5%8F%91%E7%A5%A8.png?sign=e7ce5244455b4f7eb6d42451c57bb036&t=1563354136'
          }, {
            name: '验收单上标注费控单号',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95%E6%A0%87%E6%B3%A8.png?sign=7bff00e8aa888792e16c86158a38603a&t=1563354261'
          }]
        }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdpayprocess: function(e) {
    jdpayprocess.add({
      data: {
        list: [{
          name: 'OA采购申请',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/OA%E5%A1%AB%E5%86%99%E8%B4%B9%E6%8E%A7%E5%8D%95%E5%8F%B7.jpg?sign=0559b2c9607402a13faf6c56b033ed28&t=1566268427'
        }, {
          name: '京东慧采订单',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E6%85%A7%E9%87%87%E8%AE%A2%E5%8D%95.png?sign=80f1aa65cb0d3a614444be4342e7b169&t=1566186459'
        }, {
          name: '付款单填写指南',
          img: '../jdpayment/jdpayment'
        }, {
          name: '查看是否付款',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BB%98%E6%AC%BE.png?sign=4b18cb2e207722292787359b64a565c2&t=1563354668'
        }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdreimprocess: function(e) {
    jdreimprocess.add({
      data: {
        list: [{
          name: '验收单',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95.png?sign=f342e0c39edcdd59e56118da806801f2&t=1563354181'
        }, {
          name: '京东电子发票',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BA%AC%E4%B8%9C%E6%85%A7%E9%87%87%E5%8F%91%E7%A5%A8.png?sign=e7ce5244455b4f7eb6d42451c57bb036&t=1563354136'
        }, {
          name: '验收单上标注费控单号',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95%E6%A0%87%E6%B3%A8.png?sign=7bff00e8aa888792e16c86158a38603a&t=1563354261'
        }, {
          name: '报销单填写指南',
          img: '../jdreimment/jdreimment'
        }, ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdreimprocess: function(e) {
    jdreimprocess.add({
      data: {
        list: [{
          name: '验收单',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E8%B5%84%E4%BA%A7%E5%85%A5%E5%87%BA%E5%BA%93%E7%A1%AE%E8%AE%A4%E5%8D%95%E6%A0%87%E6%B3%A8.png?sign=7bff00e8aa888792e16c86158a38603a&t=1563354261'
        }, {
          name: '京东电子发票',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/%E4%BA%AC%E4%B8%9C%E6%85%A7%E9%87%87%E5%8F%91%E7%A5%A8.png?sign=e7ce5244455b4f7eb6d42451c57bb036&t=1563354136'
        },  {
          name: '报销单填写指南',
          img: '../jdreimment/jdreimment'
        }, ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdpayment: function(e) {
    jdpayment.add({
      data: {
        list: [{
            step: '步骤一',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay1.png?sign=e495b6e6cd6af35278cab2292538b837&t=1566190483',
            content: '1、请按照费用"实际申请人"所在部门选择"预算部门\n2、请按照"部门+申请人+借款用途"格式填写"申请事由"\n例：教学管理部 陈业文 借购买手机三脚架款'
          }, {
            step: '步骤二',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay2.png?sign=910a05c7c4c79086f2062771dbd16929&t=1566193740',
            content: '请按实际校区选择“教学点/办公区域”\n注意：除"北美项目部"及"雅思项目部"填选"华润大厦校区"和"国内部"填选"西大校区"外，其余部门一般填选"公共教学区"',
          }, {
            step: '步骤三',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay3.png?sign=a9cf55ce25db6719741a6efe01ee6ed9&t=1566193862',
            content: '请在“借款（付款）说明”填写详细借款用途及购买详情',
          }, {
            step: '步骤四',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay4.png?sign=d8f9d497d754a3d35b882f7fba723462&t=1566193906',
          }, {
            step: '步骤五',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay5.png?sign=f55d7675107a618695f4d014f712f2dc&t=1566193969',
            content: '1、请根据"京东慧采订单"实际金额填写"借款金额"（因直接向京东慧采进行支付款项，所以切记按订单金额实报实销，切勿按预算金额进行填写）\n收款人：北京京东世纪信息技术有限公司\n收款人开户行：招商银行股份有限公司北京青年路支行（可直接搜索308100005545）\n收款人账号：1109 0759 7010 206',
          },
          {
            step: '步骤六',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay6.png?sign=ae6ae09d54101fc9cca41ebe01f8db47&t=1566194099',
            content: '点击确认业务',
          },
          {
            step: '步骤七',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/payment/jdpay7.png?sign=b7fac0485abad0e3258199e952e10a68&t=1566194141',
          },
        ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  jdreimment: function(e) {
    jdreimment.add({
      data: {
        list: [{
            step: '步骤一',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim1.png?sign=dc993f20a96d49f10e5e2860d0bbb16d&t=1566195035',
          content: ' 1、选择需要冲销的借款人\n2、据实填写预算部门\n3、报销事由填写“冲销+冲销借款事由”；报销说明填写“冲销+借款人 + 借款共 **** 元”'
          }, {
            step: '步骤二',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim2.png?sign=17a6e36f0638abd56ece93be0d308f0b&t=1566195073',
            content: '据实选择教学点/办公区（无指定教学区请选择“公共教学区”）',
          }, {
            step: '步骤三',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim3.png?sign=0057df62756ca54d99aa6b41ec1a9a13&t=1566195084',
            content: '1、请根据小程序中“财务流程”—“费控流程”—“费用分类”引导完成选择\n2、据实填写“预算部门”及“教学点”',
          }, {
            step: '步骤四',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim4.png?sign=248f15e6bd214acf1246c6f55e76c0ef&t=1566195095',
            content:'点击“确认业务明细填写完毕”'
          }, {
            step: '步骤五',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim5.png?sign=2c6686bda9543d4e492728a2c545fcfd&t=1566195108',
            content: ' 1、填写“填单人”的银行转账信息\n2、收款金额请一定填写“0”，切记\n3、请选择并添加需要冲销的“借款申请单”\n4、填写“本次报销冲抵金额”（冲抵金额=借款金额）',
          },
          {
            step: '步骤六',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp/reimment/jdreim6.png?sign=0d9b32438cac0005ad31dfa64dd57ffa&t=1566195119',
            content: '填写“业务实际发生”并点击顶部“提交”',
          },
        ]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
})