import { useState } from 'react';
import './App.css';

import Button from 'remoteApp/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Host Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Button></Button>
    </div>
  );
}

export default App;
