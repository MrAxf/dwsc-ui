import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat.js';

import css from './style.pcss';
import template from './template.html';

import '../solicitar-interes-form'

export default class ProjectsTableAlumno extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Array,
        value: ""
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

}

window.customElements.define('projects-table-alumno', ProjectsTableAlumno);