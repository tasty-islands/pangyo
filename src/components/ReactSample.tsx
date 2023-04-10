import type { ChangeEvent } from 'react'
import { useState } from 'react'

export default function ReactSample() {
  const [val, setVal] = useState(3)

  function add() {
    setVal(val + 1)
  }
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setVal(+e.target.value)
  }

  return (
    <>
      <input
        value={val}
        type="number"
        className="border p-2"
        onChange={onChange}
      />
      <button className="bg-light p-2" onClick={add}>
        Plus
      </button>
    </>
  )
}
