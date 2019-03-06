const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  // most browsers call the property flex, safari calls it flex-grow
  // includes covers all of our bases
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
