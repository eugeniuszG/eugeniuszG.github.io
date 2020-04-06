const btnBurger = document.querySelector('.burger');
const sideMenu = document.querySelector('.nav-container')
let hasclicked = false;

btnBurger.addEventListener('click', ()=>{
    if (hasclicked === false) {
        sideMenu.style.display = 'block'
        hasclicked = !hasclicked;        
    }
    else{
        sideMenu.style.display = 'none'
        hasclicked = !hasclicked;
    }

})