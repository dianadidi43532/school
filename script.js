var tl = gsap.timeline();
tl.from(".top", {
   y:-100,
   duration:.5,
   opacity:0,
})
tl.from(".nav-bar", {
    y:-100,
    duration:.5,
 })
 tl.from(".number,.gmail,.location", {
   y:-30,
   duration:.5,
   stagger:.2,
   opacity:0,
})
 tl.from("li", {
    y:-30,
    duration:.5,
    stagger:.2,
    opacity:0,
 })

