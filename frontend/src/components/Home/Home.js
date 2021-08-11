
import styles from "./home.module.css";



const Home = () => {

  return (
    <>
      <div className={styles.welcome_message_container} >
        <div className={styles.welcome_message_wrap}>
          <h1>Remind Me</h1>
            <p>A note taking application for developers who love code.</p>
            <p>Test out our editor below!</p>
        </div>
    </div>
    </>
  )

};



export default Home;
