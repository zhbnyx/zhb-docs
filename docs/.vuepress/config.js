module.exports = {
    base:'/zhb-docs/',
    title:'zhb-ui',
    description:"12121212",
    head: [
        ['link', { rel: 'icon', href:'logo.png'}],

        ['meta', { name: 'keywords', content:'jieshao'}]
    ],
    themeConfig: {

        logo: '/assets/img/logo.png',
        nav: [
            { text: '组件', link: '/component/giud' },
            { text: '前端案例', link: '/demo/'},
            { text:'关于我',link:'/about'},
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
                        {title: 'Button 按钮', path: '/component/button'}
                    ]
                }
            ],
            '/demo/': [{
                title: '前端案例',
                collapsable: false,
                children: [
                    {title: '案例', path: '/demo/demo'},
                ]
            }]
        },

    }
}
