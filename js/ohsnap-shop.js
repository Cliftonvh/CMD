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
