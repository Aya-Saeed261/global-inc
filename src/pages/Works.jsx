// react multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// imported assets
import work1 from "../assets/imgs/work-victory.jpg";
import work2 from "../assets/imgs/work-metiew-smith.jpg";
import work3 from "../assets/imgs/work-alex-nowak.jpg";

// components
import Work from "../components/works/Work";

// React multi-carousel breakpoints
const responsive = {
  screens: {
    breakpoint: { max: 4000, min: 0 },
    items: 3,
  },
};

const afterCarouselSlide = (previousSlide, { currentSlide, onMove }) => {
  const activeSlides = document.querySelectorAll(
    ".react-multi-carousel-item--active .work"
  );
  if (
    (previousSlide === 5 && currentSlide !== 4) ||
    (previousSlide === 1 && currentSlide !== 2)
  ) {
    document
      .querySelector(".react-multi-carousel-item[data-index='4'] .work")
      .classList.add("centerpiece");
  } else {
    activeSlides[1].classList.add("centerpiece");
  }
};

const beforeCarouselSlide = () => {
  const slides = [
    ...document.querySelectorAll(".react-multi-carousel-item .work"),
  ];
  slides.forEach((slide) => slide.classList.remove("centerpiece"));
};

const Works = () => {
  return (
    <section
      id="works"
      className="h-100 d-flex flex-column justify-content-center"
    >
      <h2 className="text-center fw-bold fs-3 mt-3">Selected work</h2>
      <Carousel
        responsive={responsive}
        containerClass="multi-carousel"
        draggable={false}
        swipeable
        infinite
        keyBoardControl
        minimumTouchDrag={60}
        afterChange={afterCarouselSlide}
        beforeChange={beforeCarouselSlide}
      >
        <Work
          img={work1}
          title={"Victory"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Work
          img={work2}
          title={"Metiew & Smith"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
        <Work
          img={work3}
          title={"Alex Nowak"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        />
      </Carousel>
    </section>
  );
};

export default Works;
