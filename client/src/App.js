import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import LoginPage from './Components/Auth/LoginPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
