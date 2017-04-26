/**
 * Created by gedune on 2017/4/25.
 */


function radioChange() {
    if (document.getElementById("inSchoolRadio").checked) {
        document.querySelector(".inSchool").style.display = "inline";
        document.querySelector(".outSchool").style.display = "none";
    }
    else {
        document.querySelector(".inSchool").style.display = "none";
        document.querySelector(".outSchool").style.display = "inline";
    }
}

/**
 * 重要！！可以给 option 设置 value 属性,
 * 其他人代码均很复杂是因为不清楚这个属性的存在
 */
function selectDistrict() {
    
    var data = {
        bj: ["北京大学", "清华大学", "北京航空航天大学"],
        sh: ["复旦大学", "上海交通大学", "同济大学"],
        hz: ["浙江大学", "杭州电子科技大学", "浙江工业大学"]
    };

    var source = document.getElementById("select1");
    var target = document.getElementById("select2");
    target.innerHTML = "";
    var selected = source.options[source.selectedIndex].value;
    for (var i = 0; i < data[selected].length; i++) {
        var opt = document.createElement('option');
        opt.value = data[selected][i];
        opt.innerHTML = data[selected][i];
        document.getElementById('select2').appendChild(opt);
    }

}


function init() {
    document.querySelector(".inSchool").style.display = "inline";
    document.querySelector(".outSchool").style.display = "none";
}

init();