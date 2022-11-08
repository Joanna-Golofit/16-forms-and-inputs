import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  const nameInputChangeHandler = (e) => {
    // e.preventDefault();
    // console.log(e.target.value)
    setEnteredName(e.target.value)
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredName("")
    console.log("submit")
    console.log(nameInputRef.current.value);
    // nameInputRef.current.value = ""; DON"T USE IT THIS WAY, ONLY REACT SHALL MANIPULATE THE DOM
    // setEnteredName(e.target.value)
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName}  onChange={nameInputChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      <p>{ enteredName}</p>
    </form>
  );
};

export default SimpleInput;
