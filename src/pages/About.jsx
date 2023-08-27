// assets
import hero from "../assets/imgs/about-visual.png";
import winners from "../assets/imgs/about-winners.jpg";
import history from "../assets/imgs/about-history.jpg";
import philosophy from "../assets/imgs/about-philosophy.jpg";

// components
import Category from "../components/about/Category";

const About = () => {
  return (
    <section id="about" className="h-100 d-flex flex-column justify-content-center">
      <div className="row m-0 mb-5">
        <div className="col-7 col-lg-6 ps-0 pt-5 mt-4">
          <h2 className="lh-1 position-relative mb-5">
            We <br /> believe{" "}
            <span className="letter-i position-relative">i</span>n
            <br /> passionate <br />
            <span className="square-after-word position-relative">people</span>
          </h2>
          <a
            href="/#"
            className="text-uppercase fw-bold d-inline-flex gap-2 align-items-center"
          >
            Career
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              style={{ fill: "white" }}
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */}
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </a>
        </div>
        <div className="col-5 col-lg-6 px-0 position-relative">
          <img
            src={hero}
            alt=""
            className="img-fluid position-absolute end-0"
          />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-3 ps-0 pe-3 pe-lg-4">
          <Category img={philosophy} title={"philosophy"} />
        </div>
        <div className="col-3 ps-0 pe-3 pe-lg-4">
          <Category img={winners} title={"winners"} />
        </div>
        <div className="col-3 ps-0 pe-3 pe-lg-4">
          <Category img={history} title={"history"} />
        </div>
      </div>
    </section>
  );
};

export default About;
