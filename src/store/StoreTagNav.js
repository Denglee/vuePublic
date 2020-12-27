import { Message } from 'element-ui';
import router from '../router/router'

const state = {
    StateUserInfo:'', //用户信息
    StateNavList: [],  //路由集合

    staffClasses:[],   //员工班次

    navLeftWidth:'120px',  //左侧导航宽度
    navIsCollapse:false,  //左侧导航宽度
};

const getters = {

    /*获取 左侧导航宽度 */
    getNavLeftWidth:(state, navLeftWidth)=>{
        return state.navLeftWidth;
    },
    /*获取 左侧导航状态 */
    getNavIsCollapse:(state, navIsCollapse)=>{
        return state.navIsCollapse;
    },

    /*获取用户信息*/
    getsUserInfo(){
        let userInfo =JSON.parse(localStorage.getItem('userInfo'));
        if(userInfo){
            if(userInfo.logo == 1){
                userInfo.logo='statics/Admin/wxlogin/img/108.png'
            }
            // console.log(userInfo);
            state.StateUserInfo = userInfo;
            return userInfo;
        }else {
            console.log('asdasdasdasdasdfadfasdf');
            Message({
                message:'登录过期,请重新登录。',
                // icon:'fail',
                duration:2000,
                type:'error',
                offset:100,
            });

            setTimeout(() =>{
                router.push({path:'/login'});
            },1500);
        }
    },

    /*获取 导航列表*/
    getNavList(state, StateNavList) {
        return state.StateNavList;
    },

    /*获取 员工班次*/
    GetStaffClasses:(state, staffClasses)=>{
        return state.staffClasses;
    }
};

const mutations = {

    /*修改 左侧导航宽度*/
    mutChangeLeftWidth(state, data) {
        console.log(data);
        state.navLeftWidth = data;
    },
    /*修改 左侧导航状态*/
    mutChangeNavIsCollapse(state, data) {
        console.log(data);
        state.navIsCollapse = data;
    },

    /*保存用户信息*/
    mutSetName(state, data) {
        console.log(data);
        let StorageData=JSON.stringify(data);
        localStorage.setItem('userInfo', StorageData);
        // if (name) {
        //     localStorage.setItem('userName', name);
        // } else {
        //     localStorage.removeItem('userName');
        // }
        state.StateUserInfo = data;
    },

    /*获取用户信息*/
    mutUserInfo(state, StateUserInfo) {
        let userInfo =JSON.parse(localStorage.getItem('userInfo'));
        if(userInfo){
            if(userInfo.logo == 1){
                userInfo.logo='statics/Admin/wxlogin/img/108.png'
            }
            // console.log(userInfo);
            state.StateUserInfo = userInfo;
            return userInfo;
        }
    },

    /*登录状态*/
    mutSetLoginStatus(state, name) {
        localStorage.setItem('isLogin', true);
    },

    /*退出登录*/
    mutLOginOut(){
        localStorage.removeItem('userInfo');
        state.StateUserInfo = '';
    },

    /*插入路由 获取左侧路由导航*/
    mutNavList: (state, data) => {
        state.StateNavList = data;
    },

    /*保存班次*/
    mutSaveStaffClasses(state, data) {
        console.log(data);
        state.staffClasses = data;
    },



};

const actions = {
    /*修改 左侧导航宽度*/
    actChangeLeftWidth({commit},res) {
        console.log(res);
        return commit('mutChangeLeftWidth',res);
    },
    /*获取 左侧导航状态 */
    actChangeNavIsCollapse({commit},res) {
        console.log(res);
        return commit('mutChangeNavIsCollapse',res);
    },
    getNavIsCollapse:(state, navIsCollapse)=>{
        return state.navIsCollapse;
    },

    /* 调用 获取用户信息*/
    actUserInfo({commit}){
        return commit('mutUserInfo');
    },

    /*获取该用户的菜单列表  获取左侧路由导航*/
    actNavList({commit},res) {
        return commit("mutNavList", res);
        // resolve(res);
        /*return new Promise((resolve) => {
            layoutNav().then((res) => {
                console.log(res);
                // if(res.info == 0){
                //
                // }

            })
        })*/
    },

    /*将菜单列表扁平化形成权限列表*/
    getPermissionList({state}) {
        return new Promise((resolve) => {
            let permissionList = []

            // 将菜单数据扁平化为一级
            function flatNavList(arr) {
                console.log(arr);
                for (let v of arr) {
                    console.log(arr);
                    if (v.child && v.child.length) {
                        flatNavList(v.child)
                    } else {
                        permissionList.push(v)
                    }
                }
            }

            flatNavList(state.StateNavList);

            resolve(permissionList)  //Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象
        })
    },

    /*登录*/
    ACTLogin({commit},dataLogin) {
        return commit('mutSetName', dataLogin);
    },

    /*登出*/
    ACTlogout({commit}) {
        return commit('mutLOginOut');
    },

    /*保存班次*/
    ActSaveStaffClasses({commit},res) {
        return commit('mutSaveStaffClasses',res);
    },

};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


