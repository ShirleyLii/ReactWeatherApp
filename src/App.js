import React from "react"; //telling this file to import the react object from react package json
import { jsxAttribute } from "../node_modules/@babel/types";

class App extends React.Component {//creating an instance of app, that instance is extending react component

  render(){  //render method is built-in react method that comes inside of a react component 


    return ( // jsx bable conver this to normal code 
      <div> Hello! 

        <p> Hello! </p>

        <h1> Yo! </h1> 

      </div>

    );
  }




};

export default App; //tell the file itself that we need to make this component available for other files to import 