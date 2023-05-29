const sliders = (slideSelector, dir, prev, next) => {
  const slides = document.querySelectorAll(slideSelector);
  let currSlide = 1;
  let autoPlayInterval;

  const showSlide = (i = 0) => {
    currSlide += i;
    if (currSlide > slides.length) {
      currSlide = 1;
    }
    if (currSlide <= 0) {
      currSlide = slides.length;
    }
    slides.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    slides[currSlide - 1].style.display = "block";
  };
  showSlide();

  try {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
    nextBtn.addEventListener("click", () => {
      showSlide(+1);
      slides[currSlide - 1].classList.remove("slideInLeft");
      slides[currSlide - 1].classList.add("slideInRight");
    });
    prevBtn.addEventListener("click", () => {
      showSlide(-1);
      slides[currSlide - 1].classList.remove("slideInRight");
      slides[currSlide - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  function autoplay() {
    autoPlayInterval = setInterval(() => {
      showSlide(+1);
      if (dir === "vertical") {
        slides[currSlide - 1].classList.add("slideInDown");
      } else {
        slides[currSlide - 1].classList.remove("slideInLeft");
        slides[currSlide - 1].classList.add("slideInRight");
      }
    }, 3000);
  }
  autoplay();

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });
  slides[0].parentNode.addEventListener("mouseleave", () => {
    autoplay();
  });
};
export default sliders;
