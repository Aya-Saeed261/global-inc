import { useEffect, useState } from "react";

const NavMenu = ({ pages, active, onActiveChange }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => {
      clearTimeout(id);
      setShow(false);
    };
  }, []);

  return (
    <nav
      id="nav-menu"
      className={`d-flex justify-content-end align-items-center pe-5 me-5 ${
        show ? "show" : ""
      }`}
    >
      <ul className="list-unstyled pe-lg-5 me-xl-5 d-flex flex-column gap-4">
        {pages.map((page) => (
          <li
            onClick={() => onActiveChange(page.id)}
            key={page.id}
            className={`${
              page.id === active ? "active-page" : ""
            } position-relative px-2 text-capitalize fw-bold lh-1 text-center`}
          >
            {page.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
