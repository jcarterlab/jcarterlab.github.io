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
    var images = ["https://jcarterlab.github.io/Images/Photography/Luxor.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Mardin.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Egirdir.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Istanbul.JPG",
    "https://jcarterlab.github.io/Images/Photography/Kars.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Cappadocia.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Kotor.JPG", 
    "https://jcarterlab.github.io/Images/Photography/SanTorini.JPG",
    "https://jcarterlab.github.io/Images/Photography/Meteora.JPG", 
    "https://jcarterlab.github.io/Images/Photography/Madrid.JPG", 
    "https://jcarterlab.github.io/Images/Photography/SiemReap.JPG", 
    "https://jcarterlab.github.io/Images/Photography/HoiAn.JPG",
    "https://jcarterlab.github.io/Images/Photography/Singapore.JPG"];
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
    }