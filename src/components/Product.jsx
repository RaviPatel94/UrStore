import React from 'react'

function Product({title,image,rating,cost}) {
  return (
    <div className="itemdispay">            
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
    </div>
  )
}

export default Product