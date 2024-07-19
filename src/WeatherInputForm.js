import { useState } from "react";
import WeatherDetails from "./WeatherDetails";


const WeatherInputForm = () => {
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  // datas info

  const [country, setCountry] = useState(null);
  const [location, setLocation] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const[wind,setWind]=useState(null);
  const [time, setTime] = useState(null);

  const [ctext, setCText] = useState(null);
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const inputFocus = () => {
    setCountry(null);
    setLocation(null);
    setFeelsLike(null);
    setWind(null);
    setError(null);
    setTime(null);
    setCText(null);
 
    setHumidity(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    setInput("");
  };

  const getWeather = async () => {
    try {
      const api = "ccca6eee93824ef886462950241001";
      const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${input}&key=${api}`;
      const response = await fetch(apiUrl);
      let data;
      if (response.ok) {
        data = await response.json();
        setCountry(data.location.country);
        setLocation(data.location.name);
        setTime(data.location.localtime);

        setFeelsLike(data.current.temp_c);
        setWind(data.current.wind_kph);

        setCText(data.current.condition.text);
        setIcon(data.current.condition.icon);
        setHumidity(data.current.humidity)
 
        setError(null);
        return data;
      } else {
        setError(
          `Couldn't find the weather info for  "${input} "  Either check spelling or Try Again..`
        );
        setCountry(null);
        setLocation(null);
        setFeelsLike(null);
        setWind(null);
        setCText(null)
        setHumidity(null)
        setTime(null)
        setIcon(null)
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
    
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Enter the name of the place :</label>
          <input
            type="text"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={inputFocus}
          />
          <button>Submit</button>
        </form>
      </div>

      <div
        className="list"
        style={{ border: "2px solid green", margin: "50px", padding: "30px" }}
      >
        <WeatherDetails
          error={error}
          country={country}
          feelsLike={feelsLike}
          location={location}
          wind={wind}
          time={time}
   
          ctext={ctext}
          icon={icon}
          humidity={humidity}
        
        ></WeatherDetails>
      </div>
    </>
  );
};

export default WeatherInputForm;
