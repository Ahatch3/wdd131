const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");

  menu.classList.toggle("hide")

  // if (menu.className != "hide"){
  // menu.classList.add("hide");
  // }
  // else{
  //   menu.classList.remove("hide")
  // }

}

menuButton.addEventListener("click", toggleMenu);


function handleResize(){
    const menuDisp = document.querySelector('.menu')

    if (window.innerWidth > 1000){
        menuDisp.classList.remove("hide");
    }
    else{
        menuDisp.classList.add("hide")
    }
}



