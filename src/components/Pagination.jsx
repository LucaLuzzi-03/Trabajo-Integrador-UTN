/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './styles/pagination.css'

export const Pagination = ({ pagination, onHandlePagination }) => {
  return (
    <div className='pagination'> 
      <button disabled={ pagination === 1 ? true : false } onClick={ () => onHandlePagination(1) } className='btn-pagination'>Prev</button>
      <button disabled={ pagination === 2 ? true : false } onClick={ () => onHandlePagination(2) } className='btn-pagination'>Next</button>
    </div>
  )
}
