const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var HTML = document.getElementById("HTML");
    var CSS = document.getElementById("CSS");
    var JS = document.getElementById("JS");
    var PY = document.getElementById("PY");
	var buttonDisplay = document.querySelector(".service-button")
    var width = 1;
    let id1 = setInterval(frame1, 70);
    let id2 = setInterval(frame2, 70);
    let id3 = setInterval(frame3, 30);
    let id4 = setInterval(frame4, 70);
    function frame1() {
      if (width >= 80) {
        clearInterval(id1);
        i = 0;
      } else {
        width++;
        HTML.style.width = width + "%";
      }
    }
    function frame2() {
      if (width >= 70) {
        clearInterval(id2);
        i = 0;
      } else {
        width++;
        CSS.style.width = width + "%";
      }
    }
    function frame3() {
      if (width >= 90) {
        clearInterval(id3);
        i = 0;
      } else {
        width++;
        JS.style.width = width + "%";
      }
    }
    function frame4() {
      if (width >= 60) {
        clearInterval(id4);
        i = 0;
      } else {
        width++;
        PY.style.width = width + "%";
      }
    }
	buttonDisplay.style.display = "none"
  }

	function animateValue(obj, start = 0, end = null, duration = 1300) {
		if (obj) {

			// save starting text for later (and as a fallback text if JS not running and/or google)
			var textStarting = obj.innerHTML;

			// remove non-numeric from starting text if not specified
			end = end || parseInt(textStarting.replace(/\D/g, ""));

			var range = end - start;

			// no timer shorter than 50ms (not really visible any way)
			var minTimer = 50;

			// calc step time to show all interediate values
			var stepTime = Math.abs(Math.floor(duration / range));

			// never go below minTimer
			stepTime = Math.max(stepTime, minTimer);

			// get current time and calculate desired end time
			var startTime = new Date().getTime();
			var endTime = startTime + duration;
			var timer;

			function run() {
				var now = new Date().getTime();
				var remaining = Math.max((endTime - now) / duration, 0);
				var value = Math.round(end - (remaining * range));
				// replace numeric digits only in the original string
				obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
				if (value == end) {
					clearInterval(timer);
				}
			}

			timer = setInterval(run, stepTime);
			run();
		}
	}
	animateValue(document.querySelector(".HTMLValue"));
	animateValue(document.querySelector(".CSSValue"));
	animateValue(document.querySelector(".JSValue"));
	animateValue(document.querySelector(".PYValue"));
}



let logo = document.getElementById('logo')

function logoReload() {
	logo.addEventListener('click', () => {
		window.scrollTo(logo)
		window.location.reload()
	})
}
logoReload();