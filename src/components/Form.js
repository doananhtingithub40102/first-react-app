import { useState } from "react"

const Form = ({ setCity }) => {
    const [data, setData] = useState("Soc Trang")

    const handleSubmit = (event) => {
        event.preventDefault()
        setCity(data)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter a city or zip code" />
            <button type="submit">Search</button>
        </form>
    )
}

export default Form