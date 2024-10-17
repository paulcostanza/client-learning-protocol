let lastScroll = 0
let currentScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    currentScroll = document.documentElement.scrollTop;


    console.log("lastScroll: " + lastScroll)
    console.log("currentScroll: " + currentScroll)
    console.log("navbar.style.top: " + navbar.style.top)
    console.log("* * * * * ")

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.top = "-80px"
    } else {
        // Scrolling up
        navbar.style.top = "0"
    }

    lastScroll = currentScroll
})
