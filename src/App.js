import './App.css';
import {GlobalStyle} from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from './pages/Logo/Logo'
import Treatments from './pages/Treatments/Treatments'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch >
        <Route path="/" exact component={Logo} />
        <Route path="/tratamientos" exact component={Treatments} />
      </Switch>
    </Router>
  );
}

export default App;
