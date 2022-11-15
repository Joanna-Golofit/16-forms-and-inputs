import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    valueOnBlurHandler: firstNameInputOnBlurHandler,
    reset: resetEnteredFirstName,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    valueOnBlurHandler: lastNameInputOnBlurHandler,
    reset: resetEnteredLastName,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueOnBlurHandler: emailInputOnBlurHandler,
    reset: resetEnteredEmail,
  } = useInput(value => value.includes("@") && value.trim() !== "");

  let fromIsValid = false;
  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    fromIsValid = true
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetEnteredFirstName();
    resetEnteredLastName();
    resetEnteredEmail();
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            value={enteredFirstName}
            onBlur={firstNameInputOnBlurHandler}
            onChange={firstNameInputChangeHandler}
            type='text'
            id='name' />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            value={enteredLastName}
            onBlur={lastNameInputOnBlurHandler}
            onChange={lastNameInputChangeHandler}
            type='text'
            id='name' />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          value={enteredEmail}
          onBlur={emailInputOnBlurHandler}
          onChange={emailInputChangeHandler}
          type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
