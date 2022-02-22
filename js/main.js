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
})