/**
 * Created by gedune on 2017/4/25.
 */



function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
    else {
        element["on" + event] = listener;
    }
}

var root = document.getElementById("root");
var btnPreOrder = document.getElementById("preOrder");
var btnInOrder = document.getElementById("inOrder");
var btnPostOrder = document.getElementById("postOrder");
var timer = 0;


var tree = {

    preOrder: function (root) {
        if (root) {
            tree.showNode(root);
            tree.preOrder(root.children[0]);
            tree.preOrder(root.children[1]);
        }
    },

    inOrder: function (root) {
        if (root) {
            tree.preOrder(root.children[0]);
            tree.showNode(root);
            tree.preOrder(root.children[1]);
        }
    },

    postOrder: function (root) {
        if (root) {
            tree.preOrder(root.children[0]);
            tree.preOrder(root.children[1]);
            tree.showNode(root);
        }
    },

    showNode: function (node) {
        node.style.backgroundColor = "#ffffff";
        node.style.backgroundColor = "#ffffff";
        setTimeout(function () {
            node.style.backgroundColor = "#ff524a";
        }, timer += 500);

        setTimeout(function () {
            node.style.backgroundColor = "#ffffff";
        }, timer += 500);
    }

}

function init() {
    /**
     * 每次点击事件都会回调 function函数
     */
    addEvent(btnPreOrder, "click", function () {
        tree.preOrder(root);
        timer = 0;
    });
    addEvent(btnInOrder, "click", function () {
        tree.inOrder(root);
        timer = 0;
    });

    addEvent(btnPostOrder, "click", function () {
        tree.postOrder(root);
        timer = 0;
    });

}

init();