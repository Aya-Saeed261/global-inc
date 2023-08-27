import { useState } from "react";

const Choice = ({ title, error, onChoiceToggle }) => {
  const [chosen, setChosen] = useState(false);

  const handleToggle = () => {
    onChoiceToggle("title", !chosen);
    setChosen(!chosen);
  };

  return (
    <>
      <input
        type="checkbox"
        name={title}
        id={`choice-${title}`}
        className="d-none"
      />
      <label
        htmlFor={`choice-${title}`}
        onClick={handleToggle}
        type="button"
        className={`${
          chosen ? "chosen" : ""
        } choice d-flex align-items-center justify-content-center gap-2 btn w-100 rounded-0 py-3 text-capitalize fw-bold border border-2 ${
          error ? "text-danger border-danger" : "text-white border-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          style={{ fill: "white" }}
        >
          {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */}
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        {title}
      </label>
    </>
  );
};

export default Choice;
