import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";
import CompleteItem from "../components/CompleteItem";



function StudyPlanner() {
  const [activities, setActivities] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [formErrors, setFormErrors] = useState([]);


  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm onSubmit={(event) => newActivity(event, setFormErrors, setActivities)} errors={formErrors}/></div>
        <div className="box-item">
          <PieChart className="progress-chart"
            data={[
              {title: "Complete", value: completed.length, color: "#63ffff"},
              {title: "Incomplete", value: activities.length, color: "#db3131"},
            ]}
            startAngle={270}
            lengthAngle={-360}
          />
        </div>
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
              onRemove={() => removeActivity(index, activities, setActivities)}
              onEdit={() => markComplete(index, activities, setCompleted, setActivities)}
            />
          ))}
        </ul>
        )}
      </div>
      <div className="box-item">
        {completed.length === 0 ? (
          <p>There are currently no completed activities.</p>  
        ) : (
          <ul className="study-list">
          {completed.map((item, index) => (
            <CompleteItem
              key={index}
              activity={item.activity}
              course={item.course}
              onEdit={() => markIncomplete(index, completed, setCompleted, setActivities)}
            />
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

  function validateInput(input, invalidMsg, setFormErrors) {
    if (input.value.trim() === "") {
      setFormErrors(prevList => [...prevList, invalidMsg]);
      return "";
    }
    else {
      return input.value.trim();
    }
  }

  function newActivity(event, setFormErrors, setActivities) {
    event.preventDefault();
    setFormErrors(() => []);

    const studyForm = document.querySelector("#study-form");
    const newActivity = validateInput(studyForm.elements["activity"], "The 'Activity' field cannot be blank.", setFormErrors);
    const newCourse = validateInput(studyForm.elements["course"], "The 'Course' field cannot be blank.", setFormErrors);

    if (newActivity === "" || newCourse === "") return;

    const json = {
      "activity": newActivity,
      "course": newCourse
    };
    
    setActivities(prevList => [...prevList, json]);
  }

  function removeActivity(indexToRemove, activities, setActivities) {
    const updatedActivities = activities.filter(
      (item, index) => index != indexToRemove
    );

    setActivities(() => updatedActivities);
  }

  function markComplete(indexToComplete, activities, setCompleted, setActivities)
  {
    const completedActivity = activities.filter(
      (item, index) => index == indexToComplete
    );

    const updatedActivities = activities.filter(
      (item, index) => index != indexToComplete
    );

    setCompleted(prevList => [...prevList, completedActivity]);
    setActivities(() => updatedActivities);
  }

  function markIncomplete(indexToComplete, completed, setCompleted, setActivities)
  {
    const incompleteActivity = completed.filter(
      (item, index) => index == indexToComplete
    );

    const updatedActivities = completed.filter(
      (item, index) => index != indexToComplete
    );

    setCompleted(() => updatedActivities);
    setActivities(prevList => [...prevList, incompleteActivity]);
  }

export default StudyPlanner;