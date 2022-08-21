import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/axios'>Axios</NavLink>
            <NavLink to='/react-query' >React Query</NavLink>
        </nav>
    )
}

export default Nav