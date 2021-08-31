const navbar = document.querySelector('.container');

navbar.addEventListener('scroll', () => {


    if(window.pageYOffset > 100) {
        navbar.classList.add('active');
    
    } else {
        navbar.classList.remove('active');
    }

})
