
import { NavLink } from 'react-router-dom';




import styles from "./aboutme.module.css";



const AboutMe = () => {


  return (
    <>
    <div className={styles.aboutme_wrap}>
      <h1> Joshua Schutza </h1>

        <a href='https://github.com/JSchutza/Remind_Me' target="_blank" >
          <li> GitHub </li>
        </a>

        <NavLink exact to="/readme" >
          <li>README</li>
        </NavLink>

          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=JSchutza&show_icons=true&theme=gotham&include_all_commits=true&count_private=true"
            alt="Joshua Schutza"
          />

        <p> Full Stack Software Engineer | React | Redux | JavaScript | Python | Flask | Express | PostgreSQL | Sequelize | SQLAlchemy </p>

    </div >
    </>
  )
};


export default AboutMe;
