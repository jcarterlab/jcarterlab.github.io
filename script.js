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


    /* photography */

    /* photo lists */ 
    var Northern_Europe = [  
        "Images/Photography/Northern-Europe/Iceland_1.JPG",
        "Images/Photography/Northern-Europe/Iceland_2.JPG",
        "Images/Photography/Northern-Europe/Finland_1.JPG",
        "Images/Photography/Northern-Europe/Sweden_1.JPG",
        "Images/Photography/Northern-Europe/UK_1.JPG"
        ];
    var NorthernEuropeImageIndex = 0;

    var Middle_East = [  
        "Images/Photography/Middle-East/Turkey_1.JPG",
        "Images/Photography/Middle-East/Egypt_1.JPG",
        "Images/Photography/Middle-East/Morocco_1.JPG",
        "Images/Photography/Middle-East/UAE_1.JPG",
        "Images/Photography/Middle-East/Israel_1.JPG",
        "Images/Photography/Middle-East/Jordan_1.JPG"
        ];
    var MiddleEastImageIndex = 0;

    var Eastern_Europe = [  
        "Images/Photography/Eastern-Europe/Austria_1.JPG",
        "Images/Photography/Eastern-Europe/Slovakia_1.JPG",
        "Images/Photography/Eastern-Europe/Hungary_1.JPG",
        "Images/Photography/Eastern-Europe/Poland_1.JPG",
        "Images/Photography/Eastern-Europe/Czechia_1.JPG"
        ];
    var EasternEuropeImageIndex = 0;

    var Southern_Europe = [  
        "Images/Photography/Southern-Europe/Greece_1.jpg",
        "Images/Photography/Southern-Europe/Spain_1.JPG",
        "Images/Photography/Southern-Europe/Italy_1.JPG",
        "Images/Photography/Southern-Europe/Portugal_1.JPG"
        ];
    var SouthernEuropeImageIndex = 0;

    var East_Asia = [ 
        "Images/Photography/East-Asia/Singapore_1.JPG", 
        "Images/Photography/East-Asia/Vietnam_1.JPG",
        "Images/Photography/East-Asia/Philippines_1.JPG",
        "Images/Photography/East-Asia/Cambodia_1.JPG",
        "Images/Photography/East-Asia/Thailand_1.JPG"
        ];
    var EastAsiaImageIndex = 0;

    var Saint_James = [  
        "Images/Photography/Saint-James/Saint_James_1.JPG",
        "Images/Photography/Saint-James/Saint_James_2.JPG",
        "Images/Photography/Saint-James/Saint_James_3.JPG",
        "Images/Photography/Saint-James/Saint_James_4.JPG",
        "Images/Photography/Saint-James/Saint_James_5.JPG",
        "Images/Photography/Saint-James/Saint_James_6.JPG"
        ];
    var SaintJamesImageIndex = 0;

    var Villa_Kemi = [  
        "Images/Photography/Villa-Kemi/villa_kemi_1.JPG",
        "Images/Photography/Villa-Kemi/villa_kemi_2.JPG",
        "Images/Photography/Villa-Kemi/villa_kemi_3.JPG",
        "Images/Photography/Villa-Kemi/villa_kemi_4.JPG",
        "Images/Photography/Villa-Kemi/villa_kemi_5.JPG"
        ];
    var VillaKemiImageIndex = 0;


    /* photo elements on page load */
    window.onload = function () {
        NorthernEuropeElement = document.getElementById('Northern-Europe-img-id');
        MiddleEastElement = document.getElementById('Middle-East-img-id');
        EastAsiaElement = document.getElementById('East-Asia-img-id');
        SouthernEuropeElement = document.getElementById('Southern-Europe-img-id');
        EasternEuropeElement = document.getElementById('Eastern-Europe-img-id');
        SaintJamesElement = document.getElementById('Saint-James-img-id');
        VillaKemiElement = document.getElementById('Villa-Kemi-img-id');
    }


    /* next image function */ 
    function nextImage(id) {
        if(id === 'Northern-Europe-img-id') {
            NorthernEuropeImageIndex = (NorthernEuropeImageIndex + 1) % Northern_Europe.length;
            NorthernEuropeElement.src = Northern_Europe[NorthernEuropeImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex + 1) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'East-Asia-img-id') {
            EastAsiaImageIndex = (EastAsiaImageIndex + 1) % East_Asia.length;
            EastAsiaElement.src = East_Asia[EastAsiaImageIndex];
        } else if(id === 'Southern-Europe-img-id') {
            SouthernEuropeImageIndex = (SouthernEuropeImageIndex + 1) % Southern_Europe.length;
            SouthernEuropeElement.src = Southern_Europe[SouthernEuropeImageIndex];
        } else if(id === 'Eastern-Europe-img-id') {
            EasternEuropeImageIndex = (EasternEuropeImageIndex + 1) % Eastern_Europe.length;
            EasternEuropeElement.src = Eastern_Europe[EasternEuropeImageIndex];
        } else if(id === 'Saint-James-img-id') {
            SaintJamesImageIndex = (SaintJamesImageIndex + 1) % Saint_James.length;
            SaintJamesElement.src = Saint_James[SaintJamesImageIndex];
        } else if(id === 'Villa-Kemi-img-id') {
            VillaKemiImageIndex = (VillaKemiImageIndex + 1) % Villa_Kemi.length;
            VillaKemiElement.src = Villa_Kemi[VillaKemiImageIndex];
        }
    }
    
    /* next image function */ 
    function previousImage(id) {
        if(id === 'Northern-Europe-img-id') {
            NorthernEuropeImageIndex = (NorthernEuropeImageIndex - 1 + Northern_Europe.length) % Northern_Europe.length;
            NorthernEuropeElement.src = Northern_Europe[NorthernEuropeImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex - 1 + Middle_East.length) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'East-Asia-img-id') {
            EastAsiaImageIndex = (EastAsiaImageIndex - 1 + East_Asia.length) % East_Asia.length;
            EastAsiaElement.src = East_Asia[EastAsiaImageIndex];
        } else if(id === 'Southern-Europe-img-id') {
            SouthernEuropeImageIndex = (SouthernEuropeImageIndex - 1 + Southern_Europe.length) % Southern_Europe.length;
            SouthernEuropeElement.src = Southern_Europe[SouthernEuropeImageIndex];
        } else if(id === 'Eastern-Europe-img-id') {
            EasternEuropeImageIndex = (EasternEuropeImageIndex - 1 + Eastern_Europe.length) % Eastern_Europe.length;
            EasternEuropeElement.src = Eastern_Europe[EasternEuropeImageIndex];
        } else if(id === 'Saint-James-img-id') {
            SaintJamesImageIndex = (SaintJamesImageIndex - 1 + Saint_James.length) % Saint_James.length;
            SaintJamesElement.src = Saint_James[SaintJamesImageIndex]; 
        } else if(id === 'Villa-Kemi-img-id') {
            VillaKemiImageIndex = (VillaKemiImageIndex - 1 + Villa_Kemi.length) % Villa_Kemi.length;
            VillaKemiElement.src = Villa_Kemi[VillaKemiImageIndex]; 
        }
    }