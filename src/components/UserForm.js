import React , { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function UserForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const [details, setDetails] = useState({firstName : "", lastName : "", email : "", occupation : "", city : "", bio : ""})

  const values = { firstName, lastName, email, occupation, city, bio };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setDetails({...details , [e.target.name] : e.target.value})
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
}

export default UserForm;
