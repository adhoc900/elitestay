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

// Save filters to localStorage and redirect
function filterApartmentsAndRedirect() {
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
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function clearLocalStorage() {
    localStorage.clear();
}

function studio() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "sa");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function oneBedroom() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "1ba");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function twoBedroom() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "2ba");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function luxury() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "la");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

// Add event listener for filter button
document.getElementById("filterBtn").addEventListener("click", filterApartmentsAndRedirect);

document.getElementById("getStarted").addEventListener("click", clearLocalStorage);

document.getElementById("studio").addEventListener("click", studio);

document.getElementById("oneBedroom").addEventListener("click", oneBedroom);

document.getElementById("twoBedroom").addEventListener("click", twoBedroom);

document.getElementById("luxury").addEventListener("click", luxury);

