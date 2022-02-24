window.addEventListener('DOMContentLoaded', function(){
    
    const productImage = document.getElementById('product-img');
    const thumbImage = document.querySelectorAll('.product-details .produc-thumb li img');
    
    for(const item of thumbImage){
        item.addEventListener('click', (e)=>{
            const imageSrc = e.target.getAttribute('src');
            productImage.setAttribute('src', imageSrc);
        })
    }

})