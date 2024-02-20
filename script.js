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
        "Images/Photography/Europe/Iceland_1.JPG",
        "Images/Photography/Europe/UK_1.JPG",
        "Images/Photography/Europe/Hungary_1.JPG"
        ];
    var EuropeImageIndex = 0;

    var Middle_East = [  
        "Images/Photography/Middle-East/Egypt_1.JPG",
        "Images/Photography/Middle-East/Egypt_2.JPG",
        "Images/Photography/Middle-East/Morocco_1.JPG",
        "Images/Photography/Middle-East/Morocco_2.JPG",
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
        "Images/Photography/Southeast-Asia/Thailand_1.JPG"
        ];
    var SoutheastAsiaImageIndex = 0;

    var Hotels = [  
        "Images/Photography/Hotels/Saint_James_1.JPG",
        "Images/Photography/Hotels/Saint_James_2.JPG",
        "Images/Photography/Hotels/Saint_James_3.JPG",
        "Images/Photography/Hotels/villa_kemi_1.JPG",
        "Images/Photography/Hotels/villa_kemi_2.JPG"
        ];
    var HotelsImageIndex = 0;


    /* photo elements on page load */
    window.onload = function () {
        EuropeElement = document.getElementById('Europe-img-id');
        MiddleEastElement = document.getElementById('Middle-East-img-id');
        SoutheastAsiaElement = document.getElementById('Southeast_Asia-img-id');
        HotelsElement = document.getElementById('Hotels-img-id');
    }


    /* next image function */ 
    function nextImage(id) {
        if(id === 'Europe-img-id') {
            EuropeImageIndex = (EuropeImageIndex + 1) % Europe.length;
            EuropeElement.src = Europe[EuropeImageIndex];
        } else if(id === 'Middle-East-img-id') {
            MiddleEastImageIndex = (MiddleEastImageIndex + 1) % Middle_East.length;
            MiddleEastElement.src = Middle_East[MiddleEastImageIndex];
        } else if(id === 'Southeast_Asia-img-id') {
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex + 1) % Southeast_Asia.length;
            SoutheastAsiaElement.src = Southeast_Asia[SoutheastAsiaImageIndex];
        } else if(id === 'Hotels-img-id') {
            HotelsImageIndex = (HotelsImageIndex + 1) % Hotels.length;
            HotelsElement.src = Hotels[HotelsImageIndex];
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
        } else if(id === 'Southeast_Asia-img-id') {
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex - 1 + Southeast_Asia.length) % Southeast_Asia.length;
            SoutheastAsiaElement.src = Southeast_Asia[SoutheastAsiaImageIndex];
        } else if(id === 'Hotels-img-id') {
            HotelsImageIndex = (HotelsImageIndex - 1 + Hotels.length) % Hotels.length;
            HotelsElement.src = Hotels[HotelsImageIndex]; 
        }
    }