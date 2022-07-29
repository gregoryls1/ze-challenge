import styled from "styled-components";

export const WrapFooter = styled.div`
    display: flex;
    justify-content: center;
    background-color: #333;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 40px;
`

export const WrapItens = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 0;
  padding: 24px;

  @media(min-width: 767px){
    grid-template-columns: repeat(4, 25%);
  }
`

export const ItensFooter = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: white;
  align-items: center;
  line-height: 28px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
    padding: 20px 0 10px;
    line-height: initial;

  }
  a {
    text-decoration: underline;
    font-size: 14px;
  }

  @media(min-width: 767px){
    &:first-of-type {
    align-items: flex-start;
    }
    &:last-of-type {
      align-items: flex-end;
    }

    div {
      align-items: unset;
    }

    h4 {
      padding: 0 0 16px;
    }
  }
`
export const ImageFooter = styled.img `
  height: 4em;
`

export const BadgeFooter = styled.img `
  width: 136px;
`