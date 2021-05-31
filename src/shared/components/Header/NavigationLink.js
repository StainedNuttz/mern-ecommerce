import React from 'react';
import { NavLink } from 'react-router-dom'

const NavigationLink = props => {
  return (
    <li className="list-none">
      <NavLink onClick={props.onClick} exact activeClassName={!props.nounderline && "underline"}
       className={`${!props.nounderline && "hover:underline"} ${props.className}`} to={props.link}>{props.text}</NavLink>
    </li>
  );
}

export default NavigationLink;