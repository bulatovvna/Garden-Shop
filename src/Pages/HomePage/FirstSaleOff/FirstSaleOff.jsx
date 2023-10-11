import React, { useState } from 'react'
import gnome from "./gnome.png"
import s from "./FirstSaleOff.module.css"

function FirstSaleOff() {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const sendData = (e) => {
        if(inputValue.trim() !== ''){
            fetch(`http://localhost:3333/sale/send`, {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({inputValue})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInputValue('')
            })
        } else {
            alert('You have to enter your number')
        }
    }
    
  return (
    <div className={s.firstSaleOff}>
      <img src={gnome} alt='gnome'/>
      <div>
        <p>5% off</p>
        <p className={s.secondP}>on the first order</p>
        <div className={s.inputInfo}>
            <input 
                type='text' 
                placeholder='+49' 
                value={inputValue}
                onChange={handleInputChange}/>
            <button onClick={sendData}>Get a discount</button>
        </div>
      </div>
    </div>
  )
}

export default FirstSaleOff
