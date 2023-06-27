export class EachRecommand extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = this.makeTemplate()

    this.insertStyleInnerShadowDom(shadow)
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.')
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.')
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.')
  }

  insertStyleInnerShadowDom(shadowDom: ShadowRoot) {
    const style = document.createElement('style')

    style.textContent = `
    .each-res-wrapper{
      margin: 5px;
      color: inherit;
      text-decoration: none;
    }
    .info-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    .info-title{
      font-size: 12px;
      font-weight: bold;
    }
    .info-category{
      color:#FB5B00;
      font-size: 10px;
    }
    `

    shadowDom.appendChild(style)
  }

  makeTemplate() {
    return `<a class='each-res-wrapper' href=${this.getAttribute('href')}>
      <img src=${this.getAttribute('image-url')} width=138 height=84/>
      <div class='info-wrapper'>
        <div class='info-title'>
          ${this.getAttribute('title')}
        </div>
        <div class='info-category'>
          ${this.getAttribute('category-name')}
        </div>
      </div>
    </a>`
  }
}
