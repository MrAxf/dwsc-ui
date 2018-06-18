import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if.js';
import axios from 'axios'

import css from './style.pcss';
import template from './template.html';

import '../bind-input';

export default class AsignarProyectoForm extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Array,
        value: "",
        notify: true
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
    this.alumnoId=1;
    this.completed=false;
    this.errorMessage="";
  }

  handleSubmit(e){
    e.preventDefault();
    this.errorMessage="";
    if(!this.alumnoId){
      this.errorMessage="Campo vacío";
      return;
    } 
    axios.get(`./asignar/${this.projectId}/${this.alumnoId}`, { timeout: 100000 })
      .then(data => {
        this.completed=true;
        axios.get(`/projects`, { timeout: 100000 })
          .then(data => this.data = data.data)
          .catch(err => err => console.log(err));
      })
      .catch(err => console.log(err));
  }

}

window.customElements.define('asignar-proyecto-form', AsignarProyectoForm);