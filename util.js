function showNav() {
  fetch('nav.html')
  .then(res => res.text())
  .then(text => {
      let oldelem = document.querySelector("#include-nav");
      let newelem = document.createElement("nav");
      newelem.innerHTML = text;
      oldelem.parentNode.replaceChild(newelem,oldelem);
  })
}