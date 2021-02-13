import React from 'react';

import './SignIn.scss';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { signInWithGoogle } from '../../utils/firebase';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
