# bigScreenExample
主要展示一种监控大屏的浏览器兼容性方案，示例可以适应任何分辨率，并无滚动条。
##无滚动条的浏览器兼容性方案
思路主要分为2步：

**1 将UI设计稿等比例缩放到屏幕上。**

`
一般会有UI设计师出一张设计图，标明各个元素尺寸。

![image](https://user-images.githubusercontent.com/54787049/234517375-c363d308-d4e9-41ba-ac09-338c28819af0.png)


前端需要根据设计图，制作html页面。为适应各种屏幕分辨率，会使用一种基于rem的自适应方案：

1 html中各元素尺寸都用rem为单位，假设初始时html的font-size为100px

2 当屏幕宽高比>设计稿的宽高比时，按照屏幕与设计稿的高度比例缩放html的font-size;当屏幕宽高比<设计稿的宽高比时，按屏幕与设计稿的宽度比例缩放html的font-size。这一步就相当于将UI设计稿等比例缩放到屏幕上。

![image](https://user-images.githubusercontent.com/54787049/234517470-1fa18209-bfc8-4f3e-88ce-dcae8c373225.png)

`

**2 使用flex将设计稿横向或纵向拉伸以覆盖整个屏幕。**

`由于UI设计稿的宽高比，与屏幕宽高比不等，造成浏览器会出现一片空地（空白区域）；这个时候，就利用flex的伸缩特性，纵向或横向拉伸设计稿，以全面覆盖屏幕：

![image](https://user-images.githubusercontent.com/54787049/234517514-f0dba6fc-d17d-4886-a0aa-f364202058e4.png)

![image](https://user-images.githubusercontent.com/54787049/234517641-f26f341f-155b-4105-9298-940cc4bcf3a8.png)


1 使用flex布局页面的框架。框架里填装各种小容器，容器内容再使用第一步的rem方案设置元素尺寸；

2 当flex横向拉伸或纵向拉伸时，拉伸的是页面框架，而框架里的内容并没有拉伸（防止内容变胖或变瘦，不好看）

![image](https://user-images.githubusercontent.com/54787049/234517699-830129f4-1799-4413-8f4e-7b55db286312.png)




`
