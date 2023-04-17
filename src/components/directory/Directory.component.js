 import CategoryItem from "../category-item/Category-item.component.js"


const Directory=({categories})=>{

    return (
    <div className="categories-container">
    {categories.map((category) => (
      
      <CategoryItem category={category} key={category.id}/>
    ))}
  </div>)
}


export default Directory;