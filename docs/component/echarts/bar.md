# 柱状图
----
> Echarts组件，基于Vue2.0 + Echarts5.0.2 搭建得数据可视化图表组件库。
---- 
### 基础柱状图
><img :src="$withBase('/assets/img/bar.png')" style="margin: 15px 0 ">
---

```html

<div style="width: 800px;height: 400px">
    <zhb-echarts-bar  id="EchartsBar01" :data="data"></zhb-echarts-bar>
</div>

```

### 带背景色的柱状图
`横向背景图`
><img :src="$withBase('/assets/img/bar2.png')" style="margin: 15px 0 ">
---

```html

<div style="width: 800px;height: 400px">
      <zhb-echarts-bar id="EchartsBar02"  :data="data"  showBackground="true"></zhb-echarts-bar>
</div>

```
`纵向背景图`
><img :src="$withBase('/assets/img/bar3.png')" style="margin: 15px 0 ">
---

```html

<div style="width: 800px;height: 400px">
          <zhb-echarts-bar id="EchartsBar03"  :data="data"  showSplitArea="true"></zhb-echarts-bar>
</div>

```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id     | 选择器   | string    | 必填项 | - |
| data     | 图表数据   | Array    | 必填项 | - |
| textColor     | 文本颜色   | string    | — | #000000 |
| lineColor     | 线颜色 | string    | — | #2E3950   |
| barWidth  | 柱状图宽度 | string   | —   | 40   |
| showBackground  | 柱状图背景色 | Boolean   | —   | fasle  |
| showSplitArea  | 柱状图背景色 | Boolean   | —   | fasle  |

