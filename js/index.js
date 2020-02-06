function init() {

}

function next() {
  body.classList.remove('error');
  var enable = document.querySelector('form fieldset.enable'),
    nextEnable = enable.nextElementSibling;
  enable.classList.remove('enable');
  enable.classList.add('disable');
  nextEnable.classList.remove('disable');
  nextEnable.classList.add('enable');
}

function prev() {
  body.classList.remove('error');
  var disable = document.querySelector('form fieldset.enable'),
    prevEnable = disable.previousElementSibling;
  disable.classList.remove('enable');
  disable.classList.add('disable');
  prevEnable.classList.add('enable');
  prevEnable.classList.remove('disable');
}

function keyDown(event) {
  var key = event.keyCode,
    target = document.querySelector('fieldset.enable .button');
  if (key == 13 || key == 9) next(target);
}

var body = document.querySelector('body'),
  form = document.querySelector('form'),
  count = form.querySelectorAll('fieldset').length;

window.onload = init;
document.body.onmouseup = function (event) {
  var target = event.target || event.toElement;
  if (target.classList.contains("button-next")) next();
  else if (target.classList.contains("button-prev")) prev();
};
document.addEventListener("keydown", keyDown, false);