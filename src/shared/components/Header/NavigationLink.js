import React from 'react';
import { NavLink } from 'react-router-dom'

const NavigationLink = props => {
  console.log(props.onClick)
  return (
    <li className="list-none">
      {props.link && 
        <NavLink 
          onClick={props.onClick}
          exact
          activeClassName={`${!props.nounderline && 'underline'}`}
          className={`${!props.nounderline && "hover:underline"} ${props.className}`} 
          to={props.link}>
            {props.text}
        </NavLink>
      }

      {!props.link &&
        <button
          onClick={props.onClick}
          className="hover:underline">
            {props.text}
        </button>
      }
    </li>
  );
}

export default NavigationLink;