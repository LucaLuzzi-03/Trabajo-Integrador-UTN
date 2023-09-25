/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import "./styles/productsPage.css"
import { Filter } from '../components/Filter'
import { Search } from '../components/Search'
import { Pagination } from '../components/Pagination'



export const ProductsPage = () => {

  const [products, setProducts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState('')
  const [productsCategory, setProductsCategory] = useState("all")
  const [pagination, setPagination] = useState(1)

  const getAllProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json() 
    return data    
  }
  
  const getProducts = async() => {
    const data = await getAllProducts()
    setProducts(data)
  }

  const handleCategory = ( inputValue ) => {
    setProductsCategory( inputValue )
  }

  const handleSearch = ( inputValue ) => {
    setProductsFiltered( inputValue.toLowerCase() )
  }

  const handlePagination = ( page ) => {
    setPagination( page )
  }

  useEffect(() => {
    getProducts()
  }, [])

  let length = 0
  let productsPerPage = pagination === 1 ? true : false;
  
  return (
    <>
      <div className='inputsxd'>  
      <Search onHandleSearch={ handleSearch } />
      <Filter onHandleCategory={ handleCategory } />
      </div>
      <div className='newArrivals'> 
        <h1>Productos</h1> 
      </div>
      <div className='borde'></div>
      <div className='cardContainer'> 
        {
          products
            .filter( product => {
              if (productsFiltered.length === 0) return product
              return product.title.toLowerCase().includes( productsFiltered )
            })
            .filter( product => {
              if (productsCategory === "all") return product
              return product.category === productsCategory
            })
            .filter((product,i,array) => {
              length = array.length
              if (productsPerPage) {
                if (i + 1 > 10) return
                return product
              } else {
                if (i < 10) return
                return product
              }
            })
            .map(product =>  {
              return <ProductCard key={product.id} {...product}/>
            })
        }
      </div>
      { length > 10 && <Pagination onHandlePagination={ handlePagination } pagination={ pagination } /> }
    </>
)
}
