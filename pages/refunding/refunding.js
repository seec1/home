// pages/refunding/refunding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    cur:0,
    items:[
      {
        name:'',
        value:'拍错/多拍/不想要',
        index:0
      },
      {
        name: '',
        value: '协商一致退款',
        index: 1
      },
      {
        name: '',
        value: '未按约定时间发货',
        index:2
      },
      {
        name: '',
        value: '其他',
        index:3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:'申请退款'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  checkReason(){
    this.setData({
      show:true
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  checkedItem(e){
    this.setData({
      cur: e.target.dataset.index
    })
  },
  toRefunded(){
    wx.navigateTo({
      url: '../refunded/refunded',
    })
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
  uploader: function () {

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