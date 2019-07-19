// pages/receivingAddress/receivingAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    isCenterPopupShow: false, 
    isBottomPopupShow:false,
    info:[{
      name:"巫宇",
      phone:"15332952873",
      province:"北京市",
      city:"北京市",
      area:"西城区",
      detailedAddress:"南菜园街88号",
      use: true,
      defaultAddress:true,
      topping:true
    }, {
        name: "巫宇",
        phone: "15332952873",
        province: "北京市",
        city: "北京市",
        area: "西城区",
        detailedAddress: "南菜园街88号",
        use: false,
        defaultAddress: false,
        topping: false
      }],
    // region: ["北京市","北京市","昌平区"],
    region:[],
    customItem: '选择'
  },
  addAddress(){
    this.setData({ isCenterPopupShow: true });
  },
  close(){
    this.setData({ isCenterPopupShow: false });
  },
  onBottomPopupShow(){
    this.setData({ isBottomPopupShow: true });
    this.setData({ isCenterPopupShow: true });
  },
  bindRegionChange(e){
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value
    })
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