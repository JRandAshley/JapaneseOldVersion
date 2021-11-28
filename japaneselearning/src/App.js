import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VocabDictionary from './VocabDictionary';
import KanaChart from './KanaChart';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/vocab" exact component={VocabDictionary}/>
          <Route path="/kana" exact component={KanaChart}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
