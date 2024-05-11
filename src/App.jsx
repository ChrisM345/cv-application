import Applicant from "./components/applicant";
import Application from "./components/application";
import { Education, Skills, Experience } from "./components/application";
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

  const [educationData, setEducationData] = useState("");
  const [skillsData, setSkillsData] = useState("");
  const [experienceData, setExperienceData] = useState("");

  return (
    <div className="container">
      <div className="form-fields">
        <h1>CV Application</h1>
        <Applicant data={setApplicantData} />
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
