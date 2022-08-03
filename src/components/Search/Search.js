import React from 'react';
import { WrapperSearch, Input } from './style';

const Search = (props) => {
  return (
    <WrapperSearch sizeHeight={props.sizeHeight} sizeWidth={props.sizeWidth} >
      <img src={props.iconSearch} />
      <Input placeholder={props.placeholder}
        value={props.address}
        onChange={props.handleChange}
      />
    </WrapperSearch>
  )
}

export default Search