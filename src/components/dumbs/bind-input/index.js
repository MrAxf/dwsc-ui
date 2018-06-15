import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class BindInput extends PolymerElement {

  static get properties() {
    return {
      value: {
        type: String,
        required: true,
        notify: true
      },
      placeholder: {
        type: String,
        value: ""
      },
      type: {
        type: String,
        value: ""
      },
      bindStyle: {
        type: String,
        value: ""
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  handleChange(e){
    this.value = e.target.value;
  }


}

window.customElements.define('bind-input', BindInput);