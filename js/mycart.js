window.addEventListener("DOMContentLoaded", function(){
    
    // 카트 리스트 개수
    const cartList = document.querySelectorAll('.cart-list > li');

    itemCounter();    
    cartList.forEach((item, idx)=>{
        const inputNum = item.querySelector('input');
        inputNum.addEventListener('change', itemCounter);
    })

    function itemCounter(){
        const itemCount = document.querySelector('.cart-content > .item-count > .count');
        const cartListLength = cartList.length;
        itemCount.innerText = cartListLength;
        console.log("he")
    }

})