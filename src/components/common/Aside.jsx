const Aside = ({ pages, active, onActiveChange }) => {
  return (
    <aside className="pt-4 h-100 position-relative">
      <nav className="h-100 d-flex align-items-center">
        <ul className="list-unstyled h-75 d-flex flex-column justify-content-around position-relative">
          {pages.map((page) => (
            <li key={page.id}>
              <button
                type="button"
                onClick={() => onActiveChange(page.id)}
                className={`btn ${
                  page.id === active ? "active-page" : ""
                } ps-3 pe-0 py-0 border-0 text-capitalize position-relative`}
              >
                {page.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
