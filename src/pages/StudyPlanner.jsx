import { useState } from "react";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";

function StudyPlanner() {
  const [activities, setActivities] = useState([]);

  function handleNewActivity(event) {
    event.preventDefault();
    const studyForm = document.querySelector("#study-form");
    const newActivity = studyForm.elements["activity"].value;
    const newCourse = studyForm.elements["course"].value;
    const json = {
      "activity": newActivity,
      "course": newCourse
    };

    setActivities([...activities, json]);
  }

  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm onSubmit={handleNewActivity}/></div>
        <div className="box-item">Total number of Study Activities: 0</div>
      </div>
      <div className="box-item">
        {activities.length === 0 ? (
          <p>There are currently no study activies to do.</p>  
        ) : (
          <ul className="study-list">
          {activities.map((item, index) => (
            <StudyItem
              key={index}
              activity={item.activity}
              course={item.course}
            />
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default StudyPlanner;