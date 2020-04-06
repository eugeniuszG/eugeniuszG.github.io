const btnBurger = document.querySelector('.burger');
const sideMenu = document.querySelector('.nav-container')
let hasclicked = false;

btnBurger.addEventListener('click', ()=>{
    if (hasclicked === false) {
        sideMenu.style.transition = 'all 1s'
        sideMenu.style.transform = 'translateX(0%)'
        hasclicked = !hasclicked;        
    }
    else{
        sideMenu.style.transition = 'all 1s'
        sideMenu.style.transform = 'translateX(110%)'
        hasclicked = !hasclicked;
    }

})