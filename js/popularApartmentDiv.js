// apartmentDiv.js

import { apartments } from './apartmentList.js'; // Import apartments array from apartmentList.js

document.addEventListener('DOMContentLoaded', () => {
    const popularApartments = document.getElementById('popular-apartments');

    apartments.forEach(apartment => {
        if (apartment.popular) {
            const singleApartment = document.createElement('div');
            singleApartment.classList.add('col-6', 'col-md-4', 'col-lg-3');

            singleApartment.innerHTML = `
                <a href="apartment-details.html?id=${apartment.id}">
                    <div class="property-item rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" src="${apartment.images[0]}" alt="">
                        </div>
                        <div class="p-2 pb-0">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="old-price text-sm m-0 p-0 lh-sm">${apartment.oldPrice}</h6>
                                <h6 class="new-price text-primary m-0 p-0 lh-sm">${apartment.newPrice}</h6>
                            </div>
                            <h6 class="fs-sm m-0 mb-2 p-0 lh-sm ellipsis">${apartment.title}</h6>
                            <p class="addrs text-sm m-0 mb-2 p-0 lh-sm ellipsis">
                                <i class="fa fa-map-marker-alt text-primary me-1"></i>${apartment.street}, ${apartment.city}, ${apartment.country}
                            </p>
                            <div class="mb-2 text-xs" id="rating-${apartment.id}">
                                ${generateStars(apartment.rating)} ${apartment.rated}
                            </div>
                        </div>
                        <div class="d-flex border-top">
                            <small class="text-xs flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary"></i></small>
                            <small class="text-xs flex-fill text-center border-end py-2"><i class="fa fa-bath text-primary"></i></small>
                            <small class="text-xs flex-fill text-center border-end py-2"><i class="fas fa-utensils text-primary"></i></small>
                            <small class="text-xs flex-fill text-center py-2"><i class="fas fa-parking text-primary"></i></small>
                        </div>
                    </div>
                </a>
            `;
            popularApartments.appendChild(singleApartment);
        }
    });

    // Generate star ratings as HTML
    function generateStars(rating) {
        let starsHtml = '';
        const totalStars = 5;
        for (let i = 1; i <= totalStars; i++) {
            starsHtml += i <= rating ? `<i class="fas fa-star r-s"></i>` : `<i class="far fa-star r-s"></i>`;
        }
        return starsHtml;
    }
});

