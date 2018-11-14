import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: red;
            margin-left: 50px;
          }
        `}</style>
      <h1>{props.month}</h1>
      <ul>
        {props.selection.map((produce, index) =>
          <li key={index}>
            {produce}
          </li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string

};

export default Produce;
