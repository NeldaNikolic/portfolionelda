import React, { useState } from "react";
import FormSingUp from "./FormSingUp";

const Form = () => {
  const [isSubnitted, setIsSubmitted] = useState(false);
  function submitFrom() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubnitted ? <FormSingUp submitFrom={submitFrom} /> : <FormSingUp />}
      </div>
    </>
  );
};

export default Form;
