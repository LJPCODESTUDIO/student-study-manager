import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Your Study Manager!</h1>
      <p>This application helps you keep track of, and manage your study activies.</p>
      <div className="feature-box">
        <h3>With this application you can:</h3>
        <ul>
          <li>Add/Remove study activies</li>
          <li>View all study activies</li>
          <li>Mark completed activies</li>
          <li>See the total number of activities</li>
        </ul>
      </div>
      <Link to="/StudyPlanner">Continue to Study Planner &gt;&gt;</Link>
    </div>
  );
}

export default Home;