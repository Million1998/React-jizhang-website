import React from 'react';
import 'icons/tag.svg';
import 'icons/money.svg';
import 'icons/chart.svg';

type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};


export default Icon;