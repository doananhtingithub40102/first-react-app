import React from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react"
import { useWeather_today, useWeather_5day } from "./useFetch"
import Header from "./components/Header"
import Form from "./components/Form"
import Results from "./components/Results"
import "./App.css"

export default function App() {
    const title = "Weather Forecast"
    const [city, setCity] = useState("Soc Trang")
    const [coord, setCoord] = useState({ longitude: 105.98, latitude: 9.6033 })

    const weather_today = useWeather_today(city)
    const weather_5day = useWeather_5day(coord)

    useEffect(() => {
        if (weather_today.main) {
            const lat = weather_today.coord.lat
            const lon = weather_today.coord.lon
            setCoord({ longitude: lon, latitude: lat })
        }
    }, [weather_today])

    return (
        <div className="container">
            <Header title={title} />
            <Form setCity={setCity} />
            <Results weather_today={weather_today} weather_5day={weather_5day} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)