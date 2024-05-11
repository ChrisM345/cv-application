import { useState } from "react";
import Application from "./application";

function Applicant({ data }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [summary, setSummary] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handlePhoneNameChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleLinkedinChange(e) {
    setLinkedin(e.target.value);
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  function handleSendData() {
    data({
      name: `${firstName} ${lastName}`,
      phoneNumber: phoneNumber,
      email: email,
      linkedin: linkedin,
      summary: summary,
    });

    console.log("test");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
      <input placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
      <input placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNameChange} />
      <input placeholder="Email" value={email} onChange={handleEmailChange} />
      <input placeholder="Linkedin Profile" value={linkedin} onChange={handleLinkedinChange} />
      <input placeholder="Summary" value={summary} onChange={handleSummaryChange} />
      <button onClick={handleSendData}>Submit</button>
    </form>
  );
}

export default Applicant;