# Dialog 对话框

> 在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法
   
   `Dialog 弹出一个对话框，适合需要定制性更大的场景。`
 ><img :src="$withBase('/assets/img/dialog1.png')" style="margin: 15px 0 ">
  
```vue{4}
    <zhb-dialog :visible.sync="visible" >
       
    </zhb-dialog>
    <script>
      export default {
        data() {
          return {
            visible: false
          };
        }
      };
    </script>
``` 

### 自定义内容
   
   `Dialog 组件的内容可以是任意的。`
><img :src="$withBase('/assets/img/dialog.png')" style="margin: 15px 0 ">

需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 `Dialog`。`Dialog` `分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```vue{4}
    <zhb-dialog  width="20%" top="50px" :visible.sync="visible" >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <!--自定义底部-->
        <template v-slot:footer>
          <zhb-button  @click="visible = false">取消</zhb-button>
          <zhb-button type="primary" @click="visible = false">确定</zhb-button>
        </template>
    </zhb-dialog>

    <script>
      export default {
        data() {
          return {
            visible: false
          };
        }
      };
    </script>
```


### Attributes 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| visible | 对话框是否可见 | `Boolean` | false |
| title | 标题 | `String` | 提示 |
| width | 宽度 | `String` | - |
| top | 距离顶部 | `String` | - |
| modal | 是否显示遮罩层 | `Boolean` | true |


