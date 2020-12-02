import React from 'react';
import './App.css';
import { GlobalContext } from '../core/globalProvider';
import Button from './Button';
import Image from './Image';

function App() {
  const [state, dispatch] = React.useContext(GlobalContext);
  function displayButtons() {
    return (
      <div className="btn-group mr-2 btn-block">
        {state.images.map(
          (_, key) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={key}
              value={key}
              active={key === state.current}
              onClick={() => dispatch({ type: 'SET_IMG', value: key })}
            />
          ),
        )}
      </div>
    );
  }
  function displayImage() {
    return (
      <div className="img-container">
        <Image
          src={state.images[state.current]}
          onClick={() => dispatch({ type: 'SET_IMG', value: state.current + 1 })}
        />
      </div>
    );
  }
  return (
    <div className="container app">
      {displayImage()}
      {displayButtons()}
    </div>
  );
}

export default App;
