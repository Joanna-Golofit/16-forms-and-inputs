import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputOnBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          onBlur={nameInputOnBlurHandler}
          onChange={nameInputChangeHandler}
          type='text'
          id='name'
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
