"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Gael Rodriguez Garcia
   Date: 2/4/20  
   
   Filename: tc_cart.js
	
*/
//setting orderTotal to 0
var orderTotal = 0;
//actual html that is going to be displayed
var cartHTML = "<table> <tr> <th>Item</th> <th>Price</th> <th>QTY</th> <th>Total</th> </tr> </table>";

for(var i = 0; i < item.length; i++){
    cartHtml += "<tr> <td><img src='tc_item.png' alt='item'/></td>";
    cartHTML += "<td> itemDescription </td><td> itemprice </td> <td> itemQTY </td>";
    var itemCost = itemPrice * itemQty;
    cartHTML = "<td>$cost<td></tr>";
}


document.getElementById("cart").innerHTML = cartHTML;