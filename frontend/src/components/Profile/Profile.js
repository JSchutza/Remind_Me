
import { useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext.js';
import { Link } from 'react-router-dom';



const Profile = () => {
  const { isUser } = useUser();



  const showUpdateForm = event => {
    event.preventDefault();
  }



  return (
    <>
      <div>

        <div>
          <img src={isUser.avatar} />
        </div>

        <div>
          <h1>{isUser.username}</h1>
          <h2>{isUser.email}</h2>
        </div>

        <div>
          <Link to={'/'} onClick={event => showUpdateForm(event)} >Update</Link>
        </div>

      </div>
    </>
  )
};

export default Profile;
