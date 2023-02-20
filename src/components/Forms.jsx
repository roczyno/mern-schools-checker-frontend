import { useState } from "react";

import "./schools.css";

const university = {
  computerScience: 24,
  informationTechnology: 19,
};

const Schools = () => {
  const [core1, setCore1] = useState("");
  const [grade1, setGrade1] = useState("");
  const [core2, setCore2] = useState("");
  const [grade2, setGrade2] = useState("");
  const [elective1, setElective1] = useState("");
  const [gradeE1, setGradeE1] = useState("");
  const [elective2, setElective2] = useState("");
  const [gradeE2, setGradeE2] = useState("");
  const [qualifiedPrograms, setQualifiedPrograms] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <>
        <form onSubmit={handleSubmit}>
          <p style={{ fontWeight: "bold" }}>
            Enter best six subjects and their grades into the boxes provided.
          </p>
          <br />
          <table style={{ padding: "15px" }} width="50%">
            <tbody>
              <tr>
                <td>
                  <select
                    name="core1"
                    id="core1"
                    value={core1}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setCore1(e.target.value)}
                  >
                    <option value="">Select 1st Core</option>
                    <option>Core Maths</option>
                  </select>
                </td>
                <td align="left">
                  <select
                    name="grade1"
                    id="grades"
                    onChange={(e) => setGrade1(e.target.value)}
                    value={grade1}
                    required
                    style={{ color: "#AA1111" }}
                  >
                    <option />
                    <option>A1</option>
                    <option>B2</option>
                    <option>B3</option>
                    <option>C4</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    name="core2"
                    id="core2"
                    value={core2}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setCore2(e.target.value)}
                  >
                    <option value="">Select 2nd Core</option>
                    <option>English</option>
                  </select>
                </td>
                <td align="left">
                  <select
                    name="grade2"
                    id="grades"
                    value={grade2}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setGrade2(e.target.value)}
                  >
                    <option />
                    <option>A1</option>
                    <option>B2</option>
                    <option>B3</option>
                    <option>C4</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <select
                    name="elective1"
                    id="elective1"
                    value={elective1}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setElective1(e.target.value)}
                  >
                    <option value="">Select 1st Elective</option>
                    <option>General Agriculture </option>
                    <option>Farm Management</option>
                    <option>Horticulture </option>
                    <option>Agric. Econs& Ext. </option>
                  </select>
                </td>
                <td align="left">
                  <select
                    name="elective1Grade"
                    id="grades"
                    value={gradeE1}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setGradeE1(e.target.value)}
                  >
                    <option />
                    <option>A1</option>
                    <option>B2</option>
                    <option>B3</option>
                    <option>C4</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <select
                    name="elective2"
                    id="elective2"
                    value={elective2}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setElective2(e.target.value)}
                  >
                    <option value="">Select 2nd Elective</option>
                    <option>General Agriculture </option>
                    <option>Farm Management</option>
                    <option>Horticulture </option>
                    <option>Agric. Econs& Ext. </option>
                  </select>
                </td>
                <td align="left">
                  <select
                    name="elective2Grade"
                    id="grades"
                    value={gradeE2}
                    required
                    style={{ color: "#AA1111" }}
                    onChange={(e) => setGradeE2(e.target.value)}
                  >
                    <option />
                    <option>A1</option>
                    <option>B2</option>
                    <option>B3</option>
                    <option>C4</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button id="submit" name="submit" type="submit">
            Calculate Your Aggregate/Cut-Off Point
          </button>
        </form>
      </>
    </div>
  );
};

export default Schools;
