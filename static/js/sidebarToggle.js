const menu = document.querySelector(' .topNavbar .linksHolder');
const subMenu = document.querySelector(" .topNavbar .linksHolder .container .servicesSubMenu")
const closeIcon = document.querySelector(".menulist");
const container = document.querySelector('.provideServicesCardContainer');
const downArrowColor = document.querySelector(".topNavbar .linksHolder .container .services .downArrow")
const services = document.querySelector(".topNavbar .linksHolder .container .services")
const home = document.querySelector(".topNavbar .linksHolder .link[href='index.html']")
const aboutLink = document.querySelector(".linksHolder .link[href='about.html']");
const contact = document.querySelector(".linksHolder .link[href='contact.html']");
const portfolio = document.querySelector(".linksHolder .link[href='../portfolio/index.html']");
const img = document.querySelector(".topNavbar .linksHolder .container .services .downArrow")
const cover = document.querySelector(".cover")
const topnavbar = document.querySelector(".topNavbar")
const body = document.body;
function addMenu() {
    menu.classList.add('open');
    closeIcon.style.cursor = "default";
    if (menu.classList.contains('open')) {
        body.classList.add('menu-open');
        cover.style.display = "block"
    } else {
        body.classList.remove('menu-open');
        cover.style.display = "none"
    }
}
function closeMenu() {
    menu.classList.remove('open');
    subMenu.classList.remove("active")
    body.classList.remove('menu-open');
    cover.style.display = "none"
    
    closeIcon.style.cursor = "pointer";
}

function servicesSubMenu() {
    subMenu.classList.toggle("active")
    downArrowColor.classList.toggle("active")
    services.classList.toggle("active")
    home.classList.remove("active")
    aboutLink.classList.remove("active");
    contact.classList.remove("active");
    portfolio.classList.remove("active");
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


