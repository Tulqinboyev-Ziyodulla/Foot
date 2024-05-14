const header = document.querySelector(".header")
const backTop = document.querySelector(".back__top")

document.addEventListener("scroll", e => {
    if(window.scrollY > 150){
        header.classList.add("header__shrink")
        backTop.style.transform = "scale(1)"
    }else{
        header.classList.remove("header__shrink")
        backTop.style.transform = "scale(0)"
    }
})