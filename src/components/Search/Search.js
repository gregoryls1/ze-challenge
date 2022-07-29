import React from 'react';
import { WrapperSearch, Input } from './style';

const Search = (props) => {
  return (
    <WrapperSearch sizeWidth={props.sizeWidth} >
      <img src={props.iconSearch}/>
      <Input placeholder={props.placeholder} sizeHeight={props.sizeHeight}/>
    </WrapperSearch>
  )
}

export default Search