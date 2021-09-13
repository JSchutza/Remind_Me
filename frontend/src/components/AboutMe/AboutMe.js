
import { NavLink } from 'react-router-dom';




import styles from "./aboutme.module.css";



const AboutMe = () => {


  return (
    <>
    <div className={styles.aboutme_wrap}>
      <p> Joshua Schutza </p>

        <a href='https://github.com/JSchutza/Remind_Me' target="_blank" >
          <li> GitHub </li>
        </a>

        <NavLink exact to="/readme" >
          <li>README</li>
        </NavLink>

    </div >
    </>
  )
};


export default AboutMe;