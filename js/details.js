window.addEventListener('DOMContentLoaded', function(){
    
    // 썸네일 이미지 클릭시 메인 이미지 변경
    const productImage = document.getElementById('product-img');
    const thumbImage = document.querySelectorAll('.product-details .produc-thumb li img');
    
    for(const item of thumbImage){
        item.addEventListener('click', (e)=>{
            const imageSrc = e.target.getAttribute('src');
            productImage.setAttribute('src', imageSrc);
        })
    }

    // 리뷰 별점
    const reviewSection = document.querySelector('.reviews');
    const reviewRating = reviewSection.querySelectorAll('.rate');
    
    reviewRating.forEach((elem, idx)=>{
        const rateIcon = elem.querySelectorAll('i');
        const getRate = Number(elem.getAttribute('data-review-rate'));
        for(let i = 0; i < getRate; i++){
            rateIcon[i].style.color = "#f05522";
        }
    })

})