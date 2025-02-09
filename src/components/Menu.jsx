import React from 'react'
import Product from './Product'
import items from './item.json';

export const Menu=()=> {
  return (
    <>
    <div className='menu'>
        {items.map((item) => (
          <Product
          id = {item.id}
          title={item.title}
            image={item.image}
            rating={item.rating}
            cost={item.cost}
            />
          ))}
    </div>
    </>
  )
}
