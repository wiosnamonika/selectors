** QuBit JS Programming Test

** Introduction

The task is to create a JavaScript selection engine i.e. a JavaScript function that will return DOM elements given a CSS selector.

** The test contains 3 files

Test.html contains the HTML your function will be tested on
Test.js contains a function which will provide results for your answer in the developer console

Answer.js contains a template function that you should change and submit once you have finished

** Rules
I. You should only modify and submit Answer.js
II. You may not use any JavaScript libraries
III. document.querySelector/document.querySelectorAll may not be used

** Running the test

Open Test.html in a web browser (IE8+, Chrome, Firefox or Safari) and check the
developer console for the test results. The template Answer.js should show 1 of 7 tests passed (as one of the answers should be an empty array)

The template looks like so -
var $ = function (selector) {
var elements = [];
////////////////////
// Your code here //
////////////////////
return elements;
}

Answer.js will be tested on the body of Test.html -
<body>
<div></div>
<div id="some_id" class="some_class some_other_class"></div>
<img id="some_other_id" class="some_class some_other_class"></img>
<input type="text">
</body>

** The following calls to your function will be made. Your function should return an array of DOM elements that match the CSS selector

$("div") - Should return 2 DIVs
$("img.some_class") - Should return 1 IMG
$("#some_id") - Should return 1 DIV
$(".some_class") - Should return 1 DIV and 1 IMG
$("input#some_id") - Should return an empty array
$("div#some_id.some_class") - Should return 1 DIV
$("div.some_class#some_id") - Should return 1 DIV

Try to pass as many tests as possible, the number of tests passed and quality of written code in Answer.js will be considered.