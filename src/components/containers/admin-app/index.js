import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import axios from 'axios';

import css from './style.pcss';
import template from './template.html';

import '../../dumbs/app-header';
import '../../dumbs/bind-input';
import '../../dumbs/projects-table-alumno';

export default class AdminApp extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor(){
    this.updateData();
  }

  updateData(){
    axios.get(`/projects`)
      .then(data => this.data = data.data)
      .catch(err => this.data = [{title: this.search, description: "sfsfs", supervisor: "adadadas<"}]);
  }
}

window.customElements.define('admin-app', AdminApp);