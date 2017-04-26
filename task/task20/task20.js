/**
 * Created by gedune on 2017/4/20.
 */

var text = document.getElementById("text");
var m_input = document.getElementById("num-input");
var chart = document.getElementById("data");
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

var StackAndQueue = {
    fuck: [],

    add: function () {
        var arrWord = text.value.trim().split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function (e) {
            if (typeof(e) != null && typeof (e) != undefined && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });

        StackAndQueue.fuck = StackAndQueue.fuck.concat(arrWord);
        StackAndQueue.renderChart();
        text.value = "";

    },

    search: function () {
        var searchStr = m_input.value.trim();
        //map：每次查询后其实是创建了一个新的字符串再渲染
        // replace：将旧数组匹配到的 子字符串转换成一个新的节点。   ["xx<span> str</span>"]
        // join： 将数组中的各个子项组合起来                         <div></div><div></div>
        chart.innerHTML = StackAndQueue.fuck.map(function (p1) {
            if (typeof(searchStr) != null && typeof (searchStr) != undefined && searchStr.length > 0) {
                p1 = p1.replace(new RegExp(searchStr, "g"), "<span class='search_content'>" + searchStr + "</span>");
            }
            return "<span class=content>" + p1 + "</span>";
        }).join("");

    },

    // 数据改变，重绘自己
    renderChart: function () {

        var str = "";
        chart.innerHTML = "";
        StackAndQueue.fuck.forEach(function (p1) {
            str += "<span class=content>" + p1 + "</span>";
        })
        chart.innerHTML = str;
    }

}


function bindClick() {
    var add = document.getElementById("add");
    var search = document.getElementById("search");

    addEvent(add, "click", StackAndQueue.add);
    addEvent(search, "click", StackAndQueue.search);


}

bindClick();
