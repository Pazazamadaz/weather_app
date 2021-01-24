import React from 'react';
import classes from './conditions.module.css';


const Conditions = (props) => {

  let urlPrefix = 'http://openweathermap.org/img/wn/';
  let urlSuffix = '@2x.png';


  return (
    <div className={classes.Wrapper}>
      {props.error && <small className={classes.small}>Please enter a valid city.</small>}
      {props.loading && <div className={classes.loading}>Loading...</div>}
      {props.responseObj.cod === 200 ?
          <div>
            <p><strong>{props.responseObj.name}</strong></p>
            <p>
              It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.
            <img src={urlPrefix + props.responseObj.weather[0].icon + urlSuffix} alt="No icon for this kind of weather" width="50px" />
            </p>         
          </div>
        : null
      }
    </div>
  )
}

export default Conditions;