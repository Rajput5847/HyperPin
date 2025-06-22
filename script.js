let tl = gsap.timeline();

let width = window.innerWidth;
if (width > 800) {
  tl.from(".para h2", {
    x: -5000,
    duration: 0.5,
    delay: 0.5
  });
  
  tl.from(".para .text", {
    x: -5000,
    duration: 0.5
  });
  
  // tl.from("header", {
  //   y: -100,
  //   duration: 1.5
  // });
  
  tl.from('.favicon', {
    y: -10000
  });
  
} else {
  // tl.from("header", {
  //   y: -100,
  //   duration: 1.5
  // });

  tl.from('.favicon', {
    opacity: 0,
    duration: 1.5
  })
}
