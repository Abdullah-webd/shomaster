import { cartquantity } from "./data.js";
import { makepreviewcontrolbuttoninteractive } from "./data.js";
import { savetostorage } from "./data.js";
let clothHTML = '';
clothHTML += `
<div class="cloth-container">
    <div class="orgpic">
        <img src="${cartquantity.image}" alt="" class="cloth" > 
    </div>

    <div class="control">
        <div class="buttoons">
            <button class="add">+</button>
            <div id="number" class="numsed">0</div>
            <button class="subs">-</button>
        </div>
        <h2 class="quantity" style="color: #007bff;" >Quantity: 0</h2>
        <h2 class="price" style="color: #007bff;">Price: ₦${cartquantity.price}</h2>
        <button class="addcart" data-addbuttonid = '${cartquantity.identity}'>Add To Cart</button>
        <button class="donebutton"><a class="donebutton" href="checkout.html">Done shopping</a></button>

    </div>
</div>

`
document.querySelector('.content').innerHTML = clothHTML;
let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;
document.querySelector('.num').innerHTML = cartno;
makepreviewcontrolbuttoninteractive();

