const Category = ({ img, title }) => {
  return (
    <a href="/#" className="d-block category-holder pe-4">
      <img src={img} alt={title} className="img-fluid object-fit-cover" />
      <h3 className="mb-0 text-uppercase ps-3 fw-bold fs-6">{title}</h3>
    </a>
  );
};

export default Category;
