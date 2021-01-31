import updates from '../../changelog.json';

// GET HTML ELEMENTS
const main = document.querySelector('main');
const div = document.querySelector('.changelog');
console.log(div);

updates.forEach(function (item, index) {
  // CREATING STRING FOR ADDING
  let output = '';

  // DEFINING ARRAY ELEMENTS
  const updateVersion = item.updateVersion;
  const updateItems = item.updateItems;

  // APPEND UPDATE VERSION TO OUTPUT
  output = `<ul class='update-version'>
                <li> ${updateVersion} </li>
                  <ul class='update-item'>
              `;

  for (let item in updateItems) {
    output += `<li> ${updateItems[item]} </li>`;
  }

  // console.log(updateItems[i]);s

  output += `</ul> </ul>`;

  div.innerHTML = output;
});
