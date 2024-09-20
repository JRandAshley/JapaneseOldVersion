import './App.css';
import React, {useState, useEffect} from 'react';
import Sentence from './Sentence';

function Sentences() {

    return(
        <div>
            <Sentence kana="kana test" romanji="romanji test"/>
        </div>
    );
}

export default Sentences;