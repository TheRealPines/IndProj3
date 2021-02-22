function calcTotal(){
  
  //initializing itemTotal to 0
  var itemTotal = 0;
  
  //storing the checkbox element
  var ankle = document.getElementById("ankweights");
  var dumbbell = document.getElementById("dumbbell");
  var barbell = document.getElementById("barbell");
  var vest = document.getElementById("vest");
  
  //adding up the selected items
  (ankle.checked) ?(itemTotal += 39.99) : (itemTotal += 0);
  (dumbbell.checked) ?(itemTotal += 199.99) : (itemTotal += 0);
  (barbell.checked) ?(itemTotal += 167.78) : (itemTotal += 0);
  (vest.checked) ?(itemTotal += 119.99) : (itemTotal += 0);
  
  //now calculating the real total with tax and everthing
  var taxRate = 1.06;
  var total = itemTotal * taxRate;
  alert ("Your order total is $" + total.toFixed(2)); //the toFixed(2 makes it so that there are only two decimal places)
  
}

document.getElementById("submit").addEventListener("click", calcTotal);