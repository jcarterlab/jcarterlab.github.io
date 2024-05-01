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
    var SoutheastAsia = [
        "Images/Photography/Southeast Asia/Singapore_1.JPG", 
        "Images/Photography/Southeast Asia/Cambodia_1.JPG",
        "Images/Photography/Southeast Asia/Cambodia_2.JPG"
        ];
    var SoutheastAsiaImageIndex = 0;

    var SouthernEurope = [  
        "Images/Photography/Southern Europe/Greece_1.jpg",
        "Images/Photography/Southern Europe/Spain_1.JPG",
        "Images/Photography/Southern Europe/Portugal_1.JPG"
        ];
    var SouthernEuropeImageIndex = 0;

    var NorthAfrica = [
        "Images/Photography/North Africa/Egypt_1.JPG",
        "Images/Photography/North Africa/Morocco_1.JPG",
        "Images/Photography/North Africa/Morocco_2.JPG"
        ];
    var NorthAfricaImageIndex = 0;

    var MiddleEast = [
        "Images/Photography/Middle East/Turkey_1.JPG",
        "Images/Photography/Middle East/Turkey_2.JPG",
        "Images/Photography/Middle East/Jordan_1.JPG"
    ]
    var MiddleEastImageIndex = 0;

    var CentralEurope = [  
        "Images/Photography/Central Europe/Austria_1.JPG",
        "Images/Photography/Central Europe/Hungary_1.JPG",
        "Images/Photography/Central Europe/Slovakia_1.JPG"
        ];
    var CentralEuropeImageIndex = 0;

    var TheCaucasus = [
        "Images/Photography/The Caucasus/Turkey_1.JPG",
        "Images/Photography/The Caucasus/Georgia_1.JPG",
        "Images/Photography/The Caucasus/Georgia_2.JPG"
        ];
    var TheCaucasusImageIndex = 0;

    var NorthernEurope = [
        "Images/Photography/Northern Europe/Iceland_1.JPG",
        "Images/Photography/Northern Europe/Finland_1.JPG",
        "Images/Photography/Northern Europe/The_UK_1.JPG"
        ];
    var NorthernEuropeImageIndex = 0;



    /* photo elements on page load */
    window.onload = function () {
        SouthernEuropeElement = document.getElementById('SouthernEurope-img-id');
        NorthAfricaElement = document.getElementById('NorthAfrica-img-id');
        MiddleEastElement = document.getElementById('MiddleEast-img-id');
        CentralEuropeElement = document.getElementById('CentralEurope-img-id');
        SoutheastAsiaElement = document.getElementById('SoutheastAsia-img-id');
        TheCaucasusElement = document.getElementById('TheCaucasus-img-id');
        NorthernEuropeElement = document.getElementById('NorthernEurope-img-id');
    }



    /* next image function */ 
    function nextImage(id) {
        switch (id) {
          case 'SouthernEurope-img-id':
            SouthernEuropeImageIndex = (SouthernEuropeImageIndex + 1) % SouthernEurope.length;
            SouthernEuropeElement.src = SouthernEurope[SouthernEuropeImageIndex];
            break;
          case 'NorthAfrica-img-id':
            NorthAfricaImageIndex = (NorthAfricaImageIndex + 1) % NorthAfrica.length;
            NorthAfricaElement.src = NorthAfrica[NorthAfricaImageIndex];
            break;
          case 'MiddleEast-img-id':
            MiddleEastImageIndex = (MiddleEastImageIndex + 1) % MiddleEast.length;
            MiddleEastElement.src = MiddleEast[MiddleEastImageIndex];
            break;
          case 'CentralEurope-img-id':
            CentralEuropeImageIndex = (CentralEuropeImageIndex + 1) % CentralEurope.length;
            CentralEuropeElement.src = CentralEurope[CentralEuropeImageIndex];
            break;
          case 'TheCaucasus-img-id':
            TheCaucasusImageIndex = (TheCaucasusImageIndex + 1) % TheCaucasus.length;
            TheCaucasusElement.src = TheCaucasus[TheCaucasusImageIndex];
            break;
          case 'NorthernEurope-img-id':
            NorthernEuropeImageIndex = (NorthernEuropeImageIndex + 1) % NorthernEurope.length;
            NorthernEuropeElement.src = NorthernEurope[NorthernEuropeImageIndex];
            break;
          case 'SoutheastAsia-img-id':
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex + 1) % SoutheastAsia.length;
            SoutheastAsiaElement.src = SoutheastAsia[SoutheastAsiaImageIndex];
            break;
          default:
            console.warn("Invalid image ID provided:", id); // Handle invalid ID gracefully (optional)
        }
      }
      
      
    
    /* next image function */ 
    function previousImage(id) {
        switch (id) {
          case 'SouthernEurope-img-id':
            SouthernEuropeImageIndex = (SouthernEuropeImageIndex - 1 + SouthernEurope.length) % SouthernEurope.length;
            SouthernEuropeElement.src = SouthernEurope[SouthernEuropeImageIndex];
            break;
          case 'NorthAfrica-img-id':
            NorthAfricaImageIndex = (NorthAfricaImageIndex - 1 + NorthAfrica.length) % NorthAfrica.length;
            NorthAfricaElement.src = NorthAfrica[NorthAfricaImageIndex];
            break;
          case 'MiddleEast-img-id':
            MiddleEastImageIndex = (MiddleEastImageIndex - 1 + MiddleEast.length) % MiddleEast.length;
            MiddleEastElement.src = MiddleEast[MiddleEastImageIndex];
            break;
          case 'CentralEurope-img-id':
            CentralEuropeImageIndex = (CentralEuropeImageIndex - 1 + CentralEurope.length) % CentralEurope.length;
            CentralEuropeElement.src = CentralEurope[CentralEuropeImageIndex];
            break;
          case 'TheCaucasus-img-id':
            TheCaucasusImageIndex = (TheCaucasusImageIndex - 1 + TheCaucasus.length) % TheCaucasus.length;
            TheCaucasusElement.src = TheCaucasus[TheCaucasusImageIndex];
            break;
          case 'NorthernEurope-img-id':
            NorthernEuropeImageIndex = (NorthernEuropeImageIndex - 1 + NorthernEurope.length) % NorthernEurope.length;
            NorthernEuropeElement.src = NorthernEurope[NorthernEuropeImageIndex];
            break;
          case 'SoutheastAsia-img-id':
            SoutheastAsiaImageIndex = (SoutheastAsiaImageIndex - 1 + SoutheastAsia.length) % SoutheastAsia.length;
            SoutheastAsiaElement.src = SoutheastAsia[SoutheastAsiaImageIndex];
            break;
          default:
            console.warn("Invalid image ID provided:", id); // Handle invalid ID gracefully (optional)
        }
      }
      


    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
    }
  
  
  
  
      
      