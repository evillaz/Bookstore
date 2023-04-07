import React, { useState } from 'react';

const CheckStatusButton = () => {
  const [status, setStatus] = useState('inactive');

  const handleClick = () => {
    if (status === 'inactive') {
      setStatus('active');
    } else {
      setStatus('inactive');
    }
  };

  return (
    <button onClick={handleClick} type="button">
      {status === 'inactive' ? 'Activate' : 'Deactivate'}
    </button>
  );
};

export default CheckStatusButton;
