import React from 'react';

import './App.css';

import Weather from "./app_components/weather.component";

import "weather-icons/css/weather-icons.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './app_components/form.component';

import Currentime from "./app_components/Currenttime"

const API_key ="c9e5429c90794a932e27e87e773b731a";

class App extends React.Component{

    constructor(){

      super();
      this.state = {
        city: undefined,
        
        icon: undefined,
        main:undefined,
        celsius:undefined,
        temp_max:undefined,
        temp_min:undefined,
        description:"",
        
      };
      
      //this.getWeather();

      this.weatherIcon = {

        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain:"wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"

      };

    }

    calCelsius(temp){

      let cell = Math.floor(temp -273.15 )

      return cell;

    }

    get_WeatherIcon(icons,rangeid){

      switch(true){

        case rangeid >= 200 && rangeid <=232:
          this.setState({icon: this.weatherIcon.Thunderstorm});
          break;

          case rangeid >= 300 && rangeid <=321:
            this.setState({icon: this.weatherIcon.Drizzle});
            break;

            case rangeid >= 500 && rangeid <=531:
              this.setState({icon: this.weatherIcon.Rain});
              break;

              case rangeid >= 600 && rangeid <=622:
                this.setState({icon: this.weatherIcon.Snow});
                break;

                case rangeid >= 701 && rangeid <=781:
                  this.setState({icon: this.weatherIcon.Atmosphere});
                  break;

                  case rangeid === 800:
                    this.setState({icon: this.weatherIcon.Clear});
                    break;

                    case rangeid >= 801 && rangeid <=804:
                      this.setState({icon: this.weatherIcon.Clouds});
                      break;

                      default: this.setState({icon: this.weatherIcon.Clouds});



      }



    }

    getWeather = async (e) =>{

      e.preventDefault();

      const city = e.target.elements.city.value;
      

      if( city){

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response);
  
        this.setState({
  
          city: `${response.name}, ${response.sys.country}`,
          
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          
          
  
        });
  
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)


      }
      else {


        {alert("Please enter a city name or a country name")}
      }

     




    };
    render () {

      return(

        <div className="App">

          <Currentime />

        <Form loadweather={this.getWeather} error ={this.state.error}/>
        <Weather 
         city={this.state.city}
         
         temp_celsius={this.state.celsius}
         temp_max={this.state.temp_max}
         temp_min={this.state.temp_min}
         description={this.state.description}
         weatherIcon= {this.state.icon}
         
         
         />
      </div>


      )

    }



}

export default App;
