# 圆柱状图
----
> 基于柱状图 配置做出的调整，相关配置查看 柱状图 文档。
---- 
### 基础圆柱状图
><img :src="$withBase('/assets/img/circlebar.png')" style="margin: 15px 0 ">
---

```vue
<template>
     <div style="width: 800px;height: 400px">
         <zhb-echarts-circlebar id="EchartsCircleBar00"    :data="data"></zhb-echarts-circlebar>
     </div>
</template>
<script>
  export default {
    data() {
      return {
        data:[
          {name:'前端案例',value:'234'},
          {name:'VUE入门进阶',value:'157'},
          {name:'Java从入门到放弃',value:'96'},
          {name:'VUE3.0搭建',value:'58'},
          {name:'Echarts数据可视化',value:'74'},
        ],
      };
    }
  };
</script>
```

### 自定义柱子颜色
><img :src="$withBase('/assets/img/circlebar01.png')" style="margin: 15px 0 ">
---

```vue
<template>
     <div style="width: 800px;height: 400px">
         <zhb-echarts-circlebar id="EchartsCircleBar01" :color="color"  :data="data"></zhb-echarts-circlebar>
     </div>
</template>
<script>
  export default {
    data() {
      return {
        color:['#FF7F39', '#FFC538', '#C0FF38', '#41FF38', '#38FF9F', '#39FFE3', '#39BBFF', '#3971FF', '#5A39FF', '#9F39FF'],
        data:[
          {name:'前端案例',value:'234'},
          {name:'VUE入门进阶',value:'157'},
          {name:'Java从入门到放弃',value:'96'},
          {name:'VUE3.0搭建',value:'58'},
          {name:'Echarts数据可视化',value:'74'},
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
