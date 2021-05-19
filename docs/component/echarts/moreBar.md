# 多柱状图
----
> 基于柱状图 配置做出的调整，相关配置查看 柱状图 文档。
---- 
### 基础多柱状图
><img :src="$withBase('/assets/img/moreBar01.png')" style="margin: 15px 0 ">
---

> 多柱状图的配置根据数据显示，数据格式参照如下案例。

```vue
<template>
     <div style="width: 800px;height: 400px">
          <zhb-echarts-bar id="EchartsBar00"   barWidth="30"    :data="data"></zhb-echarts-bar>
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
           {name:"Java学习",data:[ {name:'前端案例',value:'134'},
                   {name:'VUE入门进阶',value:'257'},
                   {name:'前端从入门到放弃',value:'196'},
                   {name:'VUE3.0搭建',value:'158'},
                   {name:'Echarts数据可视化',value:'174'},]},
           {name:"程序员",data:[ {name:'前端案例',value:'55'},
                   {name:'VUE入门进阶',value:'67'},
                   {name:'前端从入门到放弃',value:'32'},
                   {name:'VUE3.0搭建',value:'445'},
                   {name:'Echarts数据可视化',value:'156'},]},
           {name:"CSDN",data:[ {name:'前端案例',value:'55'},
                   {name:'VUE入门进阶',value:'67'},
                   {name:'前端从入门到放弃',value:'32'},
                   {name:'VUE3.0搭建',value:'445'},
                   {name:'Echarts数据可视化',value:'156'},]}
        ],
      };
    }
  };
</script>
```

### 自定义柱子颜色
><img :src="$withBase('/assets/img/moreBar02.png')" style="margin: 15px 0 ">
---
```vue
<template>
     <div style="width: 800px;height: 400px">
          <zhb-echarts-bar id="EchartsBar00" :color="color"    barWidth="30"    :data="data"></zhb-echarts-bar>
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
           {name:"Java学习",data:[ {name:'前端案例',value:'134'},
                   {name:'VUE入门进阶',value:'257'},
                   {name:'前端从入门到放弃',value:'196'},
                   {name:'VUE3.0搭建',value:'158'},
                   {name:'Echarts数据可视化',value:'174'},]},
           {name:"程序员",data:[ {name:'前端案例',value:'55'},
                   {name:'VUE入门进阶',value:'67'},
                   {name:'前端从入门到放弃',value:'32'},
                   {name:'VUE3.0搭建',value:'445'},
                   {name:'Echarts数据可视化',value:'156'},]},
           {name:"CSDN",data:[ {name:'前端案例',value:'55'},
                   {name:'VUE入门进阶',value:'67'},
                   {name:'前端从入门到放弃',value:'32'},
                   {name:'VUE3.0搭建',value:'445'},
                   {name:'Echarts数据可视化',value:'156'},]}
        ],
      };
    }
  };
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | 选择器   | string    | 必填项 | - |
| data     | 图表数据   | Array    | 必填项 | - |
| textColor     | 文本颜色   | string    | — | #000000 |
| lineColor     | 线颜色 | string    | — | #2E3950   |
| barWidth  | 柱状图宽度 | string   | — | 40   |
| color  | 柱状图柱子颜色 | Array   | — | #5470C6 |
| showBackground  | 柱状图纵向背景色 | Boolean   | —   | fasle  |
| showSplitArea  | 柱状图横向背景色 | Boolean   | —   | fasle  |
| isLegend  | 是否显示图例 | Boolean   | —   | fasle  |
| isLegend  | 是否显示图例 | Boolean   | —   | fasle  |
| legendPosition  | 显示图例位置 | Boolean   | left—center-right   | right  |
