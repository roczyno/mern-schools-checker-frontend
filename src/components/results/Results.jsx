const Results = ({ totalScore, qualifiedPrograms }) => (
  <div style={{ color: "lightgray" }}>
    <h2>Results</h2>
    Aggregate is: {totalScore}
    <br />
    Qualified Programs: {qualifiedPrograms.join(", ")}
  </div>
);

export default Results;
