import React from 'react'

const Categories = ({ categoris, filterItems }) => {
  return (
    <div className='btn-container'>
      {categoris.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
