//hide cookie-banner when pressing OK button

const cookieBanner = document.querySelector(".cookie-banner")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieBanner.style.display = 'none'
})
