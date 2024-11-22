let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

navBar.innerHTML = `
    <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <i class="fas fa-home text-primary"></i>
                    </div>
                    <h4 class="m-0 text-primary">ElitesDwell</h4>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Properties for sale</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a id="buy-studio" class="dropdown-item">Studio for sale</a>
                                <a id="buy1bed" class="dropdown-item">1 bedroom for sale</a>
                                <a id="buy2bed" class="dropdown-item">2 bedrooms for sale</a>
                                <a id="buy3bed" class="dropdown-item">3 bedrooms for sale</a>
                                <a id="buy4bed" class="dropdown-item">4 bedrooms for sale</a>
                                <a id="buy5bed" class="dropdown-item">5 bedrooms for sale</a>
                                <a id="buy6bed" class="dropdown-item">6 bedrooms for sale</a>
                                <a id="buy-mansion" class="dropdown-item">Mansion for sale</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                           <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Properties for rent</a>
                           <div class="dropdown-menu rounded-0 m-0">
                                <a id="rent-studio" class="dropdown-item">Studio for rent</a>
                                <a id="rent1bed" class="dropdown-item">1 bedroom for rent</a>
                                <a id="rent2bed" class="dropdown-item">2 bedrooms for rent</a>
                                <a id="rent3bed" class="dropdown-item">3 bedrooms for rent</a>
                                <a id="rent4bed" class="dropdown-item">4 bedrooms for rent</a>
                                <a id="rent5bed" class="dropdown-item">5 bedrooms for rent</a>
                                <a id="rent6bed" class="dropdown-item">6 bedrooms for rent</a>
                                <a id="rent-mansion" class="dropdown-item">Mansion for rent</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service apartments</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a id="sa-studio" class="dropdown-item">Studio apartments</a>
                                <a id="sa1bed" class="dropdown-item">1 bedroom apartment</a>
                                <a id="sa2bed" class="dropdown-item">2 bedrooms apartment</a>
                                <a id="sa3bed" class="dropdown-item">3 bedrooms apartment</a>
                                <a id="sa4bed" class="dropdown-item">4 bedrooms apartment</a>
                                <a id="sa5bed" class="dropdown-item">5 bedrooms apartment</a>
                                <a id="sa6bed" class="dropdown-item">6 bedrooms apartment</a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link">Sell a property</a>
                        <a href="" class="nav-item nav-link">Contact an agent</a>
                        <a href="about.html" class="nav-item nav-link">About us</a>
                        <a href="contact.html" class="nav-item nav-link">Contact us</a>
                    </div>
                </div>
`

footer.innerHTML = `
        <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-2"></i>Yonge St Unit 8, Richmond Hill, ON L4C 3C7, Canada</p>
                        <p class="mb-2"><i class="fab fa-whatsapp me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>elitestayapartments@zohomail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/elitestayapartments" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Quick Links</h5>
                        <a class="btn btn-link text-white-50" href="index.html">Home</a>
                        <a class="btn btn-link text-white-50" href="about.html">About Us</a>
                        <a class="btn btn-link text-white-50" href="contact.html">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="privacy-policy.html">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="terms-condition.html">Terms & Condition</a>
                        <a class="btn btn-link text-white-50" href="faqs.html">FAQs</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Photo Gallery</h5>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
        </div> 

        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start text-xs mb-3 mb-md-0">
                        &copy;2024 <a class="text-primary fw-bold" href="index.html">EliteStay</a>, All Rights Reserved.
                     </div>
                </div>
            </div>
        </div>
`

function buyStudio() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "Studio");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy1bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "1 bedroom");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy2bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "2 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy3bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "3 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy4bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "4 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy5bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "5 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buy6bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "6 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function buyMansion() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for sale");
    localStorage.setItem("selectedSubCategory", "Mansion");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rentStudio() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "Studio");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent1bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "1 bedroom");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent2bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "2 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent3bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "3 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent4bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "4 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent5bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "5 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rent6bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "6 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function rentMansion() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "for rent");
    localStorage.setItem("selectedSubCategory", "Mansion");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function saStudio() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "Studio");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa1bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "1 bedroom");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa2bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "2 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa3bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "3 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa4bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "4 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa5bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "5 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}

function sa6bed() {
    localStorage.clear();
    localStorage.setItem("selectedCategory", "service apartment");
    localStorage.setItem("selectedSubCategory", "6 bedrooms");
    window.location.href = "property-list.html"; // Redirect to the property listing page
}


document.getElementById("buy-studio").addEventListener("click", buyStudio);
document.getElementById("buy1bed").addEventListener("click", buy1bed);
document.getElementById("buy2bed").addEventListener("click", buy2bed);
document.getElementById("buy3bed").addEventListener("click", buy3bed);
document.getElementById("buy4bed").addEventListener("click", buy4bed);
document.getElementById("buy5bed").addEventListener("click", buy5bed);
document.getElementById("buy6bed").addEventListener("click", buy6bed);
document.getElementById("buy-mansion").addEventListener("click", buyMansion);

document.getElementById("rent-studio").addEventListener("click", rentStudio);
document.getElementById("rent1bed").addEventListener("click", rent1bed);
document.getElementById("rent2bed").addEventListener("click", rent2bed);
document.getElementById("rent3bed").addEventListener("click", rent3bed);
document.getElementById("rent4bed").addEventListener("click", rent4bed);
document.getElementById("rent5bed").addEventListener("click", rent5bed);
document.getElementById("rent6bed").addEventListener("click", rent6bed);
document.getElementById("rent-mansion").addEventListener("click", rentMansion);

document.getElementById("sa-studio").addEventListener("click", saStudio);
document.getElementById("sa1bed").addEventListener("click", sa1bed);
document.getElementById("sa2bed").addEventListener("click", sa2bed);
document.getElementById("sa3bed").addEventListener("click", sa3bed);
document.getElementById("sa4bed").addEventListener("click", sa4bed);
document.getElementById("sa5bed").addEventListener("click", sa5bed);
document.getElementById("sa6bed").addEventListener("click", sa6bed);



