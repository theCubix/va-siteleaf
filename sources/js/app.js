/*
 ------------------
 Show / Hide Nav and Search
 ------------------
*/

// nav general
var nav = document.getElementById('appNavigation');
var navList = document.getElementById('appNavList');
var navSearchForm = document.getElementById('appNavSearch');

// nav menu
var navMenu = document.getElementById('appNavMenuButton');
var navMenuClose = document.getElementById('appNavMenuCloseButton');
var showLinksI = 0;
var navListLinks = navList.querySelectorAll('li');

// nav search
var navSearch = document.getElementById('appNavSearchButton');
var navSearchClose = document.getElementById('appNavSearchCloseButton');

// navlist control
navMenu.addEventListener('click', (e) => showNavList.call());

navMenuClose.addEventListener( 'click', (e) => hideNavList.call());

// show the navlist
var showNavList = () => {

  // disable body scrolling
  document.getElementsByTagName('body')[0].classList.add('lock-scroll');
  
  // 'expand' the navigation
  nav.classList.add('navigation--expanded');
  
  // 'expand' the navlist
  navList.classList.add('navlist--expanded');
  
  // hide the menu button
  navMenu.classList.remove('navigation__link--visible');
  
  // hide the search button
  navSearch.classList.remove('navigation__link--visible');
  
  // show the close button
  navMenuClose.classList.add('navigation__link--visible');
  
  // call the 'show links' function
  setTimeout(showLinks(), 500);
};

//automated and delayed animation
function showLinks() {
  setTimeout(function () {
    var link = navListLinks[showLinksI];
    link.classList.add('navlist__item--visible');
    showLinksI++;
    if (showLinksI < navListLinks.length) {
      showLinks();
    }
  }, 100);
};

// hide the navlist
var hideNavList = () => {
  
  // collapse the navigation
  nav.classList.remove('navigation--expanded');
  
  // collapse the navlist
  navList.classList.remove('navlist--expanded');
  
  // hide the close button
  navMenuClose.classList.remove('navigation__link--visible');
  
  // show the menu button
  navMenu.classList.add('navigation__link--visible');
  
  // show the search button
  navSearch.classList.add('navigation__link--visible');
  
  // hide each link
  for (var index = 0; index < navListLinks.length; index++) {
    var link = navListLinks[index];
    link.classList.remove('navlist__item--visible');
  }

  // enable scrolling
  document.getElementsByTagName('body')[0].classList.remove('lock-scroll');

  // set showLinksI to 0
  showLinksI = 0;
};

// show the search
navSearch.addEventListener('click', (e) => showSearch.call());

// hide the search
navSearchClose.addEventListener('click', (e) => hideSearch.call());

//show the search
var showSearch = () => {
  // disable scrolling
  document.getElementsByTagName('body')[0].classList.add('lock-scroll');

  // 'expand' the navigation bar to meet fullscreen height
  nav.classList.add('navigation--expanded');

  // hide the search button
  navSearch.classList.remove('navigation__link--visible');

  // hide the menu button
  navMenu.classList.remove('navigation__link--visible');

  // show the close button
  navSearchClose.classList.add('navigation__link--visible');

  // wait 500 ms, the show the search form
  setTimeout(() => {
    navSearchForm.classList.add('navsearch--expanded');
  }, 
    500);
};

//hide the search
var hideSearch = () => {
  // enable scrolling
  document.getElementsByTagName('body')[0].classList.remove('lock-scroll');

  // hide the search form
  navSearchForm.classList.remove('navsearch--expanded');

  // collapse the navbar
  nav.classList.remove('navigation--expanded');

  // show the search button
  navSearch.classList.add('navigation__link--visible');

  // show the menu button
  navMenu.classList.add('navigation__link--visible');

  // hide the close button
  navSearchClose.classList.remove('navigation__link--visible');
};

(() => {
  var body = document.getElementsByTagName('body');
  if (body[0].classList.contains('index')) {

    //automatically add background to nav on scroll
    window.addEventListener('scroll', (e) => {
       scroll.call()
    });

    var scroll = () => {
      var bgImage = document.getElementById('appLandingPageBackgroundImage');
      var bgImageHeight = bgImage.offsetHeight;
      var scrollPosition = window.scrollY;
  
      if (scrollPosition >= bgImageHeight) {
        nav.classList.add('navigation--bg-visible');
      } else {
        nav.classList.remove('navigation--bg-visible');
      }
    };
  } else {
    nav.classList.add('navigation--bg-visible');
  };
}) ()

/*
 ------------------
 Fadein on scroll
 ------------------
*/

document.addEventListener('scroll', (e) => {
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
    
    //
		if (fadeInTriggerTop + 30 < pageBottom) {
	    fadeInTrigger.classList.remove('fadein__content--inactive');
      fadeInTrigger.classList.add('fadein__content--active');
    };
  };
});
