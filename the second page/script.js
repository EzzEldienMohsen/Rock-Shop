var cards = document.querySelectorAll(".get");
var details = document.getElementById("the-details");
var care = document.getElementById("the-care");
cards.forEach((card)=>{
    card.addEventListener("click",showCard);
    function showCard(){
        var thisCard = event.target;
        cards.forEach((card)=>{
            card.classList.remove("clicked");
        })
        thisCard.classList.add("clicked");
    
    if(thisCard.classList.contains("clicked") && thisCard.classList.contains("details")){
        care.classList.remove("show");
        details.classList.add("show");
    }else{care.classList.add("show");
    details.classList.remove("show");}
}
})
//second effect
var counter = document.getElementById("counter");
var increase = document.getElementById("inc");
var decrease = document.getElementById("dec");
var i = 1;
increase.addEventListener("click",theIinc)
function theIinc(){
    i++
    counter.innerHTML =i
}
decrease.addEventListener("click",theDec)
function theDec(){
    i--
    counter.innerHTML =i
}