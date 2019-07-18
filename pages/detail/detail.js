//引入公共的js
import { Config } from '../../utils/config'
//引入index模块的js
import { Detail } from './detail-module.js'
let detail = new Detail();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 遮罩层
    showCenterDialog: false,
    goods:{},
    gallery:[],
    type:0,
    cart:[],
    orderList:[]
  },
  onClickCenterButton(){
    this.slideUP(this,true)
  },
  onClickCenterdiaView(e){   
    // console.log(e.currentTarget.dataset.type)
    let goods = this.data.goods;
    goods.ischecked = false;
    goods.num = 1;
    // console.log(goods)
    this.setData({
      showCenterDialog: !this.data.showCenterDialog,
      type: e.currentTarget.dataset.type,
      goods: goods
    })
  },
  slideUp(_self, status){
    let systemInof = wx.getSystemInfoSync();
    var that = _self;
    var animation = wx.createAnimation({
      duration:2000,
      timingFunction:"ease-in-out"
    })
    that.animation = animation;
    animation.translateY(350).opacity(0).step()
    that.setData({
      animationData: animation.export(),
      showCenterDialog:status
    })
    setTimeout(()=>{
      animation.translateY(-62 * systemInof.windowWidth /375).opacity(1).step();
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  toIndex(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  cut() {
    if (this.data.goods){
      this.data.goods.num = this.data.goods.num-1
      if (this.data.goods.num <= 0) {
        this.data.goods.num = 1;
      }
      this.setData({
        goods: this.data.goods
      })
    }
    
  },
  add() {
    if (this.data.goods) {
      this.data.goods.num = this.data.goods.num+1
      this.setData({
        goods: this.data.goods
      })
    }
  },
  jump(ev){
    console.log(this.data.type)
    if(Number(this.data.type)){
      let id = ev.currentTarget.dataset.id
      let arr = wx.getStorageSync("cart") || []
      console.log("获取缓存",wx.getStorageSync("cart"))
      console.log(arr)
      if (arr.length > 0) {
        for (var i in arr) {
          console.log("i",i)
          if (arr[i].goods_id == id) {
            console.log("arr[i].goods_id", arr[i].goods_id)
            console.log("id",id)
            arr[i].num = arr[i].num + 1
            try {
              wx.setStorageSync("cart", arr)
            } catch (err) {
              console.log(err)
            }
            wx.showToast({
              title: '加入购物车成功',
              icon:"success",
              duration:2000
            });
            return;
          }
        }
        arr.push(this.data.goods)
      }else{
        arr.push(this.data.goods)
      }
      try {
        wx.setStorageSync("cart", arr)
        wx.showToast({
          title: '加入购物车成功',
          icon: "success",
          duration: 2000
        });
      }catch(err){
        console.log(err)
      }
      this.setData({
        showCenterDialog: !this.data.showCenterDialog,
      })
    }else{
      // this.setData({
      //   orderList: []
      // })
      this.data.orderList.push(this.data.goods)
      this.data.orderList.forEach(item=>{
        item.num = 1;
      })
      this.setData({
        orderList: this.data.orderList
      })
      wx.navigateTo({
        url: '../order/order?orderList=' + JSON.stringify(this.data.orderList),
      })  
    }
    
  },
  getDetail(id){
    let data = detail.getDetail(id,res=>{
      console.log(res.goods)
      console.log(res.gallery)
      this.setData({
        goods:res.goods,
        gallery:res.gallery
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id)
    console.log(options.id)
    let _this = this;
    wx.getStorage({
      key: 'cart',
      success: function(res) {
        console.log(res)
      },
    })
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