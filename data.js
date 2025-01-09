import { cloth } from "./shopmaster.js";
export let cartquantity = JSON.parse(localStorage.getItem('cartquantity')) || {};
export let maincart = JSON.parse(localStorage.getItem('cartmain')) || [];
export let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;

export function savetostorage(cartquantity,cartquantityname) {
    localStorage.setItem(cartquantityname,JSON.stringify(cartquantity));
}





export function makepreviewcontrolbuttoninteractive() {
    const selectadcart = document.querySelector('.addcart');
    const selectcartid = selectadcart.dataset.addbuttonid;
    maincart.forEach(elementselect => {
       if (elementselect.imageid === selectcartid) {
            document.querySelector('.quantity').innerHTML = `Quantity: ${elementselect.quantitydata}`; 
       } 
    });
    let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;
    const addbutton = document.querySelectorAll('.add');
    const subsbutton = document.querySelectorAll('.subs');
    const addcartbutton = document.querySelectorAll('.addcart');
    
    addbutton.forEach(addbut => {
       addbut.addEventListener('click', function() {
        const addbutcontainer = addbut.closest('.control')
        const increase = addbutcontainer.querySelector('#number');
        let counter = parseInt(increase.textContent); // Declare counter outside the event listener
        counter += 1; // Increment the global counter variable
        increase.textContent = counter; // Update the counter in the HTML element
        
    }); 
    }); 

    subsbutton.forEach(subsbut => {
        subsbut.addEventListener('click', function() {
            const subsbutcontainer = subsbut.closest('.control')
            const decrease = subsbutcontainer.querySelector('#number');
            let counter = parseInt(decrease.textContent); // Declare counter outside the event listener
            if(counter == 0){
                alert('U have not added an item yet')
                return
            }else{
                counter -= 1; // Increment the global counter variable
                decrease.textContent = counter; // Update the counter in the HTML element
                
                
            }
            
        });
    });
    
    addcartbutton.forEach(addcaartbut => {
        addcaartbut.addEventListener('click',() => {
            const addcartbutcontainer = addcaartbut.closest('.control')
            const productname = addcartbutcontainer.querySelector('#number')
            cartno += parseInt(productname.textContent);
            console.log(addcaartbut.dataset.addbuttonid)
            savetostorage(cartno, 'cartno');
            document.querySelector('.num').innerHTML = cartno;
            const productid = addcaartbut.dataset.addbuttonid;
            let matching;
            maincart.forEach(eachmaincart => {
                if(eachmaincart.imageid === productid) {
                    matching = eachmaincart;
                }
            });
            if (matching) {
                matching.quantitydata += parseInt(productname.textContent);
                document.querySelector('.quantity').innerHTML = `Quantity: ${matching.quantitydata}`;
                console.log(maincart)
                savetostorage(maincart,'cartmain')
            }else{
                cloth.forEach(elementcloth => {
                    if (productid === elementcloth.clothId) {
                        maincart.push({imagedata: elementcloth.clothImage, imageid: elementcloth.clothId,quantitydata: parseInt(productname.textContent ),pricedata: elementcloth.clothPrice})
                        document.querySelector('.quantity').innerHTML = `Quantity: ${parseInt(productname.textContent )}`;
                        console.log(maincart)
                        savetostorage(maincart,'cartmain')
                    }
                    
                });
            }
            let counter = parseInt(productname.textContent);
            counter *= 0;
            productname.textContent = counter;
            
           
        })
    });

}

export function makecontrolbuttoninteractive() {
    let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;;
    const addbutton = document.querySelectorAll('.add');
    const subsbutton = document.querySelectorAll('.subs');
    const addcartbutton = document.querySelectorAll('.addcart-button');
    
    addbutton.forEach(addbut => {
       addbut.addEventListener('click', function() {
        const addbutcontainer = addbut.closest('.each-product-container')
        const increase = addbutcontainer.querySelector('#number');
        let counter = parseInt(increase.textContent); // Declare counter outside the event listener
        counter += 1; // Increment the global counter variable
        increase.textContent = counter; // Update the counter in the HTML element
        
    }); 
    }); 

    subsbutton.forEach(subsbut => {
        subsbut.addEventListener('click', function() {
            const subsbutcontainer = subsbut.closest('.each-product-container')
            const decrease = subsbutcontainer.querySelector('#number');
            let counter = parseInt(decrease.textContent); // Declare counter outside the event listener
            if(counter == 0){
                alert('U have not added an item yet')
                return
            }else{
                counter -= 1; // Increment the global counter variable
                decrease.textContent = counter; // Update the counter in the HTML element
                
                
            }
            
        });
    });
    
    addcartbutton.forEach(addcaartbut => {
        addcaartbut.addEventListener('click',() => {
            const addcartbutcontainer = addcaartbut.closest('.each-product-container')
            const productname = addcartbutcontainer.querySelector('#number')
            cartno += parseInt(productname.textContent)
            savetostorage(cartno, 'cartno')
            document.querySelector('.num').innerHTML = cartno;
            console.log(addcaartbut.dataset.addbuttonid);
            const productid = addcaartbut.dataset.addbuttonid;
            let matching;
            maincart.forEach(eachmaincart => {
                if(eachmaincart.imageid === productid) {
                    matching = eachmaincart;
                }
            });
            if (matching) {
                matching.quantitydata += parseInt(productname.textContent);
                console.log(maincart)
                savetostorage(maincart,'cartmain')
            }else{
                cloth.forEach(elementcloth => {
                    if (productid === elementcloth.clothId) {
                        maincart.push({imagedata: elementcloth.clothImage, imageid: elementcloth.clothId,quantitydata: parseInt(productname.textContent ),pricedata: elementcloth.clothPrice})
                        console.log(maincart)
                        savetostorage(maincart,'cartmain')
                    }
                    
                });
            }
            
            
            let counter = parseInt(productname.textContent);
            counter *= 0;
            productname.textContent = counter;
            
           
        })
    });

}


export function removefromcart(linkdata) {

    let newcart = []

    maincart.forEach((singlecart) => {
        if (singlecart.imageid !== linkdata) {
            newcart.push(singlecart)
        }
    });
    maincart = newcart;
    savetostorage(maincart,'cartmain')
}


export function makecheckoutcontrolbuttoninteractive(renderall) {
    let cartno = JSON.parse(localStorage.getItem('cartno')) || 0;;
    const addbutton = document.querySelectorAll('.add');
    const subsbutton = document.querySelectorAll('.subs');
    const addcartbutton = document.querySelectorAll('.addcart-button');
    
    addbutton.forEach(addbut => {
       addbut.addEventListener('click', function() {
        const addbutcontainer = addbut.closest('.checkout-each-product-container')
        const increase = addbutcontainer.querySelector('#number');
        let counter = parseInt(increase.textContent); // Declare counter outside the event listener
        counter += 1; // Increment the global counter variable
        increase.textContent = counter; // Update the counter in the HTML element
        
    }); 
    }); 

    subsbutton.forEach(subsbut => {
        subsbut.addEventListener('click', function() {
            const subsbutcontainer = subsbut.closest('.checkout-each-product-container')
            const decrease = subsbutcontainer.querySelector('#number');
            let counter = parseInt(decrease.textContent); // Declare counter outside the event listener
            if(counter == 0){
                alert('U have not added an item yet')
                return
            }else{
                counter -= 1; // Increment the global counter variable
                decrease.textContent = counter; // Update the counter in the HTML element
                
                
            }
            
        });
    });
    
    addcartbutton.forEach(addcaartbut => {
        addcaartbut.addEventListener('click',() => {
            const addcartbutcontainer = addcaartbut.closest('.checkout-each-product-container')
            const productname = addcartbutcontainer.querySelector('#number')
            cartno += parseInt(productname.textContent)
            savetostorage(cartno, 'cartno')
            document.querySelector('.num').innerHTML = cartno;
            console.log(addcaartbut.dataset.addbuttonid);
            const productid = addcaartbut.dataset.addbuttonid;
            let matching;
            maincart.forEach(eachmaincart => {
                if(eachmaincart.imageid === productid) {
                    matching = eachmaincart;
                }
            });
            if (matching) {
                matching.quantitydata += parseInt(productname.textContent);
                console.log(maincart)
                savetostorage(maincart,'cartmain')
            }else{
                cloth.forEach(elementcloth => {
                    if (productid === elementcloth.clothId) {
                        maincart.push({imagedata: elementcloth.clothImage, imageid: elementcloth.clothId,quantitydata: parseInt(productname.textContent ),pricedata: elementcloth.clothPrice})
                        console.log(maincart)
                        savetostorage(maincart,'cartmain')
                    }
                    
                });
            }
            
            
            let counter = parseInt(productname.textContent);
            counter *= 0;
            productname.textContent = counter;
            renderall()
           
        })
    });

}


export function linktopreviewpage(cartquantity) {
    
    const linkbutton = document.querySelectorAll('.each-product-container');
    linkbutton.forEach(link => {
        link.addEventListener('click', () => {
            cloth.forEach(clotdata => {
               if (link.dataset.addbuttonid === clotdata.clothId) {
                    cartquantity = {image: clotdata.clothImage, identity: clotdata.clothId, price: clotdata.clothPrice};
                    savetostorage(cartquantity,'cartquantity');
               } 
            });

            //window.location.href = 'preview.html';
        })

    })

}