import { useEffect, useLayoutEffect, useState } from "react";

// components
import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import NavMenu from "./components/common/NavMenu";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HireUs from "./pages/HireUs";
import MobileScreen from "./pages/MobileScreen";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(true);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [active, setActive] = useState(1);
  const [fadeDirection, setFadeDirection] = useState(false);
  const [wheelMove, setWheelMove] = useState(-0);
  const pages = [
    { id: 1, title: "home", component: <Home /> },
    { id: 2, title: "works", component: <Works /> },
    { id: 3, title: "about", component: <About /> },
    { id: 4, title: "contact", component: <Contact /> },
    { id: 5, title: "hire us", component: <HireUs /> },
  ];

  const handleShowNavMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleActiveChange = (newActive, pre) => {
    let fadeUp = pre ? newActive > pre : newActive > active;
    if (fadeUp) {
      setFadeDirection("up");
    } else {
      setFadeDirection("down");
    }
    setTimeout(() => {
      setFadeDirection("");
      setActive(newActive);
    }, 480);
    if (isMenuOpen) {
      closeMenu();
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsLgScreen(window.innerWidth >= 992 ? true : false);
      setIsSmScreen(window.innerWidth < 768 ? true : false);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    function handlePageChange(e) {
      const delta = Math.sign(e.deltaY);
      setWheelMove((prevWheel) => {
        if (delta === -0) {
          let newActive;
          setActive((preActive) => {
            if (prevWheel === 1) {
              newActive = preActive + 1;
              if (preActive === 5) newActive = 1;
            } else if (prevWheel === -1) {
              newActive = preActive - 1;
              if (preActive === 1) newActive = 5;
            }
            handleActiveChange(newActive, preActive);
            return preActive;
          });
        }
        return delta;
      });
    }
    window.addEventListener("wheel", handlePageChange);
    return () => window.removeEventListener("wheel", handlePageChange);
  }, []);

  return isSmScreen ? (
    <MobileScreen />
  ) : (
    <>
      <div
        id="page"
        className={`${
          isMenuOpen ? "showMenu" : ""
        } overflow-hidden position-absolute w-100 top-0`}
        onClick={isMenuOpen ? closeMenu : null}
      >
        <Header
          showNavMenu={handleShowNavMenu}
          activePage={active}
          onNavigateToHome={() => handleActiveChange(1)}
        />
        <div className="container h-100">
          <div className="row m-0 h-100">
            {isLgScreen ? (
              <div className="col-1 px-0 h-100">
                <Aside
                  pages={pages}
                  active={active}
                  onActiveChange={handleActiveChange}
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-lg-10 px-0 ps-lg-5 h-100 position-relative">
              <main className="h-100">
                {pages.map((page) => (
                  <div
                    key={page.id}
                    className={`section ${active === page.id ? "show" : ""} ${
                      active === page.id && fadeDirection
                        ? `fade-${fadeDirection}`
                        : ""
                    } ps-lg-5 position-absolute w-100 h-100 top-0 start-0`}
                  >
                    {page.component}
                  </div>
                ))}
              </main>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <NavMenu
          pages={pages}
          active={active}
          onActiveChange={handleActiveChange}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
