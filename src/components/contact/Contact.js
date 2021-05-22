import './contact.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="wrapper">
                    
                    <h1>EDUCATION</h1>
                    <h2>2018 - Present: Bachelor computer engineering,
                    <h3>Universitatea Politehnica Timișoara, Timișoara</h3>
                    </h2>
                    <h2>2014 - 2018: Highschool,
                    <h3>Liceul „Atanasie Marienescu”, Lipova</h3>
                    </h2>
                    
                    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>You can find me on:</h2>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+40725632879</span>
                    </div>

                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>marian.francescu98@gmail.com</span>
                    </div>   
                    <div className="icons">
                    <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/marian-francescu-92a026211/">
                        <LinkedInIcon className="mediaIcon" />
                        <span>Marian Francescu</span>
                    </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://github.com/MarianFrancescu">
                        <GitHubIcon className="mediaIcon" />
                        <span>Marian Francescu</span>
                    </a>
                    </div>
                    </div>                 
                </div>
            </div>
        </div>
    )
}
