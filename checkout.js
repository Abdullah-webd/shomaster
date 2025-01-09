import { maincart,removefromcart, makecheckoutcontrolbuttoninteractive,savetostorage,cartno } from "./data.js";
import { cloth } from "./shopmaster.js";
console.log(maincart)
function renderall() {

    let checkoutHTML = '';

    maincart.forEach(maincheckout => {
        checkoutHTML += `
        <div class="checkout-each-product-container js-checkout-each-product-container-${maincheckout.imageid}" >
            <a href="Preview.html"><img class="checkout-cloth-image" src="${maincheckout.imagedata}" alt=""></a>
            <div class="checkout-each-product-control">
                <div class="product-buttoons">
                    <button class="add">+</button>
                    <div id="number" class="numsed">0</div>
                    <button class="subs">-</button>
                </div>
                <button class="addcart-button" data-addbuttonid = '${maincheckout.imageid}' >Add To Cart</button>
                <button class="deletecart-button"  data-deletecheckout-productid = ${maincheckout.imageid}>Remove Item From Cart</button>
                <h2 class="quantity" style="color: #007bff;" >Quantity: ${maincheckout.quantitydata}</h2>
                <h2 class="price" style="color: #007bff">Price: ₦${maincheckout.pricedata}</h2>
            </div>
        </div>
        `
    });
    document.querySelector('.checkout-products-container').innerHTML = checkoutHTML;
    document.querySelectorAll('.deletecart-button').forEach(elementdelete => {
        elementdelete.addEventListener('click', () => {
            const linkbut = elementdelete.dataset.deletecheckoutProductid;
            removefromcart(linkbut)
            const container = document.querySelector(`.js-checkout-each-product-container-${linkbut}`)
            container.remove();
            renderall();
        })
    });

    makecheckoutcontrolbuttoninteractive(renderall)
    let totalquantity = 0;
    let itemquantity = 0 ;
    let shippingprice = 0;
    let totalprice = 0;
    
    let orderHTML = '';
    maincart.forEach(maincheckout => {
        totalquantity += maincheckout.quantitydata;
        itemquantity = maincart.length;
        totalprice += maincheckout.quantitydata * maincheckout.pricedata;
    })
    let totalbeforetax = totalprice + shippingprice
    orderHTML += `
    <h2>Order Summary</h2>
    <div class="summary-firstside">
        <div class="summaryprice">
            <p>item(${totalquantity}):</p>
            <p>shipping and handling:</p>
        </div>

        <div class="summaryprice">
            <p>₦${totalprice}</p>
            <p>₦${totalquantity * 200}</p>
        </div>
    </div>

    <div class="summary-firstside">
        <div class="summaryprice">
            <p>Total before tax:</p>
            <p>Estimated tax(10%):</p>
        </div>

        <div class="summaryprice">
            <p>₦${totalbeforetax}</p>
            <p>₦${0.1 * totalbeforetax}</p>
        </div>
    </div>

    <div class="order-total">
        <h3>Order total:</h3>
        <h3>₦${totalbeforetax + (0.1 * totalbeforetax)}</h3>
    </div>
    <button class="order-place">Place Order</button>
    `
    document.querySelector('.payment-summary').innerHTML = orderHTML;

    document.querySelector('.order-place').addEventListener('click',() => {
        alert('Order placed successfully');
        let maincart = [];
        let cartno = 0;
        savetostorage(cartno, 'cartno');
        savetostorage(maincart,'cartmain')
        window.location.href = 'checkout.html';
        
        
    })
    

}
renderall()