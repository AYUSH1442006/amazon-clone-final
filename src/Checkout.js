import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
const [ {basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>

      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg'  alt="ssl" />

        <div>
          <h3> ello, {user.email}</h3>
          <h2 className='checkout__title'>
            Your shopping basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
            />
          ))}
           


        </div>
         </div>

      <div className='checkout__right'>
        <Subtotal />
          
            
          

        </div>
    </div>
  )
}

export default Checkout
