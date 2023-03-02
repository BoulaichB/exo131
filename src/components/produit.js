import React, { useEffect, useState, useRef } from 'react';
import Cannette from './cannette';

const Produit = (props) => {
  let [products, setProducts] = useState(props.products);
  let [search, setSearch] = useState('');
  let input = useRef();

  const searchInput = () => {
    setSearch(input.current.value);
  }

  useEffect(() => {
    if(input.current.value.length != 0){
      let newProducts = [];
      props.products.map((product) => {
      if(product.name.includes(input.current.value)){
        newProducts.push(product);
        
      }
      setProducts(newProducts);
    })}else{
      setProducts(props.products);
    }  
    }, [search]); 

  return (
    <div>
      <div className='ml-3 mb-5'>
        <input ref={input} type="text" placeholder='Search' className='border-2 pr-20 pl-3 rounded' onInput={searchInput}/>
      </div>
        <div className='flex justify-around w-3/4 mx-auto'>
            {/* <Cannette img='./img/coca.png' name='Coca Cola' price={1} stock={props.stocks[0]} setStock={props.setStocks[0]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/> 
            <Cannette img='./img/fanta.jpg' name='Fanta' price={1.5} stock={props.stocks[1]} setStock={props.setStocks[1]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/> 
            <Cannette img='./img/sprite.jpg' name='Sprite' price={2} stock={props.stocks[2]} setStock={props.setStocks[2]} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/>  */}
            {products.map(product => (
              <Cannette img={product.img} name={product.name} price={product.price} stock={product.stock} setStock={product.setStock} money={props.money} setMoney={props.setMoney} products={props.products} setProducts={props.setProducts}/>
            ))}
        </div>
    </div>
    
  )
}

export default Produit