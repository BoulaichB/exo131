import React from 'react';
import '../styles/canette.css';

const Cannette = (props) => {
    const buy = () => {
        let index = 0;
        if(props.money >= props.price){
            props.setStock(props.stock - 1);
            props.setMoney(props.money - props.price);
            props.products.forEach(product => {
                props.products[index].stock--;
                if(product.name === props.name){
                    product.unity = product.unity + 1;
                }
                index++;
            });
           
        }
        
    }
  return (
    <div className='border w-1/4'>
        <div className={`${props.stock === 1 ? 'bg-orange-500' : props.stock === 0 ? 'bg-red-500' : null}`}>
            <img src={props.img} alt={props.name} />
        </div>
        <div>
            <div className={`px-5 ${props.stock === 1 ? 'bg-orange-500' : props.stock === 0 ? 'bg-red-500' : null}`}>
                <h1 className={`text-xl font-bold py-2`}>{props.name}</h1>
                <span className='block py-2'>{props.stock > 0 ? `Prix : ${props.price}€`: null}</span>
                <span className='block py-2'>{props.stock > 0 ? `Stock : ${props.stock} unités` : 'Rupture de stock'} </span>
            </div>
            <div className={`px-5 py-2 ${props.stock === 1 ? 'bg-orange-500' : props.stock === 0 ? 'bg-red-500' : null}`}>
                <button className={`bg-green-600 text-white px-4 py-2 rounded ${props.stock == 0 || props.money < props.price ? 'hidden' : 'block'}`} onClick={buy}>Acheter</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cannette