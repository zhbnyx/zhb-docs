# 搜索条件配置

> 以Element-ui中组件为基础，封装搜索框，时间，下拉选择等搜索条件，通过简单配置快速完成搜索条件页面。
---- 
### 基础用法

搜索配置展示

><img :src="$withBase('/assets/img/searchConfig.png')" style="margin: 15px 0 ">

代码展示：

```vue
<template>
     <ZhbSearchConfig @searchFields="getSearchParams" :formConfig="formConfig"></ZhbSearchConfig>
</template>
<script>
  export default {
    data() {
      return {
        formConfig:{
                    labelWidth:'80px',
                    formItemList:[
                        {
                            id:1,
                            type:'text',
                            prop:'name',
                            label:'任务名',
                            name:'name',
                            value:''
                        },
                        {
                            id:2,
                            type:'select',
                            prop:'status',
                            label:'状态',
                            name:'status',
                            value:'',
                            list:[
                                {value:'0',label:'完成'},
                                {value:'1',label:'未完成'},
                                {value:'2',label:'失败'}
                            ]
                        },
                        {
                            id:3,
                            type:'date',
                            prop:'time',
                            label:'时间',
                            name:'time',
                            value:''
                        },
                        {
                            id:4,
                            type:'daterange',
                            prop:'rangeTime',
                            label:'日期',
                            name:'rangeTime',
                            value:''
                        },
                        {
                            id:5,
                            type:'checkbox',
                            prop:'checkType',
                            label:'类型',
                            name:'checkType',
                            value:[],
                            list:[
                                {label:'0',value:'图片'},
                                {label:'1',value:'视频'},
                                {label:'2',value:'语音'},
                                {label:'3',value:'文本'}
                            ]
                        },
                        {
                            id:7,
                            type:'switch',
                            prop:'isSwitch',
                            label:'是否隐藏',
                            name:'switch',
                            value:''
                        },
                        {
                            id:8,
                            type:'radio',
                            prop:'useType',
                            label:'使用状态',
                            name:'radio',
                            value:'',
                            list:[
                                {label:'0',value:'在线'},
                                {label:'1',value:'离线'}
                            ]
                        },
                    ]
                }
      };
    },
    methods: {
       //搜索条件返回
       getSearchParams(data){
                 console.log(data);
       },
    
    },
  };
</script>
```
### Attributes
| 参数      | 说明    | 类型     | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| formConfig     | 搜索条件配置   | Object    | - | - |
| searchFields   | 搜索条件返回  | Object    | - | - |


