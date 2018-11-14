import React from "react";
import MarketSchedule from './MarketSchedule';
import { isAbsolute } from "path";
import ProduceList from './ProduceList';

function Body(){
  let bodyStyleLeft = {
    float: 'left',
    width: '20%',
    marginLeft: 10,
    marginRight: 3,
    display: 'inline-block',
    position: 'fixed',

  };
  let bodyStyleRight = {
    marginTop: 20,
    float: 'right',
    width: '50%',
    marginLeft: 10,
    marginRight: 3,
  };

  return (
    <div>
      <div style={bodyStyleLeft}>
         <MarketSchedule/>
      </div>
      <div>
        <ProduceList/>
      </div>
    </div>

  );
}

export default Body;
