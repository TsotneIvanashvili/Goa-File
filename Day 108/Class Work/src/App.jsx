import { useEffect, useState } from "react";
import "./App.css";
import products from "./utils/prod";

function App() {
  const [cart, setCart] = useState([]);



  const addToCart = (item) => {
    const exists = cart.find((i) => i.name === item.name);

    if (exists) {
      const newCart = cart.map((i) => {
        const total = i.quantity * i.price
        return i.title === item.title ? { ...i, quantity: i.quantity + 1, total : total} : i;
      }); 
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }

    console.log(cart);
  };





  const removeItem = (item) => {

     const newCart = cart.find( i => {
      return [i.title !== item.title]
     })

     
      setCart(newCart);
    
      console.log(cart);
      

  }

  return (
    <div className="flex gap-2 m-10">
      <div className="flex gap-5 w-300 flex-wrap">
        {products.map((item) => {
          return (
            <div className="w-70 border-[2px] p-2 border-black  ">
              <img className="w-full" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>${item.price}</p>

              <button
                onClick={() => {
                  addToCart(item);
                }}
                className="bg-black text-white rounded-full p-2"
              >
                Add To Cart!
              </button>
            </div>
          );
        })}
      </div>

      <div className="border-[2px] flex flex-col items-center rounded-xl gap-20 p-20 w-[50%]">
        <p className="text-5xl">Cart</p>

        <div className="flex w-full flex-wrap gap-10">
          {cart.length > 0
            ? cart.map((item) => {
                return (
                  <div className="w-full border-[2px] p-2 gap-10 border-black flex ">
                    <p>{item.name}</p>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.total}</p>
                    <button onClick={() => removeItem(item)} className="border rounded-[100px] p-1 w-8 h-fit">X</button>
                  </div>
                );
              })
            : 
            (

              <h1>Your Cart is Empty!</h1>

            )}
        </div>
      </div>
    </div>
  );
}

export default App;
