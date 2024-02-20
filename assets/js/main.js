let toggleButton = document.querySelector(".burger");
let isOpen = false;

gsap.set(".menu-item p", {
  y: 225,
});

const timeline = gsap.timeline({ paused: true });

timeline.to(".overlay", {
  duration: 1.5,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power4.inOut",
});

timeline.to(
  ".menu-item p",
  {
    duration: 1.5,
    y: 0,
    stagger: 0.2,
    //clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    ease: "power4.inOut",
  },
  "-=1"
);

toggleButton.addEventListener("click", () => {
  if (isOpen) {
    timeline.reverse();
  } else {
    timeline.play();
  }

  isOpen = !isOpen;
});
