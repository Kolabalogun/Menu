import React from 'react'

import './Style.css'

const Menu = ({id, Img, desc, title, price}) => {
  return (
    <div className="list">
    <div className="img-div">
    <img src={Img} alt="" />

    </div>
    <div className="text">
      <div className="top">
<h3>{title}</h3>
<span>${price}</span>
      </div>
      <hr />
      <p>{desc}</p>
    </div>
  </div>
  )
}

export default Menu