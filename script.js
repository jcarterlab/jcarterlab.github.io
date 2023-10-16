// JavaScript source code

    /* see more/see less sections */  
    function toggleVisibility(VisibleId, HiddenId) {
        var visibleSection = document.getElementById(VisibleId);
        var hiddenSection = document.getElementById(HiddenId);

            if (visibleSection.style.display === "none") {
                visibleSection.style.display = "block";
                hiddenSection.style.display = "none";
            } else {
                visibleSection.style.display = "none";
                hiddenSection.style.display = "block";
            }
        }

    /* next/previous buttons for photography */
    var images = [ 
    "https://jcarterlab.github.io/Images/Photography/Mardin.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Egirdir.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Istanbul.JPG",
    "https://jcarterlab.github.io/Images/Photography/Kars.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Cappadocia.JPG",
    ];
    var alts = [
        "Mardin",
        "Egirdir",
        "Istanbul",
        "Kars",
        "Cappadocia",
    ]
    var currentImageIndex = 0;
    var imageElement = document.getElementById('image');

    window.onload = function () {
        imageElement = document.getElementById('image');
    };

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    }

    function previousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        imageElement.src = images[currentImageIndex];
        imageElement.alt = alts[currentImageIndex];
    }