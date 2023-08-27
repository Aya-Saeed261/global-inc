// assets
import hero from "../assets/imgs/introduction-visual.png";

const Home = () => {
  return (
    <section
      id="home"
      className="h-100 d-flex flex-column justify-content-center"
    >
      <div className="d-flex top-holder position-relative">
        <div className="pt-5 pb-5">
          <h1 className="mb-5 mt-4">
            <span className="d-block lh-1">Your next</span>
            <span className="d-block lh-1">interactive</span>
            <span className="d-block lh-1">experience</span>
          </h1>
          <button
            type="button"
            className="btn text-white position-relative text-uppercase fw-bold d-flex align-items-center gap-2"
          >
            Hire us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              style={{ fill: "white" }}
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */}
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
        <div className="d-flex justify-content-end flex-fill">
          <img src={hero} alt="" className="img-fluid pt-1" />
        </div>
      </div>
      <div className="row m-0 bottom-holder position-relative pt-4">
        <div className="col-4 py-2 ps-0">
          <h2 className="fs-6 text-uppercase fw-bold">Metiew & Smith</h2>
          <p className="mb-0 fw-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit!
          </p>
        </div>
        <div className="col-4 py-2 ps-0">
          <h2 className="fs-6 text-uppercase fw-bold">Fantasy interactive</h2>
          <p className="mb-0 fw-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit!
          </p>
        </div>
        <div className="col-4 py-2 ps-0">
          <h2 className="fs-6 text-uppercase fw-bold">Paul & Shark</h2>
          <p className="mb-0 fw-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit!
          </p>
        </div>
        <div className="purple-rect position-absolute top-0"></div>
      </div>
    </section>
  );
};

export default Home;
