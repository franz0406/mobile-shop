window.addEventListener('DOMContentLoaded', function(){

    // 페이지 뒤로가기
    const goBack = document.getElementById('go-back');
    if(goBack != null){
        goBack.addEventListener('click', (e) => {
            e.preventDefault();
            if(window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "./onboarding.html";
            }
        });
    }

    // 사이드 메뉴 & 메뉴 토글
    const menuBtn = document.getElementById('menu');
    const asideMenu = document.getElementById('aside-menu');    
     
    if(menuBtn) {
        menuBtn.addEventListener('click', ()=>{
            document.querySelector('body').classList.toggle('menu-toggle');
        })
    }
    if(asideMenu) {
        // 사이드 메뉴 영역 터치스크롤시 body 의 스크롤 이벤트 막기
        asideMenu.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false }); 

        // 사이드 메뉴 아코디언
        const sideMenuContents = document.querySelectorAll('.accordion-contents');
        const sideMenuList = document.querySelectorAll('.accordion-list');
        const sideMenuListHeight = 55;

        sideMenuContents.forEach((elem, idx)=>{
            elem.addEventListener('click', ()=>{
                const contentHeight = sideMenuList[idx].offsetHeight;
                const newHeight = sideMenuListHeight + contentHeight +'px';

                elem.classList.toggle('active');

                if(elem.classList.contains("active")){
                    elem.style.height = newHeight;
                } else {
                    elem.style.height = sideMenuListHeight +'px';
                }
            })
        })
    }

}) // DOMContentLoaded end