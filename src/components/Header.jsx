import logo from '../assets/logo-SportSee.png'
import '../utils/styles/Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src={logo} alt="logo of SportSee" /></li>
                    <li><a href="/accueil">Accueil</a></li>
                    <li><a href="/profil">Profil</a></li>
                    <li><a href="/reglage">Réglage</a></li>
                    <li><a href="/communaute">Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}