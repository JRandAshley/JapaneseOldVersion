import './App.css';
import ListOfDefinitions from './ListOfDefinitions';

function VocabCard(props) {
  return (
    <div className="VocabCard">
      <div className="flexbox-row">
        <h3>{props.kanji}</h3>
        <div className="flexbox-column">
          <p>{props.characters}</p>
          <p>{props.romaji}</p>
        </div>
      </div>
      <p>{props.part}</p>{/*noun, verb, adjective, adverb, pronoun, preposition, conjunction, interjection, numeral, article, or determiner*/}
      <hr/>
      <p>Definitions</p>
      <ListOfDefinitions definitions={props.meaning}/>
      <hr/>
      <p>Example Sentences</p>
      <p>COMING SOON</p>
    </div>
  );
}

export default VocabCard;
