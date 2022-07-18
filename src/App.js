import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./StaffListApp/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
