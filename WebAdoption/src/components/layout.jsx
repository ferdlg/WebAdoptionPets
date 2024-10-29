import NavBar from "./landingPage/navBar/navBar"
import Banner from "./landingPage/banner/banner"
import banner from '../assets/images/banner.png';

const Layout = ({children})=>{
    return(
        <>
        <div className="layout">
            <NavBar/>
            <Banner imageUrl={banner}/>
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;