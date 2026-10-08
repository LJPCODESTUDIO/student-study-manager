import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";
import CompleteItem from "../components/CompleteItem";



function StudyPlanner() {
  const [activities, setActivities] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [activity, setActivity] = useState("");
  const [course, setCourse] = useState("");

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
    const newActivity = validateInput(studyForm.elements["activity"], "The 'Activity' field cannot be blank.", setFormErrors);
    const newCourse = validateInput(studyForm.elements["course"], "The 'Course' field cannot be blank.", setFormErrors);

    if (newActivity === "" || newCourse === "") return;

    const activity = {
      activity: newActivity,
      course: newCourse
    };
    
    setActivity("");
    setCourse("");
    setActivities(prevList => [...prevList, activity]);
  }

  function removeActivity(indexToRemove) {
    const updatedActivities = activities.filter(
      (item, index) => index != indexToRemove
    );

    setActivities(() => updatedActivities);
  }

  function removeComplete(indexToRemove) {
    const updatedCompleted = completed.filter(
      (item, index) => index != indexToRemove
    );

    setCompleted(() => updatedCompleted);
  }

  function markComplete(indexToComplete)
  {
    const completedActivity = activities.filter(
      (item, index) => index == indexToComplete
    );

    const updatedActivities = activities.filter(
      (item, index) => index != indexToComplete
    );

    setCompleted(prevList => [...prevList, completedActivity[0]]);
    setActivities(() => updatedActivities);
  }

  function markIncomplete(indexToComplete)
  {
    const incompleteActivity = completed.filter(
      (item, index) => index == indexToComplete
    );

    const updatedActivities = completed.filter(
      (item, index) => index != indexToComplete
    );

    setCompleted(() => updatedActivities);
    setActivities(prevList => [...prevList, incompleteActivity[0]]);
  }

  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm
          onSubmit={newActivity}
          errors={formErrors}
          activity={activity} setActivity={(event) => setActivity(event.target.value)}
          course={course} setCourse={(event) => setCourse(event.target.value)}
        /></div>
        <div className="box-item">
          {(activities.length === 0) && (completed.length === 0) ? (
            <div className="progress-chart">
              <PieChart
                data={[
                  {title: "No activities yet", value: 1, color: "#00b32d"}
                ]}
                label={({dataEntry}) => `${dataEntry.title}`}
                labelStyle={{
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}
                labelPosition={0}
              />
            </div>
          ) : (
            <div className="progress-chart">
              <PieChart
                data={[
                  {title: "Complete", value: completed.length, color: "#63ffff"},
                  {title: "Incomplete", value: activities.length, color: "#db3131"},
                ]}
                startAngle={270}
                lengthAngle={-360}
                label={({dataEntry}) => `${dataEntry.title[0]}: ${dataEntry.value}`}
                labelStyle={{
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}
              />
            </div>
          )}
          
        </div>
      </div>
      <div className="box-item">
        <h2>Incomplete Activities</h2>
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
              onEdit={() => markComplete(index)}
            />
          ))}
        </ul>
        )}
      </div>
      <div className="box-item">
        <h2>Completed Activities</h2>
        {completed.length === 0 ? (
          <p>There are currently no completed activities.</p>  
        ) : (
          <ul className="study-list">
          {completed.map((item, index) => (
            <CompleteItem
              key={index}
              activity={item.activity}
              course={item.course}
              onEdit={() => markIncomplete(index)}
              onRemove={() => removeComplete(index)}
            />
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default StudyPlanner;