window.addEventListener("DOMContentLoaded", function(){
    const cartList = document.querySelectorAll('.cart-list > li');
    
    //총 결제 금액
    const totalPrice = document.querySelector('.total-price > .price');
    const shippingCost = parseInt(document.querySelector('.shipping > .price').innerText.replace("$", "").trim());;
    let setTotalPrice = 0;
    let grandTotalPrice = totalPrice + shippingCost;

    // 페이지 열릴때 결제 금액 계산
    calcTotalPrice();

    // 수량이 바꾸면 합계 다시 계산
    document.querySelectorAll('.quantity > input[type="number"').addEventListener('change', calcTotalPrice);
    
    function calcTotalPrice(){
        cartList.forEach((item, idx)=>{
            const inputNum = item.querySelector('input');
        })
    }

})