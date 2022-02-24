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


    // login page swiper
    const categorySwiper = new Swiper(".category-slide-wrapper",{
        slidesPerView: "auto",
        spaceBetween: 25,
        freeMode: true
    })


    // image thumbnail swiper
    const thumbnailSwiper = new Swiper(".produc-thumb-slide",{
        slidesPerView: "auto",
        spaceBetween: 13,
        freeMode: true
    })



}) // DOMContentLoaded Ends