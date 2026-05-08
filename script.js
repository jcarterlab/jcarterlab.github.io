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