import { useState } from "react";

function ExperienceForm({ data }) {
  const [jobTitles, setJobTitles] = useState([]);
  const [companyNames, setCompanyNames] = useState([]);
  const [jobLocations, setJobLocations] = useState([]);
  const [jobStartDates, setJobStartDates] = useState([]);
  const [jobEndDates, setJobEndDates] = useState([]);
  const [jobResponsibilities, setJobResponsibilities] = useState([]);

  const [newJobTitle, setNewJobTitle] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newJobLocation, setNewJobLocation] = useState("");
  const [newJobStartDate, setNewJobStartDate] = useState("");
  const [newJobEndDate, setNewJobEndDate] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  function handleNewJobTitle(e) {
    setNewJobTitle(e.target.value);
  }

  // jobTitles is an array so we need to keep track of the index
  function handleJobTitleChange(e, index) {
    let copiedJobs = [...jobTitles];
    copiedJobs[index] = e.target.value;
    setJobTitles(copiedJobs);
  }

  // Adding a job requires all fields. Set the value to "" for the new inputs that appear
  function handleAddJob() {
    if (newJobTitle && newCompanyName && newJobLocation && newJobStartDate && newJobEndDate && newResponsibility) {
      setJobTitles([...jobTitles, newJobTitle]);
      setCompanyNames([...companyNames, newCompanyName]);
      setJobLocations([...jobLocations, newJobLocation]);
      setJobStartDates([...jobStartDates, newJobStartDate]);
      setJobEndDates([...jobEndDates, newJobEndDate]);
      setJobResponsibilities([...jobResponsibilities, [newResponsibility]]);
      document.getElementById("newJobTitle").value = "";
      document.getElementById("newCompanyName").value = "";
      document.getElementById("newJobLocation").value = "";
      document.getElementById("newJobStartDate").value = "";
      document.getElementById("newJobEndDate").value = "";
      document.getElementById("newJobResponsibility").value = "";
      setNewJobTitle("");
      setNewCompanyName("");
      setNewJobLocation("");
      setNewJobStartDate("");
      setNewJobEndDate("");
      setNewResponsibility("");
    }
  }

  // Deleting a job requires deleting all information from each array
  function handleJobDelete(index) {
    setJobTitles(jobTitles.slice(0, index).concat(jobTitles.slice(index + 1)));
    setCompanyNames(companyNames.slice(0, index).concat(companyNames.slice(index + 1)));
    setJobLocations(jobLocations.slice(0, index).concat(jobLocations.slice(index + 1)));
    setJobStartDates(jobStartDates.slice(0, index).concat(jobStartDates.slice(index + 1)));
    setJobEndDates(jobEndDates.slice(0, index).concat(jobEndDates.slice(index + 1)));
    setJobResponsibilities(jobResponsibilities.slice(0, index).concat(jobResponsibilities.slice(index + 1)));
  }

  function handleNewCompanyName(e) {
    setNewCompanyName(e.target.value);
  }

  // companyNames is an array so we need to keep track of the index
  function handleCompanyNameChange(e, index) {
    let copiedCompanyNames = [...companyNames];
    copiedCompanyNames[index] = e.target.value;
    setCompanyNames(copiedCompanyNames);
  }

  function handleNewJobLocation(e) {
    setNewJobLocation(e.target.value);
  }

  // jobLocations is an array so we need to keep track of the index
  function handleJobLocationChange(e, index) {
    let copiedJobLocations = [...jobLocations];
    copiedJobLocations[index] = e.target.value;
    setJobLocations(copiedJobLocations);
  }

  function handleNewJobStartDate(e) {
    setNewJobStartDate(e.target.value);
  }

  // jobStartDates is an array so we need to keep track of the index
  function handleJobStartDateChange(e, index) {
    let copiedJobStartDates = [...jobStartDates];
    copiedJobStartDates[index] = e.target.value;
    setJobStartDates(copiedJobStartDates);
  }

  function handleNewJobEndDate(e) {
    setNewJobEndDate(e.target.value);
  }

  // jobEndDates is an array so we need to keep track of the index
  function handleJobEndDateChange(e, index) {
    let copiedJobEndDates = [...jobEndDates];
    copiedJobEndDates[index] = e.target.value;
    setJobEndDates(copiedJobEndDates);
  }

  // We have an array of arrays so we need to keep track of two indexes to properly update info
  function handleJobResponsibilityChange(e, jobIndex, index) {
    let copiedJobResponsibilities = [...jobResponsibilities];
    copiedJobResponsibilities[jobIndex][index] = e.target.value;
    setJobResponsibilities(copiedJobResponsibilities);
  }

  function handleNewResponsibility(e) {
    setNewResponsibility(e.target.value);
  }

  function handleAddResponsibility(e) {
    const index = e.target.parentNode.parentNode.id;
    let copiedJobResponsibilities = [...jobResponsibilities];
    copiedJobResponsibilities[index] = copiedJobResponsibilities[index].concat(newResponsibility);
    setJobResponsibilities(copiedJobResponsibilities);
    document.getElementById("newResponsibility").value = "";
  }

  // We have an array of arrays so we need to keep track of two indexes to properly update info
  function handleDeleteResponsibility(outerIndex, innerIndex) {
    let copiedJobResponsibilities = [...jobResponsibilities];
    copiedJobResponsibilities[outerIndex] = copiedJobResponsibilities[outerIndex]
      .slice(0, innerIndex)
      .concat(copiedJobResponsibilities[outerIndex].slice(innerIndex + 1));
    setJobResponsibilities(copiedJobResponsibilities);
  }

  // Commit changes and update CV Application
  function handleSendData() {
    if (
      jobTitles.length != 0 &&
      companyNames.length != 0 &&
      jobLocations.length != 0 &&
      jobStartDates.length != 0 &&
      jobEndDates.length != 0 &&
      jobResponsibilities[0].length != 0
    ) {
      data({
        jobTitle: jobTitles,
        companyName: companyNames,
        companyLocation: jobLocations,
        jobStartDate: jobStartDates,
        jobEndDate: jobEndDates,
        jobResponsibilities: jobResponsibilities,
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
      <h2>Experience Form</h2>
      <h3>Current Experience</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {jobTitles.map((job, index) => {
          return (
            <div className="jobData" id={index} key={index}>
              <button onClick={() => handleJobDelete(index)}>Delete Job</button>
              <input placeholder="Job Title" value={job} onChange={(e) => handleJobTitleChange(e, index)} />
              <input placeholder="Company Name" value={companyNames[index]} onChange={(e) => handleCompanyNameChange(e, index)} />
              <input placeholder="Job Location" value={jobLocations[index]} onChange={(e) => handleJobLocationChange(e, index)} />
              <input type="date" placeholder="Job Start Date" value={jobStartDates[index]} onChange={(e) => handleJobStartDateChange(e, index)} />
              <input type="date" placeholder="Job End Date" value={jobEndDates[index]} onChange={(e) => handleJobEndDateChange(e, index)} />
              {jobResponsibilities[index].map((responsibility, idx) => {
                return (
                  <>
                    <div className="responsibilities">
                      <input placeholder="Job Responsibility" value={responsibility} onChange={(e) => handleJobResponsibilityChange(e, index, idx)} />
                      <button onClick={() => handleDeleteResponsibility(index, idx)}>Delete</button>
                    </div>
                  </>
                );
              })}
              <div className="responsibilities">
                <input placeholder="Responsibility" id="newResponsibility" onChange={handleNewResponsibility} />
                <button onClick={(e) => handleAddResponsibility(e)}>Add Responsibility</button>
              </div>
            </div>
          );
        })}
        <h3>Add Experience</h3>
        <p>Once the job is added you may add additional responsibilities</p>
        <input placeholder="Job Title" id="newJobTitle" onChange={handleNewJobTitle} />
        <input placeholder="Company Name" id="newCompanyName" onChange={handleNewCompanyName} />
        <input placeholder="Job Location" id="newJobLocation" onChange={handleNewJobLocation} />
        <input type="date" placeholder="Job Start Date" id="newJobStartDate" onChange={handleNewJobStartDate} />
        <input type="date" placeholder="Job End Date" id="newJobEndDate" onChange={handleNewJobEndDate} />
        <input placeholder="Job Responsibility" id="newJobResponsibility" onChange={handleNewResponsibility} />
        <button onClick={handleAddJob}>Add Job</button>
        <div>
          <div>
            <p>
              Submit Experience Form: <button onClick={handleSendData}>Submit</button>
            </p>
          </div>
        </div>
      </form>
    </>
  ) : (
    <>
      <h2>Experience Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          Edit Experience Form: <button onClick={handleSetSubmit}>Edit</button>
        </p>
      </form>
    </>
  );
}

export default ExperienceForm;
