// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0d42adec81f5602776bfde00b8ad6849

import React, { useEffect, useState } from 'react';
import './style.css'
import WeatherCard from './WeatherCard';

const Temp = () => {

    const [serachVal, setSearchVal] = useState('thane');
    const [tempInfo, setTempInfo] = useState({})




    console.log('tempInfo::::', tempInfo)
    const getWheatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${serachVal}&units=metric&appid=0d42adec81f5602776bfde00b8ad6849`;
            let res = await fetch(url);
            let data = await res.json()
            console.log(data);

            const { temp, pressure, humidity } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const NewWheatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            }

            setTempInfo(NewWheatherInfo);

        } catch {
            console.log('api error')
        }
    }

    useEffect(() => {
        getWheatherInfo();
    }, [])

   

    return (
        <>
            <div className="section">


                <div className="search">
                    <input type="search" placeholder='search...'  id="serach" className='searchTerm' value={serachVal} onChange={(e) => setSearchVal(e.target.value)} autofocus  />

                    <button className='searchButton' type='button' onClick={getWheatherInfo}>Search</button>
                </div>

                <WeatherCard tempInfo = {tempInfo} />
               

            </div>
        </>
    )
}

export default Temp
