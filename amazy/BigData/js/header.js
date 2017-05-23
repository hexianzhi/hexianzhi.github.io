/**
 * Created by gedune on 2017/5/4.
 */

$(document).ready(function() {

    var mask = $($(".mask").get(0));


    //复用 close和　maak的播放代码。什么设计模式呢？
    var powerDesVideo = $(".power_des_3_video_div").get(0);//这是个 DOM 元素了
    powerDesVideo =  $(powerDesVideo); //转换成 jq Obejct
    var beginPowerDesVideo = $("#power_des_3");
    var video =  $("#power_des_3_video").get(0);

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



    // 写加载数据源的 js 代码
    // <div class = "data_connections_row">
    //     <div class = "data_connections_item">
    //           <img class = "data_item_img" src="img/access.png">
    //              <p class = "data_item_name" > access</p>
    //     </div>
    // </div>
    //

    //模拟数据
    var datasSource = [
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },
        {
            img: "img/access.png",
            name : "access"
        },

    ];

    function loadConnections(maxCount) {
        var dataRow = "",dataItem = "",dataItemImg = "",dataItemName = "";
        var nextDivCount = 5;

        for(var index = 0; index < maxCount; index++){

            if(index === 0){
                dataRow = "<div class='data_connections_row'>";
            }
            dataItem += "<div class='data_connections_item'>";

            var src = datasSource[index].img;
            dataItemImg = "<img class='data_item_img'" + "src='" + src + "'>";

            var name = datasSource[index].name;
            dataItemName = "<p class='data_item_name'>" + name + "</p>";

            dataItem += dataItemImg + dataItemName;
            dataItem += "</div>";


            // 如果只有一个数据的情况
            if(index === 0 && index === (maxCount - 1)){
                dataRow += dataItem +"</div>";
                return dataRow;
            }

            // 最后一个数据了
            if( index === (maxCount - 1)){
                dataRow += dataItem + "</div>";
                return dataRow;
            }

            // 如果是第六个数据了
            if (index % nextDivCount === 0 && index != 0){
                dataRow +=  dataItem + "</div>";
                dataItem = "";

                //如果第六个数据不是最后一个数据就填充新的 row，否则啥都不做等下一轮判断
                if (index != (maxCount - 1)){
                    dataRow += "<div class='data_connections_row'>";
                    nextDivCount += 6;
                }else {
                    return dataRow;
                }

            }
        }
        return dataRow;

    }



    var maxCount = 12;
    var loadConnectionsBtn = $("#data_connections_operation");
    var isLoadAll = true;
    var lookAllConnections= $("#data_connections_operation_all");
    //假设我们的数据一开始能够占满两行！！！
    var data_connections = $(".data_connections");
    data_connections.html(loadConnections(12));

    loadConnectionsBtn.click(function () {
        if (isLoadAll){
            data_connections.html(loadConnections(datasSource.length));
            loadConnectionsBtn.html("显示更少");
            lookAllConnections.css("display","block");
            isLoadAll = false;
        }else {
            data_connections.html(loadConnections(12));
            loadConnectionsBtn.html("显示更多");
            lookAllConnections.css("display","none");
            isLoadAll = true;
        }

    });




    // var beginUserDesVideo = $(".user_cover_vider_container");
    // var videoContainer = $(".video_div");
    // var video2 = $(".video").get(0);
    // beginUserDesVideo.click(function (element) {
    //     float();
    //     video2.play();
    // });
    //
    // mask.click(function () {
    //     close();
    //     video2.pause();
    // });
    //
    // function close() {
    //     if (!checkIsFloat()) {
    //         mask.css("display","none");
    //         videoContainer.css("display","none");
    //     } else {
    //         //啥事都不做
    //     }
    // }
    //
    //
    // // 检查是否有遮罩和视频播放器
    // function checkIsFloat() {
    //     if ( mask.css("display") === "none" && videoContainer.css("display")=== "none") {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // /**
    //  * 显示浮层
    //  */
    // function float() {
    //     mask.css("display","block");
    //     videoContainer.css("display","block");
    // }


});


window.onload =  function () {
    var row_44 = $("#row_44");
    row_44.css("display","block");
    row_44.css("bottom","0px");
};
















