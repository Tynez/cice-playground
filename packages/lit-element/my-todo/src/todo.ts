import { LitElement, customElement,  html } from 'lit-element';

@customElement('app-todo')
export class Todo extends LitElement {
  render() {
    return html`<li><slot></slot></li>`
  }
}
