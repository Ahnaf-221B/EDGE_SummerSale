
const items = document.querySelector("#items"); 
const ol = document.querySelector("#ol"); 
const totalPrice = document.querySelector("#total-price"); 
const discountAmount = document.querySelector("#discount"); 
const grandTotal = document.querySelector("#grand-total"); 
const couponCodeInput = document.querySelector("#coupon"); 
const applyButton = document.querySelector("#apply");


let coupon = ""; 
let total = 0,
  discount = 0, 
  grand = 0; 


applyButton.addEventListener("click", () => {

  coupon = couponCodeInput.value.trim().toUpperCase();


  if (coupon === "SELL200") {

    if (total === 0) {
      alert("You need to add items to apply the coupon!");
    } else {
      discount = total * 0.2; 
      grand = total - discount; 
      updateDisplay();
      alert("Coupon applied successfully!");
    }
  } 
  else {
    alert("Invalid coupon code. Please try again.");
  }


  couponCodeInput.value = "";
});


function updateDisplay() {
  totalPrice.innerText = total.toFixed(2);
  discountAmount.innerText = discount.toFixed(2); 
  grandTotal.innerText = grand.toFixed(2); 
}


function addItemToCart(name, price) {
  
  const li = document.createElement("li");
  li.innerText = name;
  ol.appendChild(li);

 
  total += parseFloat(price);
  if (total >= 200) {
    discount = total * 0.2; 
  }
  grand = total - discount;

 
  updateDisplay();
}


items.addEventListener("click", (e) => {
  
  const card = e.target.closest(".card");
  if (card) {
    const name = card.querySelector(".name").innerText; 
    const price = card.querySelector(".price").innerText; 
    addItemToCart(name, price); 
  }
});
