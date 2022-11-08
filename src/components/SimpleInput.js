import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameValid] = useState(true);
  const nameInputRef = useRef();

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
    if (e.target.value.trim() !== "") {
      setEnteredNameValid(true)
    }
  }

  const nameInputOnBlurHandler = () => {
    if (enteredName.trim() === "") {
      setEnteredNameValid(false)
    }
  }

  // const nameInputOnFocusHandler = () => {
  //   if (enteredName.trim() !== "") {
  //     setEnteredNameValid(true)
  //   }
  // }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      console.log("no text")
      setEnteredNameValid(false)
      return;
    }
    setEnteredNameValid(true)
      setEnteredName("")
      console.log("submit")
      console.log(nameInputRef.current.value);
      // nameInputRef.current.value = ""; DON"T USE IT THIS WAY, ONLY REACT SHALL MANIPULATE THE DOM
      // setEnteredName(e.target.value)
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} onBlur={nameInputOnBlurHandler} onChange={nameInputChangeHandler} type='text' id='name' />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
