import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';

import { WrapHeader, ImageHeader } from './style';

const Header = props => {
  return (
    <WrapHeader >
      <ImageHeader src={LogoZe} />
    </WrapHeader>
  )
}

export default Header