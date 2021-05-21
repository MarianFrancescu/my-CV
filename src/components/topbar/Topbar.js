import './topbar.scss'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">asa</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+40725632879</span>
                    </div>

                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>marian.francescu98@gmail.com</span>
                    </div>
                </div>
                <h1>my cv</h1>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
