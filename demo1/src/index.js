import { msg } from './a.js'
function component() {
    var element = document.createElement('div');

    element.innerHTML = msg;

    return element;
  }

  document.body.appendChild(component());