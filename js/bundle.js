"use strict";var screenWidth=0,nav=document.getElementById("appNavigation"),bgImage=document.getElementById("appLandingPageBackgroundImage"),navList=document.getElementById("appNavList"),navSearchForm=document.getElementById("appNavSearch"),navMenu=document.getElementById("appNavMenuButton"),navMenuClose=document.getElementById("appNavMenuCloseButton"),showLinksI=0,navListLinks=navList.querySelectorAll("li"),navSearch=document.getElementById("appNavSearchButton"),navSearchClose=document.getElementById("appNavSearchCloseButton");navMenu.addEventListener("click",function(e){return showNavList.call()}),navMenuClose.addEventListener("click",function(e){return hideNavList.call()});var showNavList=function(){document.getElementsByTagName("body")[0].classList.add("lock-scroll"),nav.classList.add("navigation--elapsed"),navList.classList.add("navlist--elapsed"),navMenu.classList.remove("navigation__link--visible"),navSearch.classList.remove("navigation__link--visible"),navMenuClose.classList.add("navigation__link--visible"),setTimeout(showLinks(),500)};function showLinks(){setTimeout(function(){navListLinks[showLinksI].classList.add("navlist__item--visible"),++showLinksI<navListLinks.length&&showLinks()},100)}var hideNavList=function(){nav.classList.remove("navigation--elapsed"),navList.classList.remove("navlist--elapsed"),navMenuClose.classList.remove("navigation__link--visible"),navMenu.classList.add("navigation__link--visible"),navSearch.classList.add("navigation__link--visible");for(var e=0;e<navListLinks.length;e++){navListLinks[e].classList.remove("navlist__item--visible")}document.getElementsByTagName("body")[0].classList.remove("lock-scroll"),showLinksI=0};navSearch.addEventListener("click",function(e){return showSearch.call()}),navSearchClose.addEventListener("click",function(e){return hideSearch.call()});var showSearch=function(){document.getElementsByTagName("body")[0].classList.add("lock-scroll"),nav.classList.add("navigation--elapsed"),navSearch.classList.remove("navigation__link--visible"),navMenu.classList.remove("navigation__link--visible"),navSearchClose.classList.add("navigation__link--visible"),setTimeout(function(){navSearchForm.classList.add("navsearch--elapsed")},500)},hideSearch=function(){document.getElementsByTagName("body")[0].classList.remove("lock-scroll"),navSearchForm.classList.remove("navsearch--elapsed"),nav.classList.remove("navigation--elapsed"),navSearch.classList.add("navigation__link--visible"),navMenu.classList.add("navigation__link--visible"),navSearchClose.classList.remove("navigation__link--visible")};window.addEventListener("scroll",function(e){scroll.call()});var scroll=function(){var e=window.scrollY;bgImage.offsetHeight<=e?nav.classList.add("navigation--bg-visible"):nav.classList.remove("navigation--bg-visible")};document.addEventListener("scroll",function(e){for(var n=(window.pageYOffset||document.documentElement.scrollTop)+window.innerHeight,a=document.getElementsByClassName("fadein__content"),s=0;s<a.length;s++){var i=a[s];i.offsetTop+30<n&&(i.classList.remove("fadein__content--inactive"),i.classList.add("fadein__content--active"))}});