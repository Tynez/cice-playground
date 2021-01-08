import { LitElement, customElement,  html, css, property } from 'lit-element';
import { general } from "./general"

@customElement('app-input')
export class TodoInput extends LitElement {

  @property()
  label!: string

  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<label>${this.label}<input/></label>`
  }
}
