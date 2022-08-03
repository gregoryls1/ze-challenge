import React from 'react';
import { Badge } from './style';

const BadgeCategory = (props) => {
  return (
    <>
      <Badge className={props.active} onClick={props.onclick}>{props.category}</Badge>
    </>
  )
}

export default BadgeCategory
