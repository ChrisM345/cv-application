import Applicant from "./components/applicant";
import Application from "./components/application";
import { Education, Skills, Experience } from "./components/application";
import EducationForm from "./components/education";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [applicantData, setApplicantData] = useState({
    name: "Your Name",
    phoneNumber: "000.000.0000",
    email: "example@email.com",
    linkedin: "linkedin.com/in/yourname",
    summary: "Example summary",
  });

  const [educationData, setEducationData] = useState({
    school: "School Name",
    city: "City",
    state: "State",
    graduation: "Graduation Month and Year",
    degree: "Degree",
    gpa: "GPA",
  });

  const [skillsData, setSkillsData] = useState({
    skills: ["test1", "test2", "test3"],
  });

  const [experienceData, setExperienceData] = useState({
    jobTitle: ["jobtitle1", "jobtitle2"],
    companyName: ["company1", "company2"],
    jobResponsibilities: [
      ["Managed a team", "Trained others"],
      ["Worked", "Led a team"],
    ],
  });

  return (
    <div className="container">
      <div className="form-fields">
        <h1>CV Application</h1>
        <Applicant data={setApplicantData} />
        <EducationForm data={setEducationData} />
      </div>
      <div className="cv-application">
        <Application data={applicantData} />
        <Education data={educationData} />
        <Skills data={skillsData} />
        <Experience data={experienceData} />
      </div>
    </div>
  );
}

export default App;
