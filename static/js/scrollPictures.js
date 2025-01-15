const cont = document.querySelector(".otherServicesSection .container");

let isMouse = false;
let star, scrol;

cont.addEventListener("mousedown", (e) => {
    isMouse = true;
    star = e.pageX - cont.offsetLeft
    console.log(star, "start")
    scrol = cont.scrollLeft
    
})

cont.addEventListener("mouseleave", () => {
    isMouse = false
   
})
cont.addEventListener("mouseup", () => {
    isMouse = false
     
})

cont.addEventListener("mousemove", (e) => {
    if (!isMouse) return;
    e.preventDefault();
    
    const x = e.pageX - cont.offsetLeft;
    console.log(x)
    const walk = (x - star) * 1;
    window.requestAnimationFrame(() => {
        cont.scrollLeft = scrol - walk;
    });
})
