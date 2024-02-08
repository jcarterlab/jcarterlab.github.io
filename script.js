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
        "Images/Photography/Europe/Slovakia_1.JPG",
        "Images/Photography/Europe/Hungary_1.JPG",
        "Images/Photography/Europe/Iceland_1.JPG",
        "Images/Photography/Europe/UK_1.JPG"
        ];
    var EuropeImageIndex = 0;

    var North_Africa = [
        "Images/Photography/North-Africa/Egypt_1.JPG",
        "Images/Photography/North-Africa/Egypt_2.JPG",
        "Images/Photography/North-Africa/Egypt_3.JPG",
        "Images/Photography/North-Africa/Morocco_1.JPG",
        "Images/Photography/North-Africa/Morocco_2.JPG",
        "Images/Photography/North-Africa/Morocco_3.JPG"
    ]
    var NorthAfricaImageIndex = 0;

    var Middle_East = [  
        "Images/Photography/Middle-East/Turkey_1.JPG",
        "Images/Photography/Middle-East/Turkey_2.JPG",
        "Images/Photography/Middle-East/Turkey_3.JPG",
        "Images/Photography/Middle-East/Turkey_4.JPG",
        "Images/Photography/Middle-East/UAE_1.JPG",
        "Images/Photography/Middle-East/Jordan_1.JPG"
        ];
    var MiddleEastImageIndex = 0;

    var Southeast_Asia = [
        "Images/Photography/Southeast-Asia/Singapore_1.JPG", 
        "Images/Photography/Southeast-Asia/Cambodia_1.JPG",
        "Images/Photography/Southeast-Asia/Cambodia_2.JPG",
        "Images/Photography/Southeast-Asia/Philippines_1.JPG",
        "Images/Photography/Southeast-Asia/Vietnam_1.JPG",
        "Images/Photography/Southeast-Asia/Vietnam_2.JPG",
        "Images/Photography/Southeast-Asia/Thailand_1.JPG"
        ];
    var SoutheastAsiaImageIndex = 0;

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
        NorthAfricaAlement = document.getElementById('North-Africa-img-id');
        MiddleEastElement = document.getElementById('Middle-East-img-id');
        SoutheastAsiaElement = document.getElementById('Southeast_Asia-img-id');
        SaintJamesElement = document.getElementById('Saint-James-img-id');
        VillaKemiElement = document.getElementById('Villa-Kemi-img-id');
    }


    /* next image function */ 
    function nextImage(id) {
        if(id === 'Europe-img-id') {
            EuropeImageIndex = (EuropeImageIndex + 1) % Europe.length;
            EuropeElement.src = Europe[EuropeImageIndex];
        } else if(id === 'North-Africa-img-id') {
            NorthAfricaImageIndex = (NorthAfricaImageIndex + 1) % North_Africa.length;
            NorthAfricaAlement.src = North_Africa[NorthAfricaImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex + 1) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'Southeast_Asia-img-id') {
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex + 1) % Southeast_Asia.length;
            SoutheastAsiaElement.src = Southeast_Asia[SoutheastAsiaImageIndex];
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
        } else if(id === 'North-Africa-img-id') {
            NorthAfricaImageIndex = (NorthAfricaImageIndex - 1 + North_Africa.length) % North_Africa.length;
            NorthAfricaAlement.src = North_Africa[NorthAfricaImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex - 1 + Middle_East.length) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'Southeast_Asia-img-id') {
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex - 1 + Southeast_Asia.length) % Southeast_Asia.length;
            SoutheastAsiaElement.src = Southeast_Asia[SoutheastAsiaImageIndex];
        } else if(id === 'Saint-James-img-id') {
            SaintJamesImageIndex = (SaintJamesImageIndex - 1 + Saint_James.length) % Saint_James.length;
            SaintJamesElement.src = Saint_James[SaintJamesImageIndex]; 
        } else if(id === 'Villa-Kemi-img-id') {
            VillaKemiImageIndex = (VillaKemiImageIndex - 1 + Villa_Kemi.length) % Villa_Kemi.length;
            VillaKemiElement.src = Villa_Kemi[VillaKemiImageIndex]; 
        }
    }