import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search';
import IconLocation from '../../assets/images/icon_location.svg'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { WarpperHome, Container, TitleHome } from './style'

const Home = () => {
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        sessionStorage.setItem('address', results[0].formatted_address)
        return getLatLng(results[0])
      })
      .then(latLng => {
        sessionStorage.setItem('coordinates', JSON.stringify(latLng))
        return navigate("/produtos", { replace: true })
      })
      .catch(error => console.error('Error', error));
  }

  useEffect(() => {
    if (sessionStorage.getItem('address')) {
      navigate("/produtos", { replace: true })
    }
  }, [])

  return (
    <>
      <Header/>
      <WarpperHome>
        <Container>
          <TitleHome><span>Bebidas geladas</span> a <span>preço </span>
            de mercado na sua casa <span>agora</span>
          </TitleHome>
          <Search
            sizeHeight={50} sizeWidth={600}
            iconSearch={IconLocation}
            placeholder='Inserir endereço para ver preço'
            address={address}
            handleChange={handleChange}
            handleSelect={handleSelect}
          />
        </Container>
      </WarpperHome>
    </>
  )
}

export default Home