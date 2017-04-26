/**
 * Created by gedune on 2017/4/26.
 */

var btn = document.getElementById("main");
var mask = document.getElementById("mask");
var dialog = document.getElementById("dialog");


/**
 * 坑！top 是保留关键字
 */
function close() {
    if (!checkIsFloat()) {
        mask.style.display = "none";
        dialog.style.display = "none";
    } else {
        //啥事都不做
    }
}

function checkIsFloat() {

    if (mask.style.display == "none" && dialog.style.display == "none") {
        return true;
    } else {
        return false;
    }
}

/**
 * 显示浮层
 */
function float() {
    mask.style.display = "block";
    dialog.style.display = "block";

}


/**
 * 检测用户是否是在拖曳
 * @type {boolean}
 */
var isDown = false;

var deltaX = 0;
var deltaY = 0;
var beginX = 0;
var beginY = 0;

/**
 * 鼠标移动时触发
 * @param event
 */
function move(event) {

    if (isDown) {

        //第一个思路是这里出现问题，每次都是上一次的叠加效果.
        // deltaX = event.clientX - beginX;
        // deltaY = event.clientY - beginY ;

        dialog.style.left = event.clientX - deltaX + "px";
        dialog.style.top = event.clientY - deltaY + "px";

        if (dialog.offsetLeft <= 0) {
            dialog.style.left = 0 + "px";
        }
        if (dialog.offsetTop <= 0) {
            dialog.style.top = 0 + "px";
        }


    }
}

/**
 * 鼠标按下时触发
 * @param event
 */
function down(event) {
    isDown = true;

    beginX = event.clientX;
    beginY = event.clientY;

    //获取鼠标按下坐标跟 弹窗的左上角的差值
    deltaX = event.clientX - dialog.offsetLeft;
    deltaY = event.clientY - dialog.offsetTop;
}

/**
 * 鼠标抬起时触发
 * @param event
 */
function up(event) {
    isDown = false;
}

function init() {
    mask.addEventListener("click", close, false);
    btn.addEventListener("click", float, false);
    dialog.addEventListener("mousedown", function (e) {
        down(e);
    });

    window.addEventListener("mousemove", function (e) {
        move(e);
    });

    dialog.addEventListener("mouseup", function (e) {

        up(e);
    });


}

init();