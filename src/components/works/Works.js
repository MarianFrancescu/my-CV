import './works.scss';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react';

export default function Works() {
    const [currentSlider, setCurrentSlider] = useState(0);
    const data = [
        {
            id: "1",
            techno: "Technologies: Firebase, Angular, Bootstrap",
            title: "PC-Builder",
            desc:
                "That web application was created with a colleague and it is a PC configurator where the user can select components to build a PC. A build can be saved if the user is logged in. To get logged in, users can use the Google account, or create a new account and use the email and password.",
            img:
                "assets/pc-builder.png",
        },
        {
            id: "2",
            techno: "Technologies: Spring Boot, MongoDB, Angular, Bootstrap, Docker",
            title: "Messenger",
            desc: "This application was developed together with 2 colleagues. This is an instant messaging app, where an user have the possibility to create an account, and after signing in, a page with groups will appear. Here, the user can create a group and add other users to a specific group. Also, user's profiles can be visited.",
            img:
                "https://user-images.githubusercontent.com/28231703/118353753-5f9cac80-b570-11eb-8207-1fd438ca0671.png",
        },
        {
            id: "3",
            techno: "Technologies: Firebase, Angular, Bootstrap",
            title: "Car parts shop",
            desc: "In this application I developed my skills with Angular and tried to add basic functionalities. Here, I added separated routes for Admin and normal User. The Admin can manage the products(add, delete, edit) and the user is able to view and add the products to a shopping cart. All products are stored in Google Firebase.",
            img:
                "assets/car-parts.png",
        },
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
            setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {
                    data.map(d => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <PhoneAndroidIcon />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>
                                            {d.desc}
                                        </p>
                                        <span>Tools</span>
                                        <p>{d.techno}</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <ChevronRightIcon className="arrow left" onClick={() => handleClick('left')} />
            <ChevronRightIcon className="arrow right" onClick={() => handleClick()} />
        </div>
    )
}
