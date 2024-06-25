import Home from "../container/Home"
import Navbar from "../layout/Navbar"
import Bottom from "./Bottom"

function Layout({ children }) {
    return (
        <>
        <Navbar/>
        { children }
        <Bottom/>
        </>
    )
}

export default Layout