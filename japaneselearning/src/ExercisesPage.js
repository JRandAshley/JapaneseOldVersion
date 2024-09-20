import './App.css';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FlashCard from './FlashCards';

function ExercisesPage() {
    let history = useHistory();

    function selectExcercise(props){
        let content = <FlashCard/>
        document.getElementById("activeExercise").innerHTML = content;
    }

    return(
        <div>
            <button onClick={() => {history.push("/flashcards/1");}}>
                Flash Cards Numbers 1-10
            </button>
        </div>
    );
}
export default ExercisesPage;