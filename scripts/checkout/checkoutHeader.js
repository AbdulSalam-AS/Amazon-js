import {cart} from '../../data/cart.js';

export function checkHeaderOutItemsQuantity(){
    let quantity = 0;
    cart.forEach((cartItem)=>{
      quantity += cartItem.quantity;
    })
    document.querySelector('.js-return-to-home-link').innerHTML =  `${quantity} items`;
    
    
}


export function checkOutItemsQuantity(){
    let Quantity = 0;
    cart.forEach((cartItem)=>{
      Quantity += cartItem.quantity;
    });
   return Quantity;
}
