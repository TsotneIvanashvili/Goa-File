import { GetLocal } from "../../utils/localhost";

const Cart = () => {
  const cart = GetLocal("Cart");

  const render = () => {
    if (cart) {
    }
  };

  return (
    <div className="flex justify-center flex-col items-center mt-10 gap-20">

            <div className="flex gap-5 flex-wrap justify-center">
                
                    {
                        cart.map( item => {
                            return(
                                <div className="flex justify-between flex-col gap-5  w-90 shadow-[1px_1px_10px] rounded-2xl p-3" key={item.id}>
                                    <img className="" src={item.image} alt="" />
                                    <p className="text-2xl font-bold">{item.title}</p>
                                    <p className="text-green-700 flex"><span className="text-black">Price: </span>  ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>

                                
                            )
                        })
                    }
                
            </div>
        </div>
  );
};

export default Cart;
