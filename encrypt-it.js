/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

console.log("Window loaded!");

function encryptIt(){
  const text = document.getElementById("input-text");
  var str = text.value.toLowerCase();

  if(document.getElementById("cipher-type").value == "shift")
  {
    var result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] < 'a' || str[i] > 'z') {
        result += str[i];
      } 
      else if (str[i] == 'z') {
        result += 'a';
      } 
      else { // letter is between 'a' and 'y'
        let letter = str.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    
    text.value = result;
    document.getElementById("result").innerHTML += result + "\n";
  }
  
  if(document.getElementById("cipher-type").value == "random")
  {
    text.value = "random";

  }
}

function reset(){
  const text = document.getElementById("input-text");
  text.value = "";
  document.getElementById("result").innerHTML = "";
}

function Normal(){
  document.getElementById("input-text").style.fontSize = "12pt";
}

function Bigger(){
  document.getElementById("input-text").style.fontSize = "24pt";
}