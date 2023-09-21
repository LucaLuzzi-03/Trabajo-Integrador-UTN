import React from 'react'
import "./styles/carousel.css"

export const Iconos = () => {
  return (
    <> 
    <div className="iconos">
        <div className="items">
            <div className="item"><i class="fa-solid fa-credit-card"></i> <div className="texto"><p>All Payment methods </p></div> </div>
            <div className="item"><i class="fa-solid fa-paper-plane"></i> <div className="texto"> <p>Shipping everywhere</p></div></div>
            <div className="item"><i class="fa-solid fa-face-smile-wink"></i> <div className="texto"><p>Promotions</p></div></div>
        </div>
    </div>
    <hr />
    </>
  )
}
