var btn = document.getElementById("btn");
var navMenu = document.getElementById("navMenu");
var filterBtn = document.getElementById("FilBtn");
var fillEff = document.getElementById("filter");
var cardContainer = document.getElementById("the-card-container")
var firstSecBtn = document.getElementById("fi-sec-btn");
var firstContainer = document.getElementById("fir-con");
var secondSecBtn = document.getElementById("sec-sec-btn");
var secondContainer = document.getElementById("sec-con");
var thirdSecBtn = document.getElementById("thi-sec-btn");
var thirdContainer = document.getElementById("thi-con");
btn.addEventListener("click",showMenu)
function showMenu(){
    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active")
    }else{
        navMenu.classList.add("active")
    }
}
filterBtn.addEventListener("click",filter);
function filter(){
    if(fillEff.classList.contains("see")){
        fillEff.classList.remove("see");
        cardContainer.classList.remove("up");
    }else{
        fillEff.classList.add("see");
        cardContainer.classList.add("up")
    }
}
firstSecBtn.addEventListener("click",showEf);
function showEf(){
    if(firstContainer.classList.contains("effect")){
        firstContainer.classList.remove("effect");
    }else{firstContainer.classList.add("effect")}
}
secondSecBtn.addEventListener("click",showEff);
function showEff(){
    if(secondContainer.classList.contains("effect")){
        secondContainer.classList.remove("effect");
    }else{secondContainer.classList.add("effect")}
}
thirdSecBtn.addEventListener("click",showEffe);
function showEffe(){
    if(thirdContainer.classList.contains("effect")){
        thirdContainer.classList.remove("effect");
    }else{thirdContainer.classList.add("effect")}
}