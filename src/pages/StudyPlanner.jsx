import { useState } from "react";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";

function StudyPlanner() {
  const [activities, setActivities] = useState([]);
  const [formErrors, setFormErrors] = useState([]);

  function validateInput(input, invalidMsg) {
    if (input.value.trim() === "") {
      setFormErrors(prevList => [...prevList, invalidMsg]);
      return "";
    }
    else {
      return input.value.trim();
    }
  }

  function newActivity(event) {
    event.preventDefault();
    setFormErrors(() => []);

    const studyForm = document.querySelector("#study-form");
    const newActivity = validateInput(studyForm.elements["activity"], "The 'Activity' field cannot be blank.");
    const newCourse = validateInput(studyForm.elements["course"], "The 'Course' field cannot be blank.");

    if (newActivity === "" || newCourse === "") return;

    const json = {
      "activity": newActivity,
      "course": newCourse
    };

    setActivities(prevList => [...prevList, json]);
  }

  function removeActivity(indexToRemove) {
    const updatedActivities = activities.filter(
      (item, index) => index != indexToRemove
    );

    setActivities(() => updatedActivities);
  }

  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm onSubmit={newActivity} errors={formErrors}/></div>
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
              onRemove={() => removeActivity(index)}
            />
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default StudyPlanner;