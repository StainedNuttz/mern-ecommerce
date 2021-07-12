import React, { forwardRef } from 'react';

const Card = forwardRef((props, ref) => 
    (
      <div ref={ref} id={props.id} className={`${props.className} rounded-lg shadow-lg bg-white`}>
        {props.children}
      </div>
    )
);

export default Card;