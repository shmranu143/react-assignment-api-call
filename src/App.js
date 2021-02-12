// import logo from './logo.svg';
import React from "react"
import {  useState,useEffect} from "react";
import './App.css';
import CityInput from './components/CityInput'
import CityWeather from './components/CityWeather'

function App() {
  const [city,setCity]=React.useState("");
  const [cityWeather,setCityWeather]=React.useState("");
  const fetchCityWeather=()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
      )
    .then((res)=>res.json())
    .then((result)=>{
      // console.log("result is :",result);
      return setCityWeather(result);
    });
  };


  return (
    <>
      <CityInput 
      city={city} 
      setCity={setCity}
      fetchCityWeather={fetchCityWeather} 
      />

      <CityWeather cityWeather={cityWeather}/>
    </>
  );
}

export default App;
