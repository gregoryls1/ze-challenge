import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 355px);
  padding: 24px;
  margin: auto;

  @media(max-width: 767px){
    padding: 18px;
  }
`

export const WrapperFilters = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  margin: auto;
`

export const HasNoProduct = styled.div`
  width: 100%;
  max-height: 52px;
  display: flex;
  justify-content: center;
  padding-top: 52px;
  font-size: 32px;
  font-weight: 400;
  color: var(--gray-primary);
`