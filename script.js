let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};

// Image zoom / lightbox
const projectsBox = document.querySelector('.projects-box');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

projectsBox.addEventListener('click', (e) => {
  const card = e.target.closest('.projects-card');
  if (!card) return;

  const img = e.target.closest('.zoomable') || card.querySelector('.zoomable');
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('active');
});

lightboxClose.addEventListener('click', () => {
  closeLightbox();
});

lightbox.addEventListener('click', (e) => {
  // close if user clicks the dark background, not the image itself
  if (e.target === lightbox) {
    closeLightbox();
  }
}); 

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});
