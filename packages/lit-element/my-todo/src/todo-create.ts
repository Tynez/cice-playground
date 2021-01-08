import { LitElement, customElement,  html, css } from 'lit-element';
import { general } from "./general"

@customElement('app-todo-create')
export class TodoCreate extends LitElement {

  private onClick(){
    const customEvent = new CustomEvent<Todo>('on-todo-create', {
      bubbles: true,
      composed: true,
      detail: {
        text: 'pepito'
      }
    })
    this.dispatchEvent(customEvent)
  }

  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<header>
      <app-input></app-input>
      <app-add-button @click="${this.onClick}"></app-add-button>
    </header>`
  }
}
