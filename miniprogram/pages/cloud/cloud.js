const db = wx.cloud.database()
const steps = db.collection('steps')
const process = db.collection('process')
const reim = db.collection('reim')
const costClass = db.collection('costClass')
const payClass = db.collection('payClass')
const cost = db.collection('cost')
const jdvsp = db.collection('jdvsp')
const jdpay = db.collection('jdpay')

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

        },{
          num: 2,
          name: '报销附件',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/icon3.png?sign=7624f4735a0952c43a6f938325134c7f&t=1550559511',
          nav: '../reim/reim'
        }, {
          num: 3,
          name: '京东慧采（建设中）',
          img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/jdvsp.png?sign=bf70814c71fb5cfe40e28ac01ac5cb8f&t=1562914515',
          nav: ''
        }
      ],
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
          acce: '1、OA采购申请（步骤：采购执行人执行采购）\n2、京东慧采下订单',
          modelList: [{
            name: 'OA采购申请',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/南宁市新东方部门团建活动申请表.png?sign=26bf94b4fe53ac455ffc4c33ec83aebb&t=1552899845'
          }, {
            name: '京东慧采订单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/%E5%9B%A2%E5%BB%BA%E7%85%A7%E7%89%87.png?sign=16fdc06de8ef14bc6a0eb43e7b2e1e53&t=1561710343'
          }]
        }, {
          matter: '二、编制费控系统付款单',
          acce: '系统编制费控付款单据，并把单据状态提交至主管会计审核',
          modelList: [{
            name: '预付单据',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/出差申请表.png?sign=3442d879020563458a1557f492566788&t=1552900373'
          }]
        }, {
          matter: '三、资料传递财务部何振',
          acce: '1、打印OA申请\n2、打印京东慧采订单\n3、慧采订单上标注费控单号',
          modelList: [{
            name: 'OA采购申请',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/南宁市新东方部门团建活动申请表.png?sign=26bf94b4fe53ac455ffc4c33ec83aebb&t=1552899845'
          }, {
            name: '京东慧采订单',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/%E5%9B%A2%E5%BB%BA%E7%85%A7%E7%89%87.png?sign=16fdc06de8ef14bc6a0eb43e7b2e1e53&t=1561710343'
          }, {
            name: '慧采订单上标注费控单号',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/会议签到表.png?sign=e98049baebc3caf0d22bb2dfe29ca1eb&t=1552979055'
          }]
        }, {
          matter: '四、查看付款进程',
          acce: '1、查看费控单据状态（财务张文静已审核）\n2、查看电子付款凭证',
          modelList: [{
            name: '费控单据状态',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/采购OA.png?sign=366bc1299d8b87e6df8d7a817e139561&t=1552982428'
          }, {
            name: '查看电子付款凭证',
            img: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/SOP/采购（纸质）.png?sign=63d3f8e7b65d69c8638fe8b8911fa24c&t=1552982402'
          }]
        }]
      },
      success(res) {
        console.log(res)
      },
      fail: console.error
    })
  },
})