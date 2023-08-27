const Work = ({ img, title, description }) => {
  return (
    <div className={`work ${title === "Metiew & Smith" ? "centerpiece" : ""}`}>
      <img
        src={img}
        alt={title}
        className="img-fluid mb-4 rounded-circle object-fit-cover d-block mx-auto"
      />
      <h2 className="text-center text-uppercase mb-4 fw-bold fs-6">{title}</h2>
      <p className="mb-0 text-center">{description}</p>
    </div>
  );
};

export default Work;
