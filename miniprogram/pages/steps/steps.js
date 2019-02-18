const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    basics: 0,
    list: {
      process:'退费流程',
    numList: [{
      title: '步骤一',
      name: '开始',
      src: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/timg.jpg?sign=c25d8e7b4daf1d5b00791eadaf9d09c2&t=1550330559',
    }, {
      title: '步骤二',
      name: '等待'
    }, {
      title: '步骤三',
      name: '错误'
    }, {
      title: '步骤四',
      name: '完成'
        }]
    },
    num: 0,
    scroll: 0
  },
  numSteps() {
    this.setData({
      num: this.data.num == this.data.list.numList.length - 1 ? 0 : this.data.num + 1
    })
  },
  // data: {
  //   numList: [{
  //     title: '步骤一',
  //     name: '开始',
  //   }, {
  //     title: '步骤二',
  //     name: '等待'
  //   }, {
  //     title: '步骤三',
  //     name: '错误'
  //   }, {
  //     title: '步骤四',
  //     name: '完成'
  //   }, ],
  //   current: 2,
  //   verticalCurrent: 0
  // },
  // handleClick() {
  //   const addCurrent = this.data.current + 1;
  //   const current = addCurrent > 2 ? 0 : addCurrent;
  //   this.setData({
  //     'current': current
  //   })
  // }
  showModal(e) {
    console.log(e.currentTarget.dataset.target)
    this.setData({
      url: e.currentTarget.dataset.target,
      showModal: true,
      flag: false
    })
  },

  hideModal(e) {
    this.setData({
      showModal: false,
      flag: true
    })
  }
});