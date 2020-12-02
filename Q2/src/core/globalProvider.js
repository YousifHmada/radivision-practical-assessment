import React from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
  images: [
    'https://i.pinimg.com/564x/a7/71/26/a77126ed93bff8d24aaa4aa44c77a9b8.jpg',
    'https://www.sonic1029.com/wp-content/uploads/sites/3/2019/01/Michael-in-Fun-Run-michael-scott-1534318-1212-682.jpg',
    'https://i.insider.com/5cd978a693a15278d7397a15?width=1100&format=jpeg&auto=webp',
  ],
  current: 0,
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
