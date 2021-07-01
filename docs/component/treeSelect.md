# 树形Select选择器

> 以tree树形为基础，封装类似select选择器功能，实现tree树形Select选择器。
---- 
### 基础用法

><img :src="$withBase('/assets/img/111.png')" style="margin: 15px 0 ">
---
```vue
<template>
     <zhb-tree-select
                     :selectWidth="300"
                     :treeData="frameTreeData"
                     :defaultProps="framedefaultProps"
                     :itemArr="selectLabelData"
                     :checkStrictly="true"
                     :isSearch="true"
                     @treeCheck="framehandleCheck"
             />
</template>
<script>
  export default {
    data() {
      return {
        frameTreeData: [
                           {
                               dictName: "南京市",
                               id: 1,
                               children:[
                                   {
                                       dictName: "鼓楼区",
                                       id: 11,
                                       children:[]
                                   },
                                   {
                                       dictName: "玄武区",
                                       id: 12,
                                       children:[]
                                   },
                                   {
                                       dictName: "浦口区",
                                       id: 13,
                                       children:[]
                                   }
                               ]
                           },
                           {
                               dictName: "滁州市",
                               id: 2,
                               children:[
                                   {
                                       dictName: "琅琊区",
                                       id: 21,
                                       children:[]
                                   },
                                   {
                                       dictName: "南谯区",
                                       id: 22,
                                       children:[]
                                   },
                                   {
                                       dictName: "来安县",
                                       id: 23,
                                       children:[]
                                   },
                                   {
                                       dictName: "全椒县",
                                       id: 24,
                                       children:[]
                                   }
                               ]
                           },
                           {
                               dictName: "上海市",
                               id: 3,
                               children:[]
                           }
                       ],
                       framedefaultProps: {
                           label: "dictName",
                           children: "children",
                       },
                       selectLabelData: [],
      };
    },
    methods: {
        framehandleCheck(selectNodes) {
            if(this.selectLabelData.indexOf(selectNodes)==-1){
                this.selectLabelData.push(selectNodes);
            }else{
                this.selectLabelData.forEach((item, index) => {
                    if (item.id == selectNodes.id) {
                        this.selectLabelData.splice(index, 1);
                    }
                });
            }
            console.log(this.selectLabelData);
        },
    
    },
  };
</script>
```



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| selectWidth     | 宽度   | Number    | 必填项 | - |
| treeData     | 树形数据   | Array    | 必填项 | - |
| defaultProps     | 配置选项   |object   | — | - |
| itemArr     | 已选择复选框数据 | Array    | — | -  |
| barWidth  | 柱状图宽度 | string   | — | 40   |
| checkStrictly  | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | boolean   | — | false |
| isSearch  | 是否开启搜索过滤 | Boolean   | —   | fasle  |

### 方法
| 方法名      | 说明    | 
|---------- |-------- |
| treeCheck  | 对树节点进行筛选操作 |
