# 电池柱状图
----
> 基于柱状图 配置做出的调整，相关配置查看 柱状图 文档。
>> 电池柱状图适用于黑色底大屏中，效果更佳。
---- 
### 基础电池状图
><img :src="$withBase('/assets/img/imgBar.png')" style="margin: 15px 0 ">
---

```vue
<template>
     <div style="width: 800px;height: 400px">
               <zhb-echarts-imgbar id="EchartsBar100" textColor="#ffffff"   barWidth="30" :color="color"   :data="data"></zhb-echarts-imgbar>
     </div>
</template>
<script>
  export default {
    data() {
      return {
       data:[
                   {name:"前端学习",data:[ {name:'前端案例',value:'234'},
                           {name:'VUE入门进阶',value:'157'},
                           {name:'前端从入门到放弃',value:'96'},
                           {name:'VUE3.0搭建',value:'58'},
                           {name:'Echarts数据可视化',value:'74'},]},
               ],
      };
    }
  };
</script>
```
----
> 更多配置项请查看下方表格或参考柱状图文档。
---- 


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | 选择器   | string    | 必填项 | - |
| data     | 图表数据   | Array    | 必填项 | - |
| textColor     | 文本颜色   | string    | — | #000000 |
| lineColor     | 线颜色 | string    | — | #2E3950   |
| barWidth  | 柱状图宽度 | string   | — | 40   |
| showBackground  | 柱状图纵向背景色 | Boolean   | —   | fasle  |
| showSplitArea  | 柱状图横向背景色 | Boolean   | —   | fasle  |
| isDataZoom  | 区域缩放 | Boolean   | -   | false  |
| endValue  | 区域缩放尾数值(必须与isDataZoom搭配使用) | Number   | -   | 5  |
