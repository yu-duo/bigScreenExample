function createTagCloud(selectorClass) {
    tagcloud({
        selector: selectorClass,  //元素选择器
        fontsize: 6,       //基本字体大小, 单位px
        radius: 40,         //滚动半径, 单位px 页面宽度和高度的五分之一
        mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
        direction: 0,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    });
}
