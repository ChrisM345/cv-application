import { useState } from "react";

function ExperienceForm({ data }) {
  const [jobTitles, setJobTitles] = useState(["jobtitle1", "jobtitle2"]);
  const [companyNames, setCompanyNames] = useState(["company1", "company2"]);
  const [jobResponsibilities, setJobResponsibilities] = useState([
    ["Managed a team", "Trained others"],
    ["Worked", "Led a team"],
  ]);
  const [experienceData, setExperienceData] = useState({
    jobTitles: jobTitles,
    companyNames: companyNames,
    jobResponsibilities: jobResponsibilities,
  });

  const [showSubmit, setShowSubmit] = useState(true);

  function handleJobTitleChange(e, index) {
    let copiedJobs = [...jobTitles];
    copiedJobs[index] = e.target.value;
    setJobTitles(copiedJobs);
  }

  function handleCompanyNameChange(e, index) {
    let copiedCompanyNames = [...companyNames];
    copiedCompanyNames[index] = e.target.value;
    setCompanyNames(copiedCompanyNames);
  }

  function handleJobResponsibilityChange(e, jobIndex, index) {
    let copiedJobResponsibilities = [...jobResponsibilities];
    console.log(copiedJobResponsibilities[jobIndex][index]);
    copiedJobResponsibilities[jobIndex][index] = e.target.value;
    setJobResponsibilities(copiedJobResponsibilities);
  }

  function handleSetSubmit() {
    setShowSubmit(!showSubmit);
  }

  function handleSendData() {
    data({
      jobTitle: jobTitles,
      companyName: companyNames,
      jobResponsibilities: jobResponsibilities,
    });
    handleSetSubmit();
  }

  return showSubmit ? (
    <>
      <h2>Experience Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {jobTitles.map((job, index) => {
          return (
            <div className="jobData" key={index}>
              <input placeholder="Job Title" value={job} onChange={(e) => handleJobTitleChange(e, index)} />
              <input placeholder="Company Name" value={companyNames[index]} onChange={(e) => handleCompanyNameChange(e, index)} />
              {jobResponsibilities[index].map((responsibility, idx) => {
                return (
                  <input placeholder="Job Responsibility" value={responsibility} onChange={(e) => handleJobResponsibilityChange(e, index, idx)} />
                );
              })}
            </div>
          );
        })}
        <button onClick={handleSendData}>Submit</button>
      </form>
    </>
  ) : (
    <>
      <h2>Experience Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={handleSetSubmit}>Edit</button>
      </form>
    </>
  );
}

export default ExperienceForm;
