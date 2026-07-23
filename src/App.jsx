import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [number1, setNumber1] = useState(NaN)
  const [number2, setNumber2] = useState(NaN)
  const [operator, setOperator] = useState("")
  let foo = (number) => {
    if (isNaN(number1)){
      setNumber1(number)
    } else if (isNaN(number2)){
      setNumber2(number)
    } else {
      setNumber1(number)
      setNumber2(NaN)
    }
  }
  let operate = () =>{
    if (!isNaN(number1) && !isNaN(number2) && operator == "+") {
      setNumber1(number1 + number2)
      setNumber2(NaN)
    }
    if (!isNaN(number1) && !isNaN(number2) && operator == "-") {
      setNumber1(number1 - number2)
      setNumber2(NaN)
    }
    if (!isNaN(number1) && !isNaN(number2) && operator == "*") {
      setNumber1(number1 * number2)
      setNumber2(NaN)
    }
    if (!isNaN(number1) && !isNaN(number2) && operator == "/") {
      if (number2 === 0) {
        // Intercept division by zero!
        alert("Cannot divide by zero! Result is undefined.")
        setNumber1(NaN)
        setNumber2(NaN)
        setOperator("")
      } 
      else {
        // Perform normal division
        setNumber1(number1 / number2)
        setNumber2(NaN)
      }
}
  }

  let reset = () => {
  setNumber1(NaN)
  setNumber2(NaN)
  setOperator("")
}

  return (
    <>
      <h1>Calculator</h1>
      <h2>{number1 + " " + number2} </h2>
      <div className="main-grid">
      <div className="numbers-grid">
        <button onClick={() => {foo(9)}}>9</button>
        <button onClick={() => {foo(8)}}>8</button>
        <button onClick={() => {foo(7)}}>7</ button>
        <button onClick={() => {foo(6)}}>6</ button>
        <button onClick={() => {foo(5)}}>5</ button>
        <button onClick={() => {foo(4)}}>4</ button>
        <button onClick={() => {foo(3)}}>3</ button>
        <button onClick={() => {foo(2)}}>2</ button>
        <button onClick={() => {foo(1)}}>1</ button>
        <button onClick={() => {foo(0)}}>0</ button>
        <button onClick={(operate)}>=</button>
      </div>
      <div className="operators-grid">
        <button onClick={() => {setOperator("+")}}>+</button>
        <button onClick={() => {setOperator("-")}}>-</button>
        <button onClick={() => {setOperator("*")}}>*</button>
        <button onClick={() => {setOperator("/")}}>/</button>
        <button onClick={reset}>C</button>
      </div>
      </div>
    </>
  )
}

export default App
