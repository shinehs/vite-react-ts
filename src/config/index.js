export default {
  // 测试
  development: {
    cdn: './',
    apiBaseUrl: '/api'
  },
  // 暂时没想好叫啥
  beta: {
    cdn: '//s.xxx.com/vite-react-app/beta',
    apiBaseUrl: '//www.beta.xxx.com/v1'
  },
  // 线上
  release: {
    cdn: '//s.xxx.com/vite-react-app/release',
    apiBaseUrl: '//www.xxx.com/v1'
  }
}