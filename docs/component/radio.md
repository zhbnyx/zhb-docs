# Radio 单选框

> 单选框，可自定义样式

### 基础用法

   `由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。`
><img :src="$withBase('/assets/img/radio.png')" style="margin: 15px 0 ">

要使用 `Radio` 组件，只需要设置 `v-model` 绑定变量，选中意味着变量的值为相应 `Radio` `label`属性的值，`label`可以是String、Number或`Boolean`。
```vue{4}
<template>
  <zhb-radio v-model="radio" label="1">备选项</zhb-radio>
  <zhb-radio v-model="radio" label="2">备选项</zhb-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```

### 单选框组

 `适用于在多个互斥的选项中选择的场景。`
><img :src="$withBase('/assets/img/radio.png')" style="margin: 15px 0 ">

结合zhb-radio-group元素和子元素zhb-radio可以实现单选组，在`zhb-radio-group`中绑定 `v-model`，在 `zhb-radio` 中设置好 `label` 即可，无需再给每一个 `zhb-radio` 绑定变量，另外，还提供了 `change` 事件来响应变化，它会传入一个参数 `value`。
```vue{4}
<template>
  <zhb-radio-group v-model="radioGroup">
    <zhb-radio label="3"></zhb-radio>
    <zhb-radio label="4"></zhb-radio>
  </zhb-radio-group>
</template>

<script>
  export default {
    data () {
      return {
         radioGroup: [4]
      };
    }
  };
</script>
```

### 禁用状态
   `单选框不可用状态。`
><img :src="$withBase('/assets/img/no-radio.png')" style="margin: 15px 0 ">

设置`disabled`属性即可。
```vue{4}
<template>
   <zhb-radio v-model="gender" label="0" >男</zhb-radio>
   <zhb-radio v-model="gender" label="1" disabled >女</zhb-radio>
   <zhb-radio v-model="gender" label="2" disabled >中</zhb-radio>
</template>
<script>
  export default {
    data() {
      return {
        gender:'1'
      };
    }
  };
</script>
```


### Attributes

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| label | 选项标签 | `String` | - |
| value | 选项值 | `String` | - |
| disabled | 是否禁止操作 | `Boolean` | false |
| @change| 变化时回调函数 | `Function` | - |
