import { useState } from "react";

// components
import Form from "../components/hireUs/Form";
import Choice from "./../components/hireUs/Choice";

const HireUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [choices, setChoices] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [choicesError, setChoicesError] = useState(false);

  const handleNameChange = (value) => {
    const nameRegex = /^[a-z ]+$/i;
    if (value.length === 0) {
      setNameError("Name  is required");
    } else if (!nameRegex.test(value)) {
      setNameError("Name must contain letters and spaces only");
    } else if (nameError) {
      setNameError("");
    }
    setName(value);
  };

  const handleEmailChange = (value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.length === 0) {
      setEmailError("Email  is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email is invalid");
    } else if (emailError) {
      setEmailError("");
    }
    setEmail(value);
  };

  const handleChoiceToggle = (title, chosen) => {
    const choicesArr = [...choices];
    if (chosen) {
      choicesArr.push(title);
      if (choicesError) setChoicesError(false);
    } else {
      const choiceIndx = choicesArr.findIndex((ele) => ele === title);
      choicesArr.splice(choiceIndx, 1);
    }
    setChoices(choicesArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setNameError("Name is required");
    }
    if (email.trim().length === 0) {
      setEmailError("Email is required");
    }
    if (choices.length === 0) {
      setChoicesError(true);
    }
    if (nameError || emailError || choicesError) return;
  };

  return (
    <section
      id="hire-us"
      className="h-100 d-flex flex-column justify-content-center"
    >
      <h2 className="fw-bold text-center fs-3 mb-5">You want us to do</h2>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center m-0 mb-5">
          <div className="col-4">
            <Choice
              error={choicesError}
              title={"app design"}
              onChoiceToggle={handleChoiceToggle}
            />
          </div>
          <div className="col-4">
            <Choice
              error={choicesError}
              title={"graphic design"}
              onChoiceToggle={handleChoiceToggle}
            />
          </div>
          <div className="col-4">
            <Choice
              error={choicesError}
              title={"motion design"}
              onChoiceToggle={handleChoiceToggle}
            />
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-4">
              <Choice
                error={choicesError}
                title={"UX design"}
                onChoiceToggle={handleChoiceToggle}
              />
            </div>
            <div className="col-4">
              <Choice
                error={choicesError}
                title={"web design"}
                onChoiceToggle={handleChoiceToggle}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <Choice
                error={choicesError}
                title={"marketing"}
                onChoiceToggle={handleChoiceToggle}
              />
            </div>
          </div>
        </div>
        <Form
          name={name}
          email={email}
          nameError={nameError}
          emailError={emailError}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
        />
      </form>
    </section>
  );
};

export default HireUs;
