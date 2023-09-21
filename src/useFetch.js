import { useState, useEffect } from "react"

const MY_API_KEY = "619bfcc6ea3bc33ff88630a3ad0218a2"

const useWeather_today = (location) => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${MY_API_KEY}`
            )

            const data = await response.json()
            setWeather(data)
        }

        fetchData()
    }, [location])

    return weather
}

const useWeather_5day = (coord) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.latitude}&lon=${coord.longitude}&appid=${MY_API_KEY}`
            )
            const data = await response.json()

            setWeather(data.list)
        }

        fetchData()
    }, [coord])

    return weather
}

export { useWeather_today, useWeather_5day }