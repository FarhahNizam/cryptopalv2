import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { IconButton } from '@mui/material';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/crypto.css';
import { useNavigate } from 'react-router-dom';
import AuthStore from '../stores/AuthStore';
import rootStore from '../stores/RootStore';
import AuthDetails from './AuthDetails';

interface UserInput {
  email: string;
  password: string;
}

interface SignInProps {
  onSignInSuccess: () => void;
}

const SignIn: React.FC = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserInput>();
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false); // New state variable

  let history = useNavigate();
  const redirectToLogin = () => {
    history("/home");
    // Replace "/login" with the actual login route
  };

  const onSubmit = async (data: UserInput) => {
    if (isButtonPressed) {
      return; // Return early if button already pressed
    }

    setIsButtonPressed(true); // Set the button pressed state to true

    const { email, password } = data;
  
    try {
      const auth = getAuth();
  
      // Enable persistence
      await setPersistence(auth, browserLocalPersistence);
  
      // Sign in the user with email and password
      const { user } = await signInWithEmailAndPassword(auth, email, password);
  
      rootStore.authStore.setAuthUser({ uid: user.uid, username: email });
     
      // Call the handleSignInSuccess action in the AuthStore
      rootStore.authStore.closeModal();

      console.log('User signed in successfully!');
      console.log('UID:', user.uid,email); // Log the UID
     
      // Display success toast message
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        setError("password", { message: "Invalid password.Please try again" });
      } else {
        console.log("Error signing in:", error.message);
      }
    }
  };

  const handleSignOut = () => {
    toast.dismiss(); // Close any remaining Toastify messages
    // Implement sign out logic here
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input type="email" placeholder="Email" {...register("email")} />

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should have a minimum of 8 characters",
                },
                maxLength: {
                  value: 120,
                  message: "Password should not have more than 120 characters",
                },
                pattern: {
                  value: /^(?=.*?[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message: "Password should contain at least one symbol",
                },
              })}
            />
            <IconButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </IconButton>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
          <div className="submit-btn">
            <button type="submit" onClick={handleSignOut}>Sign In</button>
          </div>
        </form>
      </div>
      <div>
        <AuthDetails />
      </div>
      <ToastContainer autoClose={false} /> {/* Add ToastContainer outside the form and disable autoClose */}
    </div>
  );
});

export default SignIn;
