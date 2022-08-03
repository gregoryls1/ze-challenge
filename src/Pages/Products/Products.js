import React, { useState, useEffect } from 'react';
import { getProductList, searchDelivery, getAllCategory } from '../../services/api';
import BadgeCategory from '../../components/BadgeCategory/BadgeCategory';
import CardProduct from '../../components/CardProduct/CardProduct';
import currencyFormatter from '../../utils/currencyFormatter';
import { WrapperProducts, WrapperFilters } from './style';


const Products = () => {
  const [listProducts, setListProducts] = useState()
  const [categories, setCategories] = useState()
  const [filterId, setFilterId] = useState()
  const coordinates = JSON.parse(sessionStorage.getItem('coordinates'))

  const callProductList = () => {
    searchDelivery(coordinates.lat.toString(), coordinates.lng.toString()).then(deliveries => {
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
    activeFilter()
  }

  useEffect(() => {
    callProductList(coordinates)
  }, [])

  return (
    <>
      <WrapperFilters>
        {categories &&
          categories.map(category =>
            <BadgeCategory onclick={() => filterByCategory(category.id)}
              category={category.title} />
          )}

      </WrapperFilters>
      <WrapperProducts>
        {listProducts && listProducts.map(product => {
          return (
            < CardProduct
              image={product.images[0].url}
              nameProduct={product.title}
              price={currencyFormatter.format('br', product.productVariants[0].price)}
            />
          )
        })}
      </WrapperProducts>
    </>
  )
}

export default Products