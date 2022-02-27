import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import 'icons/tag.svg';
import 'icons/money.svg';
import 'icons/chart.svg';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height:24px;
  > ul {
    display:flex;
    > li{
      width:33.333%;
      padding: 2px 0;
      text-align:center;
      display:flex;
      flex-direction: column;
      align-items:center;
    }
   }
`;

const Nav = () =>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon" >
            <use xlinkHref="#tag" />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart" />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
};

export default Nav;