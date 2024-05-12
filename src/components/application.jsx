function Application({ data: { name, phoneNumber, email, linkedin, summary } }) {
  return (
    <>
      <h1>CV Application</h1>
      <h2>{name}</h2>
      <div>
        {phoneNumber}, {email}, {linkedin}
      </div>
      <h3>Summary</h3>
      {summary}
    </>
  );
}

function Education({ data: { school, city, state, graduation, degree, gpa } }) {
  return (
    <>
      <h3>Education</h3>
      <div>
        {school}, {city}, {state} <span>{graduation}</span>
        <br></br>
        {degree} | {gpa}
      </div>
    </>
  );
}

function Skills({ data: { skills } }) {
  return (
    <>
      <h3>Skills</h3>
      {skills.join(", ")}
    </>
  );
}

function Experience({ data: { jobTitle, companyName, jobResponsibilities } }) {
  return (
    <>
      <h3>Experience</h3>
      {jobTitle.map((job, idx) => {
        {
          return (
            <>
              <h4>
                {job}, {companyName[idx]}
              </h4>
              <ul>
                {jobResponsibilities[0].map((responsibility) => {
                  return <li key={responsibility}>{responsibility}</li>;
                })}
              </ul>
            </>
          );
        }
      })}
    </>
  );
}
export default Application;

export { Education, Skills, Experience };
