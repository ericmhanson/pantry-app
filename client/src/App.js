import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import LoginRegisterPage from './Components/LoginRegisterPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={LoginRegisterPage} />
      </div>
    </Router>
  );
}

export default App;
