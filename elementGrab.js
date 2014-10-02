document
//#document<!DOCTYPE html><html>​…​</html>​<head>​…​</head>​<body>​…​</body>​</html>​

document.head
// <head>​<meta charset=​"utf-8">​<title>​Le DOM playground​</title>​<script src=​"script.js">​</script>​<link rel=​"stylesheet" href=​"styles.css">​</head>​

document.links
// []

document.documentURI
// "file:///Users/Myk/generalAssembly/week1/dom_day_lab/index.html?"

var greeting_h1 = document.getElementById("greeting");
// undefined

greeting_h1
// <h1 id=​"greeting">​Hello there!​</h1>​

greeting_h1.innerText
// "Hello there!"

greeting_h1.innerText = "Hello me"
// "Hello me"

greeting_h1
// <h1 id=​"greeting">​Hello me​</h1>​

greeting_h1.style.background= "#ccc";
// changed background color to gray

var content_div = document.getElementsByClassName("content");
// undefined
content_div
// REturns an array
// [<div class=​"content">​
//      Essentials:
//    ​</div>​]


content_div[0].innerHTML ="hi"
// changes text to "hi"