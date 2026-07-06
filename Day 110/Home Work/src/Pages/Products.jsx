import { useState } from "react";
import carsData from "../utils/Cars";
import { GetLocal } from "../utils/Localstorage";

function Products() {

    const [cart, setCart] = useState(GetLocal("Cart") || [])


  const addToCart = (prod) => {
    if(cart.find( car => car.id === prod.id)){
        const newCart = []
        setCart([...cart, prod])
    }
    else{
        setCart([...cart, prod])
    }
    
  };

  console.log(cart);
  

  return (
    <main>
      <div className="flex flex-wrap gap-10">
        {carsData.map((car, index) => {
          return (
            <div
              key={car.id}
              className="flex flex-col items-center border-2 w-80"
            >
              <img src={car.image} alt="" />

              <div className="w-[95%] flex flex-col justify-between h-full gap-2">
               <div>
                 <h1>
                  <span className="font-bold">Brand:</span> {car.brand}
                </h1>
                <h1>
                  <span className="font-bold">Model:</span> {car.model}
                </h1>
               </div>
               
                <button onClick={() => {addToCart(car)}} className="bg-[#2D3E2C] cursor-pointer p-2 mb-2 rounded-[5px] w-full  text-[#E4FD97]">
                  Add To Cart!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
