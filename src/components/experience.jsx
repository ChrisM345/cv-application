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

  const [newJobTitle, setNewJobTitle] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  function handleNewJobTitle(e) {
    setNewJobTitle(e.target.value);
  }

  function handleJobTitleChange(e, index) {
    let copiedJobs = [...jobTitles];
    copiedJobs[index] = e.target.value;
    setJobTitles(copiedJobs);
  }

  function handleAddJob() {
    setJobTitles([...jobTitles, newJobTitle]);
    setCompanyNames([...companyNames, newCompanyName]);
    setJobResponsibilities([...jobResponsibilities, [newResponsibility]]);
    document.getElementById("newJobTitle").value = "";
    document.getElementById("newCompanyName").value = "";
    document.getElementById("newJobResponsibility").value = "";
  }

  function handleJobDelete(index) {
    console.log("deleting job");
    setJobTitles(jobTitles.slice(0, index).concat(jobTitles.slice(index + 1)));
    setCompanyNames(companyNames.slice(0, index).concat(companyNames.slice(index + 1)));
    setJobResponsibilities(jobResponsibilities.slice(0, index).concat(jobResponsibilities.slice(index + 1)));
  }

  function handleNewCompanyName(e) {
    setNewCompanyName(e.target.value);
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

  function handleNewResponsibility(e) {
    setNewResponsibility(e.target.value);
  }

  function handleAddResponsibility(e) {
    const index = e.target.parentNode.id;
    let copiedJobResponsibilities = [...jobResponsibilities];
    copiedJobResponsibilities[index] = copiedJobResponsibilities[index].concat(newResponsibility);
    setJobResponsibilities(copiedJobResponsibilities);
    document.getElementById("newResponsibility").value = "";
  }

  function handleDeleteResponsibility(outerIndex, innerIndex) {
    let copiedJobResponsibilities = [...jobResponsibilities];
    copiedJobResponsibilities[outerIndex] = copiedJobResponsibilities[outerIndex]
      .slice(0, innerIndex)
      .concat(copiedJobResponsibilities[outerIndex].slice(innerIndex + 1));
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
      <h3>Current Experience</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {jobTitles.map((job, index) => {
          return (
            <div className="jobData" id={index} key={index}>
              <button onClick={() => handleJobDelete(index)}>Delete Job</button>
              <input placeholder="Job Title" value={job} onChange={(e) => handleJobTitleChange(e, index)} />
              <input placeholder="Company Name" value={companyNames[index]} onChange={(e) => handleCompanyNameChange(e, index)} />
              {jobResponsibilities[index].map((responsibility, idx) => {
                return (
                  <>
                    <input placeholder="Job Responsibility" value={responsibility} onChange={(e) => handleJobResponsibilityChange(e, index, idx)} />
                    <button onClick={() => handleDeleteResponsibility(index, idx)}>Delete</button>
                  </>
                );
              })}
              <input placeholder="Responsibility" id="newResponsibility" onChange={handleNewResponsibility} />
              <button onClick={(e) => handleAddResponsibility(e)}>Add Responsibility</button>
            </div>
          );
        })}
        <h3>Add Experience</h3>
        <input placeholder="Job Title" id="newJobTitle" onChange={handleNewJobTitle} />
        <input placeholder="Company Name" id="newCompanyName" onChange={handleNewCompanyName} />
        <input placeholder="Job Responsibility" id="newJobResponsibility" onChange={handleNewResponsibility} />
        <button onClick={handleAddJob}>Add Job</button>
        <div>
          <h3>Submit Experience Form</h3>
          <button onClick={handleSendData}>Submit</button>
        </div>
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
