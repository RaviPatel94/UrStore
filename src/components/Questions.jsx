import React from 'react'
import { Link } from 'react-router-dom'

function Questions() {
  return (
    <div className='questions'>
        <h1>Lets personalize your experience</h1>
        <div>
          <div className='questone'>
            <div className='agequest'>
                <p>Age</p>
                <input type="number" className="categoryprefer"/>
            </div>
            <div className='genderquest'>
                <p>Gender</p>
                <div>
                <button className="categorypref">Male</button>
                <button className="categorypref">Female</button>
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
        <Link to='/' className='navlink' > <p className='skip'> skip </p> </Link>
    </div>
  )
}

export default Questions