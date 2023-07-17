import React from 'react';
import { observer } from 'mobx-react';
import rootStore, { auth } from '../stores/RootStore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthDetails: React.FC = observer(() => {
  let navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
        rootStore.authStore.clearAuthUser();
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      {rootStore.authStore.authUser ? (
        <>
          <p>{`Signed in as ${rootStore.authStore.authUser}`}</p>
          <button onClick={userSignOut}>Sign out</button>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
});

export default AuthDetails;
