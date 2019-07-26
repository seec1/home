// pages/receivingAddress/receivingAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    // 弹层显示隐藏
    isCenterPopupShow: false, 
    // 信息
    info:[
      {
        name:"巫宇",
        phone:"15332952873",
        province:"北京市",
        city:"北京市",
        area:"西城区",
        detailedAddress:"南菜园街88号",
        use: true,
        defaultAddress:true,
        topping:false
      }, 
      {
        name: "巫宇",
        phone: "15332952873",
        province: "北京市",
        city: "北京市",
        area: "西城区",
        detailedAddress: "南菜园街88号",
        use: false,
        defaultAddress: false,
        topping: true
      }
    ],
    // region: ["北京市","北京市","昌平区"],
    // 选择地区
    region:[],
    customItem: '选择',
    username:'',
    userphone:'',
    address:""
  },
  // 点击添加地址
  addAddress(){
    let _this = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          // wx.chooseLocation({
          //   success(res){
          //     console.log(res)
          //   },
          //   fail(error){
          //     console.log(error)
          //   }
          // })
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                type: 'wgs84',
                success(res) {
                  console.log(res)
                  const latitude = res.latitude
                  const longitude = res.longitude
                  const speed = res.speed
                  const accuracy = res.accuracy
                  console.log(latitude,longitude,speed,accuracy)
                }
              })
              _this.setData({ isCenterPopupShow: true });
            }
          })
        }else{
          _this.setData({ isCenterPopupShow: true });
        }
      }
    })
    
  },
  // 关闭弹层
  close(){
    this.setData({ isCenterPopupShow: false });
  },
  //  选择省市区的事件监听
  bindRegionChange(e){
    this.setData({
      // 赋值
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  newAddress(){
    if(this.data.username==''||this.data.userphone==""||this.data.region==''||this.data.address==''){
      console.log('不能添加到info里面')
    }else{
      let arr = {
        name: this.data.username,
        phone: this.data.userphone,
        province: this.data.region[0],
        city: this.data.region[1],
        area: this.data.region[2],
        detailedAddress: this.data.address,
        use: false,
        defaultAddress: false,
        topping: false
      }
      this.data.info.push(arr);
      this.setData({
        info: this.data.info,
        isCenterPopupShow: false
      })
      this.setData({
        username:'',
        userphone:'',
        region:[],
        address:''
      })
    }
  },
  onLoad: function (options) {
    this.intoFirst();
  },
  intoFirst(){
    let obj = {};
    let a = 0;
    this.data.info.forEach((item, index) => {
      if (item['topping'] == true) {
        obj = item;
        a = index
        this.data.info.splice(index, 1)
      }
    })
    this.data.info.unshift(obj);
  },
  userAddress(e){
    this.setData({
      address: e.detail.value
    })
  },
  usernamer(e){
    this.setData({
      username:e.detail.value
    })
  },
  userphoner(e) {
    this.setData({
      userphone: e.detail.value
    })
  },
  unTopping(e){
    let index = e.currentTarget.dataset.index;
    this.data.info[index].topping = false;
    this.setData({
      info:this.data.info
    })
    // this.intoFirst();
  },
  topping(e) {
    let index = e.currentTarget.dataset.index;
    this.data.info.forEach(item=>{
      item.topping = false;
    })
    this.data.info[index].topping = true;
    this.setData({
      info: this.data.info
    })
    this.intoFirst();
  },
  useing(e){
    let index = e.currentTarget.dataset.index;
    this.data.info.forEach(item => {
      item.use = false;
    })
    this.data.info[index].use = true;
    this.setData({
      info: this.data.info
    })
  },
  defaultMoren(e){
    let index = e.currentTarget.dataset.index;

    if(this.data.info[index].defaultAddress == false){
      this.data.info.forEach(item => {
        item.defaultAddress = false;
      })
      this.data.info[index].defaultAddress = true;
    }else{
      this.data.info[index].defaultAddress = false;
    }
    
    this.setData({
      info: this.data.info
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