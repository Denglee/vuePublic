/*** api接口统一管理 */
import { get, post } from './axios';

/**
 *
 * @param {string} params
 * 我们定义了一个index方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

/*
A、登录 + 侧边栏
* */

export const ApiLayoutNav = params => get('admin/Web/indexMenu', params); /*获取侧边栏 nav*/
export const ApiloginIn = params => post('admin/Web/login', params); /*登录*/
export const ApiloginOut = params => post('admin/Web/login_out', params); /*退出*/
export const ApiChangePass = params => post('admin/Web/update_password', params); /*修改密码*/
export const ApiTopSearch = params => post('admin/Member/getMemberInfo', params); /*HeaderTop 头部搜索*/


/* ==-- B、首页 --== */
/*1、首页数据*/
export const IndexTotal_membership = params => post('admin/Web/total_membership', params);      /*现有会员*/
export const IndexNew_membership   = params => post('admin/Web/new_membership', params);        /*新增会员*/
export const IndexStatistics       = params => post('admin/Web/statistics', params);            /*客流 在场人数*/
export const IndexDrawer           = params => post('admin/Web/drawer', params);                /*更衣柜使用*/
export const IndexCurriculum       = params => post('admin/Web/curriculum', params);            /*预约上课 课程分析*/
export const IndexPerformance      = params => post('admin/Web/performance', params);           /*营收业绩 收支统计*/
export const IndexRevenue_trend    = params => post('admin/Web/revenue_trend', params);         /*收支趋势*/

/* ==-- B22、前台 --== */
/*1、登记*/
export const checkFaceApi    = params => post('admin/Web/match', params);         /*收支趋势*/



/*
staffAdd({
    userimage:userimage,
    information:2,
    zmtek_ver:2,
}).then(res => {
   console.log(res)
    if(res.status ==1){

    }
}).catch(res => {
    console.log(res);
});*/
