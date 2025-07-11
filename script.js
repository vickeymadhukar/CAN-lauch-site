
let mm = gsap.matchMedia();


mm.add("(max-width: 799px)", () => {
  
 
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 80%",
      end: "50% 50%",
      // markers: true,
      scrub: true
    }
  });

  tl.to("#fanta", {
    top: "117%",
    left: "6%",
  }, 'a')
  .to("#orange2", {
    top: "134%",
    left: "40%",
    rotate: "360deg"
  }, 'a')
  .to("#orange", {
    top: "109%",
    left: "2%"
  }, 'a')
  .to("#leaf", {
    rotate: "290deg",
    top: "106%",
    left: "63%"
  }, 'a')
  .to("#leaf2", {
    rotate: "80deg",
    top: "100%",
    left: "5%"
  }, 'a');

  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 80%",
      end: "30% 80%",
       markers: true,
      scrub: true
    }
  });
  
  tl2.from(".lemon", {
    rotate: "-90deg",
    top: "100%",
    left: "-90%"
  }, 'c')
  .from("#sprite", {
    rotate: "-60deg",
    top: "100%",
    left: "100%"
  }, 'b')
  .from("#pepsi", {
    rotate: "60deg",
    top: "100%",
    right: "100%"
  }, 'b')
  .from(".orng", {
    rotate: "60deg",
    top: "100%",
    right: "-90%"
  }, 'c')
  .to("#orange2", {
    top: "265%",
    left: "22%",
    width: "58%"
    
    // left: 22%;
    // top: 265%;
    // width: 58%;

  }, 'c')
  .to("#fanta", {
    top: "276%",
    left: "-18%",
    width: "136%",
    height: "46%"
    
    // left: -18%;
    // top: 276%;
    // height: 46%;
    // width: 136%;
  }, 'c');

  // List animation - Mobile
  var tm = gsap.timeline();
  tm.from("#list", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
    stagger: 0.3
  });

  // Return cleanup function for mobile
  return () => {
    // Cleanup will be handled automatically by GSAP
  };
});

// Desktop animations (min-width: 800px)
mm.add("(min-width: 800px)", () => {
  
  // Section Two Animation - Desktop
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 80%",
      end: "50% 50%",
      // markers: true,
      scrub: true
    }
  });

  tl.to("#fanta", {
    top: "120%",
    left: "0%",
  }, 'a')
  .to("#orange2", {
    top: "160%",
    left: "20%",
    rotate: "360deg"
  }, 'a')
  .to("#orange", {
    top: "160%",
    left: "80%"
  }, 'a')
  .to("#leaf", {
    rotate: "290deg",
    top: "100%",
    left: "70%"
  }, 'a')
  .to("#leaf2", {
    rotate: "80deg",
    top: "100%",
    left: "5%"
  }, 'a');

  // Section Three Animation - Desktop
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 80%",
      end: "50% 50%",
      // markers: true,
      scrub: true
    }
  });
  
  tl2.from(".lemon", {
    rotate: "-90deg",
    top: "100%",
    left: "-90%"
  }, 'c')
  .from("#sprite", {
    rotate: "-60deg",
    top: "100%",
    left: "100%"
  }, 'b')
  .from("#pepsi", {
    rotate: "60deg",
    top: "100%",
    right: "100%"
  }, 'b')
  .from(".orng", {
    rotate: "60deg",
    top: "100%",
    right: "-90%"
  }, 'c')
  .to("#orange2", {
    top: "200%",
    left: "41%",
    width: "18%"
  }, 'c')
  .to("#fanta", {
    top: "210%",
    left: "32%",
    width: "36%"
  }, 'c');

 
  var tm = gsap.timeline();
  tm.from("#list", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
    stagger: 0.3
  });


  return () => {
    // Cleanup will be handled automatically by GSAP
  };
});


mm.add("(min-width: 800px) and (max-width: 1024px)", () => {
  
});


ScrollTrigger.refresh();