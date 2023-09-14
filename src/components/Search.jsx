/* eslint-disable react/prop-types */
import { useState } from "react"
import "./styles/search.css"

export const Search = ({ onHandleSearch }) => {

  const [inputValue, setInputValue] = useState('')

  const onHandleChange = ({ target }) => {
    setInputValue( target.value.toLowerCase() )
    onHandleSearch( target.value.toLowerCase() )
  }

  return (
    <>
      <div className="search-container">
        <i className="bi bi-search"></i>
        <input 
          type="text"
          value={ inputValue }
          onChange={ onHandleChange }
        />
      </div>
    </>
  )
}
