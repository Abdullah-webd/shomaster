import { linktopreviewpage,cartquantity } from "./data.js";
import { makecontrolbuttoninteractive } from "./data.js";
export const cloth = [{
    clothImage: 'cloth-image6.webp',
    clothId: '123eebd78694033febb',
    clothPrice: 20000
},{
    clothImage: 'clothimage5.webp',
    clothId: '123eebd78697887874033febb',
    clothPrice: 40000
},{
    clothImage: 'clothimage3.webp',
    clothId: '123eebdbbbdd78694033febb',
    clothPrice: 30000
},{
    clothImage: 'clothimage4.webp',
    clothId: '123eebd786949553febb',
    clothPrice: 10000
},{
    clothImage: 'clothimage3 (2).webp',
    clothId: '123eebd675940494033febb',
    clothPrice: 9500
},{
    clothImage: 'clothimage3.webp',
    clothId: '123edddbcd78694033febb',
    clothPrice: 25000
},{
    clothImage: 'clothimage7.webp',
    clothId: '123eebdd786900033febb',
    clothPrice: 10000
},,{
    clothImage: 'clothimage8..webp',
    clothId: '123eebd78694033908beeebb',
    clothPrice: 45000
},{
    clothImage: 'clothimage9.webp',
    clothId: '1bb3eebd78694033febb',
    clothPrice: '22000'
},,{
    clothImage: 'clothimage10.webp',
    clothId: '1bb3uud78694033febb',
    clothPrice: 25000
},{
    clothImage: 'clothimage11.webp',
    clothId: '1bb3uvn6ebd78694033febb',
    clothPrice: 26000
},{
    clothImage: 'clothimage12.webp',
    clothId: '1bofvvddebd78694033febb',
    clothPrice: 29000
}]

document.addEventListener('DOMContentLoaded', () => {
    let clothHTML = '';
    cloth.forEach(eachcloth => {
        clothHTML += `
        <div class="each-product-container" data-addbuttonid = '${eachcloth.clothId}'>
            <a href="Preview.html"><img class="cloth-image" src="${eachcloth.clothImage}" alt=""></a>
            <div class="each-product-control">
                <div class="product-buttoons">
                    <button class="add">+</button>
                    <div id="number" class="numsed">0</div>
                    <button class="subs">-</button>
                </div>
                <button class="addcart-button" data-addbuttonid = '${eachcloth.clothId}' >Add To Cart</button>
            </div>
        </div>
        `;
    });

    const container = document.querySelector('.all-products-container');
    if (container) {
        container.innerHTML = clothHTML || [];
    } else {
        console.error('Container element not found');
    }
    let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;
    document.querySelector('.num').innerHTML = cartno;

    makecontrolbuttoninteractive();
    linktopreviewpage(cartquantity);
});

