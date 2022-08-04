import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';
import AppleStoreBadge from '../../assets/images/apple_store_badge.png'
import PlayStoreBadge from '../../assets/images/play_store_badge.png'
import { WarpperFooter, ItensFooter, ImageFooter, BadgeFooter, WarpperItens } from './style'

const Footer = () => {
  return (
    <WarpperFooter>
      <WarpperItens>
        <ItensFooter>
          <ImageFooter src={LogoZe} alt='Logo Zé Delivery'/>
        </ItensFooter>
        <ItensFooter>
          <div>
            <h4>Sobre o Zé Delivery</h4>
            <a href='#'>Me ajuda, Zé!</a>
            <a href='#'>Trabalhe conosco</a>
            <a href='#'>Pagamento na Entrega</a>
            <a href='#'>Cidades atendidas</a>
          </div>
        </ItensFooter>
        <ItensFooter>
          <div>
            <h4>Parcerias</h4>
            <a href='#'>Quero ser parceiro</a>
          </div>
        </ItensFooter>
        <ItensFooter>
          <div>
            <h4>Já baixou o aplicativo?</h4>
            <a href='#'>
              <BadgeFooter src={PlayStoreBadge} alt='link para ir ao Google PlayStore'/>
            </a>
            <a href='#'>
              <BadgeFooter src={AppleStoreBadge} alt='link para ir a Apple Store'/>
            </a>
          </div>
        </ItensFooter>
      </WarpperItens>
    </WarpperFooter>
  )
}

export default Footer