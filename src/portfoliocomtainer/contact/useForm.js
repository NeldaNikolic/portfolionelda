import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    useername: "",
    email: "",
    passworld: "",
    passworld2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
