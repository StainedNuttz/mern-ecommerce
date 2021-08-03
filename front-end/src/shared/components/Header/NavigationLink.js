import React from 'react';
import { NavLink } from 'react-router-dom'

const NavigationLink = props => {
  return (
    <li className="list-none">
      {props.link && 
        <NavLink 
          onClick={props.onClick}
          exact
          activeClassName={`${!props.nounderline && 'underline'}`}
          className={`${!props.nounderline && "hover:underline"} ${props.className} text-base tracking-wide`} 
          to={props.link}>
            {props.text}
        </NavLink>
      }

      {!props.link && props.onClick &&
        <button
          onClick={props.onClick}
          className="hover:underline">
            {props.text}
        </button>
      }

      {!props.link && !props.onClick &&
        <p className="font-bold tracking-wide flex items-center">
          <div className="border-2 border-black bg-white rounded-full w-[40px] h-[40px] mr-2"></div>
          <span className="mb-1">{props.text}</span>
        </p>
      }

    </li>
  );
}

export default NavigationLink;