import React from 'react';

export const Herobanner = ({ loggedInUser }) => {
  return (
    <div className='herobanner'>
      <div className='heroshadow'></div>
      <div className="heroimg"></div>
      <div className='herotext'>
        {loggedInUser?<div className="hero-username">Hi, {loggedInUser} !</div>:<></>} {/* Display user name or 'Guest' */}
        <div className='herohead'>Need something?</div>
        <div className='herodisc'>Buy anything & everything at UrStore.com</div>
      </div>
    </div>
  );
}
