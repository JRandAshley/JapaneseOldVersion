import './App.css';
import { FlashCardData } from './Data/FlashCardData';

function FlashCard(props) {
    let id = props.card;
    let data = FlashCardData[id];
    let front = data.front;
    let back = data.back;
    let state = "front";

    function flip() {
        if (state == "front"){
            document.getElementById("content" + id).innerHTML = back;
            state = "back";
        }
        else if (state == "back"){
            document.getElementById("content" + id).innerHTML = front;
            state = "front";
        }
    }

    return(
        <div className="flash-card">
            <div id={"content" + id}>
                {front}
            </div>
            <button onClick={() => flip()}>Flip</button>
        </div>
    );
}

export default FlashCard;