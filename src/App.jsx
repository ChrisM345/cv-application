import Applicant from "./components/applicant";
import Application from "./components/application";
import { Education, Skills, Experience } from "./components/application";
import EducationForm from "./components/education";
import SkillForm from "./components/skills";
import ExperienceForm from "./components/experience";
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
    skills: ["skill1"],
  });

  const [experienceData, setExperienceData] = useState({
    jobTitle: ["jobtitle1"],
    companyName: ["company1"],
    companyLocation: ["location1"],
    jobStartDate: ["jobStartDate"],
    jobEndDate: ["jobEndDate"],
    jobResponsibilities: [["responsibility1", "responsibility2"]],
  });

  return (
    <div className="container">
      <div className="form-fields">
        <h1>CV Application</h1>
        <p>All fields are required. Submit will not work unless they are filled out</p>
        <Applicant data={setApplicantData} />
        <EducationForm data={setEducationData} />
        <SkillForm data={setSkillsData} />
        <ExperienceForm data={setExperienceData} />
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
