const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

if (document.getElementById("state1")) {
  const countUp = new CountUp(
    "state1",
    document.getElementById("state1").getAttribute("countTo")
  );
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}
if (document.getElementById("state2")) {
  const countUp1 = new CountUp(
    "state2",
    document.getElementById("state2").getAttribute("countTo")
  );
  if (!countUp1.error) {
    countUp1.start();
  } else {
    console.error(countUp1.error);
  }
}
if (document.getElementById("state3")) {
  const countUp2 = new CountUp(
    "state3",
    document.getElementById("state3").getAttribute("countTo")
  );
  if (!countUp2.error) {
    countUp2.start();
  } else {
    console.error(countUp2.error);
  }
}

if (document.querySelector(".datepicker-1")) {
  flatpickr(".datepicker-1", {}); // flatpickr
}

if (document.querySelector(".datepicker-2")) {
  flatpickr(".datepicker-2", {}); // flatpickr
}
if (document.getElementById("typed")) {
  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 200,
    startDelay: 500,
    loop: true,
  });
}

/**
 * fullPage 1.4.9
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
 var myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	// Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: true,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

	// Events
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});