
// window.onload = function(){
//    var greeting_text = document.getElementById("greeting");

//     greeting_text.innerText = "Hi Planet Earth";
//     greeting_text.style.background = "#ccc";
// };

var console_text = function(){
  var styling = document.querySelectorAll("li");
  for (var i = 0; i < styling.length; i++) {
      styling[i].style.background = "yellow";
  }
};


// var styleListElements = function(){
//   var list_items = document.querySelectorAll("div#essentials > ul > li");
//     for (var i = list_items.length - 1; i >= 0; i--) {
//     list_items[i].style.backgroundColor = "yellow";
//   };
// }



var initialize = function(){

 var greeting_text = document.getElementById("greeting");

  greeting_text.innerText = "Hi Planet Earth";



  console.log("Did it work?");
  console_text();

};
window.onload = initialize;
console.log("initializing...");
