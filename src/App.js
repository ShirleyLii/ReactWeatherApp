import React from "react"; //telling this file to import the react object from react package json
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6f805fb8ab7aafcee7183cf73dc2bf1d";

class App extends React.Component {//creating an instance of app, that instance is extending react component

  //create a new method called getWeather
  getWeather = async(e) => {
    e.preventDefault(); //prevent the default behavior when we press the button!
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Michigan,us&appid=${API_KEY}&units=metric`);

    //convert api_call response to json format 
    const data = await api_call.json();
    console.log(data);

  }

  render(){  //render method is built-in react method that comes inside of a react component 


    return ( // jsx bable conver this to normal code 
      <div> 
        <Titles/>
        <Form getWeather={this.getWeather}/>
        {/* we have accecss getweather function in forms! */}
        <Weather/>

      </div>

    );
  }




};

export default App; //tell the file itself that we need to make this component available for other files to import 