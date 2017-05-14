/**
 * Created by gedune on 2017/5/14.
 */


var owlContainer = document.getElementsByClassName("owl-carousel-vertical-container")[0];
var owlStageControl = document.getElementById("owl-stage-controls");
var textHeadings = document.getElementsByClassName("text-heading4");

var lastElement;
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
};

function init() {
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

    // owlStageControl.addEventListener("click", function (e) {
    //     if (e.target && e.target.nodeName === "A") {
    //         chooseApart(e.target);
    //         e.preventDefault();
    //         return false;
    //     }
    // });

}

init();
