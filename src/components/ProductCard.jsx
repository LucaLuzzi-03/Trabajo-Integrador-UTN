/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'
import "./styles/productCard.css"

export const ProductCard = ({title, image, price, id, category}) => {
    const navigate = useNavigate()

    const onHandleNavigate = () => {
        navigate(`/products/${id}`)
    } 

        return (
            <> 
    <div className='cardContainer'> 
        <div className='productCard' onClick={onHandleNavigate}> 
            <img style={{width:"200px", height:"200px"}} src={image} alt={title} />
        <div className="textos">
            <div className='info'> <p className='text-truncate'>{title} </p></div>
            <div className="categoria">  <p>{category}</p> </div>
            <div className='precio'>
            <p>${price}</p>
            </div>
            <div className="envios">
            <p>Free shiping</p>
            </div>
        </div>
        </div>
    </div>

        </>
        
    )
}
