//引入公共的js
import { Config } from '../../utils/config'
//引入index模块的js
import { Index } from './index-module.js'
let home = new Index();
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carousel: null,
    recommend: null,
    ranking: null,
    guessGoods: null
  },
  /*
   * 生命周期函数--监听页面加载
   */
  rankingId(ev){
    console.log("rankingId")
    // console.log("id", ev.currentTarget.dataset.goods_id)
    
    // 判断是排行榜还是猜你喜欢然后赋值给一个变量
    /* if(ev.currentTarget.dataset.guessgoods){
      this.setData({
        goodsDetail: ev.currentTarget.dataset.guessgoods
      })
    }
    if(ev.currentTarget.dataset.ranking){
      this.setData({
        goodsDetail: ev.currentTarget.dataset.ranking
      })
    }
    let goodsDetail = this.data.goodsDetail;
    console.log(goodsDetail) */
    // 把图片传给详情页面
   wx.navigateTo({
      // url: `../detail/detail?imgurl=${goodsDetail.goods_thumb}&name=${goodsDetail.goods_name}&price=${goodsDetail.shop_price}`, 
     url: `../detail/detail?id=${ev.currentTarget.dataset.id}`,   
      fail(err){
        console.log(err)
      }
    })
    // console.log(this.data.goodsDetail)
  }, 
  // ==============
  // getBanner(){
  //   let id = 1;
  //   var data = home.getBanner(id, res => {
  //     console.log(res)  
  //   })
  // },
  // getIndex(id){
    
  // },
  getIndex() {
    let id = 1;
    let data = home.getGoods(id, res => {
      console.log(res);
      this.setData({
        carousel: res.carousel,
        recommend: res.recommend,
        ranking: res.ranking,
        guessGoods: res.guessgoods
      })
    })
  },
  onLoad: function(options) {
    // console.log(options)
    this.getIndex();
    /* let _this = this;
    wx.request({
      url: 'http://www.puzhentec.com/www/api/public/index.php?s=api/v1/index',
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success(res) {
        // console.log(res.data.data)
        _this.setData({
          indexData : res.data.data
        })
        console.log(_this.data.indexData)
      },
      fail(err) {
        console.log("err", err);
      }
    }) */
    
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.sortGoodsId();
    // this.getBanner()
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