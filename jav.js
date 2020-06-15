

for(i=0;i<=6;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttoninnerHtml= this.innerHTML;
  makeSound(buttoninnerHtml);
  buttonAnimation(buttoninnerHtml);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key)
{
  switch (key) {
    case "w":
    var tom1= new Audio("sounds/ring1.mp3");
    tom1.play();
      break;
      case "a":
      var tom2= new Audio("sounds/ring2.mp3");

      tom2.play();
        break;
        case "s":
        var tom3= new Audio("sounds/ring3.mp3");

        tom3.play();

          break;
          case "d":
          var tom4= new Audio("sounds/ring4.mp3");

          tom4.play();

            break;
            case "j":
            var snare= new Audio("sounds/ring5.mp3");

            snare.play();


              break;
              case "k":
              var kick= new Audio("sounds/ring6.mp3");

              kick.play();

                break;
                case "l":
                var crash= new Audio("sounds/ring7.mp3");

                crash.play();

                  break;
    default:
    sound.pause();
    sound.currentTime = 0;
  }
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
