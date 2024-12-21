var tl=gsap.timeline({scrollTrigger:{
  trigger:".two",
  start:"0% 80%",
  end:"50% 50%",
 // markers:true,
  scrub:true
}})

tl.to("#fanta",{
    top:"120%",
    left:"0%",
  
},'a')
tl.to("#orange2",{
     top:"160%",
     left:"20%",
    rotate:"360deg"
},'a')
tl.to("#orange",{
    top:"160%",
    left:"80%"
    
},'a')

tl.to("#leaf",{
    rotate:"290deg",
    top:"100%",
    left:"70%"
},'a')

tl.to("#leaf2",{
    rotate:"80deg",
    top:"100%",
    left:"5%"
},'a')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 80%",
    end:"50% 50%",
    //markers:true,
    scrub:true
  }})
  
  tl2.from(".lemon",{
    rotate:"-90deg",
    top:"100%",
   left:"-90%"
  },'c')

  tl2.from("#sprite",{
    rotate:"-60deg",
    top:"100%",
    left:"100%"
  },'b')

  tl2.from("#pepsi",{
    rotate:"60deg",
    top:"100%",
    right:"100%"
  },'b')

  tl2.from(".orng",{
    rotate:"60deg",
    top:"100%",
    right:"-90%"
  },'c')

  tl2.to("#orange2",{
    top:"200%",
    left:"41%",
    width:"18%"

  },'c')

  tl2.to("#fanta",{
    top:"210%",
    left:"32%",
    width:"36%"
  },'c')

  var tm = gsap.timeline();

  tm.from("#list", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      scale: 0.5,
      stagger: 0.3
  
  })