/* eslint-disable react/prop-types */
import "./styles/filter.css"

export const Filter = ({ onHandleCategory }) => {

  const onHandleChange = (e) => {
    onHandleCategory( e.target.value )
  }

  return (
    <>
    <div className="filter">
      <select onChange={ onHandleChange }>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Mens clothing</option>
        <option value="women's clothing">Womens clothing</option>
      </select>
      </div>
    </>
  )
}
