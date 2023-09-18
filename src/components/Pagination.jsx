/* eslint-disable react/prop-types */
import './styles/pagination.css'

export const Pagination = ({ productsLength }) => {

  const available = productsLength <= 10 ? false : true

  return (
    <div>
      <button disabled={ !available ? true : false } className='btn-pagination'>Prev</button>
      <button disabled={ !available ? true : false } className='btn-pagination'>Next</button>
    </div>
  )
}
