import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import IconLocation from '../../assets/images/icon_location.svg'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { WarpperHome, Container, TitleHome } from './style'

const Home = () => {
  const [address, setAddress] = useState('')
  const navigate = useNavigate()
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        console.log(results[0])
        // sessionStorage.setItem('address', results[0].formatted_address)
        getLatLng(results[0])
      })
      .then(latLng => {
        // sessionStorage.setItem('coordenates', JSON.stringify(latLng))
        navigate("/produtos", { replace: true });
      })
      .catch(error => console.error('Error', error));
  }

  return (
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
  )
}

export default Home