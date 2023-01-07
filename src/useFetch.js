import { useState, useEffect } from "react"

const MY_API_KEY = "dc22b13229ca0ff4e616dc201f077c7b"

const useWeather_today = city => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`
            )
            const data = await response.json()

            setWeather(data)
        }

        fetchData()
    }, [city])

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