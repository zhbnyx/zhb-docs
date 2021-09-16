# 图片裁剪

> 封装图片上传裁剪组件，实现本地上传图片并进行裁剪。
---- 
### 基础用法

裁剪图片前

><img :src="$withBase('/assets/img/cropImg1.png')" style="margin: 15px 0 ">


裁剪图片中

><img :src="$withBase('/assets/img/cropImg.png')" style="margin: 15px 0 ">

裁剪图片后

><img :src="$withBase('/assets/img/cropImg2.png')" style="margin: 15px 0 ">

### 步骤
> 第一步：
> npm install vue-cropper --save 或者 npm install vue-cropper -S

>第二步：引入依赖
>在main.js中引入
>import VueCropper from 'vue-cropper'
  
>Vue.use(VueCropper)
>按需引入
>import VueCropper from 'vue-cropper'

---

### 注意
仅支持png和jpg的上传，上传后的图片返回Base64和图片File

```vue
    <template>
         <div style="display: flex;align-items: center;">
                   <span style="margin-right: 10px">图片截取</span>
                   <ZhbCropperFile 
                           @getCropFile="getCropFile">
                       
                   </ZhbCropperFile>
               </div>
    </template>
    <script>
      export default {
        data() {
          return {
           
          };
        },
        methods: {
            //获取裁剪图片
                  getCropFile(data) {
                      console.log(data);
                  },
        
        },
      };
    </script>

```
#### 返回图片信息

```
{Base64:this.imgBase64,File:this.file}
```



### 方法
| 方法名      | 说明    | 
|---------- |-------- |
| @getCropFile="getCropFile"  | 获取图片信息 |
