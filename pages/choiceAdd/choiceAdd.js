// pages/choiceAdd/choiceAdd.js
import json from './json.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    a : true,
    show:false,
    areaList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onClose() {
    this.setData({ show: false });
  },
  onChange(event) {
    if(this.data.a){
      this.setData({
        a:false
      })
    }else{
      this.setData({
        a:true
      })
    }
    this.setData({
      checked: !this.data.a
    });
  },
  warn(){
    var _this = this;
    //调用定位方法
    _this.getUserLocation();
    // this.setData({ show: true });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onChange(picker){
    let val = picker.getValues()

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '收货地址',
    })
    this.setData({
      areaList: json
    })
    
  },

  //定位方法
  getUserLocation: function () {
    var _this = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting ['scope.userLocation'] != true) {
          //未授权
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                //取消授权
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                //确定授权，通过wx.openSetting发起授权请求
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      _this.geo();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //用户首次进入页面,调用wx.getLocation的API
          _this.geo();
          // _this.setData({ show: true });
        } else {
          console.log('授权成功')
          //调用wx.getLocation的API
          _this.geo();
          // _this.setData({ show: true });
        }
      }
    })
  },
  // 获取定位城市
  geo: function () {
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=xxxxxxxxxxxx&location=' + res.latitude + ',' + res.longitude + '&output=json',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (ops) {
            console.log(ops)
            _this.setData({ show: true });
            // console.log('定位城市：', ops.data.result.addressComponent.city)
          },
          fail: function (resq) {
            wx.showModal({
              title: '信息提示',
              content: '请求失败',
              showCancel: false,
              confirmColor: '#f37938'
            });
          },
          complete: function () {
          }
        })
      }
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