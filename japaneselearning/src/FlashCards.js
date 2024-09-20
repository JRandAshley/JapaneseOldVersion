import './App.css';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import FlashCard from './FlashCard';
import {FlashCardSets} from './Data/FlashCardSets';

function FlashCards() {
    const { id } = useParams();//id of the flash card deck
    const deck = FlashCardSets[id];//gets an array of ids of flashcard data
    const deckIndex = 0;
    const [activeCardId, setActiveCardId] = useState(1);//place in the flashcard deck
    const lastId = deck.length;//number of flashcards

    const prevCard = () => {
        if(activeCardId>0){
            document.getElementById(activeCardId-1).style="display: block"
            document.getElementById(activeCardId).style="display: none"
            setActiveCardId(activeCardId-1);
        }
    }

    const nextCard = () => {
        if(activeCardId<lastId){
            document.getElementById(activeCardId+1).style="display: block"
            document.getElementById(activeCardId).style="display: none"
            setActiveCardId(activeCardId+1);
        }
    }

    //useEffect(
        //console.log("hi")
        //document.getElementById(1).style="visibility: visible"
    //);

    return(
        <div className="flexbox-row">
            {/*
            <div id="activeCard">
                <FlashCard card={deck[0]}/>
            </div>
            */}
            {deck.map((card, i) => {
                return (
                    <div id={i} style={{'display': 'none'}}>
                        <FlashCard card={card}/>
                    </div>
                );
            })}
            {/*document.getElementById(0).style="visibility: visible"*/}
            <button onClick={prevCard}>Prev</button>
            <button onClick={nextCard}>Next</button>
            {activeCardId}
        </div>
    );
}

export default FlashCards;