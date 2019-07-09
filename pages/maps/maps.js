// pages/maps/maps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getLocation: function(){
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
      fail: function (res) { 
        console.log(res)
      },
      
    })
  },
  openMap: function(){
    wx.openLocation({
      latitude: Number(36.05709),
      longitude: Number(103.85538),
    })
  }
})