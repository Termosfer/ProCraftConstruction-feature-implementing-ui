const menu = document.querySelector(' .topNavbar .linksHolder');
const subMenu = document.querySelector(" .topNavbar .linksHolder .container .servicesSubMenu")
const closeIcon = document.querySelector(".menulist");
const container = document.querySelector('.provideServicesCardContainer');
function addMenu() {
    menu.classList.add('open');
    closeIcon.style.cursor = "default";
}
function closeMenu() {
    menu.classList.remove('open');
    subMenu.classList.remove("active")
    closeIcon.style.cursor = "pointer";
}

function servicesSubMenu() {
    subMenu.classList.toggle("active")
}


let isMouseDown = false;
let startX, scrollLeft;

container.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft
    console.log(startX, "start")
    scrollLeft = container.scrollLeft
    
})

container.addEventListener("mouseleave", () => {
    isMouseDown = false
   
})
container.addEventListener("mouseup", () => {
    isMouseDown = false
     
})

container.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    
    const x = e.pageX - container.offsetLeft;
    console.log(x)
    const walk = (x - startX) * 1;
    window.requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft - walk;
    });
})


