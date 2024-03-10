
document.querySelectorAll("button")[0].addEventListener("click",function (){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
});

document.querySelectorAll("button")[1].addEventListener("click",function (){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
});
document.querySelectorAll("button")[2].addEventListener("click",function (){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
});
document.querySelectorAll("button")[3].addEventListener("click",function (){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
});
document.querySelectorAll("button")[4].addEventListener("click",function (){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
});
document.querySelectorAll("button")[5].addEventListener("click",function (){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
});
document.querySelectorAll("button")[6].addEventListener("click",function (){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
});
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        this.style.color="white";
    })
}
document.querySelectorAll("button")[0].addEventListener("keydown",(w)=>{
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
});
document.querySelectorAll("button")[1].addEventListener("keydown", (a)=>{
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
});
document.querySelectorAll("button")[2].addEventListener("keydown", (s)=>{
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
});
document.querySelectorAll("button")[3].addEventListener("keydown", (d)=>{
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
});
document.querySelectorAll("button")[4].addEventListener("keydown", (j)=>{
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
});
document.querySelectorAll("button")[5].addEventListener("keydown", (k)=>{
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
});
document.querySelectorAll("button")[6].addEventListener("keydown", (l)=>{
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
});
