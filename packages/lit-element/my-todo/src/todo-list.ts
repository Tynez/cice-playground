import { LitElement, customElement, html, property } from 'lit-element';

@customElement('app-todo-list')
export class TodoList extends LitElement {
  @property({ type: Array })
  todos: { text: string }[] = [
    {
      text: 'foo',
    },
    {
      text: 'bar',
    },
  ]

  render() {
    return html`
      <ul>
        ${this.todos.map( todo => html`<app-todo>${todo.text}</app-todo>`)}
      </ul>
    `
  }
}
