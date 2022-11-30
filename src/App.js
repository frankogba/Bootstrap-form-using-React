import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

import './App.css';

function App() {
  return (
    <Container id="main-container" className='d-grid h-100'>
      <Form id="register" className='text-center w-100'>
        <img className='mb-4 bootstrap-logo'
        src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' alt='Bootstrap 5'>

        </img>
        <h1 className='mb-3 fs-3 fw-normal'> Please sign in</h1>
        <Form.Group controlId='sign-in-email'>
          <Form.Control type='email' size='lg' placeholder='E-mail address' autoComplete='username' className='position-relative'/>
        </Form.Group>

        <Form.Group controlId='sign-in-password'>
          <Form.Control type='password' size='lg' placeholder='Password' autoComplete='current-password' className='position-relative'/>
        </Form.Group>

        <Form.Group controlId='sign-in-phoneNumber' className='mb-3'>
          <Form.Control type='phone no' size='lg' placeholder='phone number' autoComplete='current-phone no' className='position-relative'/>
        </Form.Group>

        <Form.Group controlId='sign-in-remember' className='d-flex justify-content-center mb-4'>
          <Form.Check label="Remember me" />
        </Form.Group>

        <div className='d-grid'>
          <Button variant='danger' size='lg'>Sign in</Button>
        </div>

        <div>
          <p className='mt-5 text-muted'>&copy; Frankiee 2022-2023</p>
        </div>

      </Form>
    </Container>
  );
}

export default App;
