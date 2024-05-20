const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Basic Info for the CV Application
function Application({ data: { name, phoneNumber, email, linkedin, summary } }) {
  return (
    <>
      <div className="basic-info">
        <h2>{name}</h2>
        <div>
          {phoneNumber}, {email}, {linkedin}
        </div>
      </div>
      <h3 className="h3-cv-application">Summary</h3>
      {summary}
    </>
  );
}

// Education Info for the CV Application
function Education({ data: { school, city, state, graduation, degree, gpa } }) {
  return (
    <>
      <div className="education-info">
        <h3 className="h3-cv-application">Education</h3>
        <div>
          <b>
            {school}, {city}, {state} | Graduated <span>{graduation}</span>
          </b>
          <br></br>
          {degree} | GPA {gpa}
        </div>
      </div>
    </>
  );
}

// Skills Info for the CV Application
function Skills({ data: { skills } }) {
  return (
    <>
      <div className="skills-info">
        <h3 className="h3-cv-application">Skills</h3>
        {skills.join(", ")}
      </div>
    </>
  );
}

// Experience Info for the CV Application
function Experience({ data: { jobTitle, companyName, companyLocation, jobStartDate, jobEndDate, jobResponsibilities } }) {
  return (
    <>
      <div className="experience-info">
        <h3 className="h3-cv-application">Experience</h3>
        {jobTitle.map((job, idx) => {
          {
            return (
              <>
                <h4 className="h4-cv-application">
                  {job}, {companyName[idx]} | {companyLocation[idx]} | {months[parseInt(jobStartDate[idx].split("-")[1])]}{" "}
                  {jobStartDate[idx].split("-")[0]}-{months[parseInt(jobEndDate[idx].split("-")[1])]} {jobEndDate[idx].split("-")[0]}
                </h4>
                <ul className="ul-li-jobs">
                  {jobResponsibilities[idx].map((responsibility) => {
                    return (
                      <li className="ul-li-jobs" key={responsibility}>
                        {responsibility}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
export default Application;

export { Education, Skills, Experience };
