import './App.css';
import { Characters } from './Data/Characters';

function KanaTableCell(props) {
    var cellData = ""
    if(props.romanji == true){
        let c = props.consonant;
        let v = props.vowel;
        let ch = props.chara;
        let r = Characters[c][v][ch].Romaji;
        cellData = cellData.concat(r + " ");
    }
    if(props.hiragana == true){
        let c = props.consonant;
        let v = props.vowel;
        let ch = props.chara;
        let r = Characters[c][v][ch].Hiragana;
        cellData = cellData.concat(r + " ");
    }
    if(props.katakana == true){
        let c = props.consonant;
        let v = props.vowel;
        let ch = props.chara;
        let r = Characters[c][v][ch].Katakana;
        cellData = cellData.concat(r + " ");
    }

    return(
        <div>{cellData}</div>
    );
}

export default KanaTableCell;