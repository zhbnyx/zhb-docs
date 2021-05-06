# Checkbox 复选框

> 多选框，可配置禁用、选中状态，可自定义样式

### 基础用法
   
   `单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。`
><img :src="$withBase('/assets/img/checkbox.png')" style="margin: 15px 0 ">

在zhb-checkbox元素中定义`v-model`绑定变量，单一的`check`中，默认绑定变量的值会是Boolean，选中为true。
```vue{4}

<template>
    <!-- `checked` 为 true 或 false -->
    <zhb-checkbox v-model="checked">备选项</zhb-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```

### 禁用状态
    `多选框不可用状态。`
><img :src="$withBase('/assets/img/checkbox1.png')" style="margin: 15px 0 ">

设置`disabled`属性即可。
```vue{4}
<template>
  <zhb-checkbox v-model="checked1" disabled>备选项1</zhb-checkbox>
  <zhb-checkbox v-model="checked2" disabled>备选项</zhb-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```

### 多选框组
    `适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。`
><img :src="$withBase('/assets/img/checkbox2.png')" style="margin: 15px 0 ">

`zhb-check-group`元素能把多个 `checkbox` 管理为一组，只需要在 Group 中使用`v-model`绑定Array类型的变量即可。` zhb-checkbox` 的 label属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 `checkbox` 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
```vue{4}
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
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
