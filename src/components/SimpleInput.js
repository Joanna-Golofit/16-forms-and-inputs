// import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueOnBlurHandler: nameInputOnBlurHandler,
    reset: resetEnteredName,
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueOnBlurHandler: emailInputOnBlurHandler,
    reset: resetEnteredEmail,
  } = useInput(value => value.includes("@") && value.trim() !== "");

  let  fromIsValid = false;

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  if (enteredNameIsValid && enteredEmailIsValid) {
    fromIsValid = true
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredNameIsValid) {
      return;
    }

    resetEnteredName();
    resetEnteredEmail();
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
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses} >
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          onBlur={emailInputOnBlurHandler}
          onChange={emailInputChangeHandler}
          type='email'
          id='email'
        />
        {emailInputHasError && <p className="error-text">Email must not be empty and must contain "@"</p>}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
