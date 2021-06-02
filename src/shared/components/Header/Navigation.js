import React from 'react';

import NavigationLink from './NavigationLink';

const Navigation = props => {
  return (
    <nav>
      <ul className={`flex items-center ${props.className}`}>
        {props.links.map(l => (
          <NavigationLink key={Math.random()} onClick={props.onClick} text={l.text} link={l.link} nounderline={l.nounderline} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;