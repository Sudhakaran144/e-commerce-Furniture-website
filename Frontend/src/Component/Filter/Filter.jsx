import React, { useContext } from 'react'
import "./Filter.css"
import { MdFilter } from 'react-icons/md'
import { FaFilter } from 'react-icons/fa'
import { FurnitureContext } from '../../Context/FurnitureContext'

const Filter = () => {
    const {products} = useContext(FurnitureContext)

  return (
    <div className="toolbar">
    <div className="toolbar-left">
      <button className="filter-button">Filter <span className="grid-view"><FaFilter /></span></button> 
    </div>
    <div className="toolbar-center">
      <p>Showing 1–16 of {products.length} results</p>
    </div>
    <div className="toolbar-right">
      <div className="show-wrapper">
        <label htmlFor="show">Show</label>
        <select id="show">
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="48">48</option>
        </select>
      </div>
    </div>
  </div>
)
}

export default Filter