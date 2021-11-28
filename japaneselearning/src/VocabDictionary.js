import './App.css';
import React, {useState, useEffect} from 'react';
import VocabCard from './VocabCard';
import { VocabWords } from './Data/Vocab';

function VocabDictionary() {
    //var searchBarEntry = document.getElementById("number").value;
    const [searchTerm, setSearchTerm] = useState("");

    function isSearched(vocabTerm) {
        let meaningFound = false;
        vocabTerm.meaning.forEach(element => {
            if(element.includes(searchTerm.toLowerCase())) {
                meaningFound = true;
            }
        });

        if(searchTerm == "") {
            return true;
        }
        else if(vocabTerm.romaji.includes(searchTerm.toLowerCase())) {
            return true;
        }
        else if(meaningFound) {
            return true;
        }
        else {
            return false;
        }
    }

    function updateSearch() {
        setSearchTerm(document.getElementById("search").value);
    }

    return(
        <div>
            <div className="SearchBar">
                Search<input type="text" value={searchTerm} onChange={updateSearch} id="search"/>
            </div>
            <div className="flexbox-row">
                {Object.values(VocabWords).filter(isSearched).map(vocabWord =>(
                    <VocabCard kanji={vocabWord.kanji} characters={vocabWord.characters} romaji={vocabWord.romaji} part={vocabWord.part} meaning={vocabWord.meaning}/>
                ))}
            </div>
        </div>
    );
}

export default VocabDictionary;