import React from 'react';
import { NavLink } from 'react-router-dom'

const NavigationLink = props => {
  return (
    <li className="">
      {props.link &&
        <NavLink
          exact
          onClick={props.navClick}
          activeClassName={`${!props.nounderline && !props.mobile && 'underline'}`}
          className={`${!props.nounderline && !props.mobile && 'hover:underline'} text-base tracking-wide ${props.style}`}
          to={props.link}>
            {props.text}
        </NavLink>
      }

      {!props.link && props.onClick &&
        <button
          onClick={() => {
            props.onClick();
            if (props.navClick) { props.navClick() }
          }}
          className={`text-base tracking-wide ${props.style}`}
        >
          {props.text}
        </button>
      }

      {!props.link && !props.onClick &&
        <div className="font-semibold tracking-wide flex items-center">
          <p className="border-2 border-black bg-white rounded-full w-[40px] h-[40px] mr-2"></p>
          <span className="mb-1">{props.text}</span>
        </div>
      }
    </li>
  );
}

export default NavigationLink;