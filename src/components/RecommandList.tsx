import React, { useEffect } from 'react'
import { EachRecommand } from './eachRecommand'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'each-recommand': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export default function RecommandList() {
  useEffect(() => {
    customElements.define('each-recommand', EachRecommand)
  }, [])
  return (
    <div>
      <each-recommand></each-recommand>
    </div>
  )
}
