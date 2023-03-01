import React from 'react';

const Panier = (props) => {
  const rendre = (name) => {
      let index = 0;
      props.products.forEach(product => {

          props.products[index].stock--;
          if(product.name === name){
            props.setMoney(props.money + product.price);
            product.unity = product.unity - 1;
            product.setStock(props.stocks[index] + 1);
          }
          index++;
      });
  }
  return (
    <div>
        <span>Mon panier :</span>
        <div>
            {props.products.map(product => (product.unity > 0 ? 
              <div className='my-4' key={`${product.name}`}>
                <span>{product.name} </span>
                <span>Unités: {product.unity}</span>
                <button className='bg-red-600 text-white px-3 py-1 rounded' onClick={() => rendre(product.name)}>Rendre</button>
              </div>
              : null
            ))}
        </div>
    </div>
  )
}

export default Panier