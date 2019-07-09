//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageUrl:null,
  },

  selectImage: function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({imageUrl:tempFilePaths[0]})
      }
    })
  },
  open: function(){
     var tat = this
     wx.previewImage({
       urls: [this.data.imageUrl],
     })
  },
  cameraOPen: function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [ 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.saveFile({
          tempFilePath: 'tempFilePaths',
        })
        that.setData({ imageUrl: tempFilePaths[0] })
      }
    })
  },
  
})
