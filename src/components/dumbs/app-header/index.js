import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class AppHeader extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

}

window.customElements.define('app-header', AppHeader);