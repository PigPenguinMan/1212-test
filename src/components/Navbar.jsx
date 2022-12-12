import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Product</NavLink>
        </div>
    )
}
export default Navbar;