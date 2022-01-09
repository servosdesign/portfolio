function showDiv() {
 
 const text = document.getElementById('footer-click');
 const img = document.getElementById('footer-click2');

  if (text.style.visibility == "hidden" && img.style.visibility == "hidden"){
    text.style.visibility = "visible";
    img.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
    img.style.visibility = "hidden"; 
  }
};