//get the div for the ham menu
const HamburgerMenu = document.getElementById("hamB");
//event listern to notify when is clicked
HamburgerMenu.onclick= function togglemenu(){
    const nav = document.getElementById("navlinks");
    nav.classList.toggle("show");
}