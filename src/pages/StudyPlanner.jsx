import StudyForm from "../components/StudyForm";

function StudyPlanner() {
  return (
    <div className="page-body">
      <div className="box">
        <div className="box-item"><StudyForm /></div>
        <div className="box-item">Total number of Study Activities: 0</div>
      </div>
      <div className="box">There are no study activities currently</div>
    </div>
  );
}

export default StudyPlanner;