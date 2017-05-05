/**
 * Created by gedune on 2017/5/4.
 */

$(document).ready(function() {

    var mask = $("#mask");
    var powerDesVideo = $("#power_des_3_video_div");
    var beginPowerDesVideo = $("#power_des_3");
    var video =    $("#power_des_3_video").get(0);

    beginPowerDesVideo.click(function (element) {
        float();
        video.play();
    });

    mask.click(function () {
        close();
        video.pause();
    });

    // 什么傻逼语法
    // mask.css("display","none");
    // mask.css("display","block");
    // mask.css("display");

    /**
     * 坑！top 是保留关键字
     */
    function close() {
        if (!checkIsFloat()) {
            mask.css("display","none");
            powerDesVideo.css("display","none");
        } else {
            //啥事都不做
        }
    }


    // 检查是否有遮罩和视频播放器
    function checkIsFloat() {
        if ( mask.css("display") === "none" && powerDesVideo.css("display")=== "none") {
            return true;
        } else {
            return false;
        }
    }


    /**
     * 显示浮层
     */
    function float() {
        mask.css("display","block");
        powerDesVideo.css("display","block");
    }

});


window.onload =  function () {
    var row_44 = $("#row_44");
    row_44.css("display","block");
    row_44.css("bottom","0px");
};
















