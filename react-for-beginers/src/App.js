import Button from "./Button";
import styles from './App.module.css'
import { useEffect, useState } from "react";

function Hello() {
  function destroyedFn () {
    console.log('destroyed :(')
  }
  
  function effectFn () {
    console.log("created :)")
    return destroyedFn // clean up fuction
  }
  
  useEffect(effectFn, [])
  return <h1>hello</h1>
}

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [showing, setShowing] = useState(false)
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  const onClickShow = () => setShowing((prev) => !prev)

  console.log('i run all the time')
  
  useEffect(() => {
    console.log("CALL THE API...")
  }, [])

  useEffect(() => {
    if(keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR ', keyword)
    }
  }, [keyword])

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
      <div>
        {showing ? <Hello/> : null}
        <button onClick={onClickShow}>{showing ? 'Hide' : 'Show'}</button>  
      </div>
    </div>
  );
}

export default App;
