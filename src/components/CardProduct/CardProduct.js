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
                  onClick={() => setAmount(amount - 1)}
                  type='button'>-</button>
                <button type='button' onClick={() => setAmount(amount + 1)}>+</button>
              </div>
            </Footercard>
          </WrapperProductDetails>
        </ProductDetails>
      </WrapperCard>
    </>
  )
}

export default CardProduct