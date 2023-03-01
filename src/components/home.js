import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      {/* <div className='flex my-5'>
        <Link to='/produit'>
          <button className='bg-blue-500 text-white font-bold px-4 py-2 mx-3 rounded-lg'>
            <span>Produits</span>
          </button>
        </Link>
        <Link to='/panier'>
          <button className='bg-blue-500 text-white font-bold px-4 py-2 mx-3 rounded-lg'>
            <span>Panier</span>
          </button>
        </Link>
        
        
      </div> */}
      <div>
        <span className='block text-3xl font-bold text-center my-5'>Mon argent : {props.money}€</span>
      </div>
        
      {/* <div>
        <Outlet/>
      </div> */}
        
    </div>
  )
}

export default Home