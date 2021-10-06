import React , { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import database from "../util/firebase";


function UserForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [education, setEducation] = useState(new Map());

  const [details, setDetails] = useState({firstName : "", lastName : "", gender : null, dateOfBirth : "", email : "", occupation : "", education: "", city : "", bio : ""})

  const pageChange = () =>{
    setFirstName(details.firstName);
    setLastName(details.lastName);
    setGender(details.gender);
    setDateOfBirth(details.dateOfBirth);
    setEmail(details.email);
    setOccupation(details.occupation);
    setEducation(details.education);
    setCity(details.city);
    setBio(details.bio);
  }

  const values = { firstName, lastName, gender, dateOfBirth, email, occupation, education, city, bio };

  const nextStep = () => {
    setStep(step + 1);
    pageChange();
  };

  const prevStep = () => {
    setStep(step - 1);
    pageChange();
  };

  const handleChange = (e) => {
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
