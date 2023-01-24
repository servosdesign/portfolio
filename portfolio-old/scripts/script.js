function showDiv() {
  const text = document.getElementById('footer-click');
  const img = document.getElementById('footer-click2');

  if (window.innerWidth > 1000) {

    if (text.style.visibility == "hidden" && img.style.visibility == "hidden") {
      text.style.visibility = "visible";
      img.style.visibility = "visible";
    } else {
      text.style.visibility = "hidden";
      img.style.visibility = "hidden";
    }
    if (text.style.marginLeft === "925px" && img.style.marginLeft === "1075px") {
      text.style.marginLeft = "0";
      img.style.marginLeft = "0";
    } else {
      text.style.marginLeft = "925px";
      img.style.marginLeft = "1075px";
    }
  } else {
    if (text.style.visibility == "hidden" && img.style.visibility == "hidden") {
      text.style.visibility = "visible";
      img.style.visibility = "visible";
    } else {
      text.style.visibility = "hidden";
      img.style.visibility = "hidden";
    }
  };
};