const heroContents = document.querySelectorAll('.hero-content');
let currentIndex = 0;

function showNextHeroContent() {
  heroContents[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % heroContents.length;
  heroContents[currentIndex].classList.add('active');
}

// Show the first hero content on page load
heroContents[currentIndex].classList.add('active');

setInterval(showNextHeroContent, 5000); // Change slide every 5 seconds

// Content carousel
const contentCarousel = document.querySelector('.content-carousel');
const contentItems = contentCarousel.querySelectorAll('.carousel-item');
let currentContentIndex = 0;

function showContentItem(index) {
  contentItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function cycleContentItems() {
  currentContentIndex = (currentContentIndex + 1) % contentItems.length;
  showContentItem(currentContentIndex);
}

setInterval(cycleContentItems, 4000);

// Testimonial carousel
const testimonialCarousel = document.querySelector('.testimonial-carousel');
const testimonialItems = testimonialCarousel.querySelectorAll('.testimonial-item');
let currentTestimonialIndex = 0;

function showTestimonialItem(index) {
  testimonialItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function cycleTestimonialItems() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
  showTestimonialItem(currentTestimonialIndex);
}

setInterval(cycleTestimonialItems, 10000);