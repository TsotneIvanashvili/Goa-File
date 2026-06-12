import { useEffect, useState } from "react"
import FetchData from "../../utils/fetch"
import { GetLocal, SetLocal } from "../../utils/localhost"

const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState( GetLocal("Cart") || [])




    useEffect( () => {
        FetchData('https://fakestoreapi.com/products').then(res => setProducts(res))
    }, [])

    useEffect( () => {
        SetLocal("Cart", cart)
    }, [cart])


    const addToCart = (item) => {

        
        
        const exists = cart.find( i => i.id === item.id)
        


        if(GetLocal("CurrentUser")){
            if(exists){
            const newCart = cart.map( i => {
                return i.title === item.title ? {...i, quantity: i.quantity + 1 } : i
            })
            setCart(newCart)
        }
        
            else{
                const obj = {
                ...item,
                quantity: 1
            }
                setCart([...cart, obj])
            }
        }

        else{
            alert("Log In To add products")
        }
        

        console.log(cart);
        
        
    }


    
        



    return(
        <div className="flex justify-center flex-col items-center mt-10 gap-20">
            <p className="text-9xl text-center">Products Page</p>

            <div className="flex gap-5 flex-wrap justify-center">
                
                    {
                        products.map( item => {
                            return(
                                <div className="flex justify-between flex-col gap-5  w-90 shadow-[1px_1px_10px] rounded-2xl p-3" key={item.id}>
                                    <img className="" src={item.image} alt="" />
                                    <p className="text-2xl font-bold">{item.title}</p>
                                    <p className="text-green-700 flex"><span className="text-black">Price: </span>  ${item.price}</p>
                                    <button onClick={() => {addToCart(item)}} className="bg-black border-2 text-white rounded-2xl p-1.5">Add To Cart!</button>
                                </div>

                                
                            )
                        })
                    }
                
            </div>
        </div>
    )
}



export default Products