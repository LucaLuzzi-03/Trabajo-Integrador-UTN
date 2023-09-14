import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./styles/productCard.css"

export const ProductCard = ({title, image, description, price, id}) => {

    const navigate = useNavigate()

    const onHandleNavigate = () => {
        navigate(`/products/1`)
    }

    

        return (
            <> 
    <div className='cardContainer'> 
        <div className='productCard' onClick={onHandleNavigate}> 
            <img style={{width:"200px", height:"200px"}} src={image} alt={title} />
        <div className="textos">
            <div className='info'> <p>{title} </p></div>
            <div className='precio'>
            <p>${price}</p>
            </div>
            <div className="envio">
            <p>Free shiping</p>
            </div>
        </div>
        </div>
    </div>

        </>
        
    )
}
