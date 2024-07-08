document.querySelector("button").addEventListener("click", handClick);
// listen to when the button is called
// and calls the function
// we don't add the () to the handclick because it would call the function right away when it 
// reads the line. So we don't add the () so it calls the funciton only when its clicked.

// go theorught the number of drum buttons
var numOfDrumButtons = document.querySelectorAll(".drum").length
for(var i=0; i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handClick );
    // var buttonInnerHTML = this.innerHTML;

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

    function makeSound(key){
    // this.style.color ="white";
    var buttonInnerHTML = this.innerHTML;
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
    
        default: // kind of like the else
            console.log(buttonInnerHTML);
            break;
    }
    
}

function handClick(){
    // this.style.color ="white";
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML)
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
    
        default: // kind of like the else
            console.log(buttonInnerHTML);
            break;
    }
    
}


// can also habe an anoonymous function
// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked");
// });
function buttonAnimation(currentKey){
    var buttonInnerHTML = this.innerHTML;
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


debugger;
handClick();


