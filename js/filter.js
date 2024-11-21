const categoriesSubcategories = {
    "for sale": ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5 bedrooms", "6 bedrooms", "Mansion"],
    "for rent": ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5 bedrooms", "6 bedrooms", "Mansion"],
    "service apartment": ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5 bedrooms", "6 bedrooms"],
};

// Populate cities based on country selection
function populateSubCategories() {
    const categorySelect = document.getElementById("category");
    const subCategorySelect = document.getElementById("sub-category");
    const selectedCategory = categorySelect.value;

    subCategorySelect.innerHTML = "<option value=''>Select property type</option>";

    if (selectedCategory && categoriesSubcategories[selectedCategory]) {
        categoriesSubcategories[selectedCategory].forEach(subcat => {
            const option = document.createElement("option");
            option.value = subcat;
            option.textContent = subcat;
            subCategorySelect.appendChild(option);
        });
    }
}


const countriesCities = {
    "United States": ["New York", "San Francisco", "Chicago", "Los Angeles"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Edinburgh"],
    /*"Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth"],
    "Singapore": ["Singapore City"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi"],
    "France": ["Paris", "Lyon"],
    "Spain": ["Barcelona", "Madrid"],
    "Italy": ["Rome", "Milan", "Venice", "Florence"],*/
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

// Save filters to localStorage and redirect
function filterApartmentsAndRedirect() {
    const categorySelect = document.getElementById("category");
    const subCategorySelect = document.getElementById("sub-category");
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const selectedCategory = categorySelect.value;
    const selectedSubCategory = subCategorySelect.value;
    const selectedCountry = countrySelect.value;
    const selectedCity = citySelect.value;
    localStorage.clear();
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("selectedSubCategory", selectedSubCategory);
    localStorage.setItem("selectedCountry", selectedCountry);
    localStorage.setItem("selectedCity", selectedCity);
    
    console.log(
        localStorage.getItem("selectedCategory"),
        localStorage.getItem("selectedSubCategory"),
        localStorage.getItem("selectedCountry"),
        localStorage.getItem("selectedCity")
    );
    
    //window.location.href = "property-list.html"; // Redirect to the property listing page
}

function clearLocalStorage() {
    localStorage.clear();
}

function forSale() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function forRent() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function serviceApartments() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

// Add event listener for filter button
document.getElementById("filterBtn").addEventListener("click", filterApartmentsAndRedirect);

document.getElementById("explore").addEventListener("click", clearLocalStorage);

document.getElementById("for-sale").addEventListener("click", forSale);

document.getElementById("for-rent").addEventListener("click", forRent);

document.getElementById("service-apartment").addEventListener("click", serviceApartments);


