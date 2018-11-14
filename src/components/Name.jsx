import React from 'react';


function Name(){
  let divStyle = {
    marginTop: 100,
    marginLeft: 200,
    textAlign: 'center',
    color: 'orange',
    float: 'left',
  };

  let imageStyle = {
    width: 300,
    height: 300,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 20,
  };

  return (
    <div>
      <img src="http://www.northeastmarket.org/wp-content/uploads/9.jpg" style={imageStyle}/>
      <div style={divStyle}>
        <h1>Farmer's Market</h1>
        <br/>
        <br/>
      </div>
    </div>


  );
}

export default Name;
