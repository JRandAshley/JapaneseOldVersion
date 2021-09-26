import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VocabDictionary from './VocabDictionary';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/vocab" exact component={VocabDictionary}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="App">
      <h1>Japanese Learning</h1>
      <p1>I'm developing this website as a Japanese learner to develop exersises and resourse that will aid me in my learning.</p1>
  </div>
)

export default App;
