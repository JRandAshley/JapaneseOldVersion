import './App.css';
import React, {useState, useEffect} from 'react';
import KanaTableCell from './KanaTableCell';

function KanaChart() {
  const [romaji, setRomaji] = useState(true);
  const [hiragana, setHiragana] = useState(true);
  const [katakana, setKatakana] = useState(true);

  function updateCheckBoxes(){
    console.log("romaji is " + romaji)
    setRomaji(document.getElementById("romaji").isChecked);
    console.log("romaji is " + romaji)
  }

  function setStrokeOrder(){
    console.log("stroke order")
    document.getElementById("test").innerHTML = "a あ ア"
  }

  return (
    <div>
      {/*
      <object data="Data/svgsKana/12354.svg" width="600" height="500"> </object>
      */}
      <h1 id="test">N/A</h1>
      <input type="button" value="test" onClick={setStrokeOrder}/>
      {/*
        (romaji === true)
          ? <p>Romanji is true</p> 
          : <p>Romanji is false</p> 
      }
      {
        (hiragana === true)
          ? <p>Hiragana is true</p> 
          : <p>Hiragana is false</p> 
      }
      {
        (katakana === true)
          ? <p>Katakana is true</p> 
          : <p>Katakana is false</p> 
      */}

      {/*
      <input type="checkbox" id="romaji" name="romaji"
      value="Romanji" onChange={updateCheckBoxes}/>
      <label>Romanji</label>
      <input type="checkbox" id="hiragana" name="hiragana"
      value="Hiragana"/>
      <label>Hiragana</label>
      <input type="checkbox" id="katakana" name="katakana"
      value="Katakana"/>
      <label>Katakana</label>

      <br/>
      <input type="checkbox" id="dakuten" name="dakuten" value="Dakuten"/>
      <label>Dakuten</label>
      <input type="checkbox" id="handakuten" name="handakuten" value="Handakuten"/>
      <label>Handakuten</label>
      */}

      <table>
        <tr>
          <th></th>
          <th>A</th>
          <th>I</th>
          <th>U</th>
          <th>E</th>
          <th>O</th>
        </tr>

        <tr>
          <th>-</th>
          <td><KanaTableCell consonant="-" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="-" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="-" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="-" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="-" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>

        <tr>
          <th>K</th>
          <td><KanaTableCell consonant="k" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="k" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="k" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="k" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="k" vowel="o" chara="Seion"
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
        </tr>

        <tr>
          <th>S</th>
          <td><KanaTableCell consonant="s" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="s" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="s" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="s" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="s" vowel="o" chara="Seion"
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
        </tr>

        <tr>
          <th>T</th>
          <td><KanaTableCell consonant="t" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="t" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="t" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="t" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="t" vowel="o" chara="Seion"
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
        </tr>

        <tr>
          <th>N</th>
          <td><KanaTableCell consonant="n" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="n" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="n" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="n" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="n" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>

        <tr>
          <th>H</th>
          <td><KanaTableCell consonant="h" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="h" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="h" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="h" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="h" vowel="o" chara="Seion"
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
        </tr>

        <tr>
          <th>M</th>
          <td><KanaTableCell consonant="m" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="m" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="m" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="m" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="m" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>
        <tr>
          <th>Y</th>
          <td><KanaTableCell consonant="y" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td></td>
          <td><KanaTableCell consonant="y" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td></td>
          <td><KanaTableCell consonant="y" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>
        <tr>
          <th>R</th>
          <td><KanaTableCell consonant="r" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="r" vowel="i" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="r" vowel="u" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="r" vowel="e" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td><KanaTableCell consonant="r" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>
        <tr>
          <th>W</th>
          <td><KanaTableCell consonant="w" vowel="a" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td></td>
          <td></td>
          <td></td>
          <td><KanaTableCell consonant="w" vowel="o" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
        </tr>
        <tr>
          <th>-</th>
          <td><KanaTableCell consonant="*" vowel="n" chara="Seion"
          romanji={romaji} hiragana={hiragana} katakana={katakana}/></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default KanaChart;