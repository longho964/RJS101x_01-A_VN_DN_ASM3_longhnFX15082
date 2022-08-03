import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./StaffListApp/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

function App() {
  const store = configureStore();
  
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
