window.onload = function() {
    //slide
    var new_element = document.createElement("script");
    new_element.setAttribute("type", "text/javascript");
    new_element.setAttribute("src", "main.js");
    document.body.appendChild(new_element);
    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');
    var slide5 = document.getElementById('slide5');
    var slide6 = document.getElementById('slide6');
    var headline = document.getElementById('headline1'),
        headline2 = document.getElementById('headline2'),
        //trigger = document.querySelector('.btn--trigger'),
        segmenter1 = new Segmenter(document.getElementById('segmenter1'), {
            pieces: 4,
            animation: {
                duration: 1500,
                easing: 'easeInOutExpo',
                delay: 100,
                translateZ: 100
            },
            parallax: true,
            positions: [{
                    top: 0,
                    left: 0,
                    width: 45,
                    height: 45
                },
                {
                    top: 55,
                    left: 0,
                    width: 45,
                    height: 45
                },
                {
                    top: 0,
                    left: 55,
                    width: 45,
                    height: 45
                },
                {
                    top: 55,
                    left: 55,
                    width: 45,
                    height: 45
                }
            ],
            onReady: function() {
                slide1.addEventListener('click', function() {
                    setTimeout(function() {
                        segmenter1.animate();
                    }, 3000);
                    headline.classList.remove('trigger-headline--hidden');
                });
                slide2.addEventListener('click', function() {
                    setTimeout(function() {
                        segmenter1.animate();
                    }, 3000);
                    headline.classList.remove('trigger-headline--hidden');
                });
                slide3.addEventListener('click', function() {
                    setTimeout(function() {
                        segmenter1.animate();
                    }, 3000);
                    headline.classList.remove('trigger-headline--hidden');
                });
            }
        });
    var segmenter2 = new Segmenter(document.querySelector('.segmenter2'), {
        pieces: 8,
        positions: [{
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            }
        ],
        shadows: false,
        parallax: true,
        parallaxMovement: {
            min: 10,
            max: 30
        },
        animation: {
            duration: 2500,
            easing: 'easeOutExpo',
            delay: 0,
            opacity: .1,
            translateZ: {
                min: 10,
                max: 25
            }
        },
        onReady: function() {
            slide4.addEventListener('click', function() {
                setTimeout(function() {
                    segmenter2.animate();
                }, 3000);
                headline2.classList.remove('trigger-headline--hidden');
            });
            slide5.addEventListener('click', function() {
                setTimeout(function() {
                    segmenter2.animate();
                }, 3000);
                headline2.classList.remove('trigger-headline--hidden');
            });
            slide6.addEventListener('click', function() {
                setTimeout(function() {
                    segmenter2.animate();
                }, 3000);
                headline2.classList.remove('trigger-headline--hidden');
            });
        }
    });
}
