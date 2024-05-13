import { useState } from "react";

function EducationForm({ data }) {
  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [degree, setDegree] = useState("");
  const [gpa, setGPA] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleSchoolCityChange(e) {
    setSchoolCity(e.target.value);
  }

  function handleSchoolStateChange(e) {
    setSchoolState(e.target.value);
  }

  function handleGraduationDateChange(e) {
    setGraduationDate(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }

  function handleGPAChange(e) {
    setGPA(e.target.value);
  }

  function handleSendData() {
    data({
      school: schoolName,
      city: schoolCity,
      state: schoolState,
      graduation: graduationDate,
      degree: degree,
      gpa: gpa,
    });
    setShowSubmit(!showSubmit);
  }

  function handleSetSubmit() {
    setShowSubmit(!showSubmit);
  }

  return showSubmit ? (
    <>
      <h2>Education Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder="School Name" value={schoolName} onChange={handleSchoolNameChange} />
        <input placeholder="School City" value={schoolCity} onChange={handleSchoolCityChange} />
        <input placeholder="School State" value={schoolState} onChange={handleSchoolStateChange} />
        <input placeholder="Graduation Date" value={graduationDate} onChange={handleGraduationDateChange} />
        <input placeholder="Degree" value={degree} onChange={handleDegreeChange} />
        <input placeholder="GPA" value={gpa} onChange={handleGPAChange} />
        <button onClick={handleSendData}>Submit</button>
      </form>
    </>
  ) : (
    <>
      <h2>Education Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={handleSetSubmit}>Edit</button>
      </form>
    </>
  );
}

export default EducationForm;
