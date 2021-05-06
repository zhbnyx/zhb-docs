# Switch 开关

> 表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基础用法

绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。
><img :src="$withBase('/assets/img/switch.png')" style="margin: 15px 0 ">

```vue{4}
<template>
  <zhb-switch
              v-model="active"
              active-color="#ff4949"
              inactive-color="#13ce66"
      ></zhb-switch>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      };
    }
  }
</script>
```

### 禁用状态
  `开关禁止选择`
```vue{4}
<template>
  <zhb-switch
              v-model="active"
              active-color="#ff4949"
              inactive-color="#13ce66"
              disable
      ></zhb-switch>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      };
    }
  }
</script>
```
### Attributes

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| checked | 指定当前是否选中 | `Boolean` | false |
| disabled | 是否禁用	 | `Boolean` | false |
| inactive-color | 未选中时的背景颜色 | `String` | #FF4949 |
| active-color | 选中时的背景颜色 | `String` | #13CE66 |
| @change | `change` 事件的 handler | `function` | - |
