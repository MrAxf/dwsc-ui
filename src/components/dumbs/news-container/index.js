import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import axios from 'axios';

import css from './style.pcss';
import template from './template.html';

export default class NewsContainer extends PolymerElement {

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor(){
    super();
    this.news = [];
    axios.get("http://localhost:8080/ProductorConsumidor/GetAll", { timeout: 100000, responseType: 'text' })
      .then(data => {
        const res = [];
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.data, "text/xml");
        const xmlData = xmlDoc.getElementsByTagName("new");
        for (let i = 0; i < xmlData.length; i++) {
          res.push({
            desc: xmlData[i].getElementsByTagName("desc")[0].innerHTML,
            content: xmlData[i].getElementsByTagName("content")[0].innerHTML,
            date: xmlData[i].getElementsByTagName("date")[0].innerHTML
          });
        }
        this.news = res;
      })
      .catch(err => console.log(err));
  }

}

window.customElements.define('news-container', NewsContainer);