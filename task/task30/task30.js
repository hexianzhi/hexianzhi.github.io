/**
 * Created by gedune on 2017/4/24.
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

var inputs = ["name-input", "password-input", "confirmPas-input", "email-input", "phone-input"];

var form = {

    //判断是否全部信息都符合规范
    isAll: true,
    isNull: true,
    password: {
        isPass: false,
        value: 0
    },


    //存储提示信息
    hintText: {
        pass: "格式正确",
        nameNullError: '姓名不能为空',
        passwordNullError: "密码不能为空",
        passwordRepeat: "请重新输入密码",
        email: "邮箱格式为 xx@qq.com",
        phone: "仅支持中国号码",
        codeError: "请输入长度为4~16位字符",
        notSamePas: "密码不一致"
    },

    //存储提示消息格式
    hintColor: {
        red: "red",
        gray: "gray",
        Pass_border: '3px solid lightgreen',
        Error_border: '3px solid red'
    },

    /**
     * 统一验证
     * @param inputElement
     * @param hintElement
     * @constructor
     */
    Vetify: function (inputElement, hintElement) {
        var inputValue = inputElement.value;
        form.isNull = false;
        switch (inputElement.id) {
            case  inputs[0]:
                form.vertifyName(inputElement, hintElement, inputValue);
                break;
            case inputs[1]:
                form.vertifyPassword(inputElement, hintElement, inputValue);
                break;
            case inputs[2]:
                form.vertifyConfirmPassword(inputElement, hintElement, inputValue);
                break;
            case inputs[3]:
                form.vertifyEmail(inputElement, hintElement, inputValue);
                break;
            case inputs[4]:
                form.vertifyPhone(inputElement, hintElement, inputValue);
                break;
        }
        ;
    },


    /**
     * 初始化提示信息
     * @param inputElement
     * @param hintElement
     */
    initHint: function (inputElement, hintElement) {

        switch (inputElement.id) {
            case inputs[0]:
                hintElement.innerHTML = form.hintText.codeError;
                break;
            case inputs[1]:
                hintElement.innerHTML = form.hintText.passwordNullError;
                break;
            case inputs[2]:
                hintElement.innerHTML = form.hintText.passwordRepeat;
                break;
            case inputs[3]:
                hintElement.innerHTML = form.hintText.email;
                break;
            case inputs[4]:
                hintElement.innerHTML = form.hintText.phone;
                break;
        }
        ;
        hintElement.style.color = form.hintColor.gray;
        inputElement.style.border = form.hintColor.gray;
    },

    /**
     * 根据任务29的规则，获取 input 字符的长度
     * @param str
     * @returns {number}
     */
    countLength: function (str) {
        var inputLength = 0;
        for (var i = 0; i < str.length; i++) {
            var countCode = str.charCodeAt(i);
            //利用UTF-8 编码
            if (countCode >= 0 && countCode <= 128) {
                inputLength += 1;
            } else {
                inputLength += 2;
            }
        }
        return inputLength;
    },


    /**
     * 验证名字是否符合规范
     * @param inputElement
     * @param hintElement
     * @param inputValue
     */
    vertifyName: function (inputElement, hintElement, inputValue) {
        if (form.countLength(inputValue) == 0) {
            form.isAll = false;
            hintElement.innerHTML = form.hintText.nameNullError;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        } else if (form.countLength(inputValue) >= 4 && form.countLength(inputValue) <= 16) {
            form.isAll = true;
            hintElement.innerHTML = form.hintText.pass;
            hintElement.style.color = form.hintColor.gray;
            inputElement.style.border = form.hintColor.Pass_border;
        } else {
            form.isAll = false;

            hintElement.innerHTML = form.hintText.codeError;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        }
    },

    /**
     * 验证密码是否符合规范
     * @param inputElement
     * @param hintElement
     * @param inputValue
     */
    vertifyPassword: function (inputElement, hintElement, inputValue) {
        if (form.countLength(inputValue) == 0) {
            form.isAll = false;

            hintElement.innerHTML = form.hintText.passwordNullError;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        } else if (form.countLength(inputValue) >= 4 && form.countLength(inputValue) <= 16) {
            form.password.value = inputValue;
            form.password.isPass = true;
            form.isAll = true;

            hintElement.innerHTML = form.hintText.pass;
            hintElement.style.color = form.hintColor.gray;
            inputElement.style.border = form.hintColor.Pass_border;
        } else {
            form.isAll = false;

            hintElement.innerHTML = form.hintText.codeError;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        }
    },

    /**
     * 确认密码
     * @param inputElement
     * @param hintElement
     * @param inputValue
     */
    vertifyConfirmPassword: function (inputElement, hintElement, inputValue) {
        if (form.password.isPass && form.password.value == inputValue) {
            form.isAll = true;
            hintElement.innerHTML = form.hintText.pass;
            hintElement.style.color = form.hintColor.gray;
            inputElement.style.border = form.hintColor.Pass_border;
        } else {
            form.isAll = false;

            hintElement.innerHTML = form.hintText.notSamePas;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        }
    },

    /**
     * 验证邮箱
     * @param inputElement
     * @param hintElement
     * @param inputValue
     */
    vertifyEmail: function (inputElement, hintElement, inputValue) {
        if ((/(^\w{0,12})(@qq)(\.com$)/).test(inputValue)) {

            form.isAll = true;
            hintElement.innerHTML = form.hintText.pass;
            hintElement.style.color = form.hintColor.gray;
            inputElement.style.border = form.hintColor.Pass_border;
        } else {
            form.isAll = false;

            hintElement.innerHTML = form.hintText.email;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        }
    },

    /**
     * 验证手机号码
     * @param inputElement
     * @param hintElement
     * @param inputValue
     */
    vertifyPhone: function (inputElement, hintElement, inputValue) {
        if ((/^\d{9,9}$/).test(inputValue)) {

            form.isAll = true;
            hintElement.innerHTML = form.hintText.pass;
            hintElement.style.color = form.hintColor.gray;
            inputElement.style.border = form.hintColor.Pass_border;
        } else {
            form.isAll = false;
            hintElement.innerHTML = form.hintText.phone;
            hintElement.style.color = form.hintColor.red;
            inputElement.style.border = form.hintColor.Error_border;
        }
    },

    /**
     * 提交前进行全部信息的验证
     */
    vartifyAll: function () {
        if (form.isAll && !form.isNull) {
            alert("提交成功");
        } else {
            alert("提交失败");
        }
    }

}


function init() {
    var boxes = document.getElementsByClassName("boxes");

    /**
     * 因为 focus 和 blue 都不冒泡，所有只能一个一个来绑定
     * 做法是遍历五个输入框中的 children 分别给他们设置事件处理程序。
     */
    for (var index = 0; index < boxes.length; index++) {

        /**
         *用匿名函数解决闭包问题
         */
        (function (i) {
            var box = boxes[i];

            addEvent(box.children[1], "focus", function () {
                form.initHint(box.children[1], box.children[2]);
            });
            addEvent(box.children[1], "blur", function () {
                form.Vetify(box.children[1], box.children[2]);
            });
        }(index));
    }


    var fuckbtn = document.getElementById("fuckbtn");
    addEvent(fuckbtn, "click", form.vartifyAll);

}

init();