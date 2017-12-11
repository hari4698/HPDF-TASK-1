import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExampleWithAvatar from './simpleCard'
import BlueBar from './blueBar'
import NavBar from './navBar'
import NavBar1 from './navBar1'


const App = () => (
  <MuiThemeProvider >
     
      <NavBar/>
      
      
    <CardExampleWithAvatar/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);