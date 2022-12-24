import React, { useState } from 'react'

const WeatherPanel = () => {

    let urlWeatherPanel = () => {

        let urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={55be2d19e62bda3f27762d7d8bcc3338}&lang={es}";
        let cityUrl = "&q=";

        let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={55be2d19e62bda3f27762d7d8bcc3338}&lang={es}"

        const [weather, setWeather ] = useState([])
        const [forecast, setForecast ] = useState([])
        // sppiner
        const [loading, setLoading ] = useState(false)
        // info
        const [show, setShow ] = useState(false)
        // comunicara con el form
        const [location, setLocation ] = useState("")


        // llamada a la API y la tomara
        const getLocation = async(loc) => {
            setLoading(true)
            setLocation(loc)

            // llamada a la primer APi Weather

            urlWeather = urlWeather + cityUrl + loc

            // Se usa APIFETCH para la llamada 

            await fetch(urlWeather).then((res) =>{
                if(!res.ok) throw {res}
                return res.json()
            }).then((weatherData) =>{
                setWeather(weatherData)
            })
        }

    }




  return (
    <div>WeatherPanel</div>
  )
}

export default WeatherPanel