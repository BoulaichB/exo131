import React from 'react';
import Cannette from './cannette';

const Produit = (props) => {
  return (
    <div>
        <div className='flex justify-around w-3/4 mx-auto'>
            <Cannette img='./img/coca.png' name='Coca Cola' price={1} stock={props.stocks[0]} setStock={props.setStocks[0]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/> 
            <Cannette img='./img/fanta.jpg' name='Fanta' price={1.5} stock={props.stocks[1]} setStock={props.setStocks[1]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/> 
            <Cannette img='./img/sprite.jpg' name='Sprite' price={2} stock={props.stocks[2]} setStock={props.setStocks[2]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/> 
        </div>
    </div>
    
  )
}

export default Produit