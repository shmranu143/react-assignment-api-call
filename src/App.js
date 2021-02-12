// import logo from './logo.svg';
import React from "react"
import './App.css';
import CityInput from './components/CityInput'
import CityWeather from './components/CityWeather'

function App() {
  const [city,setCity]=React.useState("");
  const fetchCityWeather=()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
      )
    .then((res)=>res.json())
    .then((result)=>{
      console.log("result is :",result);
    });
  };

  // const fetchCityWeather = () => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("result is :",data);
  //     });
  // };

  return (
    <>
      <CityInput 
      city={city} 
      setCity={setCity}
      fetchCityWeather={fetchCityWeather} 
      />
      {/* <CityWeather /> */}
    </>
  );
}

export default App;
