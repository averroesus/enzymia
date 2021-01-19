// import alertOnOff from './index.js';
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
