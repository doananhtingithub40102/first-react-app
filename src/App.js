import { useState, useEffect } from "react"

import { useWeather_today, useWeather_5day } from "./useFetch"

import Header from "./components/Header"
import Form from "./components/Form"
import Results from "./components/Results"
import ErrorModal from "./components/ErrorModal"

const App = () => {
    const [location, setLocation] = useState("Soc Trang")
    const [coord, setCoord] = useState({ longitude: 105.98, latitude: 9.6033 })
    const [isOpenModal, setIsOpenModal] = useState(false)

    const weather_today = useWeather_today(location)
    const weather_5day = useWeather_5day(coord)
    // console.log(weather_today)
    // console.log(weather_5day)

    useEffect(() => {
        if (weather_today.main) {
            const lat = weather_today.coord.lat
            const lon = weather_today.coord.lon
            setCoord({ longitude: lon, latitude: lat })
        } else if (weather_today.cod === "404") {
            setIsOpenModal(true)
        }
    }, [weather_today])

    return (
        <div className="container">
            <Header title="Weather Forecast" />
            <Form location={location} setLocation={setLocation} />
            {weather_today.cod !== "404" ?
                <Results weather_today={weather_today} weather_5day={weather_5day} /> :
                <ErrorModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
        </div>
    )
}

export default App