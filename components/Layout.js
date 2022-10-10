import Nav from "./Nav"
import Toolbar from "./Toolbar"
const Layout = ({children}) => {
    return (
        <>
        {/* <Toolbar></Toolbar> */}
        <main>{children}</main>
        </>
    )
}

export default Layout
