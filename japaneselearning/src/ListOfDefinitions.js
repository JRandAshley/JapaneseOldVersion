import './App.css';

function ListOfDefinitions(props) {
  return (
    <div className="ListOfDefinitions">
      <ul>
      {Object.values(props.definitions).map(definition =>(
        <li>{definition}</li>
        ))}
        </ul>
    </div>
  );
}

export default ListOfDefinitions;