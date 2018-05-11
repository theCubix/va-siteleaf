// nav general
let nav = document.getElementById('appNavigation');
let navList = document.getElementById('appNavList');
let navSearchForm = document.getElementById('appNavSearch');

// nav menu
let navMenu = document.getElementById('appNavMenuButton');
let navMenuClose = document.getElementById('appNavMenuCloseButton');
let showLinksI = 0;
let navListLinks = navList.querySelectorAll('li');

// nav search
let navSearch = document.getElementById('appNavSearchButton');
let navSearchClose = document.getElementById('appNavSearchCloseButton');

// navlist control
navMenu.addEventListener('click', (e) => showNavList.call());

navMenuClose.addEventListener( 'click', (e) => hideNavList.call());

// show the navlist
let showNavList = () => {

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
    let link = navListLinks[showLinksI];
    link.classList.add('navlist__item--visible');
    showLinksI++;
    if (showLinksI < navListLinks.length) {
      showLinks();
    }
  }, 100);
};

// hide the navlist
let hideNavList = () => {
  
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
  for (let index = 0; index < navListLinks.length; index++) {
    let link = navListLinks[index];
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
let showSearch = () => {
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
let hideSearch = () => {
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
  let body = document.getElementsByTagName('body');
  if (body[0].classList.contains('index')) {

    //automatically add background to nav on scroll
    window.addEventListener('scroll', (e) => {
       scroll.call()
    });

    let scroll = () => {
      let bgImage = document.getElementById('appLandingPageBackgroundImage');
      let bgImageHeight = bgImage.offsetHeight;
      let scrollPosition = window.scrollY;
  
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
