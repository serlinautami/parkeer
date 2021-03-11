import { AppContainer, Button, FormGroup, FormInput, FormLabel, Form } from '../../components';
import { Link } from 'react-router-dom';
import './styles.scss';

const Register = () => {
  return (
    <AppContainer>
      <div className="register">
        <div className="register__header">
         <h1 className="register__title">
           Registrasi
         </h1>
        </div>
        <div className="register__body">
          <Form>

            <FormGroup>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormInput placeholder="your name" />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" placeholder="your@mail.com" />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" placeholder="*******" />
            </FormGroup>
            <div style={{ height: 12 }}></div>
            <Button>Daftar</Button>
          </Form>
        </div>
        <div className="register__footer">
          <p className="register__footer-text">
            Sudah Punya Akun? <Link to="/login" className="login__footer-link">Login Disini</Link>
          </p>
        </div>
      </div>
    </AppContainer>
  )
}

export default Register;