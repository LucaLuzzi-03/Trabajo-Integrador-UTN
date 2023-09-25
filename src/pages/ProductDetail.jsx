/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import './styles/productDetail.css'


export const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  console.log(product)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ id }`)
      .then(resp => resp.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [])

    return (
    <>
      {
        loading 
          ? (<h1>Loading...</h1>)
          : (
          <div className='productDetail-container'>

            <div className="productDetail_img-container">
              <img src={product.image} alt={product.title} />
            </div>
    
            <div className='productDetail_info-container'>
    
              <div className='info-container_text'>
                <strong>{ product.title }</strong>
                <p>{ product.description }</p>
                <p>{ product.category }</p>
                <span>{ `$ ${product.price}` }</span>
              </div>
    
              <div className="info-container_buttons">
                <button onClick={ () => navigate(-1) }>Return</button>
                <button>Add to cart</button>
              </div>
    
            </div>
    
          </div>
          )
      }
    </>
    )
}
