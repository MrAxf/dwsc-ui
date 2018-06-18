import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import axios from 'axios';

import css from './style.pcss';
import template from './template.html';

import '../../dumbs/app-header';
import '../../dumbs/projects-table-admin';

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

  constructor() {
    super();
    this.updateData();
  }

  updateData() {
    axios.get(`/projects`, { timeout: 100000 })
      .then(data => this.data = data.data)
      .catch(err => console.log(err));
  }
}

window.customElements.define('admin-app', AdminApp);