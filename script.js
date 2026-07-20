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
        desc: "Sunset fading over the Nile"
    },
    {
        src: "assets/travel/photo2.JPG",
        desc: "The icy silence of Kars"
    },
    {
        src: "assets/travel/photo3.JPG",
        desc: "A night time glow on the Bosphorus"
    },
    {
        src: "assets/travel/photo4.JPG",
        desc: "Moments of calm on the Mediterranean"
    },
    {
        src: "assets/travel/photo5.JPG",
        desc: "The surreal landscapes of Cappadocia"
    }
];

let index = 0;
let intervalId = null;
let userInteracted = false;

const imgElement = document.getElementById("carouselImage");
const descElement = document.querySelector(".carousel-description");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ----------------------------------------
// Update image
// ----------------------------------------

function showImage(i) {
    index = (i + images.length) % images.length;

    imgElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = images[index].src;
        descElement.textContent = images[index].desc;
        imgElement.style.opacity = 1;
    }, 200);
}

// ----------------------------------------
// Auto rotate
// ----------------------------------------

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

// ----------------------------------------
// Buttons
// ----------------------------------------

prevBtn.addEventListener("click", () => {
    stopAutoRotate();
    showImage(index - 1);
});

nextBtn.addEventListener("click", () => {
    stopAutoRotate();
    showImage(index + 1);
});

// ----------------------------------------
// Swipe / Drag
// ----------------------------------------

let startX = 0;
let currentX = 0;
let dragging = false;

const swipeThreshold = 60;

imgElement.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    currentX = startX;

    imgElement.style.transition = "none";

    // Prevent selecting the image while dragging
    imgElement.setPointerCapture(e.pointerId);
});

imgElement.addEventListener("pointermove", (e) => {
    if (!dragging) return;

    currentX = e.clientX;
    const deltaX = currentX - startX;

    imgElement.style.transform = `translateX(${deltaX}px)`;
});

function endDrag() {
    if (!dragging) return;

    dragging = false;

    const deltaX = currentX - startX;

    imgElement.style.transition = "transform 0.3s ease, opacity 0.2s ease";

    if (deltaX > swipeThreshold) {
        stopAutoRotate();
        showImage(index - 1);
    }
    else if (deltaX < -swipeThreshold) {
        stopAutoRotate();
        showImage(index + 1);
    }

    imgElement.style.transform = "translateX(0)";
}

imgElement.addEventListener("pointerup", endDrag);
imgElement.addEventListener("pointercancel", endDrag);
imgElement.addEventListener("lostpointercapture", endDrag);

// ----------------------------------------
// Init
// ----------------------------------------

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