import { apartments } from './apartmentList.js';

const urlParams = new URLSearchParams(window.location.search);
const apartmentId = parseInt(urlParams.get('id'));
const apartment = apartments.find(a => a.id === apartmentId);
const apartmentImages = document.getElementById('apartment-images');
const apartmentInfo = document.getElementById('apartment-info');
const apartmentList = document.getElementById('apartment-list');
const book = document.getElementById('book');
const bookNow = document.getElementById('bookNow');

if (apartment) {
    const images = apartment.images.map((img, index) => {
        return `<div class="owl-carousel-item" id="item${index}"><img class="img-fluid" src="${img}" alt="image"></div>`;
    }).join('');

    apartmentImages.innerHTML = `
        <div class="owl-carousel header-carousel mb-4">${images}</div>
    `;
    
    apartmentInfo.innerHTML = `
        <h6 class="fs-sm m-0 mb-2 p-0 lh-sm ellipsis">${apartment.title}</h6>
        <h6 class="text-xs acat-color m-0 mb-2 p-0 lh-sm ellipsis">${apartment.subCategory} ${apartment.category}</h6>
        <p class="addrs text-sm m-0 mb-2 p-0 lh-sm ellipsis"><i class="fa fa-map-marker-alt text-primary me-1"></i>${apartment.street}, ${apartment.city}, ${apartment.country}</p>
        <div id="rating" class="mb-4 text-sm"></div>
        <p><strong class="adhd">Description</strong><br>${apartment.features ? apartment.features : "N/A"}</p>
        <p><strong class="adhd">Room Features/Amenities</strong><br>${apartment.amenities ? apartment.amenities : "N/A"}</p>
        <p class="pricing"><strong class="adhd">Pricing</strong><br>Stay for a night: <b class="text-primary">${apartment.night}</b><br>Stay for a week: <b class="text-primary">${apartment.week}</b><br>Stay for a month: <b class="text-primary">${apartment.month}</b></p>
    `;
    
    // Initialize the Owl Carousel
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
    let rating = document.getElementById("rating");
    if(apartment.rating == "1") {
        rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${apartment.rated} reviews`
    } else if (apartment.rating == "2") {
        rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${apartment.rated} reviews`
    } else if (apartment.rating == "3") {
        rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> ${apartment.rated} reviews`
    } else if (apartment.rating == "4") {
        rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="far fa-star r-s"></i> ${apartment.rated} reviews`
    } else if (apartment.rating == "5") {
        rating.innerHTML = `<i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> <i class="fas fa-star r-s"></i> ${apartment.rated} reviews`
    } else {
        rating.innerHTML = `<i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> <i class="far fa-star r-s"></i> (0)`
    }
} else {
    apartmentImages.style.display = 'none';
    book.style.display = 'none';
    apartmentList.innerHTML = '<h6 class="my-4">Apartment not found.</h6> <a href="property-list.html" class="d-block btn btn-primary py-2 px-4 animated fadeIn">Apartments List</a>';
}

function bookApartment() {
    localStorage.clear();
    localStorage.setItem("apartmentCategory", apartment.category);
    localStorage.setItem("apartmentTitle", apartment.title);
    localStorage.setItem("apartmentCity", apartment.city);
    localStorage.setItem("apartmentStreet", apartment.street);
    localStorage.setItem("apartmentCountry", apartment.country);
    localStorage.setItem("apartmentFeatures", apartment.features);
    localStorage.setItem("apartmentAmenities", apartment.amenities);
    localStorage.setItem("apartmentNight", apartment.night);
    localStorage.setItem("apartmentWeek", apartment.week);
    localStorage.setItem("apartmentMonth", apartment.month);
    localStorage.setItem("apartmentRating", apartment.rating);
    localStorage.setItem("apartmentRated", apartment.rated);
    window.location.href = "book-apartment.html";
}

document.getElementById("bookNow").addEventListener("click", bookApartment);

