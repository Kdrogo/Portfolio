let txt1 = document.querySelector('.bottomtxt')
txt1.addEventListener('mouseenter', function() {
    // Show the red cursor
    dots.style.width = 40+'px';
        dots.style.height = 40+'px';
    cursor.$cursorred.style.opacity = 1;
    cursor.$cursorred.style.display = "block";
    console.log('hel    ')
});

txt1.addEventListener('mouseleave', function() {
    // Hide the red cursor
    dots.style.width = 20+'px';
        dots.style.height = 20+'px';
    cursor.$cursorred.style.opacity = 0;
    cursor.$cursorred.style.display = "none";
});