import React from 'react';
import Search from '../../components/Search/Search';
import IconLocation from '../../assets/images/icon_location.svg'


import { WarpperHome, TitleHome } from './style'
import { useState } from 'react';

const Home = () => {
  const [address, setAddress] = useState('')

  const handleChange = (e) => {
    setAddress(e.currentTarget.value);
  };

  return (
    <WarpperHome>
      <div>
        <TitleHome><span>Bebidas geladas</span> a <span>preço </span>
          de mercado na sua casa <span>agora</span>
        </TitleHome>
        <Search sizeHeight={50} sizeWidth={600}
          iconSearch={IconLocation}
          placeholder='Inserir endereço para ver preço'
          address={address} 
          handleChange={handleChange}
          />
      </div>
    </WarpperHome>
  )
}

export default Home