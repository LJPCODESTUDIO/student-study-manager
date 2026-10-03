import StudyForm from "../components/StudyForm";

function StudyPlanner() {
  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm /></div>
        <div className="box-item">Total number of Study Activities: 0</div>
      </div>
      <div className="box-item">There are currently no study activities</div>
    </div>
  );
}

export default StudyPlanner;