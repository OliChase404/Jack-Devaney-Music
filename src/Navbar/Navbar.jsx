import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar({showMenu, setShowMenu}){


    return(
        <div className="Navbar">
            <div className="NavbarLeft">
                <img src="https://res.cloudinary.com/deepreadscloud/image/upload/v1696018546/homepage_Navbar_Left_fje3ie.jpg" alt="logo" />
            </div>
            <div className="NavbarRight">
                <img onClick={() => setShowMenu(!showMenu)} src="https://res.cloudinary.com/deepreadscloud/image/upload/v1696018546/homepage_Navbar_menu_icon_agebns.jpg" alt="menu"/>
            </div>
        </div>
    )
}

export default Navbar;