import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Foods from './components/Foods';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Foods} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
