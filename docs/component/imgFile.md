# 图片上传

> 以Element-ui中的upload组件为基础，封装图片上传组件。
---- 
### 基础用法

上传图片前

><img :src="$withBase('/assets/img/imgFile.png')" style="margin: 15px 0 ">

上传图片后

><img :src="$withBase('/assets/img/imgFile2.png')" style="margin: 15px 0 ">


---

## 注意
仅支持png和jpg的上传，上传后的图片返回Base64和图片File

```vue
    <template>
         <div style="display: flex;align-items: center">
                 <span style="margin-right: 10px">图片上传</span>
                 <ZhbImgFile
                         type="appIconUrl"
                         :imgUrl="appIconUrlTrue"
                         ref="upfile"
                         @func="getImgBase64"></ZhbImgFile>
             </div>
    </template>
    <script>
      export default {
        data() {
          return {
            appIconUrlTrue:''
          };
        },
        methods: {
            //获取图片
                  getImgBase64(data) {
                      console.log(data);
                  },
        
        },
      };
    </script>

```
#### 返回图片信息

```
{type:this.type,base64:this.imgBase64,imgFile:this.file}
```

### Attributes
| 参数      | 说明    | 类型     | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 是否回显   | Boolean    | true false(回显) | true |
| appIconUrlTrue   | 回显图片Base64   | Base64    | - | - |

### 方法
| 方法名      | 说明    | 
|---------- |-------- |
| @func="getImgBase64"  | 获取图片信息 |
