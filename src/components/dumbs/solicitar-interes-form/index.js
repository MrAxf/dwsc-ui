import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if.js';
import axios from 'axios'

import css from './style.pcss';
import template from './template.html';

import '../bind-input';

export default class SolicitarInteresForm extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Array,
        value: ""
      },
      projectId: {
        type: Number,
        required: true
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor(){
    super();
    this.dni="";
    this.completed=false;
    this.errorMessage="";
  }

  handleSubmit(e){
    e.preventDefault();
    this.errorMessage="";
    if(!this.dni){
      this.errorMessage="Campo vacío";
      return;
    } 
    axios.get(`./solicitar/${this.projectId}/${this.dni}`, { timeout: 10000 })
      .then(data => this.completed=true)
      .catch(err => err => console.log(err));
  }

}

window.customElements.define('solicitar-interes-form', SolicitarInteresForm);