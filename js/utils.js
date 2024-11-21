let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

navBar.innerHTML = `
    <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <i class="fas fa-home text-primary"></i>
                    </div>
                    <h4 class="m-0 text-primary">EliteDwell</h4>
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
                                <a id="fs-sa" class="dropdown-item">Studio for sale</a>
                                <a id="fs-1b" class="dropdown-item">1 bedroom for sale</a>
                                <a id="fs-2b" class="dropdown-item">2 bedrooms for sale</a>
                                <a id="fs-3b" class="dropdown-item">3 bedrooms for sale</a>
                                <a id="fs-4b" class="dropdown-item">4 bedrooms for sale</a>
                                <a id="fs-5b" class="dropdown-item">5 bedrooms for sale</a>
                                <a id="fs-6b" class="dropdown-item">6 bedrooms for sale</a>
                                <a id="fs-ma" class="dropdown-item">Mansion for sale</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                           <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Properties for rent</a>
                           <div class="dropdown-menu rounded-0 m-0">
                                <a id="fr-sa" class="dropdown-item">Studio for rent</a>
                                <a id="fr-1b" class="dropdown-item">1 bedroom for rent</a>
                                <a id="fr-2b" class="dropdown-item">2 bedrooms for rent</a>
                                <a id="fr-3b" class="dropdown-item">3 bedrooms for rent</a>
                                <a id="fr-4b" class="dropdown-item">4 bedrooms for rent</a>
                                <a id="fr-5b" class="dropdown-item">5 bedrooms for rent</a>
                                <a id="fr-6b" class="dropdown-item">6 bedrooms for rent</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service apartments</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a id="fs-sa" class="dropdown-item">Studio apartments</a>
                                <a id="fs-1b" class="dropdown-item">1 bedroom apartment</a>
                                <a id="fs-2b" class="dropdown-item">2 bedrooms apartment</a>
                                <a id="fs-3b" class="dropdown-item">3 bedrooms apartment</a>
                                <a id="fs-4b" class="dropdown-item">4 bedrooms apartment</a>
                                <a id="fs-5b" class="dropdown-item">5 bedrooms apartment</a>
                                <a id="fs-6b" class="dropdown-item">6 bedrooms apartment</a>
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

/*document.getElementById("studioA").addEventListener("click", studio);

document.getElementById("oneBedroomA").addEventListener("click", oneBedroom);

document.getElementById("twoBedroomA").addEventListener("click", twoBedroom);

document.getElementById("luxuryA").addEventListener("click", luxury);
*/



