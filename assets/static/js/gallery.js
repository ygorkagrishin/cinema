Array.prototype.forEach.call(document.querySelectorAll('[data-gallery]'), (obj) => {
  obj.addEventListener('click', function (e) {
    e.preventDefault();
    
    const thumbnail = this;

    const container = document.querySelector('.gallery-slides');
    const slides = document.querySelectorAll('.gallery-slide');

    const currentSlide = thumbnail.getAttribute('data-slide');

    if (!currentSlide) return;

    for (let i=0, len=slides.length-1; i<=len; i++) {
      let slide = slides[i];

      if (slide.classList.contains('active'))
        slide.classList.remove('active');
    }

    container.style.transform = `translateX(-${currentSlide}00%)`;
    slides[currentSlide].classList.add('active');
  }, false);
});