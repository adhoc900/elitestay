import { apartments } from './apartmentList.js'; // Import apartments array from apartmentList.js

// Open and Close Modal Logic
const openFilterModalBtn = document.getElementById('openFilterModal');
const closeFilterModalBtns = document.querySelectorAll('#closeFilterModal, #closeFilterModal2');
const filterModal = document.getElementById('filterModal');

openFilterModalBtn.addEventListener('click', () => {
    filterModal.style.display = 'block';
});

closeFilterModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === filterModal) {
        filterModal.style.display = 'none';
    }
}

const countriesCities = {
    "United States": ["New York City", "San Francisco", "Chicago", "Los Angeles"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Edinburgh"],
    "Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary"],
    "Singapore": ["Singapore City"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi"],
    "France": ["Paris", "Lyon"],
    "Spain": ["Barcelona", "Madrid"],
    "Italy": ["Rome", "Milan", "Venice", "Florence"],
};

// Populate cities based on country selection
function populateCities() {
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const selectedCountry = countrySelect.value;

    citySelect.innerHTML = "<option value=''>Select a city</option>";

    if (selectedCountry && countriesCities[selectedCountry]) {
        countriesCities[selectedCountry].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

document.getElementById("country").addEventListener('change', () => {
    populateCities();
})

// Save filters to localStorage and redirect
function applyFilter() {
    const categorySelect = document.getElementById("category");
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");

    const selectedCategory = categorySelect.value;
    const selectedCountry = countrySelect.value;
    const selectedCity = citySelect.value;

    localStorage.clear();
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("selectedCountry", selectedCountry);
    localStorage.setItem("selectedCity", selectedCity);

    filterModal.style.display = 'none';
    
    filteredApartmentsList();
}

function filteredApartmentsList() {
    const allApartments = document.getElementById('all-apartments');
    allApartments.innerHTML = "";
    
    let selectedCategory, selectedCountry, selectedCity;

    // Retrieve selected filters from localStorage
    if (localStorage.getItem("selectedCategory") || localStorage.getItem("selectedCountry") || localStorage.getItem("selectedCity")) {
        selectedCategory = localStorage.getItem("selectedCategory");
        selectedCountry = localStorage.getItem("selectedCountry");
        selectedCity = localStorage.getItem("selectedCity");
        if (selectedCategory == "at") {
            selectedCategory = '';
        }
        if(selectedCountry == "sac") {
            selectedCountry = '';
        }
        if (selectedCity == "city") {
            selectedCity = '';
        }
    }
    
    const filteredApartments = apartments.filter(apartment => {
        return (
            (!selectedCategory || apartment.category === selectedCategory) && // Match category if selected
            (!selectedCountry || apartment.country === selectedCountry) && // Match country if selected
            (!selectedCity || apartment.city === selectedCity) // Match city if selected
        );
    });
    
    filteredApartments.forEach(apartment => {
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
        allApartments.appendChild(singleApartment);
    });
    
    function generateStars(rating) {
        let starsHtml = '';
        const totalStars = 5;
        for (let i = 1; i <= totalStars; i++) {
            starsHtml += i <= rating ? `<i class="fas fa-star r-s"></i>` : `<i class="far fa-star r-s"></i>`;
        }
        return starsHtml;
    }
}

function clearFilter() {
    localStorage.clear();
    filteredApartmentsList();
}

// Add event listener for filter button
document.getElementById("applyFilter").addEventListener("click", applyFilter);

document.getElementById("clearFilter").addEventListener("click", clearFilter);