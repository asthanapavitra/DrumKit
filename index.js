var list= document.querySelectorAll(".drum")
for(var i=0;i<list.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var letter= this.innerHTML;
        playSound(letter);
        buttonAnimation(letter);
    })
       
       
}
function playSound(character){
    switch(character){
        case "w":
             var audio= new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
         case "a":
             var audio= new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
         case "s":
             var audio= new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
         case "d":
             var audio= new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
         case "j":
             var audio= new Audio("sounds/snare.mp3");
             audio.play();
             break;
         case "k":
             var audio= new Audio("sounds/crash.mp3");
             audio.play();
             break;
         case "l":
             var audio= new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
     }
}
function buttonAnimation(currkey){
  var activeButton= document.querySelector("."+currkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
  
}
document.addEventListener("keydown",function(event){
    playSound(event.key)
    buttonAnimation(event.key);
})