import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import axios from 'axios';

import css from './style.pcss';
import template from './template.html';

import '../../dumbs/app-header';
import '../../dumbs/add-proyecto-form';
import '../../dumbs/projects-table-profesor';

export default class ProfesorApp extends PolymerElement {

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor(){
    super();
    this.data = [];
    this.updateData();
  }

  updateData(){
    axios.get(`/projects`, { timeout: 100000 })
      .then(data => this.data = data.data)
      .catch(err => console.log(err));
  }
}

window.customElements.define('profesor-app', ProfesorApp);