import { AppContainer, Button, FormGroup, FormInput, FormLabel, Form } from '../../components';
import { Link } from 'react-router-dom';
import './styles.scss';

const Login = () => {
  return (
    <AppContainer>
      <div className="login">
        <div className="login__header">
         <h1 className="login__title">
           Masuk
         </h1>
        </div>
        <div className="login__body">
          <Form>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" placeholder="your@mail.com" />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" placeholder="********" />
            </FormGroup>
            <div style={{ height: 12 }}></div>
            <Button>Masuk</Button>
          </Form>
        </div>
        <div className="login__footer">
          <p className="login__footer-text">
            Belum Punya Akun? <Link to="/register" className="login__footer-link">Daftar Disini</Link>
          </p>
        </div>
      </div>
    </AppContainer>
  )
}

export default Login;