import { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  userType: "dev",
  password: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let errorCollector = { ...errors };
    if (fieldValues.email) {
      errorCollector.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(
        fieldValues.email
      )
        ? ""
        : "Please enter a valid email address";
    }
    setErrors({ ...errorCollector });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formIsValid()) {
      alert("You've posted your form!");
    }
  };
  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      fieldValues.userType &&
      fieldValues.password.length > 8 &&
      Object.values(errors).every((x) => x === "");
    return isValid;
  };
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    values,
  };
};
