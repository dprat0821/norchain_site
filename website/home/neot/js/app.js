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
      "value": 34,
      "density": {
        "enable": false,
        "value_area": 400
      }
    },
    "color": {
      "value": "#4671a2"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.4,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 3.945738208161363,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 384.81889460772544,
      "color": "#4671a2",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.7,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
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
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": 0.2
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 500,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);