import { useState } from 'react'

import './App.css'


function App() {
  const [number1, setNumber1] = useState(NaN)
  const [number2, setNumber2] = useState(NaN)
  const [operator, setOperator] = useState("")
  let foo = (number) => {
    if (operator === "") {
      // If no operator is selected yet, build number1
      if (isNaN(number1)) {
        setNumber1(number)
      } else {
        // Convert to strings to stick them together (e.g., "5" + "3" = "53"), then convert back to Number
        setNumber1(Number(String(number1) + number))
      }
    } else {
      // An operator was selected, so build number2
      if (isNaN(number2)) {
        setNumber2(number)
      } else {
        setNumber2(Number(String(number2) + number))
      }
    }
  }
  let operate = () =>{
    if (!isNaN(number1) && !isNaN(number2) && operator == "+") {
      setNumber1(number1 + number2)
      setNumber2(NaN)
      setOperator("")
    }
    if (!isNaN(number1) && !isNaN(number2) && operator == "-") {
      setNumber1(number1 - number2)
      setNumber2(NaN)
      setOperator("")
    }
    if (!isNaN(number1) && !isNaN(number2) && operator == "*") {
      setNumber1(number1 * number2)
      setNumber2(NaN)
      setOperator("")
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
        setOperator("")
      }
}
  }

let reset = () => {
  setNumber1(NaN)
  setNumber2(NaN)
  setOperator("")
}

let display = ""
if (!isNaN(number1)) {
  display = number1
}
if (operator != "") {
  display = display + " " + operator
}
if (!isNaN(number2)) {
  display = display + " " + number2
}


  return (
    <>
      <h1>-Calculate Your Digits-</h1>
      <h2>{display}</h2>
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
        <button onClick={reset}>C</button>
      </div>
      <div className="operators-grid">
        <button onClick={() => {setOperator("+")}}>+</button>
        <button onClick={() => {setOperator("-")}}>-</button>
        <button onClick={() => {setOperator("*")}}>*</button>
        <button onClick={() => {setOperator("/")}}>/</button>
      </div>
      </div>
    </>
  )
}

export default App
