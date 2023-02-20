import React, { useState } from "react";

const Admission = () => {
  const [firstSubject, setFirstSubject] = useState("");
  const [firstGrade, setFirstGrade] = useState("");
  const [secondSubject, setSecondSubject] = useState("");
  const [secondGrade, setSecondGrade] = useState("");
  const [total, setTotal] = useState(0);
  const [qualifiedPrograms, setQualifiedPrograms] = useState([]);

  const university = {
    computerScience: {
      name: "Computer Science",
      cutOffPoints: 3,
    },
    informationTechnology: {
      name: "Information Technology",
      cutOffPoints: 4,
    },
    forensicScience: {
      name: "Forensic Science",
      cutOffPoints: 20,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstSubjectPoints = gradeToPoints(firstGrade);
    const secondSubjectPoints = gradeToPoints(secondGrade);
    setTotal(firstSubjectPoints + secondSubjectPoints);
    setQualifiedPrograms(findQualifiedPrograms(total));
  };

  const gradeToPoints = (grade) => {
    switch (grade) {
      case "A":
        return 4;
      case "B":
        return 3;
      case "C":
        return 2;
      default:
        return 0;
    }
  };

  const findQualifiedPrograms = (totalPoints) => {
    const programs = [];
    Object.values(university).forEach((program) => {
      if (totalPoints <= program.cutOffPoints) {
        programs.push(program.name);
      }
    });
    return programs;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={firstSubject}
          onChange={(e) => setFirstSubject(e.target.value)}
        >
          <option>Select 1st subject</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="social studies">Social Studies</option>
        </select>
        <select
          value={firstGrade}
          onChange={(e) => setFirstGrade(e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <select
          value={secondSubject}
          onChange={(e) => setSecondSubject(e.target.value)}
        >
          <option value="">Select 2nd Core</option>
          <option value="english">english</option>
          <option value="science">science</option>
        </select>
        <select
          value={secondGrade}
          onChange={(e) => setSecondGrade(e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <button type="submit">submit</button>
        Qualified Programs: {qualifiedPrograms.join(", ")}
      </form>
    </div>
  );
};

export default Admission;
