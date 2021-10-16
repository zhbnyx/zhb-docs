module.exports = {
    base:'/zhb-docs/',
    title:'zhb-ui',
    description:"一款轻量级、模块化的前端 UI 组件库",
    head: [
        ['link', { rel: 'icon', href:'logo.png'}],

        // ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }]
        ['meta', { name: 'keywords', content:'jieshao'}]
    ],

    serviceWorker: true ,// 是否开启 PWA
    themeConfig: {

        logo: '/assets/img/logo.png',
        nav: [
            { text: '组件', link: '/component/giud' },
            { text: '前端工具', link: '/demo/'},
            { text:'CSDN',link:'https://blog.csdn.net/u012967771'},
            {text:'npm',link:"https://www.npmjs.com/package/zhb-ui"},
            { text:'GitHub', link:'https://github.com/zhbnyx/zhb-ui'},
        ],
        sidebar:{
            '/component/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        {title: '介绍', path: '/component/giud'},
                        {title: '安装', path: '/component/install'},
                        {title: '快速开始', path: '/component/start'}
                    ]
                },
                {
                    title: '基础组件',
                    collapsable: false,
                    children: [
                        {title: 'Icon 图标', path: '/component/icon'},
                        {title: 'Button 按钮', path: '/component/button'},
                        {title: 'Dialog 对话框', path: '/component/dialog'},
                        {title: 'Switch 开关', path: '/component/switch'},
                        {title: '图片上传', path: '/component/imgFile'},
                        {title: '文件上传', path: '/component/file'},
                        {title: '图片裁剪', path: '/component/cropImg'}
                    ]
                },
                {
                    title: '表单组件',
                    collapsable: false,
                    children: [
                        {title: 'Input 输入框', path: '/component/input'},
                        {title: 'Radio 单选框', path: '/component/radio'},
                        {title: 'Checkbox 多选框', path: '/component/checkbox'},
                        {title: '树形Select选择器', path: '/component/treeSelect'},
                        {title: '搜索条件', path: '/component/searchConfig'}
                    ]
                },
                {
                    title: 'Echarts组件',
                    collapsable: false,
                    children: [
                        {title: '柱状图', path: '/component/echarts/bar'},
                        {title: '多柱状图', path: '/component/echarts/moreBar'},
                        {title: '自定义柱状图', path: '/component/echarts/definedBar'}
                    ]
                }
            ],
            '/demo/': [{
                // title: '前端案例',
                collapsable: true,
            }]
        },

    }
}
