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

document.addEventListener('scroll', function () {
	//save the amount of pixels scrolled to the pageTop variable
	var pageTop = window.pageYOffset || document.documentElement.scrollTop;
    
  //get the height of the document
  var pageHeight = window.innerHeight;
  
  //set the fadein threshold
  var pageBottom = pageTop + pageHeight;
  
  //get the the fade in triggers
  var fadeInTriggers = document.getElementsByClassName('fadein__content');
  
  //check if elements should be shown
  for (var i = 0; i < fadeInTriggers.length; i++) {

		//get the active element
		var fadeInTrigger = fadeInTriggers[i];
    
    //get the actives element top position
    var fadeInTriggerTop = fadeInTrigger.offsetTop;
    console.log('index ' + i + ' page bottom ' + pageBottom + ' fade in trigger position ' + fadeInTriggerTop);
    //
		if (fadeInTriggerTop + 100 < pageBottom) {
	    fadeInTrigger.classList.remove('fadein__content--inactive');
      fadeInTrigger.classList.add('fadein__content--active');
    }
  }
})