import React from 'react';
// statless functional component (function instead of class)
const NavBar = props =>{
    // console.log("NavBar-render")
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand" href="#// eslint-disable-next-line ">
           <h3>Total Items <span className="badge badge-pill badge-secondary">
                {props.totalCounters}
            </span>
           </h3>
        </a>
    </nav>
    
 );
};
export default NavBar;