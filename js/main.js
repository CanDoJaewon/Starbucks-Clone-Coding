const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
	searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Search');
});

searchInputEl.addEventListener('blur', function() {
	searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// _.throttle(function(), time(measure: ms))
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));