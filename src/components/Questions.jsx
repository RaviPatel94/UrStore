import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Questions() {
  const [age,setAge]=useState(20)
  const [gender, setGender]=useState()
  console.log(gender)
  return (
    <div className='questions'>
        <h1>Lets personalize your experience</h1>
        <div>
          <div className='questone'>
            <div className='agequest'>
                <p>Age</p>
                <input type="number" className="categoryprefer" min={0} 
                max={100} 
                value={age}
                onChange={(e)=>{setAge(e.target.value)}}
                />
            </div>
            <div className='genderquest'>
                <p>Gender</p>
                <div>
                <button className="categorypref" id='male' onClick={(e)=>{setGender("Male")}}>Male</button>
                <button className="categorypref" id='female' onClick={(e)=>{setGender("Female")}}>Female</button>
                </div>
            </div>
            </div>
            <div className='refer'>
             <p>What category do you shop in often</p>
             <div className='prefdiv'>
              <button className="categorypref">Home</button>
              <button className="categorypref">Clothes</button>
              <button className="categorypref">Electronics</button>
              <button className="categorypref">Kids</button>
              <button className="categorypref">Students</button>
              <button className="categorypref">Furniture</button>
              <button className="categorypref">Gifts</button>
              <button className="categorypref">Sell</button>
              <button className="categorypref">Accessories</button>
              <button className="categorypref">Bitcoin</button>
              <button className="categorypref">Beauty Products</button>
              <button className="categorypref">Books</button>
              <button className="categorypref">Sports Equipment</button>
              <button className="categorypref">Groceries</button>
              <button className="categorypref">Gaming</button>
              <button className="categorypref">Health & Fitness</button>
              <button className="categorypref">Toys</button>
              <button className="categorypref">Pet Supplies</button>
              <button className="categorypref">Jewelry</button>
              <button className="categorypref">Watches</button>
              <button className="categorypref">Music Instruments</button>
              </div>
            </div>
            <div></div>
        </div>
        <p> <Link to='/' className='skip'> skip</Link>  </p>
    </div>
  )
}

export default Questions
