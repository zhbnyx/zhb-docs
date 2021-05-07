# 柱状图
----
> Echarts组件，基于Vue2.0 + Echarts5.0.2 搭建得数据可视化图表组件库。
---- 
### 基础柱状图
><img :src="$withBase('/assets/img/bar.png')" style="margin: 15px 0 ">
---

```vue
<template>
    <div style="width: 800px;height: 400px">
        <zhb-echarts-bar  id="EchartsBar01" :data="data"></zhb-echarts-bar>
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

### 带背景色的柱状图
`纵向背景色`
><img :src="$withBase('/assets/img/bar2.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
         <zhb-echarts-bar id="EchartsBar02"  :data="data"  showBackground="true"></zhb-echarts-bar>
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
`横向背景色`
><img :src="$withBase('/assets/img/bar3.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
             <zhb-echarts-bar id="EchartsBar03"  :data="data"  showSplitArea="true"></zhb-echarts-bar>
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

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | 选择器   | string    | 必填项 | - |
| data     | 图表数据   | Array    | 必填项 | - |
| textColor     | 文本颜色   | string    | — | #000000 |
| lineColor     | 线颜色 | string    | — | #2E3950   |
| barWidth  | 柱状图宽度 | string   | —   | 40   |
| showBackground  | 柱状图纵向背景色 | Boolean   | —   | fasle  |
| showSplitArea  | 柱状图横向背景色 | Boolean   | —   | fasle  |

