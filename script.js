window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) {
      document.getElementsByClassName("navbar")[0].classList.remove("navsmall")
      } 
    else {
      document.getElementsByClassName("navbar")[0].classList.add("navsmall")
    }}
  console.log(document.getElementsByClassName("navbar"))

  function MandH(){
    window.location.href = "mh.html";
  }
  function UrbanDocs(){
    window.location.href = "urbandocs.html";
  }
  function ridge(){
    window.location.href = "ridge.html";
  }
  function letvand(){
    window.location.href = "letvand.html";
  }
  function painter(){
    window.location.href = "painter.html";
  }
  function pandemonium(){
    window.location.href = "pandemonium.html"
  }
  function angler(){
    window.location.href = "angler.html"
  }