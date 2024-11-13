let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

navBar.innerHTML = `
    <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <img class="img-fluid" src="img/icon-deal.png" alt="Icon" style="width: 30px; height: 30px;">
                    </div>
                    <h1 class="m-0 text-primary">EliteStay</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service Apartments</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a id="studioA" class="dropdown-item">Studio apartment</a>
                                <a id="oneBedroomA" class="dropdown-item">One bedroom apartment</a>
                                <a id="twoBedroomA" class="dropdown-item">Two bedroom apartment</a>
                                <a id="luxuryA" class="dropdown-item">Luxury apartment</a>
                            </div>
                        </div>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
`

footer.innerHTML = `
        <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fab fa-whatsapp me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
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
                                <img class="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="">
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

document.getElementById("studioA").addEventListener("click", studio);

document.getElementById("oneBedroomA").addEventListener("click", oneBedroom);

document.getElementById("twoBedroomA").addEventListener("click", twoBedroom);

document.getElementById("luxuryA").addEventListener("click", luxury);

