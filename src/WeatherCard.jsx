import React , {useState ,useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {

    const [weatherState, setWeatherState] = useState('');


    useEffect(() => {
        if (tempInfo.weathermood) {
            switch (tempInfo.weathermood) {
                case 'Clouds':
                    setWeatherState('wi-day-cloudy')
                    break;
                case 'Haze':
                    setWeatherState('wi-fog')
                    break;
                case 'Clear':
                    setWeatherState('wi-day-sunny')
                    break;

                default:
                    setWeatherState('wi-day-sunny')
                    break;
            }
        }
    }, [tempInfo.weathermood])

  return (
    <>
      
     {/* our temp card  */}
     <article className='widget'>
                    <div className="weatherIcon">
                        <i className={`wi ${weatherState}`}></i>
                    </div>

                    <div className="weath_info_wrapper">
                        <div className="weatherInfo">
                            <div className="temprature">
                                <span>{tempInfo.temp}&deg;</span>
                            </div>

                            <div className="description">
                                <div className="weatherCondition">{tempInfo.weathermood}</div>
                                <div className="place">{tempInfo.name}, {tempInfo.country}</div>
                            </div>
                        </div>

                        <div className="date">{new Date().toLocaleString()}</div>
                    </div>

                    {/* our 4column section  */}
                    <div className="extraTemp">
                        <div className="box">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className='temp_info'>19:19 PM <br /> sunset</p>
                        </div>
                        <div className="box">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className='temp_info'>{tempInfo.humidity} <br /> Humidity</p>
                        </div>
                        <div className="box">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className='temp_info'>pressure <br /> {tempInfo.pressure}</p>
                        </div>
                        <div className="box">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className='temp_info'>wind <br /> {tempInfo.speed}</p>
                        </div>
                    </div>
                </article>


    </>
  )
}

export default WeatherCard
