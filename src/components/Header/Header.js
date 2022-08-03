import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';

import { WarpperHeader, ItensHeader, ImageHeader, Address } from './style';

const Header = props => {

  const getAddress = () => {
    const address = sessionStorage.getItem('address');
    return address ? address.replace("", '') : '';
  }

  return (
    <WarpperHeader >
      <ItensHeader>
        <ImageHeader src={LogoZe} />
        {getAddress() ?
          <Address>
          <span>Receber em:</span>
          <p>{getAddress()}</p>
        </Address> : ''
        }
      </ItensHeader>
    </WarpperHeader>
  )
}

export default Header