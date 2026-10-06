function StudyItem(props) {
  return (
    <li className="study-item">
      <div>
        <h3>{props.activity}</h3>
        <p>{props.class}</p>
      </div>
      <div>
        <button className="btn-remove" onClick={props.onRemove}>Remove</button>
      </div>
    </li>
  );
}

export default StudyItem;