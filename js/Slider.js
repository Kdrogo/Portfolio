 
 
let swiper;

function handleSwiper() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 980 && swiper) {
        swiper.destroy();
        swiper = null; // Reset swiperInstance when destroyed
    } else if (screenWidth > 980 && !swiper) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    check()
    check2()
}

// Call handleSwiper on page load
window.addEventListener('load', handleSwiper);

// Call handleSwiper on window resize
window.addEventListener('resize', handleSwiper);


    let cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        $cursorred: document.querySelector('.cursor-red'),

        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            this.cursorredSize = this.$cursorred.offsetWidth;
            this.setupEventListeners();
            this.animateDotOutline();
        },
        

        setupEventListeners: function() {
            var self = this;

            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });

            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();

                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';

                // Position the red cursor
                self.$cursorred.style.top = self.endY - self.cursorredSize *0.5 + 'px';
                self.$cursorred.style.left = self.endX - self.cursorredSize *0.5 + 'px';
            });

            // Hide/show cursor
            document.addEventListener('mouseenter', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
                self.$cursorred.style.opacity = 1;
            });

            document.addEventListener('mouseleave', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
                self.$cursorred.style.opacity = 0;
            });
        },

        animateDotOutline: function() {
            var self = this;

            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';

            requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function() {
            var self = this;

            if (self.cursorEnlarged) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        },

        toggleCursorVisibility: function() {
            var self = this;

            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }

    cursor.init();
    function moveArrow(event) {
        let dotsparant= document.getElementById('dots-parant');
        dotsparant.style.display = 'none'
        // console.log(dotsparant)
        const container = event.currentTarget;
        const arrow = container.querySelector('#img');
        const containerWidth = container.offsetWidth;
        const containerheight = container.offsetHeight;
        const mouseX = event.clientX - container.getBoundingClientRect().left;
        const mouseY = event.clientY - container.getBoundingClientRect().top;
        const arrowPosition = mouseX / containerWidth * 70;
        const arrowPositiony = mouseY / containerheight * 70;
        arrow.style.display = 'block';
        container.style.cursor = 'none';
        let c = arrow.style.left = `${arrowPosition}%`;
        arrow.style.top = `${arrowPositiony}%`;
    }
    
    let btn = document.getElementById('btn');
    btn.addEventListener('click',(e)=>{
        let a =btn.querySelector('img');
        a.style.animation = 'trans 0.5s linear';
        a.classList.add('arr')
        a.addEventListener('animationend',(e)=>{
            // a.classList.remove('arr')
            a.style.animation ='none'
        })
    })
    btn.addEventListener('mouseleave', (e) => {
        let dotsparant= document.getElementById('dots-parant');
        dotsparant.style.display = 'block'
        let img = document.getElementById('img');
        img.classList.remove("arr");
        img.style.animation = 'none';
        img.classList.add("mystyle");
        // Hide the image when the transition ends
        img.addEventListener('transitionend', () => {
        img.style.display = 'none';
        img.classList.remove("mystyle");
        }, { once: true });
    });




    function moveArrow2(event) {
        let dotsparant= document.getElementById('dots-parant');
        dotsparant.style.display = 'none'
        const container = event.currentTarget;
        const arrow = container.querySelector('#img2');
        const containerWidth = container.offsetWidth;
        const containerheight = container.offsetHeight;
        const mouseX = event.clientX - container.getBoundingClientRect().left;
        const mouseY = event.clientY - container.getBoundingClientRect().top;
        const arrowPosition = mouseX / containerWidth * 70;
        const arrowPositiony = mouseY / containerheight * 70;
        arrow.style.display = 'block';
        container.style.cursor = 'none';
        arrow.style.left = `${arrowPosition}%`;
        arrow.style.top = `${arrowPositiony}%`;
    }
    
    const btn2 = document.getElementById('btn2');
    const img2 = document.getElementById('img2');
    btn2.addEventListener('click',(e)=>{
        img2.style.animation = 'trans 0.5s linear';
        img2.classList.add('arr')
        img2.addEventListener('animationend',(e)=>{
            img2.style.animation ='none'
        })
    })

    btn2.addEventListener('mouseleave', (e) => {
        let dotsparant= document.getElementById('dots-parant');
        dotsparant.style.display = 'block'
    img2.classList.add("mystyle2");
    img2.classList.remove('arr')
    // Hide the image when the transition ends
    img2.addEventListener('transitionend', () => {
        img2.style.display = 'none';
        img2.classList.remove("mystyle2");
    }, { once: true });
    });


    function check() {
        let prevButton = document.getElementById('prev');
    
        // Hide the previous button initially
        prevButton.style.display = 'none';
    
        // Add event listener to update button visibility on slide change
        swiper.on('slideChange', function () {
            if (swiper.activeIndex === 0) {
                prevButton.style.display = 'none';
            } else {
                const img2 = document.getElementById('img2');
                prevButton.style.display = 'flex';
                img2.classList.remove("mystyle2");
                img2.style.display ='none';
            }
        });
    }
    
    // Function to handle the 'check2' logic
    function check2() {
        const nextButton = document.getElementById('next');
    
        // Add event listener to update button visibility on slide change
        swiper.on('slideChange', function () {
            if (swiper.isEnd) {
                nextButton.style.display = 'none';
            } else {
                const img = document.getElementById('img');
                nextButton.style.display = 'flex';
                img.classList.remove("mystyle");
                img.style.display = 'none';
            }
        });
    }



    cursor.$cursorred.style.display = "none";
    let dots = document.querySelector('.cursor-dot-outline')
    var swiperContainer = document.querySelectorAll('.swiper-slide');
    Array.from(swiperContainer).forEach(e => {
        
        e.addEventListener('mouseenter', function() {
            // Show the red cursor
            dots.style.width = 40+'px';
            dots.style.height = 40+'px';
            cursor.$cursorred.style.opacity = 1;
            cursor.$cursorred.style.display = "block";
        });
        
        e.addEventListener('mouseleave', function() {
            // Hide the red cursor
            dots.style.width = 20+'px';
            dots.style.height = 20+'px';
            cursor.$cursorred.style.opacity = 0;
            cursor.$cursorred.style.display = "none";
        });
    });
    var navlinks = document.querySelectorAll('.links li');
    Array.from(navlinks).forEach(e => {
        
        e.addEventListener('mouseenter', function() {
            // Show the red cursor
            dots.style.width = 40+'px';
            dots.style.height = 40+'px';
            cursor.$cursorred.style.opacity = 1;
            cursor.$cursorred.style.display = "block";
        });
        
        e.addEventListener('mouseleave', function() {
            // Hide the red cursor
            dots.style.width = 20+'px';
            dots.style.height = 20+'px';
            cursor.$cursorred.style.opacity = 0;
            cursor.$cursorred.style.display = "none";
        });
    });
    let headerimg = document.querySelector('.header img ')
    headerimg.addEventListener('mouseenter', function() {
        // Show the red cursor
        dots.style.width = 40+'px';
            dots.style.height = 40+'px';
        cursor.$cursorred.style.opacity = 1;
        cursor.$cursorred.style.display = "block";
    });

    headerimg.addEventListener('mouseleave', function() {
        // Hide the red cursor
        dots.style.width = 20+'px';
            dots.style.height = 20+'px';
        cursor.$cursorred.style.opacity = 0;
        cursor.$cursorred.style.display = "none";
    });

 
    

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });


    ScrollReveal().reveal(".swiper-slide h2", {origin:'bottom'})

