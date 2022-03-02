window.addEventListener("DOMContentLoaded", function(){

    const totalPrice = document.querySelector('.total-price > .price');
    const shippingCost = parseInt(document.querySelector('.shipping > .price').innerText.replace("$", "").trim());;

    // 페이지 열릴때 결제 금액 계산
    calcTotalPrice();

    // 페이지 열릴때 아이템 개수 계산
    itemListCounter();

    // 수량이 바꾸면 합계 다시 계산
    const quantityInput = document.querySelectorAll('.quantity > input');
    quantityInput.forEach( input =>{
        input.addEventListener('change', ()=>{
            calcTotalPrice();
        });
    })

    // delete 버튼 으로 리스트 삭제시 합계 다시 계산
    const deleteButtons = document.querySelectorAll('.cart-list > li > .delete');
    deleteButtons.forEach( button => {
        button.addEventListener('click', (e)=>{
            deleteItems(e.target);
            calcTotalPrice();
            itemListCounter();
        });
    })

    // 결제 금액 합계 함수
    function calcTotalPrice(){
        const cartList = document.querySelectorAll('.cart-list > li');
        let setTotalPrice = 0;

        if(cartList.length === 0) {
            totalPrice.innerText = '$ 0';
            document.querySelector('.shipping > .price').innerText = '$ 0';
        } else {
            cartList.forEach((item, idx)=>{
                const price = parseInt(item.querySelector('h5').innerText.replace("$", "").trim());
                const quantity = parseInt(item.querySelector('input').value);
                
                setTotalPrice += price * quantity;
                totalPrice.innerText = `$ ${(setTotalPrice + shippingCost).toLocaleString('en').replace(/,/g, ".")}.00`;
            })
        }

    }

    // 리스트 개수 함수
    function itemListCounter(){
        const cartList = document.querySelectorAll('.cart-list > li');
        const itemCount = document.querySelector('.item-count > .count');
        const listLength = cartList.length;

        if(listLength == 0) return itemCount.innerText = 'There is no';
        itemCount.innerText = listLength;

    }

    // 리스트 삭제 함수
    function deleteItems(e) {
        const userConfirm = confirm("delete this item?");
        if(userConfirm == true) e.parentElement.remove();
    }

})