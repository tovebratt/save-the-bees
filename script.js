//hide cookie-banner when pressing OK button

const cookieBanner = document.querySelector(".cookie-banner")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieBanner.style.display = 'none'
})
// mobile hamburger menu show/hide-functionality 

const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu-open")
const mobileMenuCross = document.querySelector(".mobile-menu-cross")

hamburger.addEventListener("click", () => {
    mobileMenu.style.display = "flex"
})
mobileMenuCross.addEventListener("click", () => {
    mobileMenu.style.display = "none"
})
