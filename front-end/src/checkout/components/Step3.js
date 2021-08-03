import React from 'react';

import Button from '../../shared/components/UI/Button';

const Step3 = props => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <p>{props.paymentMethod}</p>
        <Button onClick={() => props.step(2)}>Back</Button>
      </div>
    </div>
  );
}

export default Step3;