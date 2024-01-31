"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Show loader initially
    document.getElementById("center").style.display = "block";
    setTimeout(function () {
      document.getElementById("center").style.display = "none";
      
      // Show your website content
      document.getElementById("tent").style.display = "block";
    }, 3000);
  });



const mainMenu = document.querySelector(".nav-items");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu-list");
const menu_items = document.querySelectorAll(".linkk");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	menu.style.display = "block";
	menu.style.opacity = "0";
	setTimeout(function () {
		menu.style.opacity = "1";
	}, 10);
	// mainMenu.style.display = "flex";
	// mainMenu.style.top = "0";
}
function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});