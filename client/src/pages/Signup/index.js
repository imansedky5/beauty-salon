import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { SIGNIN_PAGE } from '../../utils/router.constant';
import { InputField } from '../../component';
import useStyles from './style';
import {
  updateAndValidateInput,
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  passwordSchema,
  // confirmPasswordSchema,
} from '../../utils';

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [, setLoading] = useState(false);
  const [, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // if (password !== confirmPassword) {
      //   return setConfirmPasswordError('Please input your the same password!');
      // }
      // || !confirmPassword
      if (!email || !password) {
        return setLoading(false);
      }

      await axios.post('/api/v1/signup', {
        firstName,
        lastName,
        email,
        password,
        // confirmPassword,
      });
      setLoading(false);
      setError('');
      return history.push('/signin');
    } catch (err) {
      setLoading(false);
      return setError(err.response.data.message || 'Something went wrong !! ');
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5}>
        <div className={classes.paper}>
          <div className={classes.iconLock}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </div>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={updateAndValidateInput(
                    'firstName',
                    firstNameSchema,
                    setFirstName,
                    setFirstNameError
                  )}
                  error={firstNameError}
                  helperText={
                    firstNameError ? 'Please Enter A valid First Name' : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={updateAndValidateInput(
                    'lastName',
                    lastNameSchema,
                    setLastName,
                    setLastNameError
                  )}
                  error={lastNameError}
                  helperText={
                    lastNameError ? 'Please Enter A valid Last Name' : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={updateAndValidateInput(
                    'email',
                    emailSchema,
                    setEmail,
                    setEmailError
                  )}
                  error={emailError}
                  helperText={
                    emailError
                      ? 'Please Enter A valid Email like exmaple@test.com'
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={updateAndValidateInput(
                    'password',
                    passwordSchema,
                    setPassword,
                    setPasswordError
                  )}
                  error={passwordError}
                  helperText={
                    passwordError
                      ? 'Please Enter A valid Password which must contain 6 characters'
                      : null
                  }
                />
              </Grid>
              {/* <Grid item xs={12}>
                <InputField
                  required
                  fullWidth
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={updateAndValidateInput(
                    'confirmPassword',
                    confirmPasswordSchema,
                    setConfirmPassword,
                    setConfirmPasswordError
                  )}
                  error={confirmPasswordError}
                  helperText={
                    confirmPasswordError
                      ? 'Please Enter A valid Password which must contain 6 characters'
                      : null
                  }
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-start">
              <Grid item>
                <Link to={SIGNIN_PAGE} className={classes.link}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
