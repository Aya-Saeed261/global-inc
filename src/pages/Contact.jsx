// assets
import bg from "../assets/imgs/contact-visual.png";

const Contact = () => {
  return (
    <section id="contact" className="d-flex justify-content-end align-items-center h-100">
      <img
        src={bg}
        alt=""
        className="position-fixed w-100 h-100 top-0 start-0 z-n1 object-fit-cover"
      />
      <div className="holder ms-auto p-5">
        <p className="fw-bold text-center mb-3">
          Pawia 5, 31-154 Kraków, Poland
        </p>
        <a
          href="mailto:ourmail@gmail.com"
          className="d-block text-center fw-bold mb-3"
        >
          ourmail@gmail.com
        </a>
        <a href="tel:+48126287560" className="d-block text-center fw-bold mb-3">
          +48126287560
        </a>
        <ul className="list-unstyled social-links">
          <li>
            <a href="/#" className="fw-bold mx-auto d-block text-center py-2">
              Behance
            </a>
          </li>
          <li className="my-4">
            <a href="/#" className="fw-bold mx-auto d-block text-center py-2">
              dribbble
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="fw-bold purple-bg mx-auto d-block text-center text-uppercase py-2"
            >
              contact us
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
