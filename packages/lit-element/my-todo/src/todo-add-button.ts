import { LitElement, customElement,  html, css } from 'lit-element';
import { general } from "./general"

@customElement('app-add-button')
export class TodoAddButton extends LitElement {

  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<button>Add new</button>`
  }
}
