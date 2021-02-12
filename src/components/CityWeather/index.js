import React from 'react';
import { Container } from 'react-bootstrap';

const CityWeather  = ({cityWeather}) => {
    // console.log(props.result);

    return (
        <Container>
            {/* <p>{props}</p> */}
            
            <p>name:{cityWeather?.name}</p>
            <p>temperature:{cityWeather?.main?.temp}</p>
            <p>humidity:{cityWeather?.main?.humidity}</p>
            <p>pressure:{cityWeather?.main?.pressure}</p>
        </Container> 
    );
};

export default CityWeather;