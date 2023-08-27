const Form = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  emailError,
  nameError,
}) => {
  return (
    <div className="inputs-form row m-0 justify-content-center">
      <div className="col-6">
        <div className="form-floating">
          <input
            className={`form-control px-0 text-white fs-5 form-input bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 ${
              nameError ? "error border-danger" : ""
            }`}
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <label
            htmlFor="name"
            className={`px-0 ${nameError ? "text-danger" : "text-white"}`}
          >
            Name
          </label>
          <p
            className={`error-msg text-danger mb-0 position-absolute bottom-0 start-0 ${
              nameError ? "show" : ""
            }`}
          >
            {nameError}
          </p>
        </div>
      </div>
      <div className="col-6">
        <div className="form-floating">
          <input
            className={`form-control px-0 text-white fs-5 form-input bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 ${
              emailError ? "error border-danger" : ""
            }`}
            name="email"
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
          <label
            htmlFor="email"
            className={`px-0 ${emailError ? "text-danger" : "text-white"}`}
          >
            Email
          </label>
          <p
            className={`error-msg text-danger mb-0 position-absolute bottom-0 start-0 ${
              emailError ? "show" : ""
            }`}
          >
            {emailError}
          </p>
        </div>
      </div>
      <div className="col-6 pt-4 mt-4">
        <button
          type="submit"
          className="btn purple-bg text-uppercase border-0 w-100 rounded-0 text-white py-3 fw-bold"
        >
          Send request
        </button>
      </div>
    </div>
  );
};

export default Form;
