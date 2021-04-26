let closeButton = document.getElementById("close");
let openButton = document.getElementById("open");
let menu = document.querySelector(".menu-list");
let items = document.querySelectorAll(".item");
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");


/* Menu-bar function */
openButton.onclick = function() {
    openButton.classList.replace("visible", "hidden");
    closeButton.classList.replace("hidden", "visible");
    if(menu.classList.contains("visible") == false){
      menu.classList.add("visible");
    }
}
closeButton.onclick = function() {
    closeButton.classList.replace("visible", "hidden");
    openButton.classList.replace("hidden", "visible");
    if(menu.classList.contains("visible")){
      menu.classList.remove("visible");
    }
}

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

/**
* Addevent listener
*/
for (let item of items) {
  if (item.querySelector(".sub-menu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}

/*image zoom*/

function imgZoom(imgSrc,imgAlt){
  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = imgAlt;
}

// When the user clicks on <span> (x), close the modal
function imgClose() { 
  modal.style.display = "none";
}
