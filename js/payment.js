let payment = document.getElementById("payment");
let fullname = localStorage.getItem("fullName");
let email = localStorage.getItem("email");
let phone = localStorage.getItem("phone");
let category = localStorage.getItem("apartmentCategory");
let title = localStorage.getItem("apartmentTitle");
let city = localStorage.getItem("apartmentCity");
let street = localStorage.getItem("apartmentStreet");
let country = localStorage.getItem("apartmentCountry");
let rating = localStorage.getItem("apartmentRating");
let rated = localStorage.getItem("apartmentRated");
let checkIn = localStorage.getItem("altSelectedDate");
let checkOut = localStorage.getItem("altCheckOutDate");
let totalPrice = localStorage.getItem("totalPrice");
let payMethod;

payment.innerHTML = `
        <h6 class="fs-sm m-0 mb-2 p-0 lh-sm ellipsis">${title}</h6>
        <h6 class="text-xs acat-color m-0 mb-2 p-0 lh-sm ellipsis">${category}</h6>
        <p class="addrs text-sm m-0 mb-2 p-0 lh-sm ellipsis"><i class="fa fa-map-marker-alt text-primary me-1"></i>${street}, ${city}, ${country}</p>
        <div class="d-flex align-items-center justify-content-start">
            <h5 class="d-inline p-0 m-0 lh-sm me-1">Total</h5>
            <h3 class="d-inline p-0 m-0 lh-sm ms-1 text-primary">${totalPrice}</h3>
        </div>
        <div class="text-primary text-sm mt-2 mb-4 fw-bold">Your transaction is 100% secured🔒</div>
        
        <div class="payment-container">
          <h6>Select Payment Method</h6>
          <div class="payment-method">
            <input type="radio" id="credit" name="payment" disabled>
            <label for="credit">💳 Credit Card &nbsp; <b class="text-danger text-xs">(unavailable)</b></label>
          </div>
          <div class="payment-method">
            <input type="radio" id="bank" name="payment">
            <label for="bank">🏦 Bank Transfer</label>
          </div>
          <div class="payment-method">
            <input type="radio" id="paypal" name="payment">
            <label for="paypal"><i class="fab fa-cc-paypal"></i> PayPal</label>
          </div>
          <div class="payment-method">
            <input type="radio" id="gift" name="payment">
            <label for="gift">🎁 Gift Card</label>
          </div>
        
          <!-- Continue button -->
          <button id="continueBtn"></button>
        </div>
    `;

function showContinueButton() {
    document.getElementById('continueBtn').style.display = 'block';
}

function bank() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    localStorage.setItem('payMethod', 'Bank Transfer');
    payMethod = localStorage.getItem('payMethod');
    document.getElementById('continueBtn').textContent = "Pay with Bank Transfer"
    showContinueButton();
}

function paypal() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    localStorage.setItem('payMethod', 'Paypal');
    payMethod = localStorage.getItem('payMethod');
    document.getElementById('continueBtn').textContent = "Pay with PayPal"
    showContinueButton();
}

function gift() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    localStorage.setItem('payMethod', 'Gift Card');
    payMethod = localStorage.getItem('payMethod');
    document.getElementById('continueBtn').textContent = "Pay with Gift Card"
    showContinueButton();
}

document.getElementById('bank').addEventListener('click', bank);
document.getElementById('paypal').addEventListener('click', paypal);
document.getElementById('gift').addEventListener('click', gift);

function sendWhatsAppMessage() {
    const phoneNumber = "2348033088179";
    const message = `*Name:* ${fullname}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*${title}*\n*Type:* ${category}\n*Location:* ${street}, ${city}, ${country}\n*Check In:* ${checkIn}\n*Check Out:* ${checkOut}\n*Total:* ${totalPrice}\n*Pay with:* ${payMethod}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
}

document.getElementById('continueBtn').addEventListener('click', sendWhatsAppMessage);

