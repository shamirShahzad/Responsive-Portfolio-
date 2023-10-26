const fromLeft = document.querySelectorAll(".from-left");
const fromRight = document.querySelectorAll(".from-right");
const fromTopSlideElement = document.querySelectorAll(".from-top");
const projectImages = document.querySelectorAll(".projects-img");
const options = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const imagesArray = Array.from(projectImages);

imagesArray.forEach((val) => {
  let x;
  let y;
  val.addEventListener("mousemove", (event) => {
    const { top, bottom, left, right } = event.target.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX;
    const clientY = event.clientY;

    const offsetX = (clientX - middleX) / middleX;
    const offsetY = (middleY - clientY) / middleY;

    event.target.style.transform = `perspective(1000px) rotateY(${
      offsetX * 5
    }deg) rotateX(${offsetY * 5}deg) scale3d(1,1,1)`;
  });
  val.addEventListener("mouseleave", (event) => {
    event.target.style.transform = `perspective(0) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)`;
  });
});

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
