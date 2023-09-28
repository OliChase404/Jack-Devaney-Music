import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){

    const [showMenu, setShowMenu] = useState(false)


    return(
        <div className="Navbar">
            <div className="NavbarLeft">
                <img src="src/assets/homepage Navbar Left.jpg" alt="logo" />
            </div>
            <div className="NavbarRight">
                <img onClick={() => setShowMenu(!showMenu)} src="src/assets/homepage Navbar menu icon.jpg" alt="menu"/>
            </div>
        </div>
    )
}

export default Navbar;