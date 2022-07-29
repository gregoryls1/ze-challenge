import React from 'react';
import LogoZe from '../../assets/images/ze-logo.png';
import AppleStoreBadge from '../../assets/images/apple_store_badge.png'
import PlayStoreBadge from '../../assets/images/play_store_badge.png'
import { WrapFooter, ItensFooter, ImageFooter, BadgeFooter, WrapItens } from './style'

const Footer = () => {
  return (
    <WrapFooter>
      <WrapItens>
        <ItensFooter>
          <ImageFooter src={LogoZe} />
        </ItensFooter>
        <ItensFooter>
          <div>
            <h4>Sobre o Zé Dedivvery</h4>
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
              <BadgeFooter src={PlayStoreBadge} />
            </a>
            <a href='#'>
              <BadgeFooter src={AppleStoreBadge} />
            </a>
          </div>
        </ItensFooter>
      </WrapItens>
    </WrapFooter>
  )
}

export default Footer