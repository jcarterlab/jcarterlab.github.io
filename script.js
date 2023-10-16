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
    var images = ["Images/Photography/Luxor.jpg", "Images/Photography/Mardin.jpg", "Images/Photography/Egirdir.jpg", "Images/Photography/Istanbul.jpg",
    "Images/Photography/Kars.jpg", "Images/Photography/Cappadocia.jpg", "Images/Photography/Kotor.jpg", "Images/Photography/SanTorini.jpg",
    "Images/Photography/Meteora.jpg", "Images/Photography/Madrid.jpg", "Images/Photography/SiemReap.jpg", "Images/Photography/HoiAn.jpg",
    "Images/Photography/Singapore.jpg"];
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