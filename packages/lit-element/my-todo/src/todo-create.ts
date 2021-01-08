import { LitElement, customElement,  html, css } from 'lit-element';
import { general } from "./general"
import type { Todo } from './todo-todo'

@customElement('app-todo-create')
export class TodoCreate extends LitElement {

  private newTodoText = ''

  private onChange(event: Event){
    this.newTodoText = (event.target as HTMLInputElement).value
  }

  private onClick(){
    const customEvent = new CustomEvent<Todo>('on-todo-create', {
      bubbles: true,
      composed: true,
      detail: {
        text: this.newTodoText
      }
    })
    this.dispatchEvent(customEvent)
    this.newTodoText = ''
  }


  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<header>
      <input .value="${this.newTodoText}" @keyup="${this.onChange}">
      <app-add-button @click="${this.onClick}"></app-add-button>
    </header>`
  }
}
