import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

import googleImage from '../assets/images/google.png';
import githubImage from '../assets/images/github.png';
import appleImage from '../assets/images/apple.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const googleLogin = () => {
    window.open("https://localhost:3000/o-auth/google", "_self");
  }

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={isLoading}
          type='submit'
          variant='primary'
          className='mt-3'
        >
          Sign In
        </Button>
      </Form>

      {isLoading && <Loader />}

      <br></br>

      <Row className='py-1'>
        <p>or login with</p>
        <Col>
          <div onClick={googleLogin}>
            <img src={googleImage} alt="Google Icon" />
          </div>
        </Col>

        <Col>
          <div >
            <LinkContainer to='/o-auth/google'>
              <img src={githubImage} alt="Github Icon" />
            </LinkContainer>
          </div>
        </Col>

        <Col>
          <div >
            <LinkContainer to='/o-auth/google'>
              <img src={appleImage} alt="Apple Icon" />
            </LinkContainer>
          </div>
        </Col>
      </Row>


      <Row className='py-3'>
        <Col>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
