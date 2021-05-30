import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {addToCart, removeFromBasket} from "../slices/basketSlice";
import {useDispatch} from "react-redux";
function CheckoutProduct({ 
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
    const product = {
        id,
        title,
        rating,
        price,
        description,
        category,
        image,
        hasPrime,
    }
    //Push item into redux 
    dispatch(addToCart(product))
}
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5'>
            {/* Left part */}
            <Image src={image} height={200} width={200} objectFir="contain"></Image>

            {/* Middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon className='h-5 text-yellow-500' key={i}/>
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
               
                <Currency quantity={price} currency="INR"></Currency>
                        
                {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt=""></img>
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
                )}
               
                  
              
            </div>
            {/* Right Part */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add to Cart</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from bucket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
