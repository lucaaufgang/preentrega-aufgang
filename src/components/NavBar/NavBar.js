import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>e-commerce</h3>
         <div>
         <button>buzos</button>
         <button>remeras</button>
         <button>pantalones</button>
         <button>zapatillas</button>
         </div>
         <CartWidget />
        </nav>
    )
}
export default NavBar