import AOS from "aos";
import "aos/dist/aos.css";

const hamburger = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
})

const scrollButton = document.getElementById('scroll-top');

window.onscroll = function() {scrollFunction()}


function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButton.style.display = 'flex';
    }else{
        scrollButton.style.display = 'none';
    }
}

// function topFunction(){
//     document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
// }
    scrollButton.addEventListener("click", () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
    })

///AOS
AOS.init({
    duration: 700,
    offset: 50,
    once: true,
});
