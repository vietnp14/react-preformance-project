// http://localhost:3000/isolated/examples/unnecessary-rerenders.js

import * as React from 'react'
let i = 0;

function CountButton({onClick}) {
  console.log('On Click')
  return <button onClick={onClick}>Click</button>
}
CountButton = React.memo(CountButton);

function NameInput({name, onNameChange}) {
  return (
    <label>
      Name: <input value={name} onChange={e => onNameChange(e.target.value)} />
    </label>
  )
}

function Example() {
  const [name, setName] = React.useState('')
  const [count, setCount] = React.useState(0)
  const increment = React.useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <div>
        <CountButton onClick={increment} />
      </div>
      <div>
        <NameInput name={name} onNameChange={setName} />
      </div>
      {name ? <div>{`${name}'s favorite number is ${count}`}</div> : null}
    </div>
  )
}

export default Example

/*
eslint
  no-func-assign: 0,
*/
