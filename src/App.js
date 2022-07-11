import "./App.css";
import StaffInfor from "./StaffListApp/StaffInfor";
import StaffList from "./StaffListApp/StaffListComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <StaffList />
        <StaffInfor />
      </div>
    </Router>
  );
}

export default App;
