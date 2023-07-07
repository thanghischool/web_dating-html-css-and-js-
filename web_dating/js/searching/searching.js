var data = [
        [{
            id: 1,
            name: 'Du lịch',
            icon: 'img/searching/dulich.png',
            checked: false
        },
        {
            id: 2,
            name: 'Học tập',
            icon: 'img/searching/hoctap.png',
            checked: false
        },
        {
            id: 3,
            name: 'Thức ăn',
            icon: 'img/searching/thucan.png',
            checked: false
        },
        {
            id: 4,
            name: 'Tình cảm',
            icon: 'img/searching/tinhcam.png',
            checked: false
        },
        {
            id: 5,
            name: 'Nghệ thuật',
            icon: 'img/searching/nghethuat.png',
            checked: false
        },
        {
            id: 6,
            name: 'Công nghệ',
            icon: 'img/searching/congnghe.png',
            checked: false
        },
        {
            id: 7,
            name: 'Làm đẹp',
            icon: 'img/searching/lamdep.png',
            checked: false
        },
        {
            id: 8,
            name: 'Sáng tạo',
            icon: 'img/searching/sangtao.png',
            checked: false
        },
        {
            id: 9,
            name: 'Trò chơi',
            icon: 'img/searching/trochoi.png',
            checked: false
        },
        {
            id: 10,
            name: 'Kinh nghiệm',
            icon: 'img/searching/kinhnghiem.png',
            checked: false
        },
        {
            id: 11,
            name: 'Công việc',
            icon: 'img/searching/congviec.png',
            checked: false
        },
        {
            id: 12,
            name: 'Điện ảnh',
            icon: 'img/searching/dienanh.png',
            checked: false
        },
        {
            id: 13,
            name: 'Sách',
            icon: 'img/searching/sach.png',
            checked: false
        },
        {
            id: 14,
            name: 'Âm nhạc',
            icon: 'img/searching/amnhac.png',
            checked: false
        },
        {
            id: 15,
            name: 'Thể thao',
            icon: 'img/searching/thethao.png',
            checked: false
        }
    ],
    [
        {
            id: 1,
            name: "Nam",
            icon: 'img/searching/male.png',
            checked: false
        },
        {
            id: 2,
            name: "Nữ",
            icon: 'img/searching/female.png',
            checked: false
        },
        {
            id: 3,
            name: "LGBT",
            icon: 'img/searching/LGBT.png',
            checked: false
        }
    ]
];
function resetChecked(){
    for (var i = 0; i < data.length; i++) {
        data[i].forEach(function(value){
            value.checked = false;
        });
    };
}
/////////////////////////////////////////////
var valueRange = document.getElementById("value-range");
        var range = document.getElementById("range");
        range.addEventListener("input",function(e) {
            valueRange.innerHTML = range.value;
        });
        range.addEventListener("change",function(e) {
            valueRange.innerHTML = range.value;
        });
var thrumb = document.querySelector(".range-form #range");
thrumb.addEventListener("input",function(e) {
    var v = (thrumb.clientWidth/(thrumb.max-thrumb.min));
    thrumb.style.background = `linear-gradient(90deg, #ED147D ${v.toFixed(6)*(thrumb.value-thrumb.min)+10*((thrumb.max-thrumb.value)-(thrumb.value-thrumb.min))/34}px, rgb(214,214,214) 0%)`;
});
window.onresize = function (){
    var v = (thrumb.clientWidth/(thrumb.max-thrumb.min));
    thrumb.style.background = `linear-gradient(90deg, #ED147D ${v.toFixed(6)*(thrumb.value-thrumb.min)+10*((thrumb.max-thrumb.value)-(thrumb.value-thrumb.min))/34}px, rgb(214,214,214) 0%)`;
}
//////////////////////////////////////////////////////////////////
var up1 = document.querySelector(".topic span i");
var up2 = document.querySelector(".age span i");
var up3 = document.querySelector(".gender span i");
var box1 = document.querySelector(".topic-form");
var box2 = document.querySelector(".range-form");
var box3 = document.querySelector(".gender-form");
var topic = document.querySelector(".topic");
var gender = document.querySelector(".gender");
var age = document.querySelector('.age');
var input = document.querySelector('input[type="text"]');
var cancel = document.querySelector(".cancel-btn");
var searchbtn = document.querySelector(".search-button")
/////////////////////////////
function showRange(){
    box2.style.display = "block";
}
age.addEventListener('click',function(e){
    box3.style.display = "none";
    up3.style.transform = "rotate(0deg)";
    box1.style.display = "none";
    up1.style.transform = "rotate(0deg)";
    if (box2.style.display == "none"){
        showRange();
        up2.style.transform = "rotate(180deg)";
    } else {
        box2.style.display = "none";
        up2.style.transform = "rotate(0deg)";
    }
});
////////////////////////////
function showGender(){
    box3.style.display = "inline-flex";
}
gender.addEventListener("click",function(e){
    box2.style.display = "none";
    up2.style.transform = "rotate(0deg)";
    box1.style.display = "none";
    up1.style.transform = "rotate(0deg)";
    if (box3.style.display == "none"){
        showGender();
        up3.style.transform = "rotate(180deg)";
    } else {
        box3.style.display = "none";
        up3.style.transform = "rotate(0deg)";
        }
});
var items = document.getElementsByClassName("item");
function choosed(value){
    if (items[value].style.backgroundColor == "rgba(237, 20, 125, 0.8)"){
        items[value].style.backgroundColor = "#FFF";
    } else items[value].style.backgroundColor = "rgba(237, 20, 125, 0.8)";
}
///////////////////////////////////////
function showTopic(){
    box1.style.display = "inline-flex";
}
topic.addEventListener("click",function(e){
    box3.style.display = "none";
    up3.style.transform = "rotate(0deg)";
    box2.style.display = "none";
    up2.style.transform = "rotate(0deg)";
    if (box1.style.display == "none"){
        showTopic();
        up1.style.transform = "rotate(180deg)";
    } else {
        box1.style.display = "none";
        up1.style.transform = "rotate(0deg)";
        }
});
function loadData(){
    var content = data[0].map(function(value){
        return `<div class="item1" style="background: #FFF" data_id="${value.id}" onclick="checked(${value.id-1},0,'item1')">
        <img src="${value.icon}">
        ${value.name}
    </div>`;
    }).join("");
    var topicForm = document.querySelector(".topic-form");
    topicForm.innerHTML = content;
    content = data[1].map(function(value){
        return `<div class="item2" style="background: #FFF" data_id="${value.id}" onclick="checked(${value.id-1},1,'item2')">
        <img src="${value.icon}">
        ${value.name}
    </div>`;
    }).join("");
    var genderForm = document.querySelector(".gender-form");
    genderForm.innerHTML = content;
}
loadData();
function checked(value,key,item){
    var items = document.getElementsByClassName(item);
    if (!(data[key][value].checked)){
        items[value].style.backgroundColor = "rgba(237, 20, 125, 0.8)";
        data[key][value].checked = true;
    } else {
        items[value].style.backgroundColor = "#FFF";
        data[key][value].checked = false;
    }
}
///////////////////////////////////////
topic.addEventListener("click",function(){
    input.style.display = "none";
    cancel.style.display = "flex";
    searchbtn.style.display = "flex";
});
gender.addEventListener("click",function(){
    input.style.display = "none";
    cancel.style.display = "flex";
    searchbtn.style.display = "flex";
});
age.addEventListener("click",function(){
    input.style.display = "none";
    cancel.style.display = "flex";
    searchbtn.style.display = "flex";
});
///////////////////////////////////////
function clear(){
    resetChecked();
    loadData();
    range.value = 16;
    thrumb.style.background = `linear-gradient(90deg, #ED147D 0px, rgb(214,214,214) 0%)`;
    input.value="";
    input.style.display = "flex";
    cancel.style.display = "none";
    searchbtn.style.display = "none";
    box3.style.display = "none";
    up3.style.transform = "rotate(0deg)";
    box2.style.display = "none";
    up2.style.transform = "rotate(0deg)";
    box1.style.display = "none";
    up1.style.transform = "rotate(0deg)";

}
cancel.addEventListener("click", clear);