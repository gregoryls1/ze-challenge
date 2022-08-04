import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';
import IconBag from '../../assets/images/iconBag.svg'
import {
  WarpperHeader,
  ItensHeader,
  ImageHeader,
  Address,
  WrapperShoppingCart,
  ImageBag
} from './style';

const Header = (props) => {

  const getAddress = (address) => {
    return address ? address.replace("", '') : '';
  }

  return (
    <WarpperHeader >
      <ItensHeader>
        <ImageHeader src={LogoZe} />
        {getAddress(props.address) ?
          <Address>
            <span>Receber em:</span>
            <p>{getAddress(props.address)}</p>
          </Address> : ''
        }
      </ItensHeader>
      {props.shoppingCart != null ?
        <WrapperShoppingCart>
          <ImageBag src={IconBag} />
          <span>{props.shoppingCart}</span>
        </WrapperShoppingCart> : ''
      }
    </WarpperHeader>
  )
}

export default Header