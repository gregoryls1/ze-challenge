import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';

import { WarpperHeader, ImageHeader } from './style';

const Header = props => {
  return (
    <WarpperHeader >
      <ImageHeader src={LogoZe} />
    </WarpperHeader>
  )
}

export default Header