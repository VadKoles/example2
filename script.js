let button = document.querySelector('.btn');
let login = document.querySelector('.login');
let icon = document.querySelector('.menu_small_icon')
let stick = document.querySelector('.stick')
let condition = true
let start = 0
let end = 0
function forwards(){
    icon.style.marginLeft = '0px'
    anime({
        targets: '.naver',
        translateX: ['-100vw', '0'],
        easing:'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
   
        easing: 'easeInOutQuad',
        diraction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        diraction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition = false
}
function backwards(){
    anime({
        targets: '.naver',
        translateX: ['0', '-100vw'],
        easing:'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    
    anime({
        targets: '.menu_small_icon',
        rotate: 180,
        easing: 'easeInOutQuad',
        diraction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stick',
        rotate: -180,
        easing: 'easeInOutQuad',
        diraction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition = true
}
function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    alert('Спасибо за подписку, ' + login.value)
}


$('.menu_small_icon').click(function(){
    if(condition){
        forwards()

    }else{
        backwards()
    }
})
$('header').on('touchstart', function(event){
    start = event.originalEvent.touches[0].pageX
})
$('header').on('touchend', function(event){
    end = event.originalEvent.changedTouches[0].pageX
    if (end - start >= 100 && condition){
        forwards()
    }
    else if (start - end >= 100 && !condition){
        backwards()
    }
})
button.addEventListener('click', handle);
let links = document.querySelectorAll('.scroll')
let targetID
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault()
        targetID = element.getAttribute('href')
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});