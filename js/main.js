window.addEventListener('DOMContentLoaded', function(){

    // onboarding page swiper
    const s = new Swiper(".swiper", {
        autoplay: {
            delay: 4000,
            disableOnInteraction:false
        },
        spaceBetween: 20,
        loop:true,
        speed:1000,
        pagination: {
            el: '.pagination',
            type: 'bullets',
            bulletClass:'bullet', 
            bulletActiveClass:'bullet-active'
        },
    })


    // onboarding page swiper
    const mainSwiper = new Swiper(".main_swiper", {
        autoplay: {
            delay: 4000,
            disableOnInteraction:false
        },
        spaceBetween: 20,
        loop:true,
        speed:1000,
        pagination: {
            el: '.pagination',
            type: 'bullets',
            bulletClass:'bullet', 
            bulletActiveClass:'bullet-active'
        },
    })


    // login page swiper
    const loginSwiper = new Swiper(".login-swiper", {
        autoplay: {
            delay: 4000,
            disableOnInteraction:false
        },
        spaceBetween: 20,
        loop:true,
        speed:1000,
        pagination: {
            el: '.pagination',
            type: 'bullets',
            bulletClass:'bullet', 
            bulletActiveClass:'bullet-active'
        },
    })

})