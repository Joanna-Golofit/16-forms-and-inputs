import { useState } from 'react'

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !enteredValue && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }

  const valueOnBlurHandler = () => {
    setIsTouched(true);
  }
  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueOnBlurHandler,
    reset
  }
}

export default useInput