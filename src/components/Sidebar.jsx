import zen from '../assets/zen.svg'
import swim from '../assets/swim.svg'
import cycle from '../assets/cycle.svg'
import gym from '../assets/gym.svg'
import '../utils/styles/Sidebar.css'

export default function Sidebar() {
    return (
        <aside>
            <nav>
                <a href="#"><img src={zen} /></a>
                <a href="#"><img src={swim} /></a>
                <a href="#"><img src={cycle} /></a>
                <a href="#"><img src={gym} /></a>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}