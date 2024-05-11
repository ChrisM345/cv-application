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

function Education() {
  return (
    <>
      <h3>Education</h3>
    </>
  );
}

function Skills() {
  return (
    <>
      <h3>Skills</h3>
    </>
  );
}

function Experience() {
  return (
    <>
      <h3>Experience</h3>
    </>
  );
}
export default Application;

export { Education, Skills, Experience };
