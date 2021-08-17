# 图片上传

> 以Element-ui中的upload组件为基础，封装图片上传组件。
---- 
### 基础用法

上传图片前

><img :src="$withBase('/assets/img/file.png')" style="margin: 15px 0 ">

上传图片后

><img :src="$withBase('/assets/img/file2.png')" style="margin: 15px 0 ">


---

## 注意
仅支持一个文件上传，返回File

```vue
    <template>
        <div style="display: flex;align-items: center;">
                  <span style="margin-right: 10px">文件上传</span>
                  <ZhbFile
                          :type = false
                        :fileName="fileName"
                        @fileupFunc="getFile"></ZhbFile>
              </div>
    </template>
    <script>
      export default {
        data() {
          return {
            fileName:''
          };
        },
        methods: {
            //获取文件信息
            getFile(data) {
                console.log(data);
            },
        
        },
      };
    </script>

```
#### 返回文件信息

```
{type:this.type,imgFile:this.file}
```

### Attributes
| 参数      | 说明    | 类型     | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
### Attributes
| 参数      | 说明    | 类型     | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 是否回显   | Boolean    | true false(回显) | true |
| fileName   | 文件名   | String    | - | - |

### 方法
| 方法名      | 说明    | 
|---------- |-------- |
| @fileupFunc="getFile" | 获取文件信息 |
