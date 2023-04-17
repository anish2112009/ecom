import React from 'react'
import './category-item.component.scss'

const CategoryItem=({category})=> {
  
    return (
        <div className="category-container" key={category.id} id={category.id}>
          <div className="background-image" style={{backgroundImage:`url(${category.imageUrl})`}}/>
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>{category.subtitle}</p>
          </div>
        </div>
    )
}

export default CategoryItem
