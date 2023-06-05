import logo from "../images/logo.png"
import "./Header.css"

export function Header(){
    return(
        <header>
            <img src={logo} alt="logo" />
        </header>
    )
}