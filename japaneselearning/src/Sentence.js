import './App.css';
import React, {useState, useEffect} from 'react';

function Sentence(props) {
    var kana= props.kana
    var romanji = props.romanji;
    return(
        <div className="sentence-box">
            <p>{kana}</p>
            <p>{romanji}</p>
        </div>
    );
}

export default Sentence;