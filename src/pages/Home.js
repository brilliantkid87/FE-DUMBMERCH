import NavbarComponents from "../components/Navbar"
import CardsTour from "../components/CardsTour"
import CardComponents from "../components/Cards"
import FooterComponents from "../components/Footer"
import ListTransactionAdmins from "../components/Admin/ListTransactionAdmin"
import { Link } from "react-router-dom"


function Home() {
    return (
        
        <div>
           
            <div>
                <NavbarComponents />
                <CardComponents />
                <CardsTour />
                <FooterComponents />

            </div>
        
        </div>
    )
}

export default Home