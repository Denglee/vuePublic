/** 字体 */
// fnResize();
//  window.onresize = function () {
//    fnResize()
//  };
//  function fnResize() {
//    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
//    console.log(deviceWidth);
//    if (deviceWidth >= 750) {
//      deviceWidth = 750;
//    }
//    if (deviceWidth <= 320) {
//      deviceWidth = 320
//    }
//    document.documentElement.style.fontSize = (deviceWidth / 7.5*2) + 'px';
//    console.log( document.documentElement.style.fontSize);
//  }

/** session 存储

sessionStorage.setItem('currentIndex', 0)
// 获取
index=sessionStorage.getItem('currentIndex');
// 删除一个
sessionStorage.removeItem("currentIndex");
// 删除全部
sessionStorage.clear();

 //对象
 let obb = {
      name:'zhangyachoa',
      age:'18'
  }
 let str = JSON.stringify(obb)//把对象转化为字符串（stringify）存放进sessionStorage
 sessionStorage.setItem('obbj',str)

 JSON.parse(sessionStorage.getItem('obbj')

*/

import { get, post } from './axios';

// 全局 js
let localUrl = '';  //全局路径
var localOrigin = window.location.origin;

// console.log(localOrigin);
if(localOrigin == 'http://localhost:8282'){
    localUrl = 'http://vikily.f3322.net:20000';
    //192.168.0.133
} else {
    localUrl = localOrigin;
}
console.log(localUrl);
// const localUrl = 'http://vikily.f3322.net:20000';  //测试
// const localUrl = 'https://spt.zmtek.net';  //系统正式
// const localUrl = 'https://swim.zmtek.net';    //游泳馆正式


// 客户分类
let customerType = [
    {id:0, name:'未填'},
    {id:1, name:'A类用户'},
    {id:2, name:'B类用户'},
    {id:3, name:'C类用户'},
    {id:4, name:'D类用户'},
    {id:5, name:'BR特别多'},
    {id:6, name:'投诉多'},
];


/*elementui把上传的图片转为base64
https://blog.csdn.net/woshidamimi0/article/details/86082428
页面  直接 this.GLOBAL.getEleBase64调用
GLOBAL在main.js中声明了*/
function getEleBase64(file) {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgResult = reader.result;
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.onloadend = function () {
            resolve(imgResult);
        };
    });
}

/*按钮点击状态 变化*/
function btnStateChange(that, id, val,  state = true,time=1500){
    that[id][val] = state;
    // that[id].text = textTrue;
    setTimeout(()=>{
        that[id][val] = false;
        // that[id].text = textFalse;
    },time);

    /*使用方法  搜索中 记得加状态 true */
    //this.GLOBAL.btnStateChange(this,'loadState','searchLoad',true);

}

export default {
    localUrl,
    getEleBase64:getEleBase64,
    btnStateChange:btnStateChange,

    customerType,
}