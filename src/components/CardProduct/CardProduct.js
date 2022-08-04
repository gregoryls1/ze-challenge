import React, { useState } from 'react';
import {
  WrapperCard,
  Product,
  ProductDetails,
  ProductTitle,
  WrapperProductDetails,
  Footercard
} from './style';

const CardProduct = (props) => {
  const [amount, setAmount] = useState(0)

  const add = (addCart) => {
    addCart()
    setAmount(amount + 1)
  }

  const remove = (removeCart) => {
    removeCart()
    setAmount(amount - 1)
  } 
  return (
    <>
      <WrapperCard>
        <Product>
          <img src={props.image} />
        </Product>
        <ProductDetails>
          <WrapperProductDetails>
            <ProductTitle>{props.nameProduct}</ProductTitle>
            <Footercard>
              <p>{props.price}</p>
              <div>
                <button disabled={amount <= 0 ? true : false}
                  onClick={() => remove(props.removeCart)}
                  type='button'>-</button>
                <button type='button' onClick={() => add(props.addCart)}>+</button>
              </div>
            </Footercard>
          </WrapperProductDetails>
        </ProductDetails>
      </WrapperCard>
    </>
  )
}

export default CardProduct