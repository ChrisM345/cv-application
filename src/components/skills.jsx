import { useState } from "react";
import "../styles/forms.css";

function SkillForm({ data }) {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  function handleNewSkillChange(e) {
    setSkillName(e.target.value);
  }

  function handleAddSkill() {
    setSkills([...skills, skillName]);
    // Set the value to "" for the new input that appear
    document.getElementById("newSkill").value = "";
  }

  // skills is an array so we need to keep track of the index
  function handleSkillsChange(e, index) {
    let copiedSkills = [...skills];
    copiedSkills[index] = e.target.value;
    setSkills(copiedSkills);
  }

  // Commit changes and update CV Application
  function handleSendData() {
    if (skills.length != 0) {
      data({
        skills: skills,
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
      <h2>Skills Form</h2>
      Current Skills: {skills.join(", ")}
      <form onSubmit={(e) => e.preventDefault()}>
        {skills.map((skill, index) => {
          return (
            <>
              <div className="skills-form">
                <input key={index} placeholder="Skill" value={skill} onChange={(e) => handleSkillsChange(e, index)} />
                <button
                  onClick={() => {
                    setSkills(skills.slice(0, index).concat(skills.slice(index + 1)));
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
        <input id="newSkill" placeholder="Skill" onChange={handleNewSkillChange} />
        <button onClick={handleAddSkill}>Add Skill</button>
        <div>
          <p>
            Submit Skills Form: <button onClick={handleSendData}>Submit</button>
          </p>
        </div>
      </form>
    </>
  ) : (
    <>
      <h2>Skills Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          Edit Skills Form: <button onClick={handleSetSubmit}>Edit</button>
        </p>
      </form>
    </>
  );
}

export default SkillForm;
