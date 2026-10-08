function CompleteItem(props) {
  return (
    <li className="complete-item">
      <div>
        <h3>{props.activity}</h3>
        <p>{props.course}</p>
      </div>
      <div className="btn-div">
        <button className="btn-remove" onClick={props.onRemove}>Remove</button>
        <button className="btn-edit" onClick={props.onEdit}>Mark Incomplete</button>
      </div>
    </li>
  );
}

export default CompleteItem;