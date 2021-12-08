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
      <div className="flexbox-column">
        <img id="strokeOrderHiragana" src="logo192.png" width="100" height="100"></img>
        <img id="strokeOrderKatakana" src="logo192.png" width="100" height="100"></img>
      </div>
      {/*
      <input type="button" value="test" onClick={() => {setStrokeOrder("a")}}/>
      */}
      <div className="side-by-side-tables">
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
                <button onClick={() => {setStrokeOrder("a")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="-" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("i")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="-" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("u")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="-" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("e")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="-" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("o")}}>Stroke Order</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>K</th>
              <td><KanaTableCell consonant="k" vowel="a" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ka")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="k" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ki")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="k" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ku")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="k" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ke")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="k" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ko")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("sa")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="s" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("shi")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="s" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("su")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="s" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("se")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="s" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("so")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("ta")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="t" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("chi")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="t" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("tsu")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="t" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("te")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="t" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("to")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("na")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="n" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ni")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="n" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("nu")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="n" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ne")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="n" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("no")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("ha")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="h" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("hi")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="h" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("fu")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="h" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("he")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="h" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ho")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("ma")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="m" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("mi")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="m" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("mu")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="m" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("me")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="m" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("mo")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("ya")}}>Stroke Order</button>
              </td>
              <td></td>
              <td><KanaTableCell consonant="y" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("yu")}}>Stroke Order</button>
              </td>
              <td></td>
              <td><KanaTableCell consonant="y" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("yo")}}>Stroke Order</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>R</th>
              <td><KanaTableCell consonant="r" vowel="a" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ra")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="r" vowel="i" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ri")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="r" vowel="u" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ru")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="r" vowel="e" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("re")}}>Stroke Order</button>
              </td>
              <td><KanaTableCell consonant="r" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("ra")}}>Stroke Order</button>
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
                <button onClick={() => {setStrokeOrder("wa")}}>Stroke Order</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td><KanaTableCell consonant="w" vowel="o" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("wo")}}>Stroke Order</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>-</th>
              <td><KanaTableCell consonant="*" vowel="n" chara="Seion"
              romanji={romaji} hiragana={hiragana} katakana={katakana}/>
                <button onClick={() => {setStrokeOrder("n")}}>Stroke Order</button>
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
      </div>
    </div>
  );
}

export default KanaChart;