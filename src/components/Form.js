import { useState } from "react"

const CITY_REGEX = /^[a-zA-Z]+( [a-zA-Z]+)*$/

const Form = ({ location, setLocation }) => {
    const [city, setCity] = useState(location)

    const handleSubmit = (event) => {
        event.preventDefault()

        const isValidCity = CITY_REGEX.test(city.normalize("NFD").
            replace(/[\u0300-\u036f]/g, '').
            replace(/đ/g, "d").replace(/Đ/g, "D"))

        if (!isValidCity) {
            var popup = document.getElementById("myPopup")
            popup.classList.add("show")
            return
        }

        setLocation(city)
    }

    const handleFocus = () => {
        var popup = document.getElementById("myPopup")
        popup.classList.remove("show")
    }

    return (
        <form className="search-form popup" onSubmit={handleSubmit}>
            {/* Show popup when the city */}
            <span className="popuptext" id="myPopup">The city/location must be string and valid city/location</span>

            <input
                type="text"
                value={city}
                onFocus={handleFocus}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Typing city name or location"
                required
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Form