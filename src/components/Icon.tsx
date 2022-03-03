import React from 'react';
import cs from 'classnames';
import 'icons/tag.svg';
import 'icons/money.svg';
import 'icons/chart.svg';
import 'icons/right.svg';
import 'icons/left.svg';



type Props = {
  name?: string
} & React.SVGAttributes<SVGAElement>

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;

  return (
    //@ts-ignore
    <svg className={cs('icon',className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};


export default Icon;