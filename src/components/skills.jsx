import { useState } from "react";

function SkillForm({ data }) {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  function handleSkillNameChange(e, index) {
    const clonedData = [...skills];
    console.log(clonedData[index]);

    // clonedData[index][e.target.name] = e.target.value;
    // setSkillName(e.target.value);
  }

  function handleNewSkillChange(e) {
    setSkillName(e.target.value);
  }

  function handleAddSkill() {
    setSkills([...skills, skillName]);
    document.getElementById("newSkill").value = "";
  }

  function handleSkillsChange(e, index) {
    console.log(e);
    console.log(index);
    let copiedSkills = [...skills];
    copiedSkills[index] = e.target.value;
    setSkills(copiedSkills);
  }

  function handleSetSubmit() {
    setShowSubmit(!showSubmit);
  }

  function handleSendData() {
    data({
      skills: skills,
    });
    handleSetSubmit();
  }

  return showSubmit ? (
    <>
      <h2>Skills Form</h2>
      {skills}
      <form onSubmit={(e) => e.preventDefault()}>
        {skills.map((skill, index) => {
          return (
            <>
              <input key={index} placeholder="Skill" value={skill} onChange={(e) => handleSkillsChange(e, index)} />
              <button
                onClick={() => {
                  setSkills(skills.slice(0, index).concat(skills.slice(index + 1)));
                }}
              >
                Delete
              </button>
            </>
          );
        })}
        <input id="newSkill" placeholder="Skill" onChange={handleNewSkillChange} />
        <button onClick={handleAddSkill}>Add Skill</button>
        <button onClick={handleSendData}>Submit</button>
      </form>
    </>
  ) : (
    <>
      <h2>Skills Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={handleSetSubmit}>Edit</button>
      </form>
    </>
  );
}

export default SkillForm;
