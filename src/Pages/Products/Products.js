import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductList, searchDelivery, getAllCategory } from '../../services/api';
import Header from '../../Components/Header/Header';
import BadgeCategory from '../../Components/BadgeCategory/BadgeCategory';
import CardProduct from '../../Components/CardProduct/CardProduct';
import currencyFormatter from '../../utils/currencyFormatter';
import {
  WrapperProducts,
  WrapperFilters,
  HasNoProduct
} from './style';


const Products = () => {
  const [listProducts, setListProducts] = useState()
  const [categories, setCategories] = useState()
  const [filterId, setFilterId] = useState()
  const [shoppingCart, setShoppingCart] = useState(0)
  const address = sessionStorage.getItem('address')
  const navigate = useNavigate()
  const coordinates = JSON.parse(sessionStorage.getItem('coordinates'))
  
  // {
  //   lat: '-23.632919',
  //   lng: '-46.699453'
  // }

  const callProductList = () => {
    searchDelivery(coordinates.lat.toString(), coordinates.lng.toString()).then(deliveries => {
      if (deliveries.data.pocSearch <= 0) {
        sessionStorage.clear()
        return navigate('/', { replace: true })
      }
      const id = deliveries.data.pocSearch ? deliveries.data.pocSearch[0].id : ''
      getAllCategory(id).then(category => {
        setCategories(category.data.allCategory)
      })
      getProductList(id, filterId).then(list => {
        setListProducts(list.data.poc.products)
      })
    })
  };

  const filterByCategory = filterId => {
    if (filterId) {
      setFilterId(filterId)
      callProductList(coordinates, filterId)
    }
  }

  useEffect(() => {
    callProductList(coordinates)
  }, [])

  return (
    <>
      <Header address={address} shoppingCart={shoppingCart} />
      <WrapperFilters>
        {categories &&
          categories.map(category =>
            <BadgeCategory onclick={() => filterByCategory(category.id)}
              category={category.title} />
          )}

      </WrapperFilters>
      <WrapperProducts>
        {listProducts && listProducts.length <= 0 ?
          <HasNoProduct>Nosso distribuidor não tem esse produto no momento! :(</HasNoProduct> :
          listProducts?.map(product => {
            return (
              < CardProduct
                image={product.images[0].url}
                nameProduct={product.title}
                price={currencyFormatter.format('br', product.productVariants[0].price)}
                removeCart={() => setShoppingCart(shoppingCart - 1)}
                addCart={() => setShoppingCart(shoppingCart + 1)}
              />
            )
          })
        }
      </WrapperProducts>
    </>
  )
}

export default Products