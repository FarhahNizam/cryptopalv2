import React, { useState } from 'react';
import { observer } from 'mobx-react';
import authStore from '../stores/AuthStore';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import '../styles/crypto.css';
import rootStore from '../stores/RootStore';

const Consolepage: React.FC = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'SignIn' | 'SignUp'>('SignIn');

  const handleTabChange = (event: React.MouseEvent<HTMLDivElement>, newTab: 'SignIn' | 'SignUp') => {
    setSelectedTab(newTab);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignInSuccess = () => {
    closeModal();
  };

  const renderAuthButton = () => {
    if (rootStore.authStore.isSignedIn) {
      // User is signed in, show sign-out button
      return (
        <button onClick={handleSignOut}>Sign Out</button>
      );
    } else {
      // User is not signed in, show sign-in button
      return (
        <button onClick={openModal}>Sign In</button>
      );
    }
  };

  const handleSignOut = () => {
    rootStore.authStore.clearAuthUser();
  };

  return (
    <div>
      {renderAuthButton()}
      {isModalOpen && (
        <div className="overlay">
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
    </div>
  );
});

export default Consolepage;
