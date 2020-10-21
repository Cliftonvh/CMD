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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var interval = setInterval(function(){ plusSlides(1); }, 5000);

function stop(){
  clearInterval(interval);
};

var dots1 = document.getElementsByClassName("dot");
for (var i = 0; i < dots1.length; i++) {
    dots1[i].onclick = stop;
}

var hiddenMenu = document.querySelector(".toggle-menu-shop");
var hiddenMenu2 = document.querySelector(".toggle-menu-faq");

document.querySelector(".toggle-menu-button-shop").addEventListener("click", function(){toggleHiddenMenu(hiddenMenu);});
document.querySelector(".toggle-menu-button-faq").addEventListener("click", function(){toggleHiddenMenu(hiddenMenu2);});

function toggleHiddenMenu(menu){

  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

var hiddenMenu = document.querySelector(".toggle-menu-shop");
var buttonGrips = document.getElementsByClassName("ohsnap-grip-button");

for (let i = 0; i < buttonGrips.length; i++) {
  buttonGrips[i].addEventListener("click", function(){changeImage(buttonGrips[i], buttonGrips[i].name, buttonGrips[i].value);});
}

function changeImage(self, name, value){

  var elems = document.querySelectorAll(".ohsnap-grip-button");
  [].forEach.call(elems, function(el) {
    if (self.classList.contains("selected")) {
      if (elems.name == name) {}
      el.classList.remove("selected");
    }else{
      self.classList.add("selected");
    }
  });

  var str = document.getElementById("ohsnap-grip-img").getAttribute("src");
  str = str.replace("img/shop/", "");
  str = str.replace(".png", "");
  newstr = str.split("-");

  switch(name){
    case "base":
      document.getElementById("ohsnap-grip-img").src = "img/shop/" + value + "-" + newstr[1] + ".png";
      break;

    case "trim":
      document.getElementById("ohsnap-grip-img").src = "img/shop/" + newstr[0] + "-" + value + ".png";
      break;
  }

}
