import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
 alt="amazon ssl"  />

        <div className='home__row'>
           <Product
           id="1242435342"
            title= "The lean startup" price={29.99}
            image="https://m.media-amazon.com/images/I/612l41qnTAL._SY466_.jpg"
            rating={5}  />
           <Product
           id="58764369"
           title="Fitkit Classic Bottle Shaker 700ml"
           price={2.99}
           rating={3}
           image="https://m.media-amazon.com/images/I/61GE+a6cA4L._SY879_.jpg"
            />
           
        </div>

        <div className='home__row'>
        <Product
        id="37464829"
        title="Samsung 396 L, 3 Star, Convertible 5-in-1, Digital Inverter, Frost Free Double Door, WiFi Enabled Bespoke AI Refrigerator (RT41DG6A4DB1HL, Black Matte)"
        price={650.00}
        rating={5}
        image="https://m.media-amazon.com/images/I/41Wjaze0ntL._SY741_.jpg"
         />
        <Product
        id="54757568"
        title="iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium"
        price={1300.59}
        rating={4}
        image="https://m.media-amazon.com/images/I/619oqSJVY5L._SX679_.jpg"
        
         />
        <Product 
        id="422556464"
        title= "ASUS ROG Zephyrus G16, Gaming Laptop, 16 (40.64cm) ROG Nebula OLED 240Hz,Intel Core Ultra 9(32GB LPDDR5X/1TB SSD/NVIDIA GeForce RTX 4080 /Windows 11/Office 2021/Eclipse Gray/1.85 Kg),GU605MZ-CO931WS"
        price={3900.79}
        rating={5}
        image="https://m.media-amazon.com/images/I/718lRZb23kL._SX679_.jpg"

        />



        </div>

          <div className='home__row'>
          <Product
          id="37364733"
          title="Samsung Odyssey Neo G9 57-inch(145 cm) Dual UHD 7680 x 2160 1000R Curved VA Gaming Monitor, 240Hz, 1ms, FreeSync Premium Pro, USB, DP 2.1, HDMI, HAS, Quantum Mini LED, HDR10+ (LS57CG950NWXXL, Black)"
        
          price={3000.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/71nyeKrwdnL._SX679_.jpg"
           />

          </div>

        </div>

      
    </div>
  );
}

export default Home
