/* ---------------------------------------- */
/* GOOGLE FONTS 
/* ---------------------------------------- */

/* waits for google fonts to load before rendering certain html elements */

  document.fonts.ready.then(() => {
      document.getElementById('logo').classList.add('font-loaded');
      document.getElementById('burger').classList.add('font-loaded');
      document.getElementById('first-hero-text-primary').classList.add('font-loaded');
      document.getElementById('first-hero-text-secondary').classList.add('font-loaded');
  });



/* ---------------------------------------- */
/* BURGER
/* ---------------------------------------- */

/* toggles menu options when clicked on */

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('active');
    }
  });

  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});




/* ---------------------------------------- */
/* PHOTO CAROUSEL */
/* ---------------------------------------- */

const images = [
    {
        src: "assets/travel/photo1.JPG",
        desc: "The golden rice fields of Guilin, China"
    },
    {
        src: "assets/travel/photo2.JPG",
        desc: "Sun rise from the Great Wall of China"
    },
    {
        src: "assets/travel/photo3.JPG",
        desc: "Sailing around Siargao, the Philippines"
    },
    {
        src: "assets/travel/photo4.JPG",
        desc: "Abseiling through the forests of Koh Rong, Cambodia"
    },
    {
        src: "assets/travel/photo5.JPG",
        desc: "Hunting for bioluminescent plankton off the coast of Cambodia"
    },
    {
        src: "assets/travel/photo6.JPG",
        desc: "Skiing in Bursa, Turkey"
    },
    {
        src: "assets/travel/photo7.JPG",
        desc: "Taking in the beauty of Budapest, Hungary"
    },
    {
        src: "assets/travel/photo8.jpg",
        desc: "Volunteering in Izmir, Turkey"
    },
    {
        src: "assets/travel/photo9.jpg",
        desc: "Looking out over the Wadi Rum Desert, Jordan"
    },
    {
        src: "assets/travel/photo10.jpg",
        desc: "A new beginning in London"
    },
    {
        src: "assets/travel/photo11.JPG",
        desc: "Christmas with my future wife in Stockholm, Sweden"
    },
    {
        src: "assets/travel/photo12.JPG",
        desc: "A new friend on our honeymoon in the Amazon"
    },
];

let index = 0;
let intervalId = null;
let userInteracted = false;

const imgElement = document.getElementById("carouselImage");
const frameElement = document.querySelector(".carousel-frame");
const descElement = document.querySelector(".carousel-description");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// Show image

function showImage(i) {
    index = (i + images.length) % images.length;

    imgElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = images[index].src;
        descElement.textContent = images[index].desc;
        imgElement.style.opacity = 1;
    }, 200);
}


// Auto rotate

function startAutoRotate() {
    intervalId = setInterval(() => {
        if (!userInteracted) {
            showImage(index + 1);
        }
    }, 4000);
}

function stopAutoRotate() {
    userInteracted = true;
    clearInterval(intervalId);
}


// Buttons

prevBtn.addEventListener("click", () => {
    stopAutoRotate();
    showImage(index - 1);
});

nextBtn.addEventListener("click", () => {
    stopAutoRotate();
    showImage(index + 1);
});


// Mouse + Touch Drag

let startX = 0;
let currentX = 0;
let isDragging = false;

const swipeThreshold = 60;


// Start dragging
frameElement.addEventListener("pointerdown", (event) => {
    isDragging = true;

    startX = event.clientX;
    currentX = startX;

    frameElement.style.transition = "none";

    frameElement.setPointerCapture(event.pointerId);
});


// While dragging
window.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    currentX = event.clientX;

    const distance = currentX - startX;

    frameElement.style.transform = `translateX(${distance}px)`;
});


// End dragging
window.addEventListener("pointerup", () => {
    if (!isDragging) return;

    isDragging = false;

    const distance = currentX - startX;

    frameElement.style.transition = "transform 0.3s ease";

    if (distance > swipeThreshold) {
        stopAutoRotate();
        showImage(index - 1);
    }

    if (distance < -swipeThreshold) {
        stopAutoRotate();
        showImage(index + 1);
    }

    // Return to normal position
    frameElement.style.transform = "translateX(0)";
});


window.addEventListener("pointercancel", () => {
    isDragging = false;
    frameElement.style.transform = "translateX(0)";
});

// init
showImage(0);
startAutoRotate();

































/* ---------------------------------------- */
/* EXPANDABLE HTML 
/* ---------------------------------------- */

/* shows more/less of a section when clicked on */

document.addEventListener("click", (e) => {
  const trigger = e.target.closest(".toggle-trigger");
  if (!trigger) return;

  const selector = trigger.dataset.toggleTarget;
  if (!selector) return;

  const target = document.querySelector(selector);
  if (!target) return;

  // Toggle state classes
  trigger.classList.toggle("is-expanded");
  target.classList.toggle("is-expanded");
});



/* ---------------------------------------- */
/* TABS
/* ---------------------------------------- */

/* allows the user to switch between tabs to view different content */

document.addEventListener('DOMContentLoaded', function () {
  const tabSections = document.querySelectorAll('.tabs-section');

  tabSections.forEach(section => {
    const tabs = section.querySelectorAll('.tabs-menu .tab');
    const contents = section.querySelectorAll('.tabs-content-container');

    function showTab(targetName) {
      contents.forEach(content => {
        const shouldShow = content.dataset.tab === targetName;
        content.style.display = shouldShow ? '' : 'none';
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        showTab(tab.dataset.target);
      });
    });

    // Show the default tab for this section
    const activeTab = section.querySelector('.tabs-menu .tab.active');
    if (activeTab) {
      showTab(activeTab.dataset.target);
    }
  });
});

/* Expandable HTML */ 

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