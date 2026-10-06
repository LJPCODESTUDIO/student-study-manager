import { useState } from "react";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";

function StudyPlanner() {
  const [activities, setActivities] = useState([
    {
      "activity": "Complete JavaScript Assignment 1",
      "class": 'JavaScript Fullstack'
    }
  ]);

  return (
    <div className="page-body">
      <div className="h-box">
        <div className="box-item"><StudyForm /></div>
        <div className="box-item">Total number of Study Activities: 0</div>
      </div>
      <div className="box-item">
        <ul>
          {activities.map((item, index) => (
            <StudyItem
              key={index}
              activity={item.activity}
              class={item.class}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudyPlanner;