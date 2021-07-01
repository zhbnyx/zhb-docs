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

### 自定义单个柱子颜色
><img :src="$withBase('/assets/img/bar4.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar04"  :data="data" ></zhb-echarts-bar>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        data:[
          {name:"前端学习",data:[ {name:'前端案例',value:'234'},
                             {name:'VUE入门进阶',value:'157',itemStyle: {
                                     color: '#a90000'
                                 }},
                             {name:'前端从入门到放弃',value:'96'},
                             {name:'VUE3.0搭建',value:'58'},
                             {name:'Echarts数据可视化',value:'74'},]},
        ],
      };
    }
  };
</script>

```

### 自定义柱子颜色
`纯色`
><img :src="$withBase('/assets/img/bar5.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar05"  :data="data" :color="color"></zhb-echarts-bar>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        color:['#FF7F39'],
        data:[
          {name:"前端学习",data:[ {name:'前端案例',value:'234'},
                             {name:'VUE入门进阶',value:'157',itemStyle: {
                                     color: '#a90000'
                                 }},
                             {name:'前端从入门到放弃',value:'96'},
                             {name:'VUE3.0搭建',value:'58'},
                             {name:'Echarts数据可视化',value:'74'},]},
        ],
      };
    }
  };
</script>

```

`多种颜色`
><img :src="$withBase('/assets/img/bar6.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar05"  :data="data" :color="color"></zhb-echarts-bar>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        color:['#FF7F39', '#FFC538', '#C0FF38', '#41FF38', '#38FF9F', '#39FFE3', '#39BBFF', '#3971FF', '#5A39FF', '#9F39FF'],
        data:[
          {name:"前端学习",data:[ {name:'前端案例',value:'234'},
                             {name:'VUE入门进阶',value:'157',itemStyle: {
                                     color: '#a90000'
                                 }},
                             {name:'前端从入门到放弃',value:'96'},
                             {name:'VUE3.0搭建',value:'58'},
                             {name:'Echarts数据可视化',value:'74'},]},
        ],
      };
    }
  };
</script>

```
### 自定义柱子宽度、文本颜色、辅助线颜色等
`宽度`
直接通过绑定为 `barWidth` 来使用即可。
><img :src="$withBase('/assets/img/bar7.png')" style="margin: 15px 0 ">

`文本颜色`
直接通过绑定为 `textColor` 来使用即可。
><img :src="$withBase('/assets/img/bar8.png')" style="margin: 15px 0 ">

`辅助线颜色`
直接通过绑定为 `lineColor` 来使用即可。
><img :src="$withBase('/assets/img/bar9.png')" style="margin: 15px 0 ">
---

```vue
<template>
   <div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar07"  :data="data"  barWidth="15" textColor="#f00" lineColor="#f00"></zhb-echarts-bar>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        color:['#FF7F39'],
        data:[
         {name:"前端学习",data:[ {name:'前端案例',value:'234'},
                            {name:'VUE入门进阶',value:'157',itemStyle: {
                                    color: '#a90000'
                                }},
                            {name:'前端从入门到放弃',value:'96'},
                            {name:'VUE3.0搭建',value:'58'},
                            {name:'Echarts数据可视化',value:'74'},]},
        ],
      };
    }
  };
</script>

```

### 柱子过多 区域缩放
><img :src="$withBase('/assets/img/zoom.png')" style="margin: 15px 0 ">
---
`isDataZoom 和 endValue 必须搭配使用！`

```vue
<template>
   <div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar07"  isDataZoom="true" :endValue=2  :data="data"  barWidth="15" textColor="#f00" lineColor="#f00"></zhb-echarts-bar>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        color:['#FF7F39'],
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
| legendPosition  | 显示图例位置 | Boolean   | left—center-right   | right  |
| isDataZoom  | 区域缩放 | Boolean   | -   | false  |
| endValue  | 区域缩放尾数值(必须与isDataZoom搭配使用) | Number   | -   | 5  |

