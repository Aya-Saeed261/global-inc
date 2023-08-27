// assets
import logo from "../assets/imgs/logo.png";

const MobileScreen = () => {
  return (
    <section className="mobile-screen">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mb-4 d-flex justify-content-center align-items-center gap-2 fs-4 fw-bold text-uppercase">
          <img src={logo} alt="global logo" className="img-fluid" />
          Global
        </h1>
        <p className="text-center mb-0">
          Global has so much to offer that we must request you orient your
          device to portrait or find a larger screen. You won't be disappointed.
        </p>
      </div>
    </section>
  );
};

export default MobileScreen;
