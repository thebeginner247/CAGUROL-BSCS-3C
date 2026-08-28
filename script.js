let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};

// Image zoom / lightbox
const zoomableImgs = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

zoomableImgs.forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  // close if user clicks the dark background, not the image itself
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
}); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};
