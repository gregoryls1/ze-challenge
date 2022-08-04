import styled from 'styled-components';

export const WarpperHeader = styled.header`
    width: 100%;
    background-color: var(--black-light);
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const ItensHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`

export const ImageHeader = styled.img`
 width: 121px;
 height: 40px;
 padding-left: 16px;
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;

  span {
    font-size: 12px;
  }

  p {
    font-size: 14px;
    color: var(--yellow-primary);
  }
`
export const WrapperShoppingCart = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  
  span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: var(--yellow-primary);
    position: absolute;
    right: -8px;
    top: -4px;
  }
`

export const ImageBag = styled.img`
  width: 100%;
  height: 100%;
`
