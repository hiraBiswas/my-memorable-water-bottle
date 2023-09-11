import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';
import { addToLS} from "../../Utilities/localStorage";


const Bottles = () => {

    const [bottles, setBottles]=useState([])
    const[cart, setCart]=useState([])


    useEffect(()=>
    {
        fetch('bottle.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))
    }
    ,[])

    const handleAddToCart=bottle=>{
        console.log('Added to the cart')
        const newCart= [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h2>Bottles are here:{bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            <div className='bottle-container'>
{
    bottles.map(bottle=><Bottle bottle={bottle} handleAddToCart={handleAddToCart} key={bottle.id}></Bottle> )
}
</div>
        </div>
    );
};

export default Bottles;