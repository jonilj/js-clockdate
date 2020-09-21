function openDropdown () {
  document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches("menu-btn")) {
    let dropdowns = document.getElementsByClassName("menu-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}