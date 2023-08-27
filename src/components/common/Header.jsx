// assets
import logo from "../../assets/imgs/logo.png";

const Header = ({ showNavMenu, activePage, onNavigateToHome }) => {
  return (
    <header className="pt-4 position-absolute w-100 top-0 start-0">
      <div className="container d-flex justify-content-between align-items-center">
        <button
          onClick={onNavigateToHome}
          type="buttno"
          aria-label="Go to home page"
          className="btn position-relative p-0 border-0 text-white d-flex align-items-center gap-2"
        >
          <img src={logo} alt="global logo" className="img-fluid" />
          <span className="fw-bold text-uppercase">global</span>
        </button>
        {activePage >= 2 && activePage <= 4 ? (
          <button
            type="button"
            className="hire-us purple-bg btn border-0 position-absolute top-50 start-50 fw-bold rounded-0 lh-1 text-white text-uppercase"
          >
            Hire us
          </button>
        ) : (
          ""
        )}
        <button
          onClick={showNavMenu}
          id="menu-btn"
          type="button"
          aria-label="Open nav menu"
          className="btn border-0 d-block"
        >
          <span className="d-block"></span>
          <span className="d-block text-center mx-auto"></span>
          <span className="d-block"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
