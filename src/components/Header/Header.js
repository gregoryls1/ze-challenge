import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';

import { WarpperHeader, ImageHeader } from './style';

const Header = props => {
  return (
    <WarpperHeader >
      <div>
        <ImageHeader src={LogoZe} />
      </div>
    </WarpperHeader>
  )
}

export default Header