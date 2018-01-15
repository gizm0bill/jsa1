import * as React from 'react';
import './App.css';

import AppRouter from './AppRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
        <div>
            Please <a href="/login">login</a> or{' '}
            <a href="/signup">sign up</a>!
        </div>
      </div>
    );
  }
}

export default App;
