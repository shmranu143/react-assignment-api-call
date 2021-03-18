import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const CityWeather  = ({cityWeather}) => {
    // console.log(props.result);
    // const [temp,setTemp]=React.useState(cityWeather?.main?.temp);
    
    // useEffect((prevTemp)=>{
    //     setTemp(prevTemp-273);
    // });
    return (
        <Container>
            <p>City : {cityWeather?.name}</p>
            {/* <p>{`City : ${cityWeather?.name}`}</p> */}
            <p>temperature : {cityWeather?.main?.temp}</p>
            <p>humidity : {cityWeather?.main?.humidity}</p>
            <p>pressure : {cityWeather?.main?.pressure}</p>
        </Container> 
    );
};

export default CityWeather;