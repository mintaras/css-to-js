import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import AppStyles from './styles/Styles.react';
import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <div>
          <AppStyles />
          <div className="App">
            <MainLayout />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;