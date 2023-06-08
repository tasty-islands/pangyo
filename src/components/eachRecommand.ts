export class EachRecommand extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = `<div>Hello world!</div>`

    this.insertStyleInnerShadowDom(shadow)
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.')
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.')
  }

  insertStyleInnerShadowDom(shadowDom) {
    const style = document.createElement('style')

    style.textContent = `
    div{
      color: red;
    }`

    shadowDom.appendChild(style)
  }
}
