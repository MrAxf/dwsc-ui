import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if.js';
import axios from 'axios'

import css from './style.pcss';
import template from './template.html';

import '../bind-input';
import '../bind-text-area';

export default class AddProyectoForm extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Array,
        value: "",
        notify: true
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.supervisor = "";

    this.errorTitle = "";
    this.errorDescription = "";
    this.errorSupervisor = "";

    this.addMessage = "";
  }

  handleSubmit(e) {
    e.preventDefault();
    this.errorTitle = "";
    this.errorDescription = "";
    this.errorSupervisor = "";
    this.addMessage = "";
    if (!this.title) {
      this.errorTitle = "Campo vacio";
      return;
    }
    if (!this.description) {
      this.errorDescription = "Campo vacio";
      return;
    }
    if (!this.supervisor) {
      this.errorSupervisor = "Campo vacio";
      return;
    }
    axios.post(`./projects`, { title: this.title, description: this.description, supervisor: this.supervisor }, { timeout: 100000 })
      .then(data => {
        this.title = "";
        this.description = "";
        this.supervisor = "";
        this.addMessage = "Proyecto añadido";
        axios.get(`/projects`, { timeout: 100000 })
          .then(data => this.data = data.data)
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

}

window.customElements.define('add-proyecto-form', AddProyectoForm);