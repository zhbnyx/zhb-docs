---
navbar: false
home: true
heroImage: /assets/img/logo.png
heroText: null
tagline: 一款轻量级、模块化的前端 UI 组件库

---
  <a target="_blank" href='https://blog.csdn.net/u012967771'><img src="assets/img/logo2.png"  style="position: absolute;
                                              width: 249px;
                                              top: -42px;
                                              left: 45px;"></a>
 <div class="separate-panel" style="position: absolute;
                                        width: 100%;
                                        bottom: 260px;">
       <div class="about">
         <a href='component/giud'>开始使用</a>
         <a target="_blank" class="btn-github" href="https://github.com/zhbnyx/zhb-ui">GitHub</a>
       </div>
 </div>
<style>
.home{
    margin: 0px auto;
    display: block;
    width: 100%;
    height: 100%;
    padding:0;
    max-width:100%;
}
.home .hero {
    text-align: center;
    margin-top: 30vh;
}
.home .hero .description {
    margin-top: 56px;
    color: #8994c6;
    font-size: 32px;
}

  .separate-panel{
    position: absolute;
    width: 100%;
    bottom: 260px;
  }
  .separate-panel .about{
    position: absolute;
    width: 100%;
    height: 200px;
    top: 20px;
    z-index: 9;
    background: #fff;
    text-align: center;


  }
  .separate-panel .about a {
    color: #fff;
    background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
    box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
    display: inline-block;
    width: 190px;
    height: 56px;
    margin: 0 35px;
    font-size: 18px;
    line-height: 56px;
    border-radius: 28px;
    transition: all .3s;
    cursor: pointer;
  }
  .separate-panel .about .btn-github{
    color: #316DE9;
    border: 1px solid #2F6EE9;
    background: #fff;
    box-shadow: none;
  }
  .separate-panel:after{
    content: '';
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: #fff;
    box-shadow: 0 -4px 30px 0 #DFE1E6;
    transform: skewY(-4deg);
  }
  
</style>
