import React, { useState } from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import '../styles/crypto.css'; // Import the CSS file for Consolepage component

const Consolepage = () => {
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

  return (
    <div>
      <button onClick={openModal}>Log in</button>
      
      {isModalOpen && (
        <div className="overlay"> {/* Add overlay class */}
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
};

export default Consolepage;

