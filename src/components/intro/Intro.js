import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/myPhoto.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Marian Francescu</h1>
                    <h3>Student</h3>
                    <a href="#portfolio">
                    <ExpandMoreIcon className="arrow" />
                </a>
                </div>
                
            </div>
        </div>
    )
}
