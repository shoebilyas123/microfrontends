import { useState } from 'react';

import './Button.css';
import useCount from './store';

export const Button = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <button className="shared-btn" onClick={() => setCount((s) => s + 1)}>
        Click me: {count}
      </button>
    </div>
  );
};

export default Button;
