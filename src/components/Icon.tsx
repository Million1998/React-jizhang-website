import React from 'react';
import 'icons/tag.svg';
import 'icons/money.svg';
import 'icons/chart.svg';
import 'icons/right.svg'
import 'icons/left.svg'

type Props = {
  name?: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};


export default Icon;