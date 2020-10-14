const db = wx.cloud.database()
const jdreimprocess = db.collection('jdreimprocess')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      modalName:"Modal",
    })
    jdreimprocess.get({
      success: res => {
        console.log(res.data[0].list)
        var listData = res.data[0].list
        this.setData({
          listData: listData
        })
      }
    })
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.setData({
          winH:res.windowHeight,
          winW:res.windowWidth
        })

        
      }, fail(err) {
        console.log(err);
      }
    })
  },
  jdreimment: function () {
    wx.navigateTo({
      url: '../jdreimment/jdreimment'
    })
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
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
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  showModal(e) {
    this.setData({
      url: e.target.dataset.model,
      showModal: true,
      flag: false,
      showModalStatus: false,
    })
    if(this.data.url=="../jdreimment/jdreimment"){
      wx.navigateTo({
        url: '../jdreimment/jdreimment'
      })
      this.setData({
        showModal: false,
        flag: true
      })
    }

  },

  hideModal(e) {
    this.setData({
      showModal: false,
      flag: true,
      modalName: null,

    })
  }
})
