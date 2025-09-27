const heroCarousel = document.querySelector('#heroCarousel');
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel'
  });