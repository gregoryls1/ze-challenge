import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import currencyFormatter from '../../utils/currencyFormatter';
import { WrapperProducts } from './style';

const Products = () => {
  return (
    <WrapperProducts>
      <CardProduct
        image={'https://courier-images-prod.imgix.net/produc_variant/00017887_d6464370-2e5d-47eb-b9bb-5cbeb68b691e.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2'}
        nameProduct={'Brahma Chopp 300ml | Apenas o Líquido - Pack de 24 Unidades'}
        price={currencyFormatter.format('br', 72.73)}
      />
    </WrapperProducts>
  )
}

export default Products