import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Product({id,title,image,rating,cost}) {
  return (
    <div className="itemdispay">
        <Link to='/description' state={{id:id, title:title, image:image, rating:rating, cost:cost }} className='prduct_description_link'>   
        <div> <img className='itemthumbnail' src={image} alt="shoes" /></div>
        <div>
            <div className='itemtitle'>{title}</div>
            <div className='revcost'>
                <div className='review'>
                    <div className='starno'>{rating}</div>
                    <div>
                        <img className="star" src="src\images\star.png" alt="" />
                    </div>
                </div>
                <div className='mcost'>{cost}</div>
            </div>
        </div>
        </Link>
    </div>
  )
}

