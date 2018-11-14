import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: silver;
          }
        `}</style>
      <h1>{props.day}</h1>
      <h3>{props.location}</h3>
      <p><em>{props.hours} at {props.booth}</em></p>
      <hr/>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Schedule;
