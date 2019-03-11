const app = getApp();
const db = wx.cloud.database()
const steps = db.collection('steps')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    showModalStatus: false,
    basics: 0,
    // list: {
    //   process:'退费流程',
    // numList: [{
    //   title: '步骤一',
    //   name: '开始',
    //   src: 'https://6669-finance-059fa2-1258372440.tcb.qcloud.la/images/timg.jpg?sign=c25d8e7b4daf1d5b00791eadaf9d09c2&t=1550330559',
    // }, {
    //   title: '步骤二',
    //   name: '等待'
    // }, {
    //   title: '步骤三',
    //   name: '错误'
    // }, {
    //   title: '步骤四',
    //   name: '完成'
    //     }]
    // },
    num: 0,
    scroll: 0,
  },
  onLoad: function (options) {
    var num = wx.getStorageSync('num');
    steps.get({
      success: res => {
        // console.log(res.data[num].list.numList[0].modelList)
        var listData = res.data[num].list
        this.setData({
          list: listData
        })
        console.log(this.data.list)
      }
    })
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
    console.log(e.target.dataset.model)
    this.setData({
      url: e.target.dataset.model,
      showModal: true,
      flag: false,
      showModalStatus: false
    })
  },

  hideModal(e) {
    this.setData({
      showModal: false,
      flag: true
    })
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    var model = e.target.dataset.model
    this.util(currentStatu)
    this.setData({
      model:model
    })
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })

      //关闭抽屉
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示抽屉
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
});