import styled from "styled-components";

export const WrapperCard = styled.div`
  max-width: 168px;
  min-width: 168px;
  height: 208px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid var(--white-primary);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
  margin: 4px 8px 24px 16px;

  @media(max-width: 767px){
    margin: 4px 8px 24px 12px;
  }
`

export const Product = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 96px;
  }
`

export const ProductDetails = styled.div`
  width: 100%;
  height: 95px;
  border-top: 1px solid var(--white-primary);
  padding: 8px;

`

export const WrapperProductDetails = styled.div`
  width: 100%;
  height: 100%;
  position: relative; `

export const ProductTitle = styled.h5`
  display: -webkit-box;
  max-height: 44px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: var(--gray-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Footercard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
      font-weight: bold;
      color: var(--black-light);
    }
  
  div {
    display: flex;
  }

  button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--yellow-dark);
    border: 1px solid var(--yellow-dark);
    border-radius: 8px;
    padding-bottom: 2px;
    cursor: pointer;

    :last-of-type {
      margin-left: 4px;
    }

    :disabled {
      background-color: var(--gray-disabled);
      border: 1px solid var(--gray-disabled);
      color: var(--gray-primary);
    }
  }
`