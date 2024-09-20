import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VocabDictionary from './VocabDictionary';
import KanaChart from './KanaChart';
import Sentences from './Sentences';
import ExercisesPage from './ExercisesPage';
import FlashCards from './FlashCards';
import PageNotFound from './PageNotFound';
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
          <Route path="/sentences" exact component={Sentences}/>
          <Route path="/exercises" exact component={ExercisesPage}/>
          <Route path="/flashcards/:id" exact component={FlashCards}/>
          {/*<Route path="/flashcards" exact component={() => <FlashCard cardSetID={"1"}/>}/>*/}
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
