// 异步组件打算换一个加载器，先放下，可能自定义useSuspense 可能用线程组件
// import loadable from '@loadable/component'
// import Layout, { H5Layout } from '@/layouts'
// import { RouteConfig } from 'react-router-config'
// import Home from '@/pages/home'

// const routesConfig: RouteConfig[] = [
//   {
//     path: '/',
//     exact: true,
//     component: Home
//   },
//   // hybird 路由
//   {
//     path: '/hybird',
//     exact: true,
//     component: Layout,
//     routes: [
//       {
//         path: '/',
//         exact: false,
//         component: loadable(() => import('@/pages/hybird'))
//       }
//     ]
//   },
//   // H5 相关路由
//   {
//     path: '/h5',
//     exact: false,
//     component: H5Layout,
//     routes: [
//       {
//         path: '/',
//         exact: false,
//         component: loadable(() => import('@/pages/h5'))
//       }
//     ]
//   }
// ]

// export default routesConfig


// const About = import.meta.glob('../page/about')
// const Help = import.meta.glob('../page/help')
import About from '../pages/about'
import Help from '../pages/help'

const routes = [
    {
        path: "/help",
        component: Help
    },
    {
        path: "/about",
        component: About
    }
];

export default routes