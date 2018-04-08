/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 320,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 4,
          "color": "#a5bcee"
        // "color": "#a5bcee",
        },
        "polygon": {
			"nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": .5,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 1.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": .5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 72,
        "color": "#a5bcee",
        "opacity": 1,
		  "width": 2
      },
      "move": {
        "enable": true,
        "speed": .65,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": ["grab", "bubble"]
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
			  "opacity": .8
          }
        },
        "bubble": {
          "distance": 120,
          "size": 4,
          "duration": 5,
          "opacity": .8,
			"speed": 1
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);