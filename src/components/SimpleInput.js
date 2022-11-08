import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    // e.preventDefault();
    // console.log(e.target.value)
    setEnteredName(e.target.value)
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    // setEnteredName(e.target.value)
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      <p>{ enteredName}</p>
    </form>
  );
};

export default SimpleInput;
