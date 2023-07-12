import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { IconButton } from '@mui/material';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/crypto.css';
import { auth } from '../services/firebaseconfig';
import AuthDetails from '../Components/AuthDetails';
import { useNavigate } from 'react-router-dom';
import AuthStore from '../stores/AuthStore';
import rootStore from '../stores/RootStore';

interface UserInput {
  email: string;
  password: string;
}

const SignIn: React.FC = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserInput>();
  const [showPassword, setShowPassword] = useState(false);

  let history = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        rootStore.authStore.setAuthUser({ username: user.email });
      } else {
        // User is not signed in
        rootStore.authStore.clearAuthUser();
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component unmounts
    };
  }, []);

  const redirectToLogin = () => {
    history('/home');
    // Replace "/login" with the actual login route
  };

  const onSubmit = async (data: UserInput) => {
    const { email, password } = data;

    try {
      const auth = getAuth();

      // Enable persistence
      await setPersistence(auth, browserLocalPersistence);

      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);

      rootStore.authStore.setAuthUser({ username: email });

      console.log('User signed in successfully!');

      // Display success toast message
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setError('password', { message: 'Invalid password. Please try again' });
      } else {
        console.log('Error signing in:', error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="card">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input type="email" placeholder="Email" {...register('email')} />

          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should have a minimum of 8 characters',
                },
                maxLength: {
                  value: 120,
                  message: 'Password should not have more than 120 characters',
                },
                pattern: {
                  value: /^(?=.*?[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message: 'Password should contain at least one symbol',
                },
              })}
            />
            <IconButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </IconButton>
          </div>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
          <div className="button-form">
            <button className="form-button" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div>
      </div>
      <ToastContainer />
    </div>
  );
});

export default SignIn;
