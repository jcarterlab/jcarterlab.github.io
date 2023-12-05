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
    /* middle east vars */
    var Morocco = [  
    "Images/Photography/Morocco/Morocco_1.JPG",
    "Images/Photography/Morocco/Morocco_2.JPG",
    "Images/Photography/Morocco/Morocco_3.JPG"
    ];
    var MoroccoImageIndex = 0;

    var Egypt = [  
    "Images/Photography/Egypt/Egypt_1.JPG",
    "Images/Photography/Egypt/Egypt_2.JPG",
    "Images/Photography/Egypt/Egypt_3.JPG",
    "Images/Photography/Egypt/Egypt_4.JPG"
    ];
    var EgyptImageIndex = 0;

    var UAE = [  
    "Images/Photography/UAE/UAE_1.JPG",
    "Images/Photography/UAE/UAE_2.JPG",
    "Images/Photography/UAE/UAE_3.JPG"
    ];
    var UAEImageIndex = 0;

    var Israel = [  
    "Images/Photography/Israel/Israel_1.JPG",
    "Images/Photography/Israel/Israel_2.JPG",
    "Images/Photography/Israel/Israel_3.JPG"

    ];
    var IsraelImageIndex = 0;

    var Palestine = [
    "Images/Photography/Palestine/Palestine_1.JPG",
    "Images/Photography/Palestine/Palestine_2.JPG",
    "Images/Photography/Palestine/Palestine_3.JPG"
    ];
    var PalestineImageIndex = 0;

    var Jordan = [  
    "Images/Photography/Jordan/Jordan_1.JPG",
    "Images/Photography/Jordan/Jordan_2.JPG",
    "Images/Photography/Jordan/Jordan_3.JPG"

    ];
    var JordanImageIndex = 0;


    var Turkey = [ 
    "Images/Photography/Turkey/Turkey_1.JPG",
    "Images/Photography/Turkey/Turkey_2.JPG",
    "Images/Photography/Turkey/Turkey_3.JPG",
    "Images/Photography/Turkey/Turkey_4.JPG"
    ];
    var TurkeyImageIndex = 0;



    /* europe vars */
    var Slovenia = [ 
    "Images/Photography/Slovenia/Slovenia_1.JPG",
    "Images/Photography/Slovenia/Slovenia_2.JPG"
    ];
    var SloveniaImageIndex = 0;


    var Austria = [ 
    "Images/Photography/Austria/Austria_1.JPG",
    "Images/Photography/Austria/Austria_2.JPG"
    ];
    var AustriaImageIndex = 0;


    var Czechia = [ 
    "Images/Photography/Czechia/Czechia_1.JPG",
    "Images/Photography/Czechia/Czechia_2.JPG",
    "Images/Photography/Czechia/Czechia_3.JPG"
    ];
    var CzechiaImageIndex = 0;


    var Poland = [ 
    "Images/Photography/Poland/Poland_1.JPG",
    "Images/Photography/Poland/Poland_2.JPG",
    "Images/Photography/Poland/Poland_3.JPG"
    ];
    var PolandImageIndex = 0;


    var Hungary = [ 
    "Images/Photography/Hungary/Hungary_1.JPG",
    "Images/Photography/Hungary/Hungary_2.JPG",
    "Images/Photography/Hungary/Hungary_3.JPG"
    ];
    var HungaryImageIndex = 0;



    /* asia vars */
    var Cambodia = [ 
    "Images/Photography/Cambodia/Cambodia_1.JPG",
    "Images/Photography/Cambodia/Cambodia_2.JPG",
    "Images/Photography/Cambodia/Cambodia_3.JPG"
    ];
    var CambodiaImageIndex = 0;


    var Vietnam = [ 
    "Images/Photography/Vietnam/Vietnam_1.JPG",
    "Images/Photography/Vietnam/Vietnam_2.JPG",
    "Images/Photography/Vietnam/Vietnam_3.JPG",
    "Images/Photography/Vietnam/Vietnam_4.JPG",
    "Images/Photography/Vietnam/Vietnam_5.JPG"
    ];
    var VietnamImageIndex = 0;


    var Philippines = [ 
    "Images/Photography/Philippines/Philippines_1.JPG",
    "Images/Photography/Philippines/Philippines_2.JPG",
    "Images/Photography/Philippines/Philippines_3.JPG"
    ];
    var PhilippinesImageIndex = 0;


    var Singapore = [ 
    "Images/Photography/Singapore/Singapore_1.JPG",
    "Images/Photography/Singapore/Singapore_2.JPG",
    "Images/Photography/Singapore/Singapore_3.JPG",
    "Images/Photography/Singapore/Singapore_4.JPG"
    ];
    var SingaporeImageIndex = 0;


    var Malaysia = [ 
    "Images/Photography/Malaysia/Malaysia_1.JPG",
    "Images/Photography/Malaysia/Malaysia_2.JPG"
    ];
    var MalaysiaImageIndex = 0;


    var Thailand = [ 
    "Images/Photography/Thailand/Thailand_1.JPG",
    "Images/Photography/Thailand/Thailand_2.JPG",
    "Images/Photography/Thailand/Thailand_3.JPG"
    ];
    var ThailandImageIndex = 0;


    var China = [ 
    "Images/Photography/China/China_1.JPG",
    "Images/Photography/China/China_2.JPG",
    "Images/Photography/China/China_3.JPG"
    ];
    var ChinaImageIndex = 0;


    /* windows onload photo elements */
    window.onload = function () {
        TurkeyElement = document.getElementById('turkey-img-id');
        JordanElement = document.getElementById('jordan-img-id');
        PalestineElement = document.getElementById('palestine-img-id');
        IsraelElement = document.getElementById('israel-img-id');
        UAEElement = document.getElementById('uae-img-id');
        EgyptElement = document.getElementById('egypt-img-id');
        MoroccoElement = document.getElementById('morocco-img-id');

        SloveniaElement = document.getElementById('slovenia-img-id');
        AustriaElement = document.getElementById('austria-img-id');
        CzechiaElement = document.getElementById('czechia-img-id');
        PolandElement = document.getElementById('poland-img-id');
        HungaryElement = document.getElementById('hungary-img-id');

        CambodiaElement = document.getElementById('cambodia-img-id');
        VietnamElement = document.getElementById('vietnam-img-id');
        PhilippinesElement = document.getElementById('philippines-img-id');
        SingaporeElement = document.getElementById('singapore-img-id');
        MalaysiaElement = document.getElementById('malaysia-img-id');
        ThailandElement = document.getElementById('thailand-img-id');
        ChinaElement = document.getElementById('china-img-id');
    };

    
    /* next and previous image functions */ 
    function nextImage(id) {
        if(id === 'turkey-img-id') {
            TurkeyImageIndex = (TurkeyImageIndex + 1) % Turkey.length;
            TurkeyElement.src = Turkey[TurkeyImageIndex];
        } else if(id === 'jordan-img-id') {
            JordanImageIndex = (JordanImageIndex + 1) % Jordan.length;
            JordanElement.src = Jordan[JordanImageIndex];
        } else if(id === 'palestine-img-id') {
            PalestineImageIndex = (PalestineImageIndex + 1) % Palestine.length;
            PalestineElement.src = Palestine[PalestineImageIndex];
        } else if(id === 'israel-img-id') {
            IsraelImageIndex = (IsraelImageIndex + 1) % Israel.length;
            IsraelElement.src = Israel[IsraelImageIndex];
        } else if(id === 'uae-img-id') {
            UAEImageIndex = (UAEImageIndex + 1) % UAE.length;
            UAEElement.src = UAE[UAEImageIndex];
        } else if(id === 'egypt-img-id') {
            EgyptImageIndex = (EgyptImageIndex + 1) % Egypt.length;
            EgyptElement.src = Egypt[EgyptImageIndex];
        } else if(id === 'morocco-img-id') {
            MoroccoImageIndex = (MoroccoImageIndex + 1) % Morocco.length;
            MoroccoElement.src = Morocco[MoroccoImageIndex];
        } else if(id === 'slovenia-img-id') {
            SloveniaImageIndex = (SloveniaImageIndex + 1) % Slovenia.length;
            SloveniaElement.src = Slovenia[SloveniaImageIndex];
        } else if(id === 'austria-img-id') {
            AustriaImageIndex = (AustriaImageIndex + 1) % Austria.length;
            AustriaElement.src = Austria[AustriaImageIndex];
        } else if(id === 'czechia-img-id') {
            CzechiaImageIndex = (CzechiaImageIndex + 1) % Czechia.length;
            CzechiaElement.src = Czechia[CzechiaImageIndex];
        } else if(id === 'poland-img-id') {
            PolandImageIndex = (PolandImageIndex + 1) % Poland.length;
            PolandElement.src = Poland[PolandImageIndex];
        } else if(id === 'hungary-img-id') {
            HungaryImageIndex = (HungaryImageIndex + 1) % Hungary.length;
            HungaryElement.src = Hungary[HungaryImageIndex];
        } else if(id === 'cambodia-img-id') {
            CambodiaImageIndex = (CambodiaImageIndex + 1) % Cambodia.length;
            CambodiaElement.src = Cambodia[CambodiaImageIndex];
        } else if(id === 'vietnam-img-id') {
            VietnamImageIndex = (VietnamImageIndex + 1) % Vietnam.length;
            VietnamElement.src = Vietnam[VietnamImageIndex];
        } else if(id === 'philippines-img-id') {
            PhilippinesImageIndex = (PhilippinesImageIndex + 1) % Philippines.length;
            PhilippinesElement.src = Philippines[PhilippinesImageIndex];
        } else if(id === 'singapore-img-id') {
            SingaporeImageIndex = (SingaporeImageIndex + 1) % Singapore.length;
            SingaporeElement.src = Singapore[SingaporeImageIndex];
        } else if(id === 'malaysia-img-id') {
            MalaysiaImageIndex = (MalaysiaImageIndex + 1) % Malaysia.length;
            MalaysiaElement.src = Malaysia[MalaysiaImageIndex];
        } else if(id === 'thailand-img-id') {
            ThailandImageIndex = (ThailandImageIndex + 1) % Thailand.length;
            ThailandElement.src = Thailand[ThailandImageIndex];
        } else if(id === 'china-img-id') {
            ChinaImageIndex = (ChinaImageIndex + 1) % China.length;
            ChinaElement.src = China[ChinaImageIndex];
        }
    }

    function previousImage(id) {
        if(id === 'turkey-img-id') {
            TurkeyImageIndex = (TurkeyImageIndex - 1 + Turkey.length) % Turkey.length;
            TurkeyElement.src = Turkey[TurkeyImageIndex];
        } else if(id === 'jordan-img-id') {
            JordanImageIndex = (JordanImageIndex - 1 + Jordan.length) % Jordan.length;
            JordanElement.src = Jordan[JordanImageIndex];
        } else if(id === 'palestine-img-id') {
            PalestineImageIndex = (PalestineImageIndex - 1 + Palestine.length) % Palestine.length;
            PalestineElement.src = Palestine[PalestineImageIndex];
        } else if(id === 'israel-img-id') {
            IsraelImageIndex = (IsraelImageIndex - 1 + Israel.length) % Israel.length;
            IsraelElement.src = Israel[IsraelImageIndex];
        } else if(id === 'uae-img-id') {
            UAEImageIndex = (UAEImageIndex - 1 + UAE.length) % UAE.length;
            UAEElement.src = UAE[UAEImageIndex];
        } else if(id === 'egypt-img-id') {
            EgyptImageIndex = (EgyptImageIndex - 1 + Egypt.length) % Egypt.length;
            EgyptElement.src = Egypt[EgyptImageIndex];
        } else if(id === 'morocco-img-id') {
            MoroccoImageIndex = (MoroccoImageIndex - 1 + Morocco.length) % Morocco.length;
            MoroccoElement.src = Morocco[MoroccoImageIndex];
        } else if(id === 'slovenia-img-id') {
            SloveniaImageIndex = (SloveniaImageIndex - 1 + Slovenia.length) % Slovenia.length;
            SloveniaElement.src = Slovenia[SloveniaImageIndex];
        } else if(id === 'austria-img-id') {
            AustriaImageIndex = (AustriaImageIndex - 1 + Austria.length) % Austria.length;
            AustriaElement.src = Austria[AustriaImageIndex];
        } else if(id === 'czechia-img-id') {
            CzechiaImageIndex = (CzechiaImageIndex - 1 + Czechia.length) % Czechia.length;
            CzechiaElement.src = Czechia[CzechiaImageIndex];
        } else if(id === 'poland-img-id') {
            PolandImageIndex = (PolandImageIndex - 1 + Poland.length) % Poland.length;
            PolandElement.src = Poland[PolandImageIndex];
        } else if(id === 'hungary-img-id') {
            HungaryImageIndex = (HungaryImageIndex - 1 + Poland.length) % Hungary.length;
            HungaryElement.src = Hungary[HungaryImageIndex];
        } else if(id === 'cambodia-img-id') {
            CambodiaImageIndex = (CambodiaImageIndex - 1 + Cambodia.length) % Cambodia.length;
            CambodiaElement.src = Cambodia[CambodiaImageIndex];
        } else if(id === 'vietnam-img-id') {
            VietnamImageIndex = (VietnamImageIndex - 1 + Vietnam.length) % Vietnam.length;
            VietnamElement.src = Vietnam[VietnamImageIndex];
        } else if(id === 'philippines-img-id') {
            PhilippinesImageIndex = (PhilippinesImageIndex - 1 + Philippines.length) % Philippines.length;
            PhilippinesElement.src = Philippines[PhilippinesImageIndex];
        } else if(id === 'singapore-img-id') {
            SingaporeImageIndex = (SingaporeImageIndex - 1 + Singapore.length) % Singapore.length;
            SingaporeElement.src = Singapore[SingaporeImageIndex];
        } else if(id === 'malaysia-img-id') {
            MalaysiaImageIndex = (MalaysiaImageIndex - 1 + Malaysia.length) % Malaysia.length;
            MalaysiaElement.src = Malaysia[MalaysiaImageIndex];
        } else if(id === 'thailand-img-id') {
            ThailandImageIndex = (ThailandImageIndex - 1 + Thailand.length) % Thailand.length;
            ThailandElement.src = Thailand[ThailandImageIndex];
        } else if(id === 'china-img-id') {
            ChinaImageIndex = (ChinaImageIndex - 1 + China.length) % China.length;
            ChinaElement.src = China[ChinaImageIndex];
        }
    }





