import styled from "styled-components";

export const WarpperHome = styled.div`
   min-height: calc(100vh - 355px);
`

export const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffcc00;
`

export const TitleHome = styled.h1`
  max-width: 532px;
  font-size: 36px;
  padding: 44px 0 16px;
  text-align: center;

  span {
    font-weight: bold;
  }
`