import AOS from 'aos';
import '../sass/index.scss'


AOS.init();

    const btn = document.querySelector(".menu__btn");
    const media = window.matchMedia("(min-width: 800px)");
    let active = false;
    

    btn.addEventListener("click", () => {
        if(active){
            active = false;
        }else{
        active = true;
        }
    })

    if (media.matches) {
        btn.click()
        active = true;
    }

    media.addEventListener("change", function(e) {
        if(!media.matches){
            btn.click()
            active = false;
        }else{
        if(!active){
            btn.click()
        }
    }
    });

document.addEventListener("scroll", () => {
    const menu = document.querySelector('.menu')

    if(window.scrollY> 150){
        menu.classList.remove("menu--bigger");
    }else{
        menu.classList.add("menu--bigger");
    }
})
