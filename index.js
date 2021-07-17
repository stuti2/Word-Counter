
var arr = document.querySelectorAll(".btn-grad");

arr[0].addEventListener("click", function(){
  arr[0].classList.add("pressed");

  setTimeout(function(){
    arr[0].classList.remove("pressed");
  },100);


  var text = document.getElementById("input-text").value;
  var chars = document.getElementById("input-text").value.length;
  var word = document.getElementById("input-text").value.trim().split(/\s+/).length;
  var sentence = document.getElementById("input-text").value.trim().split(/([.?!])\s*(?=[A-Z])/g).length;

  if(text){
    document.getElementById("characters").innerHTML = chars
    document.getElementById("words").innerHTML = word;
    document.getElementById("sentences").innerHTML = sentence;
  }
});
