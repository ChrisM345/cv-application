import { useState } from "react";

function Applicant({ data }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [summary, setSummary] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

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

  // Commit changes and update CV Application
  function handleSendData() {
    if (firstName && lastName && phoneNumber && email && linkedin && summary) {
      data({
        name: `${firstName} ${lastName}`,
        phoneNumber: phoneNumber,
        email: email,
        linkedin: linkedin,
        summary: summary,
      });

      handleSetSubmit();
    }
  }

  // Switches between Submit and Edit button
  function handleSetSubmit() {
    setShowSubmit(!showSubmit);
  }

  return showSubmit ? (
    <>
      <h2>Basic Info Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
        <input placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
        <input placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNameChange} />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input placeholder="Linkedin Profile" value={linkedin} onChange={handleLinkedinChange} />
        <input placeholder="Summary" value={summary} onChange={handleSummaryChange} />
        <div>
          <p>
            Submit Basic Info Form: <button onClick={handleSendData}>Submit</button>
          </p>
        </div>
      </form>
    </>
  ) : (
    <>
      <h2>Basic Info Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          Edit Basic Info Form: <button onClick={handleSetSubmit}>Edit</button>
        </p>
      </form>
    </>
  );
}

export default Applicant;
