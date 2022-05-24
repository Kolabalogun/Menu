import React from "react";
import Category from "./Category";
import Menu from "./Menu";
import menu from "./MenuArray";
import "./Style.css";

const Home = () => {

  const allcategory = ['all', ...new Set(menu.map(A => A.category))]
  

  const [Array, ArrayF] = React.useState(menu)
  const [cat, catF] = React.useState(allcategory)


  // console.log(cat);
  

  const Menus = Array.map(A => <Menu 
  key={A.id}
  id = {A.id}
  img = {A.img}
  title = {A.title}
  desc = {A.desc}
  price = {A.price}
  />)

  function filterItem(category) {
    if (category === 'all') {
     return ArrayF(menu)
    }
    const newItems = menu.filter(A => A.category === category)
    ArrayF(newItems)
 
  }

  
  return (
    <div className="main">
      <h1>Our Menu</h1>
      <div className="line"></div>

    <Category categories={cat} filterItem={filterItem}/>

      <div className="menu">
      {Menus}
      </div>

      
    </div>
  );
};

export default Home;
