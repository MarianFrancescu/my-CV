import { Button } from '@material-ui/core'
import './testimonials.scss'

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="left">
                <div className="imgContainer">
                    <div className="wrapper">
                        <h1>About me</h1>
                        <h2>I am a self motivated, creative and adaptive person, always ready to learn something new. As a third year student in the field of computer engineering, after working on different projects, I discovered that software is my passion. Also, when I worked in team projects I developed my ability to communicate clearly. Thus, the team reached optimal solutions in the development of the project.</h2>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="skills">
                        <h1>Programming skills</h1>
                        <h2>
                            I'm trying to use new technologies, for building interactive and modern apps.
                        </h2>
                        <div class="container-skills">
                            <Button variant="contained" class="button-skill">Angular - good </Button>
                            <Button variant="contained" class="button-skill">Java - good</Button>
                            <Button variant="contained" class="button-skill">C - good</Button>
                            <Button variant="contained" class="button-skill">Prolog - medium</Button>
                            <Button variant="contained" class="button-skill">Firebase - medium</Button>
                            <Button variant="contained" class="button-skill">MongoDB - basic</Button>
                            <Button variant="contained" class="button-skill">Git - medium</Button>
                            <Button variant="contained" class="button-skill">React - basic</Button>
                        </div>
                    </div>
                    <div className="languages">
                        <h2>Languages</h2>
                        <div className="language-skill">
                            <Button variant="contained" class="button-skill">Romanian - native</Button>
                            <Button variant="contained" class="button-skill">English - Proficient in writing and
speaking</Button>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}
