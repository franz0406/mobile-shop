window.addEventListener('DOMContentLoaded', function(){

    // 메인페이지 슬라이더
    const swiper변수명 = new Swiper(".main_swiper", {
        autoplay: {
            delay: 4000,
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