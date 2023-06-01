import NavbarComponents from "../components/Navbar"
import CardsTour from "../components/CardsTour"
import CardComponents from "../components/Cards"
import FooterComponents from "../components/Footer"
import ListTransactionAdmins from "../components/Admin/ListTransactionAdmin"


function Home({isAdmin}) {
    return (
        
        <div>
            {isAdmin?  (<ListTransactionAdmins />) : (
            <div>

                <NavbarComponents />
                <CardComponents />
                <CardsTour />
                <FooterComponents />

            </div>
            ) 
            }
        </div>
    )
}

export default Home