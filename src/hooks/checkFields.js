import { useState } from "react";
const useCheckFields = (expectedResults) => {
  const [fieldValid, setFieldValid] = useState(false);
  const checkFields = (e) => {
    const inputElements = e.target.form.elements;
    const checkResult = Object.keys(expectedResults).reduce(
      (acc, fieldName) => {
        const valid =
          expectedResults[fieldName] === inputElements[fieldName]["value"];
        return acc && valid;
      },
      true
    );
    setFieldValid(() => setFieldValid(checkResult));
  };
  return {
    checkFields,
    fieldValid,
  };
};

export default useCheckFields;
