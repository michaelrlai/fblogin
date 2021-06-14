import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='container'>
            <h1 className='text-center'>social media login</h1>
            <p className='fs-3'>Welcome to the social media login page</p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='container col'>
              <div
                class='card text-dark bg-light mb-3'
                style={{ width: '300px' }}
              >
                <div class='card-body'>
                  <p class='card-text'>
                    <input
                      className='form-control mb-3'
                      type='email'
                      placeholder='Email'
                    />
                    <input
                      className='form-control mb-3'
                      type='password'
                      placeholder='Password'
                    />
                    <div className='d-grid mb-2'>
                      <button className='btn btn-primary'>Log In</button>
                    </div>
                    <Link className='text-center'>Forgot password?</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
