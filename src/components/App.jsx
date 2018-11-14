import React from 'react';
import MarketSchedule from './MarketSchedule';
import Body from './Body';
import Name from './Name';
//import PropTypes from 'prop-types';

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Name/>
      <hr/>
      <Body/>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
