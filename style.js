var dark=document.getElementById("dark");
var light=document.getElementById("light");
var header=document.getElementById("header");
var page=document.getElementById("box");
var text=document.getElementById("text");

function setDark(){
document.body.style.background="url('dark.jpg')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundPosition="center";
//document.body.style.backgroundOrigin="content-box";
document.body.style.backgroundSize="cover";
document.body.style.transition="2s";
header.style.background="#2d3436";
box.style.background="#636e72";
page.style.color="#ffffe6";
text.style.color="#ffffe6";
}

function setLight(){
document.body.style.background="url('light.jpg')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundPosition="center";
//document.body.style.backgroundOrigin="content-box";
document.body.style.backgroundSize="cover";
document.body.style.transition="2s";
header.style.background="#e74c3c";
box.style.background="white";
page.style.color="black";
text.style.color="black";
}


// LOCALSTORAGE SHIT STARTS HERE
var a=localStorage.getItem("text-list");

if(a==null){
localStorage.setItem("text-list","[]");
}
var arr=JSON.parse(localStorage.getItem('text-list'));

//ONCLICK SUBMIT BUTTON 
function sub(){
arr.push(text.value);
localStorage.setItem("text-list",JSON.stringify(arr));
location.reload();
}




//LOOPING THROUGH AND CONNECTING WITH DOM.
function looper(){
var notebook=document.getElementById("notebook");
var gen_val=JSON.parse(localStorage.getItem("text-list"));
for(var i=0;i<gen_val.length;i++)
{
notebook.appendChild(makenote(gen_val[i]));
}
}
looper();

// DYNAMIC DOM 
function makenote(in_value){
var note_s=document.createElement('div');
var p_line=document.createElement('p')
note_s.classList.add('note');
note_s.appendChild(p_line)
// We need to add TextNode.
var intext = document.createTextNode(in_value);
console.log("Ye aarha: "+in_value);
p_line.appendChild(intext);
//var delicon = document.createElement('i');
// delicon.id="bin";
// delicon.setAttribute("aria-hidden", "true");
// delicon.setAttribute("onclick","del()");
// delicon.classList.add('fa');
// delicon.classList.add('fa-trash');
// note_s.appendChild(delicon);
return note_s;
}
//KEYROLE
text.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        sub();
    }
});


// LOCAL STORAGE SHIT ENDS HERE