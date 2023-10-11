const fromLeft = document.querySelectorAll(".from-left");
const fromRight = document.querySelectorAll(".from-right");
const fromTopSlideElement = document.querySelectorAll(".from-top");
const options = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const rightSlideObserver = new IntersectionObserver(function (enteries) {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("appear");
      rightSlideObserver.unobserve(entry.target);
    }
  });
}, options);

fromRight.forEach((rightSlider) => {
  rightSlideObserver.observe(rightSlider);
});

const leftSlideObserver = new IntersectionObserver(function (enteries) {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("appear");
      leftSlideObserver.unobserve(entry.target);
    }
  });
}, options);

fromLeft.forEach((leftSlider) => {
  leftSlideObserver.observe(leftSlider);
});

const topSlideObserver = new IntersectionObserver(function (enteries) {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("appear");
      topSlideObserver.unobserve(entry.target);
    }
  });
}, options);

fromTopSlideElement.forEach((topSlider) => {
  topSlideObserver.observe(topSlider);
});
