// On page load set the theme.
(function() {
  let onpageLoad = localStorage.getItem("theme") || "nothing";
  let element = document.querySelector('body');
  element.classList.add(onpageLoad);
  let theme = localStorage.getItem("theme");
      
  if (theme && theme === "dark-mode") {
    document.querySelector("nav:nth-of-type(2) ul li label input").checked = true;
    [].map.call(document.querySelectorAll('body, nav:nth-of-type(1), nav:nth-of-type(2), .nav-drawer, [data-toggle-menu] div button svg, body-banner'), function(el) {

              // classList is the key here - contains functions to manipulate
              // classes on an element
              el.classList.toggle('nightmode');
          });

    [].map.call(document.querySelectorAll('a, span, p, h1, h2, h3, h4, h5, h6, label'), function(el) {

              // classList is the key here - contains functions to manipulate
              // classes on an element
              el.classList.toggle('nightmode-text');
          });
    [].map.call(document.querySelectorAll('.button-div button:nth-of-type(1)'), function(el) {

              // classList is the key here - contains functions to manipulate
              // classes on an element
              el.classList.toggle('nightmode-button');
          });
    [].map.call(document.querySelectorAll('[data-shoppingcart], [data-ourmission], [data-searchlogo]'), function(el) {

              // classList is the key here - contains functions to manipulate
              // classes on an element
              el.classList.toggle('nightmode-svg');
          });
  } else {
    //do nothing
  }

})();

(function() {

  let hamburger = {
    nav: document.querySelector('nav:nth-of-type(2)'),
    navDrawer: document.querySelector('.nav-drawer'),

    initialize() {
      this.navDrawer.addEventListener('click', () => { this.toggle(); });
    },

    toggle() {
      this.navDrawer.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();

}());

(function() {

  let hiddenMenu = {
    shopMenu: document.querySelector('#menu-shop'), //shop menu
    shopMenuButton: document.querySelector('#menu-shop button'), //shop menu button
    shopFaq: document.querySelector('#menu-faq'), //shop faq
    shopFaqButton: document.querySelector('#menu-faq button'), //shop faq button

    initialize() {
      this.shopMenuButton.addEventListener('click', () => { this.toggle(this.shopMenu); });
      this.shopFaqButton.addEventListener('click', () => { this.toggle(this.shopFaq); });
    },

    toggle(menu) {
      menu.classList.toggle('expanded');
    },
  };

  hiddenMenu.initialize();

}());

(function() {

  let nightmode = {
    nightmodeButton: document.querySelector('.round'), //shop menu button

    initialize() {
      this.nightmodeButton.addEventListener('click', () => { this.toggle(); });
    },

    toggle(menu) {

      let theme = localStorage.getItem("theme");
      if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark-mode");
      }

      [].map.call(document.querySelectorAll('body, nav:nth-of-type(1), nav:nth-of-type(2), .nav-drawer, [data-toggle-menu] div button svg'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('nightmode');
            });

      [].map.call(document.querySelectorAll('a, span, p, h1, h2, h3, h4, h5, h6, label'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('nightmode-text');
            });
      [].map.call(document.querySelectorAll('.button-div button:nth-of-type(1)'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('nightmode-button');
            });
      [].map.call(document.querySelectorAll('[data-shoppingcart], [data-ourmission], [data-searchlogo]'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('nightmode-svg');
            });
    },
  };

  nightmode.initialize();

}());