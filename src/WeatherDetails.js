

const WeatherDetails=({error,country, feelsLike, location, wind,time,humidity,ctext,icon})=>{

    return(


<div className={`list ${error ? 'error' : ''}`}>
  {!location && <p>Location: </p>}
  {location && <p>Location: {location},{country}</p>}
  {!feelsLike && <p>Temperature: </p>}
  {feelsLike && <p>Temperature: {feelsLike}&deg;C</p>}
  {!wind && <p>Wind: </p>}
  {wind && <p>Wind: {wind} kph</p>}



  {!time && <p>Time: </p>}
  {time && <p>Time: {time}</p>}
  {!humidity && <p>Humidity: </p>}
  {humidity && <p>Humidity: {humidity}</p>}
  {!ctext && <p>Condition: </p>}
  {ctext && <p>Condition: {ctext}</p>}
  {!icon  && <p></p> }
  {icon && <img src={icon} alt={"img"}></img>}

  {error && <div>{error}</div>}
</div>

    )

}



export default WeatherDetails;