import './App.css';
import React, {useState, useEffect} from 'react';
import KanaTableCell from './KanaTableCell';
import { StrokeOrder } from './Data/StrokeOrder';

function KanaChart() {
  const [romaji, setRomaji] = useState(true);
  const [hiragana, setHiragana] = useState(true);
  const [katakana, setKatakana] = useState(true);

  function setStrokeOrder(romaji){
    if(romaji == ""){
    }
    else{
      let address = StrokeOrder[romaji];
      let addressH = address.hiragana;
      let addressK = address.katakana;
      document.getElementById("strokeOrderHiragana").src = addressH;
      document.getElementById("strokeOrderKatakana").src = addressK;
    }
  }

  return (
    <div className="flexbox-row">
      <div>
        <table>
          <tr>
            <th></th>
            <th>A</th>
            <th>I</th>
            <th>U</th>
            <th>E</th>
            <th>O</th>
            <th>Ya</th>
            <th>Yu</th>
            <th>Yo</th>
          </tr>

          <tr>
            <th>-</th>
            <td><KanaTableCell consonant="-" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("a")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="-" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("i")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="-" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("u")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="-" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("e")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="-" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("o")}}>Details</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <th>K</th>
            <td><KanaTableCell consonant="k" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ka")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="k" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ki")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="k" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ku")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="k" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ke")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="k" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ko")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="k" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="k" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="k" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>G</th>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="a" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="i" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="u" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="e" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="o" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="ya" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="yu" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="k" vowel="yo" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>

          <tr>
            <th>S</th>
            <td><KanaTableCell consonant="s" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("sa")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="s" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("shi")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="s" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("su")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="s" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("se")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="s" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("so")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="s" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="s" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="s" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>Z</th>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="a" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="i" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="u" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="e" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="o" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="ya" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="yu" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="s" vowel="yo" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>

          <tr>
            <th>T</th>
            <td><KanaTableCell consonant="t" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ta")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="t" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("chi")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="t" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("tsu")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="t" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("te")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="t" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("to")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="t" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="t" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="t" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>D</th>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="a" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"></td>
            <td className="table-data-dakuon"></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="e" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="o" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="ya" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="yu" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="t" vowel="yo" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>

          <tr>
            <th>N</th>
            <td><KanaTableCell consonant="n" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("na")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="n" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ni")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="n" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("nu")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="n" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ne")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="n" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("no")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="n" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="n" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="n" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>

          <tr>
            <th>H</th>
            <td><KanaTableCell consonant="h" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ha")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="h" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("hi")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="h" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("fu")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="h" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("he")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="h" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ho")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="h" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="h" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="h" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>B</th>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="a" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="i" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="u" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="e" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="o" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="ya" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="yu" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-dakuon"><KanaTableCell consonant="h" vowel="yo" chara="Dakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>P</th>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="a" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="i" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="u" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="e" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="o" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="ya" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="yu" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td className="table-data-handakuon"><KanaTableCell consonant="h" vowel="yo" chara="Handakuon"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>

          <tr>
            <th>M</th>
            <td><KanaTableCell consonant="m" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ma")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="m" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("mi")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="m" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("mu")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="m" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("me")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="m" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("mo")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="m" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="m" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="m" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>Y</th>
            <td><KanaTableCell consonant="y" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ya")}}>Details</button>
            </td>
            <td></td>
            <td><KanaTableCell consonant="y" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("yu")}}>Details</button>
            </td>
            <td></td>
            <td><KanaTableCell consonant="y" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("yo")}}>Details</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>R</th>
            <td><KanaTableCell consonant="r" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ra")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="r" vowel="i" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ri")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="r" vowel="u" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ru")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="r" vowel="e" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("re")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="r" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("ra")}}>Details</button>
            </td>
            <td><KanaTableCell consonant="r" vowel="ya" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="r" vowel="yu" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
            <td><KanaTableCell consonant="r" vowel="yo" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          </tr>
          <tr>
            <th>W</th>
            <td><KanaTableCell consonant="w" vowel="a" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("wa")}}>Details</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td><KanaTableCell consonant="w" vowel="o" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("wo")}}>Details</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>-</th>
            <td><KanaTableCell consonant="*" vowel="n" chara="Seion"
            romanji={romaji} hiragana={hiragana} katakana={katakana}/>
              <button onClick={() => {setStrokeOrder("n")}}>Details</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div className="flexbox-column">
        <img id="strokeOrderHiragana" src="logo192.png" width="100" height="100"></img>
        <img id="strokeOrderKatakana" src="logo192.png" width="100" height="100"></img>
      </div>
    </div>
  );
}

export default KanaChart;