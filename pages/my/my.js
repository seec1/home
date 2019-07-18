// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myStay: ["待付款", "待分享", "待发货", "待收货","待评价"],
    myBox:["优惠券","商品收藏","历史浏览","退款售后"],
    index:0
  },
  toOrder(){
    wx.navigateTo({
      url: '../myOrder/myOrder',
    })
  },
  to(ev){
    console.log(ev.target.dataset.index)
    this.setData({
        index: ev.target.dataset.index
    })

  function  to(url){
      wx.navigateTo({
        url: `../${url}/${url}`
      })
   }
  switch(this.data.index){
    case 0:
      to("coupon");
      break;
    case 1:
      to("collect");
      break;
    case 2:
      to("history");
      break;
    case 3:
      to("refund")
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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