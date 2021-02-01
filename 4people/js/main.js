var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


document.getElementById('header__menu').onclick = function() {
  document.getElementById('menu__list').classList.toggle('menu__block');
}

