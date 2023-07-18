import React, { useState } from 'react';
import { observer } from 'mobx-react';
import authStore from '../stores/AuthStore';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import '../styles/crypto.css';
import rootStore from '../stores/RootStore';
import { getAuth, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Consolepage: React.FC = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'SignIn' | 'SignUp'>('SignIn');
  const navigate=useNavigate();
  const handleTabChange = (event: React.MouseEvent<HTMLDivElement>, newTab: 'SignIn' | 'SignUp') => {
    setSelectedTab(newTab);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    rootStore.authStore.closeModal();
  };

  const handleSignInSuccess = () => {
    rootStore.authStore.openModal();
  };

  const renderAuthButton = () => {
    if (rootStore.authStore.isSignedIn) {
      // User is signed in, show sign-out button
      return (
        <div>
          <span>{rootStore.authStore.username}</span>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      );
    } else if (!rootStore.authStore.isSignedIn && !authStore.isModalOpen) {
      // User is not signed in and modal is not open, show sign-in button
      return <button onClick={handleSignInSuccess}>Sign In</button>;
    } else {
      // User is not signed in, do not render any button
      return null;
    }
  };

  

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        rootStore.authStore.clearAuthUser();
        toast.dismiss(); // Close any remaining Toastify messages
        console.log('User signed out successfully!');
        navigate('/home');
      })
      .catch((error: any) => {
        console.log('Error signing out:', error.message);
      });
  };

  return (
    <div>
      {renderAuthButton()}
      {authStore.isModalOpen && (
        <div className={`overlay ${isModalOpen ? 'open' : ''}`}>
          <div className="modal">
            <div className="modal-content">
              <div className="tab-container">
                <div
                  className={`tab ${selectedTab === 'SignIn' ? 'active' : ''}`}
                  onClick={(event) => handleTabChange(event, 'SignIn')}
                >
                  Login
                </div>
                <div
                  className={`tab ${selectedTab === 'SignUp' ? 'active' : ''}`}
                  onClick={(event) => handleTabChange(event, 'SignUp')}
                >
                  Signup
                </div>
              </div>
              {selectedTab === 'SignIn' ? <SignIn /> : <SignUp />}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={false} /> {/* Add ToastContainer outside the modal */}
    </div>
  );
});

export default Consolepage;
