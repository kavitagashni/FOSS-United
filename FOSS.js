/**
 * @desc function  for active dropdown in small screen......................|
 */
document.getElementById("menu").addEventListener("click", openMenu);
function openMenu() {
    document.getElementById("dropdown").classList.toggle("active");
}

/**
 * @desc function for active nav items after click on dropdown........................|
 */
document.getElementById("secondMenu").addEventListener("clicked", openSecondMenu);
function openSecondMenu() {
    document.getElementById("secondDropdown").classList.toggle("activeAnother");
}
/**
 * @desc function for chage CSS of dropdown.......................|
 */
function menuBars() {
    document.getElementById("menuBars").classList.toggle("icon")
    document.getElementById("nav").classList.toggle("change")
}
