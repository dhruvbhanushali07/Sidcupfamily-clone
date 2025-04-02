//cursor animation script
window.addEventListener("DOMContentLoaded",()=>{
  let crsr = document.querySelector(".cursor");
let crsrblr = document.querySelector(".cursorblur");
let allele = document.querySelectorAll(".hovereff");
let nbar = document.querySelector("nav");
let menu = document.querySelectorAll(".menu a h4");
let menuIcon=document.querySelector(".menu-icon")
let openMenu= document.getElementById("open-menu")
let closeMenu= document.getElementById("close-menu")
let mobileMenu=document.querySelector(".mobile-menu")
let swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  lazyLoading: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

let swiper2 = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false
});

// code for opening and closing navbar
menuIcon.addEventListener("click",()=>{
  openMenu.classList.toggle("hidden")
  closeMenu.classList.toggle("hidden")
  mobileMenu.classList.toggle("menu-height")
})


// code to change hovereffect of navbar options when scroll=0 and when scroll>0
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll == 0) {
    menu.forEach((element) => {
      element.classList.toggle("greenhover");
      element.classList.toggle("blackhover");
    });
  } else {
    menu.forEach((element) => {
      element.classList.add("greenhover");
      element.classList.remove("blackhover");
    });
  }
});

// code for custom cursor movement
document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    x: dets.x - 2,
    y: dets.y - 10,
    ease:"ease.out"
  });

  gsap.to(".cursorblur", {
    x: dets.x - 10,
    y: dets.y - 150,
    duration: 1.5,
    ease:"ease.out"

  });
});

// code for hover effect of mouse when hovered on element with class hovereff
allele.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 3.5,
      border: "1px solid white",
      backgroundColor: "transparent",
    });
  });

  element.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1,
      border: "none",
      backgroundColor: "#95c11e",
    });
  });
});



// Scrolling animations


// to change background color of navbar when scrolled
gsap.to("nav", {
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers:true,
    start: "top -10px",
    end: "top -1px",
    scrub: 1,
  },
  backgroundColor: "black",
  height: "110px",
});

// to change background color of main section when scrolled
gsap.to("main", {
  scrollTrigger: {
    trigger: "#page2",
    scoller:'body',
    start: "0",
    end:"500",
    scrub: true,

  },
  backgroundColor: "black",
});

gsap.from(".section8-header-wrapper", {
  scrollTrigger: {
    scroller: "body",
    scrub: 2,
    start:`${document.querySelector("#sec8").offsetTop - window.innerHeight}`,
    end:`${document.querySelector("#sec8").offsetTop - window.innerHeight + 300}`, 
  },
  y:"2rem",

  
});

swiper2.on("slideChange", function () {
  gsap.to("#q1", {
    x: "5rem",
    y: "5rem",
    yoyo: true,
    repeat: 1,
    
  });

  gsap.to("#q2", {
    x: "-5rem",
    y: "-5rem",
    yoyo: true,
    repeat: 1,
  });
  // here "-=1" will make this start with quote 1
});







var alltab = document.querySelectorAll(".tabs");


if(window.innerWidth>1024){
  document.querySelector("#section8-header").style.color= "transparent"


  alltab.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      gsap.to("#section8-header", {
        textStroke: "1px #95c11e",
        duration: 0.5,
      });
    });
  });
  
  alltab.forEach(function (element) {
    element.addEventListener("mouseleave", function () {
      gsap.to("#section8-header", {
        textStroke: "1px white",
        duration: 0.5,
      });
    });
  });
}











})
