import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import axios from 'axios';

import css from './style.pcss';
import template from './template.html';

import '../../dumbs/app-header';
import '../../dumbs/bind-input';
import '../../dumbs/projects-table-alumno';

export default class AlumnoApp extends PolymerElement {

  static get properties() {
    return {
      search: {
        type: String,
        value: ""
      },
      data: {
        type: Array,
        value: []
      }
    };
  }

  static get observers() {
    return [
        'searchChange(search)'
    ]
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  searchChange(newValue){
    axios.get(`/projects/${newValue}`)
      .then(data => this.data = data.data)
      .catch(err => console.log(err));
  }
}

window.customElements.define('alumno-app', AlumnoApp);