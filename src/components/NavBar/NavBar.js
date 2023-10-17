import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navBar">
            <link to='/'>
            <h3>e-commerce</h3>
            </link>
         <div className="categories">

            <navLink to={'category/buzos'} classname={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>buzos</navLink>
            <navLink to={'category/remeras'} classname={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>remeras</navLink>
            <navLink to={'category/pantalones'} classname={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>pantalones</navLink>
            <navLink to={'category/zapatillas'} classname={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>zapatillas</navLink>
         </div>
         <CartWidget />
        </nav>
    )
}
export default NavBar