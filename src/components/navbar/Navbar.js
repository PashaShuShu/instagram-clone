import classes from './Navbar.module.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import home from '../../icons/home.png';
import chat from '../../icons/chat.png';
import compass from '../../icons/compass.png';
import heart from '../../icons/heart.png';
import logo from '../../icons/logo.png';
import default_avatar from '../../icons/default_avatar.png';
import searching_glass from '../../icons/searching_glass.png';
const Navbar = () => {

    const [smallScreenMode, setSmallScreenMode] = useState(true);

    useState(() => {
        if (window.innerWidth < 600) {
            setSmallScreenMode(true)
        } else {
            setSmallScreenMode(false)
        }
    })

    return (
        <div className={classes.headerBorder}>
            <div className={classes.header}>
                <span className={classes.name}>
                    <NavLink to="/">
                        <img src={logo} alt="logo"></img>
                    </NavLink>
                </span>

                {smallScreenMode ?
                    null
                    :
                    <span className={classes.search}>
                        <input src={searching_glass} className={classes.search_input} placeholder="Поиск" type="text" />
                    </span>
                }


                <span className={classes.header_icons}>

                    <span>
                        <NavLink to="/home">
                            <img src={home} alt="home"></img>
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/chat">
                            <img src={chat} alt="chat"></img>
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/compass">
                            <img src={compass} alt="compass"></img>
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/likes">
                            <img src={heart} alt="likes"></img>
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/profile">
                            <img className={classes.avatar} src={default_avatar} alt="default_avatar"></img>
                        </NavLink>
                    </span>
                </span>



            </div>
        </div>
    )
}

export default Navbar