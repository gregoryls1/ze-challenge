import styled from 'styled-components';

export const WarpperHeader = styled.header `
    width: 100%;
    background-color: #333;
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

export const ImageHeader = styled.img `
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
    color: #FFC500;
  }
`
