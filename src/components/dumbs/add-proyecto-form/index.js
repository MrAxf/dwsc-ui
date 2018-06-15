import {PolymerElement, html} from '@polymer/polymer/polymer-element';
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

  constructor(){
    super();
    this.title="";
    this.description="";
    this.supervisor="";

    this.errorTitle="";
    this.errorDescription="";
    this.errorSupervisor="";

    this.addMessage="";
  }

  handleSubmit(e){
    e.preventDefault();
    this.errorTitle="";
    this.errorDescription="";
    this.errorSupervisor="";
    this.addMessage="";
    if(!this.title){
      this.errorTitle="Campo vacio";
      return;
    }
    if(!this.description){
      this.errorDescription="Campo vacio";
      return;
    } 
    if(!this.supervisor){
      this.errorSupervisor="Campo vacio";
      return;
    } 
    axios.post(`./project`, {title: this.title, description: this.description, supervisor: this.supervisor})
      .then(data => {
        this.title="";
        this.description="";
        this.supervisor="";
        this.addMessage="Proyecto añadido";
        axios.get(`/projects`)
          .then(data => this.data = data.data)
          .catch(err => this.data = [{title: "hola", description: "sffddfs", supervisor: "adadadas<"}]);
      })
      .catch(err => {
        this.title="";
        this.description="";
        this.supervisor="";
        this.addMessage="Proyecto añadido";
        axios.get(`/projects`)
          .then(data => this.data = data.data)
          .catch(err => this.data = [{title: "hola", description: "sffddfs", supervisor: "adadadas<"}]);
      });
  }

}

window.customElements.define('add-proyecto-form', AddProyectoForm);