function kelvinToCelsius(kelvin) {
    const celsius = Math.round(kelvin - 273.15)
    return celsius
}

const Results = ({ weather_today, weather_5day }) => {
    return (
        <div>
            {weather_today.main && (
                <div className="current-weather_today">
                    <h2 className="current-city">{weather_today.name} ({weather_today.sys.country})</h2>
                    <div className="current-temp">{kelvinToCelsius(weather_today.main.temp)}℃</div>
                    <div className="current-description">{weather_today.weather[0].description}</div>
                </div>
            )}
            {weather_5day.length > 0 && (
                <div className="forecast">
                    <h2>5-Day Forecast</h2>
                    <div className="forecast-container">
                        {weather_5day.map((day, ind) => (
                            <div key={ind} className="forecast-card">
                                <h3>{day.dt_txt}</h3>
                                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather icon" />
                                <p>{kelvinToCelsius(day.main.temp)}℃</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Results