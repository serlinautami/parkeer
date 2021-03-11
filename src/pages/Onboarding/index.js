import { AppContainer, Button } from '../../components';
import './styles.scss';

const Onboarding = ({ history }) => {
  return (
    <AppContainer>
      <div className="onboarding">
        <div className="onboarding__content">
          <h1 className="onboarding__title">
            Parkeer
          </h1>
          <p className="onboarding__subtitle">
            Aplikasi Parkir Online
          </p>
        </div>
        <div className="onboarding__action">
          <Button onClick={() => history.push('/login')}>Coba Sekarang</Button>
        </div>
      </div>
    </AppContainer>
  )
}

export default Onboarding;