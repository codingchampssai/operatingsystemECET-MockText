// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// disable F12
document.onkeydown = function(e){
if(e.keyCode == 123){
return false;
}
}

const questions = [

{"q":"Web terminology refers to","options":["Programming languages","Basic terms used in web technology","Database management","Software testing"],"answer":1},
{"q":"A collection of related web pages is called","options":["URL","Website","Browser","Server"],"answer":1},
{"q":"The first page of a website is called","options":["Index page","Web page","Home page","Main server"],"answer":2},
{"q":"Which software is used to access websites?","options":["Web browser","Compiler","Editor","Database"],"answer":0},
{"q":"Example of a web browser","options":["Chrome","Linux","Python","Oracle"],"answer":0},

{"q":"HTML stands for","options":["Hyper Transfer Markup Language","Hyper Text Markup Language","High Text Markup Language","Hyper Tool Markup Language"],"answer":1},
{"q":"HTML was developed by","options":["James Gosling","Tim Berners-Lee","Bill Gates","Dennis Ritchie"],"answer":1},
{"q":"HTML was developed in","options":["1989","1991","1995","2000"],"answer":1},
{"q":"HTML documents start with","options":["<body>","<html>","<head>","<title>"],"answer":1},
{"q":"The visible part of a web page is inside","options":["<head>","<body>","<html>","<meta>"],"answer":1},

{"q":"An HTML element consists of","options":["Tag only","Attribute only","Start tag, content, end tag","Script"],"answer":2},
{"q":"Attributes are written in","options":["End tag","Start tag","Content","Body tag"],"answer":1},
{"q":"Example of attribute","options":["<p>","<html>","href","<head>"],"answer":2},

{"q":"Largest heading tag is","options":["<h1>","<h3>","<h6>","<h4>"],"answer":0},
{"q":"Smallest heading tag is","options":["<h1>","<h6>","<h5>","<h4>"],"answer":1},

{"q":"Bold text tag","options":["<i>","<b>","<u>","<tt>"],"answer":1},
{"q":"Italic text tag","options":["<i>","<b>","<u>","<sup>"],"answer":0},
{"q":"Underline text tag","options":["<b>","<u>","<i>","<sub>"],"answer":1},

{"q":"Unordered list tag","options":["<ol>","<ul>","<li>","<dl>"],"answer":1},
{"q":"Ordered list tag","options":["<ol>","<ul>","<li>","<menu>"],"answer":0},
{"q":"List item tag","options":["<li>","<ol>","<ul>","<dl>"],"answer":0},

{"q":"Table tag","options":["<tr>","<td>","<table>","<th>"],"answer":2},
{"q":"Table row tag","options":["<td>","<tr>","<th>","<table>"],"answer":1},
{"q":"Table data tag","options":["<td>","<th>","<tr>","<table>"],"answer":0},
{"q":"Table heading tag","options":["<th>","<td>","<tr>","<table>"],"answer":0},

{"q":"Tag used to create link","options":["<img>","<a>","<link>","<href>"],"answer":1},
{"q":"Attribute used in <a> tag","options":["src","href","alt","type"],"answer":1},
{"q":"Tag used to display image","options":["<img>","<a>","<picture>","<media>"],"answer":0},
{"q":"Attribute that specifies image location","options":["alt","src","link","path"],"answer":1},

{"q":"Form tag","options":["<input>","<form>","<button>","<textarea>"],"answer":1},
{"q":"Input field tag","options":["<input>","<form>","<label>","<option>"],"answer":0},
{"q":"Dropdown list tag","options":["<select>","<input>","<button>","<form>"],"answer":0},
{"q":"Multi-line input tag","options":["<input>","<textarea>","<select>","<option>"],"answer":1},

{"q":"Tag used to divide browser window","options":["<frame>","<frameset>","<iframe>","<noframe>"],"answer":1},
{"q":"Frame tag loads webpage","options":["<frame>","<frameset>","<iframe>","<body>"],"answer":0},
{"q":"Tag used if frames not supported","options":["<iframe>","<noframes>","<frameset>","<frame>"],"answer":1},
{"q":"Tag used to embed webpage inside page","options":["<frame>","<iframe>","<frameset>","<embed>"],"answer":1},

{"q":"CSS stands for","options":["Computer Style Sheets","Cascading Style Sheets","Color Style Sheets","Creative Style Sheets"],"answer":1},
{"q":"CSS is used for","options":["Programming","Styling web pages","Database","Networking"],"answer":1},
{"q":"Inline CSS is written in","options":["HTML tag","CSS file","Head tag only","Script"],"answer":0},
{"q":"Internal CSS is written in","options":["<body>","<style>","<script>","<title>"],"answer":1},
{"q":"External CSS file extension","options":[".html",".js",".css",".php"],"answer":2},

{"q":"ID selector uses","options":[".","#","*","@"],"answer":1},
{"q":"Class selector uses","options":[".","#","*","@"],"answer":0},
{"q":"Property used to change text color","options":["font","text","color","style"],"answer":2},
{"q":"Property for background color","options":["color","background-color","text-color","bg-color"],"answer":1},
{"q":"Property for space outside element","options":["margin","padding","border","width"],"answer":0},
{"q":"Property for space inside element","options":["margin","padding","border","spacing"],"answer":1},
{"q":"Border property defines","options":["Text size","Background","Border around element","Page title"],"answer":2},
{"q":"CSS box model consists of","options":["margin, border, padding, content","margin, header, padding, body","border, style, content, text","margin, padding, style, color"],"answer":0},

{"q":"XML stands for","options":["Extended Markup Language","Extensible Markup Language","Extra Markup Language","External Markup Language"],"answer":1},
{"q":"Which of the following is true about XML?","options":["Tags are predefined","Tags are user-defined","Tags are fixed","Tags cannot be created"],"answer":1},
{"q":"An XML document must have","options":["Two root elements","Multiple root elements","One root element","No root element"],"answer":2},
{"q":"XML tags are","options":["Case insensitive","Case sensitive","Optional","Not required"],"answer":1},

{"q":"Which language is used for client-side scripting?","options":["PHP","JavaScript","ASP","JSP"],"answer":1},
{"q":"Client-side scripts run on","options":["Web server","Browser","Database","Operating system"],"answer":1},
{"q":"Server-side scripts run on","options":["Browser","Client computer","Web server","CSS engine"],"answer":2},
{"q":"Which is a server-side scripting language?","options":["JavaScript","PHP","HTML","CSS"],"answer":1},

{"q":"JavaScript is a","options":["Programming language","Scripting language","Database language","Query language"],"answer":1},
{"q":"Which tag is used to write JavaScript?","options":["<script>","<js>","<javascript>","<code>"],"answer":0},
{"q":"Which method selects an element by ID in JavaScript?","options":["getElementByName()","getElementById()","getElementByTag()","getElement()"],"answer":1},
{"q":"Which function shows a popup message?","options":["prompt()","confirm()","alert()","message()"],"answer":2},

{"q":"AJAX stands for","options":["Asynchronous JavaScript and XML","Advanced JavaScript and XML","Automatic JavaScript and XML","Applied JavaScript and XML"],"answer":0},
{"q":"AJAX allows","options":["Full page reload","Partial page update","Page deletion","HTML editing"],"answer":1},
{"q":"AJAX uses which object to communicate with server?","options":["XMLHttpRequest","ServerRequest","HTTPObject","RequestServer"],"answer":0},

{"q":"Which library simplifies JavaScript coding?","options":["jQuery","Bootstrap","Angular","React"],"answer":0},
{"q":"jQuery is written in","options":["PHP","Java","JavaScript","HTML"],"answer":2},
{"q":"jQuery syntax starts with","options":["#","$","&","@"],"answer":1},
{"q":"Which selector selects element by ID?","options":[".demo","#demo","demo","*demo"],"answer":1},
{"q":"Which selector selects elements by class?","options":[".demo","#demo","demo","*demo"],"answer":0},
{"q":"Which event runs when document is fully loaded?","options":["load()","ready()","start()","open()"],"answer":1},
{"q":"Which jQuery effect hides an element?","options":["show()","hide()","display()","remove()"],"answer":1},
{"q":"Which jQuery effect shows an element slowly?","options":["fadeIn()","fadeOut()","slideUp()","hide()"],"answer":0},
{"q":"Which jQuery effect hides element slowly?","options":["fadeOut()","fadeIn()","slideDown()","show()"],"answer":0},
{"q":"Which function gets value from input field?","options":["text()","html()","val()","attr()"],"answer":2},
{"q":"Which function changes CSS style?","options":["css()","style()","design()","color()"],"answer":0},

{"q":"PHP stands for","options":["Personal Hypertext Processor","Hypertext Preprocessor","Private Home Page","Hyper Page Processor"],"answer":1},
{"q":"Which symbol is used to declare variables in PHP?","options":["@","#","$","&"],"answer":2},
{"q":"Which protocol is used by web servers to communicate with browsers?","options":["FTP","HTTP","SMTP","TCP"],"answer":1},
{"q":"Which of the following is a web server?","options":["Apache","Java","Python","C++"],"answer":0},
{"q":"Which PHP function returns the length of a string?","options":["strrev()","strlen()","length()","size()"],"answer":1},
{"q":"What will be the output? echo \"ABC\" + 5;","options":["ABC5","Error","5","ABC"],"answer":2},
{"q":"Which method sends form data through the URL?","options":["POST","GET","PUT","DELETE"],"answer":1},
{"q":"Which superglobal variable is used to collect form data using POST method?","options":["$_GET","$_POST","$_FORM","$_DATA"],"answer":1},
{"q":"Which function counts array elements?","options":["length()","size()","count()","array_size()"],"answer":2},
{"q":"Which function reverses a string in PHP?","options":["reverse()","strrev()","strlen()","str_replace()"],"answer":1},
{"q":"Which HTTP method is used to retrieve data?","options":["GET","POST","PUT","DELETE"],"answer":0},
{"q":"Which web server is developed by Microsoft?","options":["Apache","IIS","Nginx","Tomcat"],"answer":1},
{"q":"Which function connects PHP with MySQL?","options":["mysql_connect()","mysqli_connect()","php_connect()","db_connect()"],"answer":1},
{"q":"Which function replaces text in a string?","options":["strrev()","strlen()","str_replace()","replace()"],"answer":2},
{"q":"Which architecture is used in web applications?","options":["Star","Client–Server","Ring","Bus"],"answer":1}
];
questions.sort(() => Math.random() - 0.5);

loadQuiz();


function shuffleOptions(question){

let correct = question.options[question.answer];

question.options.sort(() => Math.random() - 0.5);

question.answer = question.options.indexOf(correct);

}
function loadQuiz(){

const quiz=document.getElementById("quiz");

questions.forEach((q,i)=>{

shuffleOptions(q);

let html=`<div class="question">${i+1}. ${q.q}</div>`;

q.options.forEach((opt,j)=>{
html += `
<div class="options">
<label>
<input type="radio" name="q${i}" value="${j}">
${opt.replace(/</g,"&lt;").replace(/>/g,"&gt;")}
</label>
</div>
`;


});

quiz.innerHTML+=html;

});

}

function submitQuiz(){

let score = 0;

questions.forEach((q,i)=>{

let selected = document.querySelector(`input[name="q${i}"]:checked`);

if(selected && selected.value == q.answer){
score++;
}

});

// store correct score
localStorage.setItem("score", score);
localStorage.setItem("total", questions.length);

// mark quiz attempted


// go to result page
window.location.href = "result.html";

}