const Results = ({ totalScore, qualifiedPrograms }) => (
  <div>
    <h2>Results</h2>
    Aggregate is: {totalScore}
    <br />
    Qualified Programs: {qualifiedPrograms.join(", ")}
  </div>
);

export default Results;
