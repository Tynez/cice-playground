import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-root')
export class AppRoot extends LitElement {

  @property({ type: Array })
  todos: { text: string }[] = [
    {
      text: 'foo',
    },
    {
      text: 'bar',
    },
  ]

  static get styles() {
    return css``
  }

  private onTodoCreated( event: CustomEvent ){
    this.todos = [...this.todos, { text: event.detail.text}]
  }
  render() {
    return html`<main>
      <app-todo-create @on-todo-create="${this.onTodoCreated}"></app-todo-create>
      <app-todo-list .todos=${this.todos}></app-todo-list>
    </main>`
  }
}
