import '../App.css'
import AirBnb from "../images/airbnb.png"
export default function Navbar(){
    return(
        <nav>
            <img src={AirBnb} className='Nav--logo'/>
        </nav>
    )
}