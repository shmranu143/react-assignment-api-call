import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './style.css';

const CityInput  = ({city,setCity,fetchCityWeather}) => {
    const [error,setError]=React.useState("")

    const handleChange=(event)=>{
        setCity(event.target.value);
    }

    const handleSubmit=()=>{
        if(!city){
            setError("City field is empty");
        } else {
            setError("");
            // make api call here
            fetchCityWeather(city);
        }
    };

    return (
        <Container>
        <Form>
        <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>City</Form.Label> */}
            <Form.Control 
            value={city}
            type="text" 
            placeholder="Enter City" 
            onChange={handleChange}
            />
        {/* <p className="text-danger">{error}</p> */}
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
         Submit
        </Button>
    </Form>
    </Container> 
    );
};

export default CityInput;