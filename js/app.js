//declare variables
//everything window
var scrollPosition = 0
var screenWidth = 0

//nav general
var nav = document.getElementById('appNavigation')
var bgImage = document.getElementById('appLandingPageBackgroundImage')
var navList = document.getElementById('appNavList')
var navSearchForm = document.getElementById('appNavSearch')

//nav menu
var navMenu = document.getElementById('appNavMenuButton')
var navMenuClose = document.getElementById('appNavMenuCloseButton')
var showLinksI = 0
var navListLinks = navList.querySelectorAll('li')

//nav search
var navSearch = document.getElementById('appNavSearchButton')
var navSearchClose = document.getElementById('appNavSearchCloseButton')

//navlist control
navMenu.addEventListener('click', showNavList)
navMenuClose.addEventListener('click', hideNavList)

//show the navlist
function showNavList() {
  document.getElementsByTagName('body')[0].classList.add('lock-scroll')
  nav.classList.add('navigation--elapsed')
  navList.classList.add('navlist--elapsed')
  navMenuClose.classList.add('navigation__link--visible')
  navMenu.classList.remove('navigation__link--visible')
  navSearch.classList.remove('navigation__link--visible')
  setTimeout(showLinks(), 500)
}

//automated and delayed animation
function showLinks() {
  setTimeout(function () {
    var link = navListLinks[showLinksI]
    link.classList.add('navlist__item--visible')
    showLinksI++;
    if (showLinksI < navListLinks.length) {
      showLinks();
    }
  }, 100)
}

//hide navlist
function hideNavList() {
  nav.classList.remove('navigation--elapsed')
  navList.classList.remove('navlist--elapsed')
  navMenuClose.classList.remove('navigation__link--visible')
  navMenu.classList.add('navigation__link--visible')
  navSearch.classList.add('navigation__link--visible')
  for (let index = 0; index < navListLinks.length; index++) {
    const link = navListLinks[index];
    link.classList.remove('navlist__item--visible')
  }
  document.getElementsByTagName('body')[0].classList.remove('lock-scroll')
  showLinksI = 0
}

//search control
navSearch.addEventListener('click', showSearch)
navSearchClose.addEventListener('click', hideSearch)

//show the search
function showSearch() {
  document.getElementsByTagName('body')[0].classList.add('lock-scroll')
  nav.classList.add('navigation--elapsed')
  navSearch.classList.remove('navigation__link--visible')
  navMenu.classList.remove('navigation__link--visible')
  navSearchClose.classList.add('navigation__link--visible')
  setTimeout(function(){navSearchForm.classList.add('navsearch--elapsed')}, 500)
}

//hide the search
function hideSearch() {
  document.getElementsByTagName('body')[0].classList.remove('lock-scroll')
  navSearchForm.classList.remove('navsearch--elapsed')
  nav.classList.remove('navigation--elapsed')
  navSearch.classList.add('navigation__link--visible')
  navMenu.classList.add('navigation__link--visible')
  navSearchClose.classList.remove('navigation__link--visible')
}

//window.addEventListener('resize', autoHideNavList)

//function autoHideNavList() {
//  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.documentElement.getElementsByTagName('body')[0]
//  if (screenWidth >= 768 && navList.classList.contains('navlist--elapsed') ) {
//    navList.classList.remove('navlist--elapsed')
//  }
//}

//automatically add background to nav on scroll
window.addEventListener('scroll', scroll)

//create 'scroll' function
function scroll() {
  scrollPosition = window.scrollY

  //fire 'showNav' function
  showNav(scrollPosition)
}

//create 'showNav' function
function showNav(scrollPosition) {
  var bgImageHeight = bgImage.offsetHeight

  if (scrollPosition >= bgImageHeight) {
    //if the scroll position is less than 200px, don't show the background
    nav.classList.add('navigation--bg-visible')
  } else {
    //otherwise show
    nav.classList.remove('navigation--bg-visible')
  }
}
