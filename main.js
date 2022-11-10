window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
//mouse animation
const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

const menubut = document.querySelector(".menubut");
const menu = document.querySelector(".menu");

const close_nav = document.querySelector(".close");

const nav = document.querySelector(".nav");

const options1 = document.querySelector(".options1");
const options2 = document.querySelector(".options2");
const options3 = document.querySelector(".options3");
const options4 = document.querySelector(".options4");

const body = document.getElementsByTagName("body");

const side_nav_close = document.querySelector("side_nav_close");

let sidebarIconToggle = document.querySelector(".sidebarIconToggle");

const cover = document.querySelector(".cover");

const openSidebarMenu = document.querySelector(".openSidebarMenu");
var sidenav_open = false;

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
sidebarIconToggle.addEventListener("click", () => {
  if (cover.style.display == "block" && sidenav_open == true) {
    enableScroll();
    const windowpos = window.scrollY > 0;
    //console.log("closed " + windowpos);
    if (windowpos == false) {
      menu.classList.remove("scrolling_active", false);
    } else {
      menu.classList.toggle("scrolling_active", true);
    }

    nav.style.transform = "translateX(100%)";
    cover.style.display = "none";
    sidebarIconToggle.checked = false;
    sidenav_open = false;
  } else {
    disableScroll();
    const windowpos = window.scrollY > 0;

    if (windowpos == true) {
      menu.classList.toggle("scrolling_active", false);
    }

    menubut.classList.toggle("menubut_open");

    sidenav_open = true;

    nav.style.transform = "translateX(0)";
    sidebarIconToggle.style.zIndex = "3";
    menubut.style.zIndex = "2";

    cover.style.display = "block";
  }
});

options1.addEventListener("click", () => {
  sidebarIconToggle.click();
});
options2.addEventListener("click", () => {
  sidebarIconToggle.click();
});
options3.addEventListener("click", () => {
  sidebarIconToggle.click();
});
options4.addEventListener("click", () => {
  sidebarIconToggle.click();
});

cover.addEventListener("click", () => {
  sidebarIconToggle.click();
});

if (openSidebarMenu.checked == true) {
  sidebarIconToggle.click();
}


//console.log("screen size "+screen.width);
if(screen.width <= 1000){
  cursor1.style.display = "none";
  cursor2.style.display = "none";
}else{
  mouseAnimation();
}

whenscroll();

function mouseAnimation() {
  document.addEventListener("mousemove", function (e) {
    cursor1.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    cursor2.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  
    cursor1.style.display = "block";
    cursor2.style.display = "block";
  });

  document.addEventListener("mousemove", parallax);

  function parallax(e){
    this.querySelectorAll('.TopBg').forEach(TopBg => {
      const speed =  TopBg.getAttribute('data-speed')

      const x =(window.innerWidth - e.pageX*speed)/100
      const y = (window.innerHeight - e.pageY*speed)/100

      TopBg.style.transform = `translateX(${x}px) translateY(${y}px)` 
    });
  }
}

function whenscroll() {
  window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu");

    const windowpos = window.scrollY > 0;

    if (cover.style.display == "block" || sidenav_open == true) {
      menu.classList.toggle("scrolling_active", false);
    } else {
      menu.classList.toggle("scrolling_active", windowpos);
    }
  });
}

var illustrations = document.querySelector(".TopTriagle") ;
VanillaTilt.init(illustrations, {
  max: 10,
  speed: 400,
});

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

/*

new fullpage('#fullpage', {
				//options here
	autoScrolling:true,
});


*/
