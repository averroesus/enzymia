import { alertOnOff } from './index.js';
import enzymJSON from '../../enzymes.json';

const enzymeBtn = document.querySelector(
  'nav.notes > div.list-item > footer-btns[name]'
);

let table = ` <table class='enz'> 
                <tr> 
                  <th> Фермент</th>  
                  <th> Функция</th>  
                </tr>`;

enzymJSON.map(function (enzyme) {
  table += `<tr> 
              <td style='color: #a22c29; font-weight: bold;'> ${enzyme.enzyme} </td>
              <td> ${enzyme.function} </td>
            </tr>`;
});

table += `</table>`;

function functMy() {
  alertOnOff(table);
}

enzymeBtn.addEventListener('click', functMy);

const deckAnkiBtn = document.getElementById('anki-deck');

let txtAnki = `
          <p class='info-box-text'>Перед установкой колоды ENZANKI, рекомендуется ознакомится с <a href='https://alexeygorelov.github.io/anki-manual-ru/#/'>инструкцией</a> по пользованию программой АНКИ.</p>
          <p class='info-box-text'>
          <br>
          <a href="__/enz.anki.apkg" donwload>Скачать колоду ENZANKI</a> </p> <br>
          `;
function ankiDeckDownload() {
  alertOnOff(txtAnki);
}
deckAnkiBtn.addEventListener('click', ankiDeckDownload);
