import './Weather.css'
import sunny from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"
import rainy from "../assets/rainy.png"
import snowy from "../assets/snowy.png"
import loadingGif from "../assets/loading.gif"
import bitmoji from "../assets/bitmoji.png"
import rainBg from "../assets/rain.jpeg"
import cloudBg from "../assets/cloud.jpeg"
import mistBg from "../assets/mist.jpeg"
import hazeBg from "../assets/haze.jpeg"
import sunBg from "../assets/sun.jpeg"
import snowBg from "../assets/snow.jpeg"
import { Search, Wind, MapPinIcon, Droplet} from 'lucide-react';
import { useEffect, useState } from 'react'


function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true)
      const defaultLocation = "Nashville"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${import.meta.env.VITE_APP_ID}`
      const res = await fetch(url)
      const defaultData = await res.json()
      setData(defaultData)
      setLoading(false)
    }

    fetchDefaultWeather()
  }, [])

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const search = async() => {
    if (location.trim() !== ""){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${import.meta.env.VITE_APP_ID}`
      const res = await fetch(url)
      const searchData = await res.json()
      if (searchData.cod !== 200){
        setData({notFound: true})
      }
      else{
        setData(searchData)
        setLocation('')
      }
      // console.log(searchData)
      setLoading(false)
      
    }
    
  }

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter'){
      search()
    }
  }

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  }

  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

  const backgroundImages = {
    Clear: sunBg,
    Clouds: cloudBg,
    Rain: rainBg,
    Snow: snowBg,
    Haze: hazeBg,
    Mist: mistBg
  }

  const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : sunBg

  const weatherBackgrounds = {
    Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'linear-gradient(to right, #aff2ff, #fff)',
    Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: 'linear-gradient(to right, #57d6d4, #71eeec)'
  }

  const weatherBackground = data.weather ? weatherBackgrounds[data.weather[0].main] : 'linear-gradient(to right, #f3b07c, #fcd283)'

  const weatherMessages = {
    Clear: "Perfect day for a light outfit and sunglasses!",
    Clouds: "A bit gloomy—layer up with a comfy hoodie or cardigan.",
    Rain: "Wear a jacket and don’t forget your umbrella!",
    Snow: "Bundle up with a coat, boots, and a warm hat.",
    Haze: "Stick to light breathable layers, and maybe a face covering if needed.",
    Mist: "It’s damp outside—throw on a light jacket or water-resistant hoodie."
  };

  const weatherMessage = data.weather ? weatherMessages[data.weather[0].main] : '';


  let formattedDate = '';
  if (data.dt && data.timezone !== undefined) {
    const localTime = new Date((data.dt + data.timezone) * 1000);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek = daysOfWeek[localTime.getUTCDay()];
    const month = months[localTime.getUTCMonth()];
    const dayOfMonth = localTime.getUTCDate();

    formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  }

  return(
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="weather-app"  style={{background: weatherBackground && weatherBackground.replace ? weatherBackground.replace('to right', 'to top'): null}}>

        <div className="search">
          <div className="search-top">
            <MapPinIcon className='locate-icon'/>
            <div className="location">{data.name}</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder='Enter city Location' value={location} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <Search className='search-icon'onClick={search}/>
          </div>
        </div>
        { loading ? (<img className="loader" src={loadingGif} alt='loading'/>) : data.notFound ? (<div className="not-found">Not Found</div>): (
          <><div className="weather">
          <img src={weatherImage} alt="sunny" />
          <div className="weather-type">
            <p>{data.weather ? data.weather[0].main : null}; {data.main ? `${Math.floor(data.main.temp)}°C`:null}</p>
          </div>

          <div className="bitmoji">
            <img src={bitmoji} alt="bitmoji" />
            <p>{weatherMessage}</p>
          </div>
        </div>


        <div className="weather-date">
          <p>{formattedDate}</p>
        </div>

        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <Droplet className='humid'/>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind Speed</div>
            <Wind className='wind-icon'/>
            <div className="data">{data.wind ? data.wind.speed : null} km/hr</div>
          </div>
        </div>
          </>
        )}
        
      </div>
    </div>
  )  
}

export default Weather
