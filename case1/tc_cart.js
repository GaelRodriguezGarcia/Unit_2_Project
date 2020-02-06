"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Gael Rodriguez Garcia
   Date: 2/4/20  
   
   Filename: tc_cart.js
	
*/
//setting order total to 0
var orderTotal = 0;
//setting item cost to 0
var itemCost = 0;
/* header*/
var cartHTML = "<table border='1'> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for (var i = 0; i < item.length; i++) {
    //item cost
    itemCost = itemPrice[i] * itemQty[i];
    //add to total
    orderTotal += itemCost;
    // getting the value of the items
    cartHTML += " <tr><td><img src='' alt=" + item[i] + "></td><td>" + itemDescription[i] + "</td><td>" + "$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td><td>" + "$" + itemCost + "</td></tr>";
}
//total of the order
cartHTML += "<tr><td colspan = '4' > Subtotal</td> <td>" + "$" + orderTotal + "</td></tr></table>";
var elem = document.getElementById("cart");
/*assign value*/
elem.innerHTML = cartHTML;
