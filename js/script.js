  // window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');
//     if (window.scrollY > 100) {
//         header.style.backgroundColor = '#555';
//     } else {
//         header.style.backgroundColor = '#333';
//     }
// });

let text = document.querySelector('.homeBottom')
text.addEventListener('mouseenter', function() {
    // Show the red cursor
    dots.style.width = 40+'px';
        dots.style.height = 40+'px';
    cursor.$cursorred.style.opacity = 1;
    cursor.$cursorred.style.display = "block";
});

text.addEventListener('mouseleave', function() {
    // Hide the red cursor
    dots.style.width = 20+'px';
    dots.style.height = 20+'px';
    cursor.$cursorred.style.opacity = 0;
    cursor.$cursorred.style.display = "none";
});
// ----------------------------homeImg drag function---------------------------------
let isDragging = false;
let offsetX, offsetY;
let img_3 = document.getElementById('hero-image');
let img = document.getElementById('homeImg');

img.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);


function startDrag(e) {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  img.style.scale = '0.6'
  img_3.classList.add("hero");
  e.preventDefault();
}

function drag(e) {
  if (isDragging) {
    img.style.left = e.pageX - offsetX + 'px';
    img.style.top = e.pageY - offsetY + 'px';
  }
}

function stopDrag() {
  isDragging = false;
  img.classList.add('hero')
  img.style.scale = '1'
  img_3.classList.remove("hero");
}

img.addEventListener('touchstart', touchStart);
img.addEventListener('touchmove', touchMove);
img.addEventListener('touchend', touchEnd);

let initialX, initialY;

function touchStart(event) {
    initialX = event.touches[0].clientX - img.getBoundingClientRect().left;
    initialY = event.touches[0].clientY - img.getBoundingClientRect().top;
    img.style.scale = '0.6'
    img_3.classList.add("hero");
}

function touchMove(event) {
    event.preventDefault();
    const currentX = event.touches[0].clientX - initialX;
    const currentY = event.touches[0].clientY - initialY;
    img.style.left = currentX + 'px';
    img.style.top = currentY + 'px';
}

function touchEnd(event) {
  img_3.classList.remove("hero");
  img.style.scale = '1'
  event.preventDefault();
}