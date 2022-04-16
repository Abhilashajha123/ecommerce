
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  const state=useSelector((state)=>state.productReducer)
  console.log(state)
  return (
    <div>
        <button
        type="button"
        className="btn btn-outline-info col-xs-2"
        data-bs-toggle="modal">
       cart({state.length})
      </button>
    </div>
  )
}

export default CartBtn
