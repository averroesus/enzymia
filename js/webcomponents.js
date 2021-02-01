import images from '../img/*.svg';

//REGULAR BUTTONS WITHOUT IMAGE

const template2 = document.createElement('template');

template2.innerHTML = `
  <style>
    a {
        display: flex;
        flex: row auto;
        align-items: center;

        height: auto;
        padding: 6px;
        margin-right: 6px;

        border-radius: 5px;
        text-decoration: none;
        color: #020402;
        font-weight: normal;
        transition: background-color 0.3s;
        background-color: #ededed;
        line-height: 1em;
      }

    a.ready:hover {
      background-color: #fcfcfc;
      cursor: pointer;
    }

    a.not-ready:hover {
      cursor: not-allowed;
      background-color: #f3cfce;
    }
  
  </style>


  <a>
  </a>
`;

class regularBtns extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template2.content.cloneNode(true));

    if (this.getAttribute('link')) {
      this.shadowRoot
        .querySelector('a')
        .setAttribute('href', this.getAttribute('link'));
    } else {
      console.log('no attrb');
    }

    if (this.getAttribute('target')) {
      this.shadowRoot
        .querySelector('a')
        .setAttribute('target', this.getAttribute('target'));
    } else {
      console.log('no targer on regular button');
    }

    this.shadowRoot.querySelector('a').innerText = this.getAttribute('name');

    // ATTACH READY/NOT-READY CLASS
    if (this.getAttribute('link') === '#') {
      this.shadowRoot.querySelector('a').setAttribute('class', 'not-ready');
    } else {
      this.shadowRoot.querySelector('a').setAttribute('class', 'ready');
    }
  }
}

window.customElements.define('regular-btn', regularBtns);

//LITTLE BUTTONS BUTTONS
const template1 = document.createElement('template');

template1.innerHTML = `
  <style>
    a {
      display: flex;
      flex: row auto;
      align-items: center;

      height: auto;
      padding: 6px;

      border-radius: 5px;
      font-weight: normal;
      text-decoration: none;
      color: #020402;
      transition: background-color 0.3s;
      background-color: #ededed;
      line-height: 1em;
    }

    img {
      height: 1em;
      width: 1em;
    }

    a.ready:hover {
      background-color: #fcfcfc;
      cursor: pointer;
    }

    a.not-ready:hover {
      cursor: not-allowed;
      background-color: #f3cfce;
    }
  
  </style>


  <a>
    <img/>
  </a>
`;
class littleBtns extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template1.content.cloneNode(true));

    this.shadowRoot
      .querySelector('a')
      .setAttribute('href', this.getAttribute('link'));

    const imageHTML = this.getAttribute('image');

    for (var propName in images) {
      if (propName === imageHTML) {
        this.shadowRoot
          .querySelector('img')
          .setAttribute('src', `${images[propName]}`);
      } else {
        console.log('failed');
      }
    }

    //ATTACH READY/NOT-READY CLASS
    if (this.getAttribute('link') === '#') {
      this.shadowRoot.querySelector('a').setAttribute('class', 'not-ready');
    } else {
      this.shadowRoot.querySelector('a').setAttribute('class', 'ready');
    }
  }
}

window.customElements.define('little-btn', littleBtns);

// FOOTER WEB COMPONENTS

// FOOTER-BTNS
const template = document.createElement('template');

template.innerHTML = `
  <style>
    a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        padding: 6px;
        margin: 0px 0px 0px 0px;

        color: black;
        font-weight: normal;
        text-decoration: none;
        background: #ededed;
        border-radius: 5px;

        transition: background 0.3s;
    }

    a:hover {
        background: #fcfcfc;
        cursor: pointer;
    }

    a p {
        margin: 0;
        text-indent: 0;
    }

    a img {
        margin: 0 0 0 8px;
        width: 1em;
        height: 1em;
    }

    a {
        margin-right: 6px;
    }
  </style>
  <a>
    <p></p>
    <img />

  </a>
`;

class footerBtn extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('name');

    if (this.getAttribute('link')) {
      this.shadowRoot
        .querySelector('a')
        .setAttribute('href', this.getAttribute('link'));
    } else {
      console.log('no attrb');
    }

    if (this.getAttribute('target')) {
      this.shadowRoot
        .querySelector('a')
        .setAttribute('target', this.getAttribute('target'));
    } else {
      console.log('no_target');
    }

    //SETTING SRC ATTRIBUTE FOR IMAGE
    const imageHTML = this.getAttribute('image');

    for (var propName in images) {
      if (propName === imageHTML) {
        this.shadowRoot
          .querySelector('img')
          .setAttribute('src', `${images[propName]}`);
      } else {
        console.log('failed');
      }
    }
  }
}

window.customElements.define('footer-btns', footerBtn);
