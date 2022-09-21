import logo from '../assets/logo-SportSee.png'
import '../utils/styles/Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src={logo} alt="logo of SportSee" /></li>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}