function StudyForm(props) {
  return (
    <form id="study-form" onSubmit={props.onSubmit}>
      <h2>Add a New Activity</h2>
      <ul className="errors">
        {props.errors.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <label htmlFor="activity">Activity: </label>
      <input type="text" id="activity" placeholder="Enter the activity here" value={props.activity} required onChange={props.setActivity} />
      <br />
      <label htmlFor="course">Course: </label>
      <input type="text" id="course" placeholder="What course is it for?" value={props.course} required onChange={props.setCourse} />
      <br /><br />
      <input className="btn" type="submit" value="Submit" />
    </form>
  );
}

export default StudyForm;