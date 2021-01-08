import { LitElement, customElement,  html, css, property } from 'lit-element';
import { general } from "./general"

@customElement('app-input')
export class TodoInput extends LitElement {

  @property()
  label!: string
  newTodo = ''

  static get styles() {
    return [general, css``]
  }
  private onChange(){
    const customEvent = new CustomEvent('on-input-change', {
      bubbles: true,
      composed: true,
      detail: this.nodeValue
    })
    this.dispatchEvent(customEvent)
  }

  render() {
    return html`<label>${this.label}<input value="${this.newTodo}" @change=${this.onChange}/></label>`
  }
}
