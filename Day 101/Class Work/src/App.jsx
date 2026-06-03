import { useEffect, useState } from "react";

import "./App.css"
import fetchData from "./fetchData.js";
function App() {
  const [data,setData] = useState([])


  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("Cart")) || [])
  
    useEffect(() =>{
      fetchData('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res)
          setData(res)
        })
    

      
    },[])

    useEffect(() => {
      localStorage.setItem("Cart", JSON.stringify(cart))
    },[cart])



    const add = (item) => {

      const image = item.image
      const price = item.price
      const title = item.title

      setCart([...cart, {title, image, price}])
    
    }



  return (
    <main>

      
      {
        data.map((item,index) =>{
          return(
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => {add(item)}}>Add To Cart! </button>
              </div>
            </div>
          )
        })
      }




      <div className="cart">
        <h1>Your Cart!!</h1>

        {
          cart.map( (item,index) => {
            return(
              <div className="card" key={index}>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            )
          })
        }
      </div>
   
    </main>
  )
}

export default App