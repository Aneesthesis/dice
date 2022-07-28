// Inside index.js, create a new variable
//  called randomNumber1 then set the value
//   of this variable to a random number
//    between 1 and 6.
//    Test it out in the console
//     to make sure it works as expected




var randomNumber1=Math.ceil(Math.random()*6);
var randomDice= "images/dice" + randomNumber1 + ".png";

var namImage= document.querySelectorAll("img")[1];
namImage.setAttribute("src",randomDice);



var randomNumber2=Math.ceil(Math.random()*6);
var randomDice2= "images/dice" + randomNumber2 + ".png";

var neeImage= document.querySelectorAll("img")[3];
neeImage.setAttribute("src",randomDice2);




  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="😒Jaa te bhi kaa yaad rakhegi";
  }
  else if (randomNumber1<randomNumber2) {
      document.querySelector("h1").innerHTML="😎 Every chuha ka jaani has its day😁";
  }
  else{
    document.querySelector("h1").innerHTML="😏chal chal phir se phek, is baar dikha denge";
  }
