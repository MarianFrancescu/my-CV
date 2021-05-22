import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Introduction</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">About me</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
