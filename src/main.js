import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import NProgress from 'nprogress'; //进度条
import 'nprogress/nprogress.css';

import header from './components/Header';
import footer from './components/Footer';
import comments from './components/Comments';
import loading from './components/Loading';
import page from './components/Paging';
import router from './router';
import './style/style.min.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.productionTip = false
app.config.globalProperties.axios = axios

//配置进度条
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to,from,next) => {
    NProgress.start();
    next()
});

router.afterEach(() => {
    NProgress.done()
});

app.component('app-header',header)
app.component("app-footer",footer)
app.component('app-page',page)
app.component('app-loading',loading)
app.component('app-comments',comments)

