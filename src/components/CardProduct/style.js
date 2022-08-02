import styled from "styled-components";

export const WrapperCard = styled.div`
  max-width: 168px;
  min-width: 168px;
  height: 208px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgb(243, 243, 243);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
  margin: 4px 8px 24px 16px;
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
  border-top: 1px solid rgb(243, 243, 243);
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
  color: rgb(153, 153, 153);
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
      color: rgb(51, 51, 51);
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
    background-color: rgb(255, 197, 0);
    border: 1px solid rgb(255, 197, 0);
    border-radius: 8px;
    padding-bottom: 2px;
    cursor: pointer;

    :last-of-type {
      margin-left: 4px;
    }

    :disabled {
      background-color: rgb(230, 230, 230);
      border: 1px solid rgb(230, 230, 230);
      color: rgb(153, 153, 153);
    }
  }
`