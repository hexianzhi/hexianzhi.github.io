/**
 * Created by gedune on 2017/5/14.
 */
window.onload = function () {

    var owlContainer = document.getElementsByClassName("owl-carousel-vertical-container")[0];
    var owlStageControl = document.getElementById("owl-stage-controls");
    var textHeadings = document.getElementsByClassName("text-heading4");

    var apartments = document.getElementsByClassName("owl-carousel-vertical");
    var curElement;
    var nextElement;
    function chooseApart(ele) {

        render(ele, ele.dataset.index);
        renderArrow(ele, ele.parentNode.childNodes);
    };


// 渲染箭头
    function renderArrow(target, allNodes) {

        for (var index = 0; index < allNodes.length; index++) {
            var node = allNodes.item(index);
            if (target === node) {
                node.className = "text-heading4  col-md-3 active";
            } else {
                node.className = "text-heading4  col-md-3 ";
            }
        }
    }

// 根据点击的 index 值切换部门描述
    function render(ele, index) {

        // switch (index) {
        //     case "0":
        //         owlContainer.style.transform = "translate3d(0px, 0px, 0px)";
        //         break;
        //     case "1":
        //         owlContainer.style.transform = "translate3d(0px, 600px, 0px)";
        //         break;
        //     case "2":
        //         owlContainer.style.transform = "translate3d(0px, 1200px, 0px)";
        //         break;
        //     case "3":
        //         owlContainer.style.transform = "translate3d(0px, 1800px, 0px)";
        //         break;
        //
        // }

        // 水平方案，由于动画的实现而被搁置
        switch (index) {
            case "0":
                owlContainer.style.transform = "translate3d(0px, 0px, 0px)";
                break;
            case "1":
                owlContainer.style.transform = "translate3d(-1960px, 0px, 0px)";
                break;
            case "2":
                owlContainer.style.transform = "translate3d(-3920px, 0px, 0px)";
                break;
            case "3":
                owlContainer.style.transform = "translate3d(-5880px, 0px, 0px)";
                break;

        }
        //重置 apartments 的 className;
        for(var apartIndex = 0 ; apartIndex < apartments.length; apartIndex++){
            apartments.item(apartIndex).className = "owl-carousel-vertical ";
        }

        nextElement = apartments.item(index);

        // curElement.className = "owl-carousel-vertical animated fadeOutLeft";
        nextElement.className = "owl-carousel-vertical animated fadeInUp";
        curElement = nextElement;
    };


    function init() {

        curElement = apartments.item(0);

        for (var i = 0; i < textHeadings.length; ++i) {
            var item = textHeadings.item(i);
            //会点击到 img 元素，但 img 不会冒泡，这是为什么？
            item.addEventListener("click", function (e) {
                if (e.target && e.target.nodeName === "A") {
                    chooseApart(e.target);
                    e.preventDefault();
                } else if (e.target && e.target.nodeName === "IMG") {
                    chooseApart(e.target.parentNode.parentNode);
                    e.preventDefault();
                } else if (e.target && e.target.nodeName === "P") {
                    chooseApart(e.target.parentNode);
                    e.preventDefault();
                }
            });
        }


        // });

    }

    if ($(window).width() < 992) {
        //禁止移动端视频播放
        beginPowerDesVideo.unbind("click");
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
    else {
        console.log('More than 960');
    }
    init();
};



