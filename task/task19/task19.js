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
        if (m_input.value >= 10 && m_input.value <= 100) {
            StackAndQueue.fuck.unshift(m_input.value);
            StackAndQueue.renderChart();
            m_input.value = null;
        } else {
            alert("输入的数字得在 10-100之间");
        }


    },

    leftOut: function () {
        StackAndQueue.fuck.shift();
        StackAndQueue.renderChart();
    },

    rightIn: function () {
        if (m_input.value >= 10 && m_input.value <= 100) {
            StackAndQueue.fuck.push(m_input.value);
            StackAndQueue.renderChart();
            m_input.value = null;
        } else {
            alert("输入的数字得在 10-100之间");
        }
    },

    rightOut: function () {
        StackAndQueue.fuck.pop();
        StackAndQueue.renderChart();
    },

    // 数据改变，重绘自己
    renderChart: function () {
        var str = "";
        chart.innerHTML = "";
        StackAndQueue.fuck.forEach(function (p1) {
            str += "<span class=content style='height:" + (p1) + "px; width: 15px;'>" + "</span>";
        });
        chart.innerHTML = str;
    },

    getNumber: function () {

        if (m_input.value >= 10 && m_input.value <= 100) {
            return num;
        } else {
            alert("输入的数字得在 10-100之间");
        }

    },

    produceRandomNum: function () {
        StackAndQueue.fuck = [];

        for (var index = 0; index < 40; index++) {
            StackAndQueue.fuck.push(Math.floor(Math.random() * (300 - 10 + 1) + 10));
        }
        StackAndQueue.renderChart();
    },

    sort: function () {
        var temp;
        //冒泡排序
        var len = StackAndQueue.fuck.length, i, j = 0, delay = 50, timer;

        i = len - 1;
        timer = setInterval(function () {
            if (i < 1) {
                clearInterval(timer);
            }
            if (j == i) {
                --i;
                j = 0;
            }
            if (StackAndQueue.fuck[j] > StackAndQueue.fuck[j + 1]) {
                temp = StackAndQueue.fuck[j];
                StackAndQueue.fuck[j] = StackAndQueue.fuck[j + 1];
                StackAndQueue.fuck[j + 1] = temp;
            }
            ++j;
        }, delay);
    }

}


function bindClick() {
    var leftInBtn = document.getElementById("left-in");
    var RightInBtn = document.getElementById("right-in");
    var leftOutBtn = document.getElementById("left-out");
    var RightOutBtn = document.getElementById("right-out");
    var random = document.getElementById("random");
    var sort = document.getElementById("sort");

    addEvent(leftInBtn, "click", StackAndQueue.leftIn);
    addEvent(leftOutBtn, "click", StackAndQueue.leftOut);
    addEvent(RightInBtn, "click", StackAndQueue.rightIn);
    addEvent(RightOutBtn, "click", StackAndQueue.rightOut);
    addEvent(random, "click", StackAndQueue.produceRandomNum);
    addEvent(sort, "click", StackAndQueue.sort);
}

bindClick();
