var cursor = {
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
cursor.$cursorred.style.display = "none";
let dots = document.querySelector('.cursor-dot-outline')
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

window.addEventListener("DOMContentLoaded", function() {
    const active = document.querySelector(".active div");
    active.style.animation = 'active 2s'
});
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.hero-image, .projectTopHeading, .mousebtn, .propos' ,{origin: 'bottom'});
