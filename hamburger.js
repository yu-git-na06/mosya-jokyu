// 要素を取得 ※1
var btn = document.getElementById("btn");
var menu = document.getElementById("menu");
var modal = document.getElementById("modal");

// ボタンがクリックされたらclassを追加 ※2
btn.addEventListener("click",function(){
   menu.classList.add("add-menu-sp");
   modal.classList.add("add-modal-sp");
});

// モーダルがクリックされたらclassを削除 ※3
modal.addEventListener("click",function(){
   menu.classList.remove("add-menu-sp");
   modal.classList.remove("add-modal-sp");
});