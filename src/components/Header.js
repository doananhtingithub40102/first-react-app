import { memo } from "react"

const Header = ({ title }) => {
    return (
        <h1 className="title">{title}</h1>
    )
}

export default memo(Header)