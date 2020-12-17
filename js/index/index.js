const calButton = document.querySelector('a.cal');
const body = document.querySelector('body');
const progress = document.querySelectorAll('.progress');

// GOING THROUGH PROGRESS ARRAY

for (let i = 0; i < progress.length; i++ ) {
    let singleALink = progress[i];
    singleALink.addEventListener('click', function() {
        alertOnOff('<p class="info-box-text"> В РАЗРАБОТКЕ . . .  </p>')
    })
};

// -----------------

calButton.addEventListener('click', function() {
    alertOnOff('<p class="info-box-text"> ГЕКСО & ГЛЮКОКИНАЗЫ <br> запланированы на середину января. <br> </p> <p class="info-box-text">Не пропустите.</p>') 
});

function alertOnOff(txt) {
    // ELEMENT CREATING

    let divHoverMain = document.createElement('div');
    divHoverMain.className = 'info-main';

    let divHover = document.createElement('div');
    divHover.className = 'hover';

    let infoBox = document.createElement('div');
    infoBox.className = 'info-box';

    infoBox.innerHTML = txt;

    let buttonInfoBox = document.createElement('button');
    buttonInfoBox.className = 'info-box-button';
    buttonInfoBox.textContent = 'OK!';
    
    // CREATED ELEMENTS APPENDING

    body.appendChild(divHoverMain);
    divHoverMain.appendChild(divHover);
    divHoverMain.appendChild(infoBox);
    infoBox.appendChild(buttonInfoBox);

    //MAIN ACTIONS

    divHover.addEventListener('click', function(){
        body.removeChild(divHoverMain);
    });
    buttonInfoBox.addEventListener('click', function(){
        body.removeChild(divHoverMain);
    });
    
    // SOME STYLING

    divHover.addEventListener('mouseover', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.4)';
        divHover.style.cursor = 'pointer';
    });
    divHover.addEventListener('mouseout', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.8)';
    });

    buttonInfoBox.addEventListener('mouseover', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.4)';

    });
    buttonInfoBox.addEventListener('mouseout', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.8)';
    });
};



export { alertOnOff }
