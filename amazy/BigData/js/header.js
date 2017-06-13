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

    //因为响应式开发的需要，该包含 dataConnectionRow 的逻辑被废除
    // function loadConnections(maxCount) {
    //     var dataRow = "",dataItem = "",dataItemImg = "",dataItemName = "";
    //     var nextDivCount = 5;
    //
    //     for(var index = 0; index < maxCount; index++){
    //
    //         if(index === 0){
    //             dataRow = "<div class='data_connections_row'>";
    //         }
    //         dataItem += "<div class='data_connections_item'>";
    //
    //         var src = datasSource[index].img;
    //         dataItemImg = "<img class='data_item_img'" + "src='" + src + "'>";
    //
    //         var name = datasSource[index].name;
    //         dataItemName = "<p class='data_item_name'>" + name + "</p>";
    //
    //         dataItem += dataItemImg + dataItemName;
    //         dataItem += "</div>";
    //
    //
    //         // 如果只有一个数据的情况
    //         if(index === 0 && index === (maxCount - 1)){
    //             dataRow += dataItem +"</div>";
    //             return dataRow;
    //         }
    //
    //         // 最后一个数据了
    //         if( index === (maxCount - 1)){
    //             dataRow += dataItem + "</div>";
    //             return dataRow;
    //         }
    //
    //         // 如果是第六个数据了
    //         if (index % nextDivCount === 0 && index != 0){
    //             dataRow +=  dataItem + "</div>";
    //             dataItem = "";
    //
    //             //如果第六个数据不是最后一个数据就填充新的 row，否则啥都不做等下一轮判断
    //             if (index != (maxCount - 1)){
    //                 dataRow += "<div class='data_connections_row'>";
    //                 nextDivCount += 6;
    //             }else {
    //                 return dataRow;
    //             }
    //
    //         }
    //     }
    //     return dataRow;
    //
    // }

    function loadConnections(maxCount) {
        var dataItem = "",dataItemImg = "",dataItemName = "";

        for(var index = 0; index < maxCount; index++){

            dataItem += "<div class='data_connections_item col-xs-6 col-sm-4 col-md-3 col-lg-2'>";

            var src = datasSource[index].img;
            dataItemImg = "<img class='data_item_img'" + "src='" + src + "'>";

            var name = datasSource[index].name;
            dataItemName = "<p class='data_item_name '>" + name + "</p>";

            dataItem += dataItemImg + dataItemName;

            dataItem += "</div>";
        }
        return dataItem;
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

    function IsPC()
    {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }

    //移动端代码！！！！
   if (!IsPC()){
       //对菜单进行移动端交互的处理
       let mobileDropMenu = $(".mobile-menu");
       let Menu = $(".menu");
       let UpperRight_dropDown_menu_icon = $(".mobile-menu-icon");

       let isMenuDrop = false;
       mobileDropMenu.click(function () {
           if ( !isMenuDrop){
               UpperRight_dropDown_menu_icon.removeClass("glyphicon-list");
               UpperRight_dropDown_menu_icon.addClass("glyphicon-remove");
               UpperRight_dropDown_menu_icon.css("opacity","")

               Menu.slideDown("300");

               isMenuDrop = true;

           }else {
               UpperRight_dropDown_menu_icon.removeClass("glyphicon-remove");
               UpperRight_dropDown_menu_icon.addClass("glyphicon-list");
               Menu.slideUp("300");

               isMenuDrop = false;
           }
       });

       let menu_item = Menu.children(".menu_item");

       let previousTag;
       let is_item_fold = false;

       // Menu.children().each(function () {
       //     $(this).click(function () {
       //         $(this.children.item(1)).slideToggle("300");
       //         $(this.children.item(1)).slideToggle("300");
       //     });
       //
       // });

       // var MenuDropOb = function(el, multiple) {
       //     this.el = el || {};
       //     this.multiple = multiple || false;
       //
       //     // Variables privadas
       //     var menu_item = this.el.find('.menu_item');
       //     // Evento
       //     menu_item.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
       // }
       //
       // MenuDropOb.prototype.dropdown = function(e) {
       //     var $el = e.data.el;
       //
       //     var $this = $(this);
       //     var $next = $this.next();
       //
       //     $next.slideToggle();
       //
       //     if (!e.data.multiple) {
       //         $el.find('.menu_drop').not($next).slideUp();
       //     };
       // }
       //
       //
       // var accordion = new MenuDropOb($('.Menu'), false);


       Menu.click(function (event) {
           let can_unfold = false;
           // console.log(event);
           //根据点击的标签判断是否触发折叠效果
           if ( event.target && event.target.className ==="menu_item"){
                event.target = event.target;
                can_unfold = true;
           }
           if ( event.target && event.target.className ==="menu_item_link")
           {
               event.target = event.target.parentNode;
               can_unfold = true;
           }

           console.log(event.target);
         if (can_unfold){

             //收起除了此菜单其他菜单的子菜单。
             let not_event = $(event.target.parentNode).find('.menu_item').not($(event.target));
             not_event.find('.menu_drop').each(function () {
                 $( this ).slideUp("300");
             })

             // 用两个点实现折叠与展开功能。
             if (previousTag === event.target){
                 is_item_fold = !is_item_fold;
             }else {
                 is_item_fold = false;
             }

             if (!is_item_fold){
                $(event.target.children.item(1)).slideDown("300");
             }else {
                 $(event.target.children.item(1)).slideUp("300");
             }

             previousTag = event.target;
         }

       });




   }



});


window.onload =  function () {
    var row_44 = $("#row_44");
    row_44.css("display","block");
    row_44.css("bottom","0px");
};
















