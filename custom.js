
const bestPrice =document.getElementById('best-price')
const extraMemory = document.getElementById('extra-memory');
const extraStorage =document.getElementById('extra-storage')
const totalPrice = document.getElementById('total-price')
const deliveryCharge =document.getElementById('delivery-charge');
const promoInput = document.getElementById('promo-input')
const applyButton = document.getElementById('apply-button')
const totalAmount = document.getElementById('price');

function updateTotal(){
    const productPrice = parseInt(bestPrice.innerText);
    const extraMemoryCost = parseInt(extraMemory.innerText);
    const extraStorageCost = parseInt(extraStorage.innerText);
    const deliveryChargeTotal = parseInt(deliveryCharge.innerText);

    const totalValue = productPrice + extraMemoryCost + extraStorageCost + deliveryChargeTotal;
    totalPrice.innerText = totalValue;
    totalAmount.innerText = totalValue;
}

function pomoCodeUse(present){
    const promoInputValue = promoInput.value;
    const errorShow =document.getElementById('error-show');
    if(promoInputValue == 'stevekaku'){
        const discountPrice = totalPrice.innerText / 100 * present;
        totalAmount.innerText = totalPrice.innerText - discountPrice;
        errorShow.style.display='none';
    }
    else {
        errorShow.style.display='block';
    }
}

document.getElementById('memory-8gb').addEventListener('click',function(){
    extraMemory.innerText ='0';
    updateTotal();
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    extraMemory.innerText ='180';
    updateTotal();
});


document.getElementById('storage-256gb').addEventListener('click',function(){
    extraStorage.innerText ='0';
    updateTotal();
});
document.getElementById('storage-512gb').addEventListener('click',function(){
    extraStorage.innerText ='100';
    updateTotal();
});
document.getElementById('storage-1tb').addEventListener('click',function(){
    extraStorage.innerText ='180';
    updateTotal();
});


document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotal();
});
document.getElementById('fast-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotal();
});
document.getElementById('apply-button').addEventListener('click',function(){
    pomoCodeUse(20);
    promoInput.value='';
});

