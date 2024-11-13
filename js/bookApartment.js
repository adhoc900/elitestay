let bookingDetails = document.getElementById("booking-details");

let category = localStorage.getItem("apartmentCategory");
let title = localStorage.getItem("apartmentTitle");
let city = localStorage.getItem("apartmentCity");
let street = localStorage.getItem("apartmentStreet");
let country = localStorage.getItem("apartmentCountry");
let features = localStorage.getItem("apartmentFeatures");
let amenities = localStorage.getItem("apartmentAmenities");
let night = localStorage.getItem("apartmentNight");
let week = localStorage.getItem("apartmentWeek");
let month = localStorage.getItem("apartmentMonth");
let rating = localStorage.getItem("apartmentRating");
let rated = localStorage.getItem("apartmentRated");

bookingDetails.innerHTML = `
        <h6 class="fs-sm m-0 mb-2 p-0 lh-sm ellipsis">${title}</h6>
        <h6 class="text-xs acat-color m-0 mb-2 p-0 lh-sm ellipsis">${category}</h6>
        <p class="addrs text-sm m-0 mb-2 p-0 lh-sm ellipsis"><i class="fa fa-map-marker-alt text-primary me-1"></i>${street}, ${city}, ${country}</p>
        <div id="ratingStars" class="mb-4 text-sm"></div>
        <p class="fw-bold m-0 p-0 mb-2">Select a date</p>
        <div class="mb-5 date-wrp d-flex align-items-center justify-content-start">
            <label for="datePicker" id="showCalendarBtn" class="btn border py-1 px-2 text-sm me-4">Calender</label>
            <input type="date" id="datePicker" name="datePicker" class="border-0 fw-bold fs-6 bg-white text-primary datePick">
            <div class="check-wrp d-flex justify-content-between align-items-center">
                <div class="check-in text-center me-3">
                    <p class="text-sm text-primary p-0 m-0 lh-sm fw-bold">Check In</p>
                    <p id="checkInDate" class="text-xs p-0 m-0 lh-sm">dd/mm/yyyy</p>
                </div>
                <div class="check-out text-center">
                     <p class="text-sm text-primary p-0 m-0 lh-sm fw-bold">Check Out</p>
                     <p id="checkOutDate" class="text-xs p-0 m-0 lh-sm">dd/mm/yyyy</p>
                </div>
            </div>
        </div>
        <p class="fw-bold m-0 p-0 mb-2">Choose preferred package</p>
        <div class="mb-3"style="width:300px;">
            <button id="night" class="btn border fs-6 py-3 px-2 mb-3 w-100">
                Stay for a night: <b class="fs-4">${night}</b>
            </button>
            <button id="week" class="spp btn border fs-6 py-3 px-2 mb-3 w-100">
                Stay for a week: <b class="fs-4">${week}</b>
            </button>
            <button id="month" class="spp btn border fs-6 py-3 px-2 mb-3 w-100">
                Stay for a month: <b class="fs-4">${month}</b>
            </button>
        </div>
        <div class="d-flex align-items-center justify-content-start">
            <h5 class="d-inline p-0 m-0 lh-sm me-1">Total</h5>
            <h3 class="d-inline p-0 m-0 lh-sm ms-1 text-primary" id="totalPayment"></h3>
        </div>
        <div class="text-secondary text-xs d-flex align-items-center justify-content-start mb-5">(...no hidden charges, instant confirmation...)</div>
        
        <h6 class="m-0 mb-2 p-0 lh-sm">Guest info</h6>
        <div class="guest-info d-flex align-items-center justify-content-star w-100">
            <form action="payment.html" id="guest-info-form" style="width:300px;">
                <div class="form-field mb-3 text-xs">
                    <label class="d-block" for="fullName">Full Name</label>
                    <input class="d-block p-2 w-100" type="text" id="fullName" name="fullName" required>
                </div>
                <div class="form-field mb-3 text-sm">
                    <label class="d-block" for="email">Email</label>
                    <input class="d-block p-2 w-100" type="email" id="email" name="email" required>
                </div>
                <div class="form-field mb-3 text-sm">
                    <label class="d-block" for="phone">Phone Number</label>
                    <input class="d-block p-2 w-100" type="tel" id="phone" name="phone" required>
                    <div class="text-secondary text-xs d-flex align-items-center justify-content-start mb-5">(...include country code e.g +1, +44...)</div>
                </div>
                <button id="ptp" class="btn btn-primary py-3 px-2" style="width:300px;">Proceed to payment</button>
                <button id="ptp2" disabled class="btn border text-danger p-3 text-xs" style="width:300px;">Select a date, Select a package, Fill the form</button>
            </form>
        </div>
    `;

const datePicker = document.getElementById("datePicker");
const checkInDate = document.getElementById("checkInDate");
const checkOutDate = document.getElementById("checkOutDate");
const today = new Date().toISOString().split("T")[0];
datePicker.setAttribute("min", today);

datePicker.addEventListener("change", () => {
    const selectedDate = new Date(datePicker.value);
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);

    if (localStorage.getItem('selectedDate')) {
        localStorage.removeItem('selectedDate');
        localStorage.removeItem('altSelectedDate');
    }
    localStorage.setItem("selectedDate", selectedDate.toISOString());
    localStorage.setItem("altSelectedDate", formattedDate);

    localStorage.getItem('selectedDate') ? checkInDate.textContent = formattedDate : checkInDate.textContent = "dd/mm/yyyy";
    
    if (localStorage.getItem('package')) {
        let selectedPackage = localStorage.getItem('package');
        if(selectedPackage == "night") {
            checkOutDateNight();
        } else if (selectedPackage == "week") {
            checkOutDateWeek();
        } else if (selectedPackage == "month") {
            checkOutDateMonth();
        }
    }
    proceedToPayment();
});

function updateCheckOutDate(value, type) {
    if (localStorage.getItem('checkOutDate')) {
        localStorage.removeItem('checkOutDate');
    }

    const storedDate = localStorage.getItem('selectedDate');
    if (storedDate) {
        let checkOut = new Date(storedDate);
        if (type === 'night') {
            checkOut.setDate(checkOut.getDate() + value);
        } else if (type === 'month') {
            checkOut.setMonth(checkOut.getMonth() + value);
        }
        const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = checkOut.toLocaleDateString('en-US', options);
        localStorage.setItem('checkOutDate', checkOut.toISOString());
        localStorage.setItem("altCheckOutDate", formattedDate);
        document.getElementById("checkOutDate").textContent = checkOut.toLocaleDateString('en-US', options);
    } else {
        checkOutDate.innerHTML = `<b class="text-secondary text-xs">Check In?</b>`;
    }
}

function checkOutDateNight() {
    updateCheckOutDate(1, 'night');
}

function checkOutDateWeek() {
    updateCheckOutDate(7, 'night');
}

function checkOutDateMonth() {
    updateCheckOutDate(1, 'month');
}

localStorage.getItem('selectedDate') ? checkInDate.textContent = localStorage.getItem('altSelectedDate') : checkInDate.textContent = "dd/mm/yyyy";
localStorage.getItem('checkOutDate') ? checkOutDate.textContent = localStorage.getItem('altCheckOutDate') : checkOutDate.textContent = "dd/mm/yyyy";

let totalPayment = document.getElementById("totalPayment");

function nightTotal() {
    if (localStorage.getItem('totalPrice')) {
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('package');
    }
    localStorage.setItem('totalPrice', night);
    localStorage.setItem('package', 'night');
    totalPayment.textContent = localStorage.getItem('totalPrice');
    checkOutDateNight();
    proceedToPayment();
}

function weekTotal() {
    if (localStorage.getItem('totalPrice')) {
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('package');
    }
    localStorage.setItem('totalPrice', week);
    localStorage.setItem('package', 'week');
    totalPayment.textContent = localStorage.getItem('totalPrice');
    checkOutDateWeek();
    proceedToPayment();
}

function monthTotal() {
    if (localStorage.getItem('totalPrice')) {
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('package');
    }
    localStorage.setItem('totalPrice', month);
    localStorage.setItem('package', 'month');
    totalPayment.textContent = localStorage.getItem('totalPrice');
    checkOutDateMonth();
    proceedToPayment();
}

localStorage.getItem('totalPrice') ? totalPayment.textContent = localStorage.getItem('totalPrice') : totalPayment.textContent = '0';

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

function proceedToPayment() {
    if (localStorage.getItem('selectedDate') && localStorage.getItem('totalPrice')) {
        document.getElementById('ptp').style.display = 'block';
        document.getElementById('ptp2').style.display = 'none';
    } else {
        document.getElementById('ptp').style.display = 'none';
        document.getElementById('ptp2').style.display = 'block';
    }
}

function ptpBtn() {
    //e.preventDefault();
    if (localStorage.getItem('fullName')) {
        localStorage.removeItem('fullName');
    }
    localStorage.setItem('fullName', fullName.value);
    if (localStorage.getItem('email')) {
        localStorage.removeItem('email');
    }
    localStorage.setItem('email', email.value);
    if (localStorage.getItem('phone')) {
        localStorage.removeItem('phone');
    }
    localStorage.setItem('phone', phone.value);

    //window.location.href = 'payment.html';
}

document.getElementById('ptp').style.display = 'none';
document.getElementById('night').addEventListener('click', nightTotal);
document.getElementById('week').addEventListener('click', weekTotal);
document.getElementById('month').addEventListener('click', monthTotal);
document.getElementById('ptp').addEventListener('click', ptpBtn);

let ratingStars = document.getElementById("ratingStars");
if (rating == "1") {
    ratingStars.innerHTML = `<i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${rated} reviews`
} else if (rating == "2") {
    ratingStars.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${rated} reviews`
} else if (rating == "3") {
    ratingStars.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${rated} reviews`
} else if (rating == "4") {
    rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> ${rated} reviews`
} else if (rating == "5") {
    ratingStars.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> ${rated} reviews`
} else {
    ratingStars.innerHTML = `<i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> (0)`
}