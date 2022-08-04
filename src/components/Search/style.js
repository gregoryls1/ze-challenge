import styled from "styled-components";

export const WrapperSearch = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.sizeWidth}px;
  max-height: ${(props) => props.sizeHeight}px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 0;
    -ms-transform: translate(16px, -50%);
    transform: translate(16px, -50%);
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  border-color: #999;
  background-color: #ffff;
  padding-left: 48px;

  ::placeholder { 
  color: var(--gray-primary);
  opacity: 1;
}

:-ms-input-placeholder { 
  color: var(--gray-primary);
}

::-ms-input-placeholder { 
  color: var(--gray-primary);
}
`