// Declaring the variables

const mouseInner = document.querySelector(".mouse-inner");
const mouseOuter = document.querySelector(".mouse-outer");
const content = document.querySelector(".content");

document.addEventListener("mousemove", function(e){
    mouseInner.style.top = e.pageY + "px";
    mouseInner.style.left = e.pageX + "px";

    mouseOuter.style.top = e.pageY + "px";
    mouseOuter.style.left = e.pageX + "px";
});

content.addEventListener("mouseenter", function(){
    mouseOuter.classList.add("mouse-outer-big");
});

content.addEventListener("mouseleave", function(){
    mouseOuter.classList.remove("mouse-outer-big");
});