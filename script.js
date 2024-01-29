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
    var Europe = [  
        "Images/Photography/Europe/Greece_1.jpg",
        "Images/Photography/Europe/Spain_1.JPG",
        "Images/Photography/Europe/Italy_1.JPG",
        "Images/Photography/Europe/Austria_1.JPG",
        "Images/Photography/Europe/Slovakia_1.JPG",
        "Images/Photography/Europe/Iceland_1.JPG",
        "Images/Photography/Europe/Iceland_2.JPG",
        "Images/Photography/Europe/UK_1.JPG",
        "Images/Photography/Europe/Poland_1.JPG",
        "Images/Photography/Europe/Hungary_1.JPG"
        ];
    var EuropeImageIndex = 0;

    var Middle_East = [  
        "Images/Photography/Middle-East/Egypt_1.JPG",
        "Images/Photography/Middle-East/UAE_1.JPG",
        "Images/Photography/Middle-East/Morocco_1.JPG",
        "Images/Photography/Middle-East/Morocco_2.JPG",
        "Images/Photography/Middle-East/Jordan_1.JPG",
        "Images/Photography/Middle-East/Turkey_1.JPG",
        "Images/Photography/Middle-East/Turkey_2.JPG",
        "Images/Photography/Middle-East/Turkey_3.JPG",
        "Images/Photography/Middle-East/Turkey_4.JPG",
        "Images/Photography/Middle-East/Turkey_5.JPG"
        ];
    var MiddleEastImageIndex = 0;

    var Asia = [ 
        "Images/Photography/Asia/Cambodia_1.JPG",
        "Images/Photography/Asia/Cambodia_2.JPG",
        "Images/Photography/Asia/Philippines_1.JPG",
        "Images/Photography/Asia/Thailand_1.JPG", 
        "Images/Photography/Asia/Vietnam_1.JPG",
        "Images/Photography/Asia/Vietnam_2.JPG",
        "Images/Photography/Asia/Vietnam_3.JPG",
        "Images/Photography/Asia/Singapore_1.JPG", 
        "Images/Photography/Asia/Singapore_2.JPG", 
        "Images/Photography/Asia/Singapore_3.JPG"
        ];
    var AsiaImageIndex = 0;

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
        EuropeElement = document.getElementById('Europe-img-id');
        MiddleEastElement = document.getElementById('Middle-East-img-id');
        AsiaElement = document.getElementById('Asia-img-id');
        SaintJamesElement = document.getElementById('Saint-James-img-id');
        VillaKemiElement = document.getElementById('Villa-Kemi-img-id');
    }


    /* next image function */ 
    function nextImage(id) {
        if(id === 'Europe-img-id') {
            EuropeImageIndex = (EuropeImageIndex + 1) % Europe.length;
            EuropeElement.src = Europe[EuropeImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex + 1) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'Asia-img-id') {
            AsiaImageIndex = (AsiaImageIndex + 1) % Asia.length;
            AsiaElement.src = Asia[AsiaImageIndex];
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
        if(id === 'Europe-img-id') {
            EuropeImageIndex = (EuropeImageIndex - 1 + Europe.length) % Europe.length;
            EuropeElement.src = Europe[EuropeImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex - 1 + Middle_East.length) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'Asia-img-id') {
            AsiaImageIndex = (AsiaImageIndex - 1 + Asia.length) % Asia.length;
            AsiaElement.src = Asia[AsiaImageIndex];
        } else if(id === 'Saint-James-img-id') {
            SaintJamesImageIndex = (SaintJamesImageIndex - 1 + Saint_James.length) % Saint_James.length;
            SaintJamesElement.src = Saint_James[SaintJamesImageIndex]; 
        } else if(id === 'Villa-Kemi-img-id') {
            VillaKemiImageIndex = (VillaKemiImageIndex - 1 + Villa_Kemi.length) % Villa_Kemi.length;
            VillaKemiElement.src = Villa_Kemi[VillaKemiImageIndex]; 
        }
    }