import { GetLocal } from "../utils/Localstorage";

function Cart() {
  let cart = GetLocal("Cart") || [];

  return (
    <div className="flex justify-around">
      <div>
        <p>Your Cart!</p>

        <div>
          {cart.map((car) => {
            return (
              <div
                key={car.id}
                className="flex gap-2 items-center border-2 w-[80%]"
              >
                <img src={car.image} className="w-fit" alt="" />

                <div className=" flex justify-between h-full gap-2">
                  <div>
                    <h1>
                      <span className="font-bold">Brand:</span> {car.brand}
                    </h1>
                    <h1>
                      <span className="font-bold">Model:</span> {car.model}
                    </h1>

                    <p>
                      <span className="font-bold">Quantity: </span>
                      <button className="bg-black rounded-full text-white w-7">
                        -
                      </button>
                      {car.quantity}
                      <button className="bg-black rounded-full text-white w-7">
                        +
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shadow-[0_0_3px] w-100">
        <p>Check Out!</p>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
