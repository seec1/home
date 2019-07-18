// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,
    /* cart:[{
      ischecked: false,
      name:"狼牙枕",
      color:"白色",
      price:238,
      num:1
    },{
        ischecked: false,
        name:"办公枕",
        color:"米色",
        price: 58,
        num: 1
      }, {
        ischecked: false,
        name: "乳胶床垫",
        color: "白色",
        price: 238,
        num: 1
      }, {
        ischecked: false,
        name: "乳胶床垫",
        color: "白色",
        price: 238,
        num: 1
      }], */
      cartList:true,
      orderList:[]
  }, 
  // 计算价格
  getTotalPrice() {
    // 获取购物车列表
    let cart = this.data.cart; 
    //最终价格
    let total = 0;  
    for (let i = 0; i < cart.length; i++) {  
      // console.log(i)     // 循环列表得到每个数据
      // 判断选中才会计算价格
      if (cart[i].ischecked == true) {  
        // 所有价格加起来
        total += cart[i].shop_price * cart[i].num;     
      }
    }
     // 最后赋值到data中渲染到页面
    this.setData({                   
      cart: cart,
      totalPrice: total.toFixed(0)
    });
    console.log(this.data.totalPrice)
  },
   judge_checked(e) {
    let aAllprice = 0;
    let selectAllStatus = this.data.selectAllStatus;
    // 获取data- 传进来的index
    const index = e.currentTarget.dataset.index;   
    let cart = this.data.cart;
    //获取当前商品的选中状态
    const ischecked = cart[index].ischecked;
    // 改变状态
    cart[index].ischecked = !ischecked;    
    //得知是否全选
    for (let i = 0; i < cart.length; i++) {
      aAllprice = aAllprice + this.data.cart[i].shop_price * this.data.cart[i].num;
    }
    //重新计算总价
    this.getTotalPrice()  
    let allmoney = this.data.totalPrice
    if (aAllprice != allmoney) {
      selectAllStatus = false
    } else {
      selectAllStatus = true
    }
    //删除的显示隐藏
    let isShow = this.data.isShow = !this.data.isShow 
    this.setData({
      cart: cart,
      selectAllStatus: selectAllStatus,
      isShow: isShow
    });


  },
  // 删除
  remove(e){
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    let cart = this.data.cart
    cart.splice(index,1);
    this.setData({
      cart:cart
    })
    if(!cart.length){
      this.setData({
        cartList:false
      })
    }
    this.getTotalPrice();
  },
  // 减数量
  cut(e){
    let cart = this.data.cart
    let index = e.currentTarget.dataset.index
    cart[index].num--
    if(cart[index].num<=0){
      cart[index].num=1;
    }
    this.setData({
      cart: cart
    })
    this.getTotalPrice();
  },
  // 加数量
  add(e){
    let cart = this.data.cart
    let index = e.currentTarget.dataset.index
    cart[index].num++
    this.setData({
      cart:cart
    })
    this.getTotalPrice();
  },
  // 全选
  selectAll(e) {
    // 是否全选状态
    let selectAllStatus = this.data.selectAllStatus;    
    selectAllStatus = !selectAllStatus;
    let cart = this.data.cart;
    if (!this.data.selectAllStatus) {
      for (let i = 0; i < cart.length; i++) {
        cart[i].ischecked = true
      }
    } else {
      for (let i = 0; i < cart.length; i++) {
        cart[i].ischecked = false
      }
    }
    //删除的显示隐藏
    let isShow = this.data.isShow = !this.data.isShow 
    this.setData({
      selectAllStatus: selectAllStatus,
      cart: cart,
      isShow: isShow
    });
    // 重新获取总价
    this.getTotalPrice();                               
  },
  toBuy() {
    let cart = this.data.cart;
    let order = this.data.orderList
    for(let i =0; i<cart.length;i++){
      console.log("i",i)
      if(cart[i].ischecked){
        order.push(cart[i])
      }
      console.log(order)
    //   console.log([...new Set(order)])
    //  let orderL = [...new Set(order)]
    //   console.log(orderL)
    }
    this.setData({
      showDialog: !this.data.showDialog,
      orderList: order
    });
    console.log(this.data.orderList)
    wx.navigateTo({
      url: '../order/order?orderList=' + JSON.stringify(this.data.orderList),
    })
  },
  onLoad(options){
    this.setData({
      cart:wx.getStorageSync("cart")
    })
    console.log(this.data.cart)
    console.log(options)
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