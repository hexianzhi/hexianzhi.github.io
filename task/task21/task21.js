/**
 * Created by gedune on 2017/4/21.
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


var tagInput = document.getElementById("tag-input");
var tagContent = document.getElementById("tag-content");
var interestInput = document.getElementById("interstInput");
var interstContent = document.getElementById("interest-content");

var tagAndInterestObj = {
    tags: [],
    interest: [],

    spiltInput: function (str) {
        var res = str.trim().split(/[,，;；、。.\s\n]+/);
        return res;
    },

    MonitorTagInput: function () {
        //监听键盘的抬起动作，判断输入框值是否是非有效字符，有的话则进行抛弃并录入
        if (/[,，;；、\s\n]+/.test(tagInput.value) || event.keyCode == 13) {
            var data = tagInput.value.trim().split(/[,，;；、。.\s\n]+/);
            var newTag = data[0];

            //去重
            if (tagAndInterestObj.tags.indexOf(newTag) === -1) {
                tagAndInterestObj.tags.push(newTag);
                if (tagAndInterestObj.tags.length > 10) {
                    tagAndInterestObj.tags.shift();
                }
            }
            tagAndInterestObj.renderTags();
            tagInput.value = "";
        }

    },

    MonitorInterestInput: function () {
        var data = tagAndInterestObj.spiltInput(interestInput.value);
        data.forEach(function (p1) {
            if (tagAndInterestObj.interest.indexOf(p1) == -1) {
                if (tagAndInterestObj.interest.length > 10) {
                    tagAndInterestObj.interest.shift();
                }
                tagAndInterestObj.interest.push(data);
            }
        });
        interestInput.value = "";
        tagAndInterestObj.renderInterest();
    },

    renderTags: function () {
        var str = "";
        tagContent.innerHTML = "";
        tagAndInterestObj.tags.forEach(function (p1) {
            str += "<span class='tag'>" + p1 + "</span>"
        });
        tagContent.innerHTML = str;
    },

    renderInterest: function () {

        var str = "";
        interstContent.innerHTML = "";
        tagAndInterestObj.interest.forEach(function (p1) {
            str += "<span class='interest'>" + p1 + "</span>"
        });
        interstContent.innerHTML = str;
    }

}


function bindClick() {
    var tag = document.getElementById("tag-content");

    //添加监听 input 事件,当一个按键被释放时，keyup事件被触发。
    addEvent(tagInput, 'keyup', tagAndInterestObj.renderTags);

    //通过父标签给每个字 span 标签添加 hover 事件，。。
    addEvent(tag, 'mouseover', function (e) {
        if (e.target && e.target.nodeName == "SPAN") {

            e.target.firstChild.insertData(0, '删除');
            e.target.style.background = 'red';
        }
    });

    addEvent(tag, 'mouseout', function (e) {
        if (e.target && e.target.nodeName == "SPAN") {
            e.target.firstChild.deleteData(0, 2);
            e.target.style.background = '#78BCFB'
        }
    })

    //添加删除事件
    addEvent(tag, "click", function (e) {
        if (e.target && e.target.nodeName === "SPAN") {
            tag.removeChild(e.target);
        }
    });

    var comfirmInterst = document.getElementById("comfirm-interst");
    addEvent(comfirmInterst, "click", tagAndInterestObj.MonitorInterestInput);


}

bindClick();
