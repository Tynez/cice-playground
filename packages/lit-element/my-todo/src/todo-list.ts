import { LitElement, customElement, html, css, property } from 'lit-element';
import { general } from "./general"

@customElement('app-todo-list')
export class TodoList extends LitElement {

  @property({type: Array})
  todos: Todo[] = []

  static get styles() {
    return [general, css``]
  }

  render() {
    return html`
      <ul>
        ${this.todos.map( todo => html`<app-todo>${todo.text}</app-todo>`)}
      </ul>
    `
  }
}
