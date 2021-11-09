# Button 按钮配置

> 封装样式按钮，实现按钮点击回调。
---- 
### 基础用法

搜索配置展示

><img :src="$withBase('/assets/img/buttonConfig.png')" style="margin: 15px 0 ">

代码展示：

```vue
<template>
     <ZhbButtonConfig :actions="getActions"></ZhbButtonConfig>
</template>
<script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
       getActions(){
                 return [
                     {
                         label:'详情',
                         icon:"zhb-iconcaigouguanli-caigouxuqiu",
                         click:()=>{
                             this.$message("详情")
                         }
                     },
                     {
                         label:'新建',
                         icon:"zhb-iconxinjian1",
                         click:()=>{
                             this.$message("新建")
                         }
                     },
                     {
                         label:'编辑',
                         icon:"zhb-iconwenbenbianjitianchong",
                         click:()=>{
                             this.$message("编辑")
                         }
                     },
                     {
                         label:'导入',
                         icon:"zhb-icondaoru1",
                         click:()=>{
                             this.$message("导入")
                         }
                     },
                     {
                         label:'删除',
                         icon:"zhb-iconshanchu2",
                         click:()=>{
                             this.$message("删除")
                         }
                     }
                 ]
             },
    
    },
  };
</script>
```
### Attributes
| 参数      | 说明    | 类型     | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| actions     | 按钮配置   | Function    | - | - |


