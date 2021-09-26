import './App.css';
import React, {useState, useEffect} from 'react';
import VocabCard from './VocabCard';
import { VocabWords } from './Data/Vocab';

function VocabDictionary() {
    //var searchBarEntry = document.getElementById("number").value;
    const [searchTerm, setSearchTerm] = useState("");

    function isSearched(vocabTerm) {
        if(searchTerm == "") {
            return true;
        }
        else if(vocabTerm.kanji.includes(searchTerm.toLowerCase())) {
            return true;
        }
        else if(vocabTerm.characters.includes(searchTerm.toLowerCase())) {
            return true;
        }
        else if(vocabTerm.romaji.includes(searchTerm.toLowerCase())) {
            return true;
        }
        else if(vocabTerm.meaning.includes(searchTerm.toLowerCase())) {
            return true;
        }
        return false;
    }

    function updateSearch() {
        setSearchTerm(document.getElementById("search").value);
    }

    return(
        <div>
            <header className="App">
                <div className="SearchBar">
                    Search<input type="text" value={searchTerm} onChange={updateSearch} id="search"/>
                </div>
                <div className="flexbox-row">
                    {Object.values(VocabWords).filter(isSearched).map(vocabWord =>(
                        <VocabCard kanji={vocabWord.kanji} characters={vocabWord.characters} romaji={vocabWord.romaji} part={vocabWord.part} meaning={vocabWord.meaning}/>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default VocabDictionary;