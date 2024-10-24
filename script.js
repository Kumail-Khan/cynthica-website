const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let timeout;

function suqeezCircle() {
  xscale = 1;
  yscale = 1;

  xprev = 0;
  yprev = 0;

  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    cursorShadow(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}
suqeezCircle();

function cursorShadow(xscale, yscale) {
  window.addEventListener("mousemove", (dets) => {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
cursorShadow();

function firstPageAnim() {
  let tl = gsap.timeline();

  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.esaeInOut,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.to(".boundingelem2", {
    y: 0,
    ease: Expo.esaeInOut,
    duration: 1,
    stagger: 0.2,
  });

  tl.from("#hero-footer", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -0.5,
    ease: Expo.esaeInOut,
  });
}
firstPageAnim();

// function elements() {
//   document.querySelectorAll(".elem").forEach((elem) => {
//     elem.addEventListener("mousemove", (dets) => {
//       gsap.to(elem.addEventListener("img"), {
//         opacity: 1,
//       });
//     });
//   });
// }
// elements();

document.querySelectorAll(".elem").forEach((elem) => {
  elem.addEventListener("mousemove", (dets) => {
    var diffy = dets.clientY - elem.getBoundingClientRect().top;
    var diffx = dets.clientX - elem.getBoundingClientRect().left;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diffy,
      left: diffx,
    });
  });

  elem.addEventListener("mouseleave", (dets) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
      duration: 0.5,
    });
  });
});
