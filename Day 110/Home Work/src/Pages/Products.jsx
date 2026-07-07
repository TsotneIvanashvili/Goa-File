import { useEffect, useState } from "react";
import carsData from "../utils/Cars";
import { GetLocal, SetLocal } from "../utils/Localstorage";

function Products() {
  const [cart, setCart] = useState(GetLocal("Cart") || []);


  useEffect( () => {
    SetLocal("Cart", cart)
  }, [cart])

  const addToCart = (prod) => {
      setCart((prevCart) => {
        const exists = prevCart.find((item) => item.id === prod.id);

        if (exists) {
          return prevCart.map((item) =>
            item.id === prod.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...prevCart, { ...prod, quantity: 1 }];
      });

  };

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

                <button
                  onClick={() => {
                    addToCart(car);
                  }}
                  className="bg-[#2D3E2C] cursor-pointer p-2 mb-2 rounded-[5px] w-full  text-[#E4FD97]"
                >
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
