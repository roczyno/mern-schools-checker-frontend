import { useState } from "react";
import Results from "../../components/results/Results";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./ucc.css";
import { Link } from "react-router-dom";
const university = [
  {
    name: "Computer Science",
    cutOffPoints: 6,
  },
  {
    name: "Information Technology",
    cutOffPoints: 4,
  },
  {
    name: "Forensic Science",
    cutOffPoints: 20,
  },
  {
    name: "Social Science",
    cutOffPoints: 14,
  },
];

const Ucc = () => {
  const [core1, setCore1] = useState("");
  const [grade1, setGrade1] = useState("");
  const [core2, setCore2] = useState("");
  const [grade2, setGrade2] = useState("");
  const [core3, setCore3] = useState("");
  const [grade3, setGrade3] = useState("");
  const [elective1, setElective1] = useState("");
  const [gradeE1, setGradeE1] = useState("");
  const [elective2, setElective2] = useState("");
  const [gradeE2, setGradeE2] = useState("");
  const [elective3, setElective3] = useState("");
  const [gradeE3, setGradeE3] = useState("");

  const [qualifiedPrograms, setQualifiedPrograms] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const core1Points = gradeToPoints(grade1);
    const core2Points = gradeToPoints(grade2);
    const core3Points = gradeToPoints(grade3);
    const elective1Points = gradeToPoints(gradeE1);
    const elective2Points = gradeToPoints(gradeE2);
    const elective3Points = gradeToPoints(gradeE3);
    const totalPoints =
      core1Points +
      core2Points +
      core3Points +
      elective1Points +
      elective2Points +
      elective3Points;

    setTotalScore(totalPoints);
    const qualifiedPrograms = findQualifiedPrograms(totalPoints);
    setQualifiedPrograms(qualifiedPrograms);
  };
  const gradeToPoints = (grade) => {
    switch (grade) {
      case "A1":
        return 1;
      case "B2":
        return 2;
      case "B3":
        return 3;
      case "C4":
        return 4;
      case "C5":
        return 5;
      case "C6":
        return 6;
      case "D7":
        return 7;
      case "E8":
        return 8;
      case "F9":
        return 9;
      default:
        return 0;
    }
  };

  const findQualifiedPrograms = (totalPoints) => {
    const programs = university.filter(
      (program) => totalPoints <= program.cutOffPoints
    );
    return programs.map((program) => program.name);
  };
  return (
    <div className="ucc">
      <Link to="/">
        <ArrowBackIcon
          style={{ color: "lightgray", fontSize: "30px", cursor: "pointer" }}
        />
      </Link>
      <div className="container">
        <>
          {totalScore ? (
            <Results
              totalScore={totalScore}
              qualifiedPrograms={qualifiedPrograms}
            />
          ) : (
            <form onSubmit={handleSubmit}>
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                Enter best six subjects and their grades into the boxes
                provided.
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
                        onChange={(e) => setCore1(e.target.value)}
                      >
                        <option value="">Select 1st Core</option>
                        <option value="core maths">Core Maths</option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="grade1"
                        id="grades"
                        value={grade1}
                        required
                        onChange={(e) => setGrade1(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
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
                        onChange={(e) => setCore2(e.target.value)}
                      >
                        <option value="">Select 2nd Core</option>
                        <option value="english">English</option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="grade2"
                        id="grades"
                        value={grade2}
                        required
                        onChange={(e) => setGrade2(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        name="core1"
                        id="core1"
                        value={core3}
                        required
                        onChange={(e) => setCore3(e.target.value)}
                      >
                        <option value="">Select 3rd Core</option>
                        <option value="social studies">Social Studies</option>
                        <option value="integrated science">
                          Integrated Science
                        </option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="grade3"
                        id="grades"
                        value={grade3}
                        required
                        onChange={(e) => setGrade3(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
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
                        onChange={(e) => setElective1(e.target.value)}
                      >
                        <option value="">Select 1st Elective</option>
                        <option value="general agriculture">
                          General Agriculture
                        </option>
                        <option value="farm management">Farm Management</option>
                        <option value="horticulture">Horticulture </option>
                        <option value="agric. econs& ext">
                          Agric. Econs& Ext.
                        </option>
                        <option value="animal husbandry">
                          Animal Husbandry
                        </option>
                        <option value="business management">
                          Business Management.
                        </option>
                        <option value="accounting">Accounting </option>
                        <option value="principles of costing">
                          Principles of Costing
                        </option>
                        <option value="clerical & office duties">
                          Clerical & Office Duties
                        </option>
                        <option value="Typewriting (40 wpm)">
                          Typewriting (40 wpm)
                        </option>
                        <option value="Technical Drawing & Eng. Sci.">
                          Technical Drawing & Eng. Sci.
                        </option>
                        <option value="Building Construction">
                          Building Construction
                        </option>
                        <option value="Woodwork">Woodwork</option>
                        <option value="Metalwork"> Metalwork </option>
                        <option value="Applied electricity">
                          Applied electricity
                        </option>
                        <option value="Electronics">Electronics </option>
                        <option value="Auto Mechanics">Auto Mechanics</option>
                        <option value="Management in Living">
                          Management in Living
                        </option>
                        <option value="Clothing & Textiles">
                          Clothing & Textiles
                        </option>
                        <option value="Food & Nutrition">
                          Food & Nutrition
                        </option>
                        <option value="General Knowledge in Art">
                          General Knowledge in Art
                        </option>
                        <option value="Basketry">Basketry</option>
                        <option value="Leatherwork">Leatherwork </option>
                        <option value="Picture Making">Picture Making </option>
                        <option value="Ceramics">Ceramics </option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Bead Making">Bead Making</option>
                        <option value="Literature in English">
                          Literature in English
                        </option>
                        <option value="French">French</option>
                        <option value="Danabe">Danabe</option>
                        <option value="Dagaare">Dagaare</option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Ewe ">Ewe </option>
                        <option value="Fante">Fante </option>
                        <option value="GA ">GA </option>
                        <option value="Nzema">Nzema</option>
                        <option value="Twi (Akwapim) ">Twi (Akwapim) </option>
                        <option value="Twi (Asante)">Twi (Asante) </option>
                        <option value="">History </option>
                        <option value="Economics">Economics </option>
                        <option value="Geography">Geography</option>
                        <option value="Government">Government</option>
                        <option value="Christian Rel. Studies">
                          Christian Rel. Studies
                        </option>
                        <option value="Islamic Rel. Studies">
                          Islamic Rel. Studies
                        </option>
                        <option value="Music">Music </option>
                        <option value="Biology">Biology </option>
                        <option value="Physics">Physics </option>
                        <option value="Chemistry">Chemistry </option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="elective1Grade"
                        id="grades"
                        value={gradeE1}
                        required
                        onChange={(e) => setGradeE1(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
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
                        onChange={(e) => setElective2(e.target.value)}
                      >
                        <option value="">Select 2nd Elective</option>
                        <option value="general agriculture">
                          General Agriculture
                        </option>
                        <option value="farm management">Farm Management</option>
                        <option value="horticulture">Horticulture </option>
                        <option value="agric. econs& ext">
                          Agric. Econs& Ext.
                        </option>
                        <option value="animal husbandry">
                          Animal Husbandry
                        </option>
                        <option value="business management">
                          Business Management.
                        </option>
                        <option value="accounting">Accounting </option>
                        <option value="principles of costing">
                          Principles of Costing
                        </option>
                        <option value="clerical & office duties">
                          Clerical & Office Duties
                        </option>
                        <option value="Typewriting (40 wpm)">
                          Typewriting (40 wpm)
                        </option>
                        <option value="Technical Drawing & Eng. Sci.">
                          Technical Drawing & Eng. Sci.
                        </option>
                        <option value="Building Construction">
                          Building Construction
                        </option>
                        <option value="Woodwork">Woodwork</option>
                        <option value="Metalwork"> Metalwork </option>
                        <option value="Applied electricity">
                          Applied electricity
                        </option>
                        <option value="Electronics">Electronics </option>
                        <option value="Auto Mechanics">Auto Mechanics</option>
                        <option value="Management in Living">
                          Management in Living
                        </option>
                        <option value="Clothing & Textiles">
                          Clothing & Textiles
                        </option>
                        <option value="Food & Nutrition">
                          Food & Nutrition
                        </option>
                        <option value="General Knowledge in Art">
                          General Knowledge in Art
                        </option>
                        <option value="Basketry">Basketry</option>
                        <option value="Leatherwork">Leatherwork </option>
                        <option value="Picture Making">Picture Making </option>
                        <option value="Ceramics">Ceramics </option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Bead Making">Bead Making</option>
                        <option value="Literature in English">
                          Literature in English
                        </option>
                        <option value="French">French</option>
                        <option value="Danabe">Danabe</option>
                        <option value="Dagaare">Dagaare</option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Ewe ">Ewe </option>
                        <option value="Fante">Fante </option>
                        <option value="GA ">GA </option>
                        <option value="Nzema">Nzema</option>
                        <option value="Twi (Akwapim) ">Twi (Akwapim) </option>
                        <option value="Twi (Asante)">Twi (Asante) </option>
                        <option value="">History </option>
                        <option value="Economics">Economics </option>
                        <option value="Geography">Geography</option>
                        <option value="Government">Government</option>
                        <option value="Christian Rel. Studies">
                          Christian Rel. Studies
                        </option>
                        <option value="Islamic Rel. Studies">
                          Islamic Rel. Studies
                        </option>
                        <option value="Music">Music </option>
                        <option value="Biology">Biology </option>
                        <option value="Physics">Physics </option>
                        <option value="Chemistry">Chemistry </option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="elective2Grade"
                        id="grades"
                        value={gradeE2}
                        required
                        onChange={(e) => setGradeE2(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <select
                        name="elective3"
                        id="elective3"
                        value={elective3}
                        required
                        onChange={(e) => setElective3(e.target.value)}
                      >
                        <option value="">Select 3rd Elective</option>
                        <option value="general agriculture">
                          General Agriculture
                        </option>
                        <option value="farm management">Farm Management</option>
                        <option value="horticulture">Horticulture </option>
                        <option value="agric. econs& ext">
                          Agric. Econs& Ext.
                        </option>
                        <option value="animal husbandry">
                          Animal Husbandry
                        </option>
                        <option value="business management">
                          Business Management.
                        </option>
                        <option value="accounting">Accounting </option>
                        <option value="principles of costing">
                          Principles of Costing
                        </option>
                        <option value="clerical & office duties">
                          Clerical & Office Duties
                        </option>
                        <option value="Typewriting (40 wpm)">
                          Typewriting (40 wpm)
                        </option>
                        <option value="Technical Drawing & Eng. Sci.">
                          Technical Drawing & Eng. Sci.
                        </option>
                        <option value="Building Construction">
                          Building Construction
                        </option>
                        <option value="Woodwork">Woodwork</option>
                        <option value="Metalwork"> Metalwork </option>
                        <option value="Applied electricity">
                          Applied electricity
                        </option>
                        <option value="Electronics">Electronics </option>
                        <option value="Auto Mechanics">Auto Mechanics</option>
                        <option value="Management in Living">
                          Management in Living
                        </option>
                        <option value="Clothing & Textiles">
                          Clothing & Textiles
                        </option>
                        <option value="Food & Nutrition">
                          Food & Nutrition
                        </option>
                        <option value="General Knowledge in Art">
                          General Knowledge in Art
                        </option>
                        <option value="Basketry">Basketry</option>
                        <option value="Leatherwork">Leatherwork </option>
                        <option value="Picture Making">Picture Making </option>
                        <option value="Ceramics">Ceramics </option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Bead Making">Bead Making</option>
                        <option value="Literature in English">
                          Literature in English
                        </option>
                        <option value="French">French</option>
                        <option value="Danabe">Danabe</option>
                        <option value="Dagaare">Dagaare</option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Ewe ">Ewe </option>
                        <option value="Fante">Fante </option>
                        <option value="GA ">GA </option>
                        <option value="Nzema">Nzema</option>
                        <option value="Twi (Akwapim) ">Twi (Akwapim) </option>
                        <option value="Twi (Asante)">Twi (Asante) </option>
                        <option value="">History </option>
                        <option value="Economics">Economics </option>
                        <option value="Geography">Geography</option>
                        <option value="Government">Government</option>
                        <option value="Christian Rel. Studies">
                          Christian Rel. Studies
                        </option>
                        <option value="Islamic Rel. Studies">
                          Islamic Rel. Studies
                        </option>
                        <option value="Music">Music </option>
                        <option value="Biology">Biology </option>
                        <option value="Physics">Physics </option>
                        <option value="Chemistry">Chemistry </option>
                        <option value="Dagbani">Dagbani</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </td>
                    <td align="left">
                      <select
                        name="elective3Grade"
                        id="grades"
                        value={gradeE3}
                        required
                        onChange={(e) => setGradeE3(e.target.value)}
                      >
                        <option />
                        <option value="A1">A1</option>
                        <option value="B2">B2</option>
                        <option value="B3">B3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="D7">D7</option>
                        <option value="E8">E8</option>
                        <option value="F9">F9</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit">
                Calculate Your Aggregate/Cut-Off Point
              </button>
            </form>
          )}
        </>
      </div>
    </div>
  );
};

export default Ucc;
