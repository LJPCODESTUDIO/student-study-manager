import { useState } from "react";

function StudyForm(props) {
  const [activity, setActivity] = useState("");
  const [course, setCourse] = useState("");

  return (
    <form id="study-form" onSubmit={props.onSubmit}>
      <h2>Add a New Activity</h2>
      <ul className="errors">
        {props.errors.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <label htmlFor="activity">Activity: </label>
      <input type="text" id="activity" placeholder="Enter the activity here" value={activity} required onChange={(event) => setActivity(event.target.value)} />
      <br />
      <label htmlFor="course">Course: </label>
      <input type="text" id="course" placeholder="What course is it for?" value={course} required onChange={(event) => setCourse(event.target.value)} />
      <br /><br />
      <input className="btn" type="submit" value="Submit" />
    </form>
  );
}

export default StudyForm;