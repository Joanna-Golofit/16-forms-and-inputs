import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let  fromIsValid = false;
  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@") && enteredEmail.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  if (enteredNameIsValid) {
    fromIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const nameInputOnBlurHandler = () => {
    setEnteredNameTouched(true);
  }
  const emailInputOnBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
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
      <div className={emailInputClasses} >
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          onBlur={emailInputOnBlurHandler}
          onChange={emailInputChangeHandler}
          type='text'
          id='email'
        />
        {emailInputIsInvalid && <p className="error-text">Email must not be empty and must contain "@"</p>}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
