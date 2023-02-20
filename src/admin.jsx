import React, { useState } from "react";

const AdmissionsSelector = () => {
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState({});
  const [qualifiedPrograms, setQualifiedPrograms] = useState([]);

  const university = {
    computerScience: 4,
    informationTechnology: 16,
  };

  const handleSubjectChange = (event) => {
    setSubjects([...subjects, event.target.value]);
  };

  const handleGradeChange = (subject, grade) => {
    setGrades({ ...grades, [subject]: grade });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert the grades to numerical values
    const numericalGrades = Object.entries(grades).reduce(
      (acc, [subject, grade]) => {
        switch (grade) {
          case "A":
            acc[subject] = 4;
            break;
          case "B":
            acc[subject] = 3;
            break;
          case "C":
            acc[subject] = 2;
            break;
          default:
            acc[subject] = 0;
            break;
        }
        return acc;
      },
      {}
    );

    // Calculate the total score
    const totalScore = Object.values(numericalGrades).reduce(
      (acc, grade) => acc + grade,
      0
    );

    // Determine the qualified programs
    const qualifiedPrograms = [];
    if (totalScore >= university.computerScience) {
      qualifiedPrograms.push("Computer Science");
    }
    if (totalScore >= university.informationTechnology) {
      qualifiedPrograms.push("Information Technology");
    }

    setQualifiedPrograms(qualifiedPrograms);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Select your subjects:</h3>
        <select onChange={handleSubjectChange}>
          <option value="">Select a subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          {/* More subjects */}
        </select>
        <br />
        <br />
        <h3>Select your grades:</h3>
        {subjects.map((subject) => (
          <div key={subject}>
            <label>{subject}:</label>
            <select
              onChange={(event) =>
                handleGradeChange(subject, event.target.value)
              }
            >
              <option value="">Select a grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              {/* More grades */}
            </select>
          </div>
        ))}

        <br />
        <br />
        <button type="submit">Submit</button>
        <h3>Qualified programs:</h3>
        <ul>
          {qualifiedPrograms.map((program) => (
            <li key={program}>{program}</li>
          ))}
        </ul>
      </form>
    </>
  );
};
export default AdmissionsSelector;
