var nav = document.getElementsByClassName('navigation')[0];

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled >= 1) nav.classList.remove('visibility-no');
  else nav.classList.add('visibility-no');
  console.log(scrolled + 'px');
}
//console.log(document.body.ScrollTop);

// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scrolled + 'px';
// }