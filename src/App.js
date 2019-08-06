import React from "react"; //telling this file to import the react object from react package json
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { tsUndefinedKeyword } from "../node_modules/@babel/types";

const API_KEY = "6f805fb8ab7aafcee7183cf73dc2bf1d";

class App extends React.Component {//creating an instance of app, that instance is extending react component
  //ini state
  state = {
    //initial state of an object 
    temperature : undefined,
    city : undefined,
    state: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    
  }
  //create a new method called getWeather
  getWeather = async(e) => {
    e.preventDefault(); //prevent the default behavior when we press the button!
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}&units=metric`);
  
    //convert api_call response to json format 
    const data = await api_call.json();
    console.log(data);

    //set the value of the state 
    if (city && country){
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country: data.sys.country,
        humidity :data.main.humidity,
        description : data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature :undefined,
        city : undefined,
        country: undefined,
        humidity :undefined,
        description : undefined,
        error: "Please input both city and country! :)"
      });
    }

  }

  render(){  //render method is built-in react method that comes inside of a react component 

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default App; //tell the file itself that we need to make this component available for other files to import 