/**
 * Created by gedune on 2017/4/20.
 */
var num = 0;

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

var chart = document.getElementById("data");
var m_input = document.getElementById("num-input");

var StackAndQueue = {
    fuck: [],

    leftIn: function () {
        var num = m_input.value;
        StackAndQueue.fuck.unshift(num);
        StackAndQueue.renderChart();
    },

    leftOut: function () {
        StackAndQueue.fuck.shift();
        StackAndQueue.renderChart();
    },

    rightIn: function () {
        var num = m_input.value;
        StackAndQueue.fuck.push(num);
        StackAndQueue.renderChart();
    },

    rightOut: function () {
        StackAndQueue.fuck.pop();
        StackAndQueue.renderChart();
    },

    // 数据改变，重绘自己
    renderChart: function () {
        var str = "";
        chart.innerHTML = "";
        StackAndQueue.fuck.forEach(function (p1, p2, p3) {
            str += "<span class='content'>" + p1 + "</span>";
        })
        chart.innerHTML = str;
    },

}


function bindClick() {
    var leftInBtn = document.getElementById("left-in");
    var RightInBtn = document.getElementById("right-in");
    var leftOutBtn = document.getElementById("left-out");
    var RightOutBtn = document.getElementById("right-out");


    addEvent(leftInBtn, "click", StackAndQueue.leftIn);
    addEvent(leftOutBtn, "click", StackAndQueue.leftOut);
    addEvent(RightInBtn, "click", StackAndQueue.rightIn);
    addEvent(RightOutBtn, "click", StackAndQueue.rightOut);
}

bindClick();
