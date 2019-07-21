// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    order:[{
      title: "POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕",
      detail:"天然乳胶",
      price: "299.0",
      count: 1,
      type: 0
    },
      {
        title: "POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕",
        detail: "天然乳胶",
        price: "98.5",
        count: 2,
        type:1
      }
      , {                   
        title: "POKALEN乳胶枕头泰国原装进口颈椎天然橡胶枕",
        detail: "天然乳胶",
        price: "168.0",
        count: 1,
        type:1
      }
    ]
    */
    order:[]
  },
  receivingAddress() {
    wx.navigateTo({
      url: '../receivingAddress/receivingAddress',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // this.setData({
    //   order: JSON.parse(options.orderList)
    // })
  },
  /*跳转选择地址*/
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})