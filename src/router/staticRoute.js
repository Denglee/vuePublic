const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/Layout/Layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/Index',
    },

    {
        path: '/Index',
        component: Layout,
        children: [
            {
                path: '',
                name:'index',
                component: () => import(/* webpackChunkName: "Index" */ '../views/Index/index'),
                meta: {title: '首页'}
            },
        ]
    },
    {
        path: '/',
        component: Layout,
        children: [

            /*前台*/
            {
                path: '/about',   //会员登记
                name: 'ReceptionIndex',
                component: () => import(/* webpackChunkName: "ReceptionIndex" */ '../views/Index/About'),
                meta: {title: '会员登记',keepAlive: true},
            },
        ]
    },
];
export default staticRoute