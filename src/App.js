import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Onboarding, NotFound404, Login, Register, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Onboarding} />        
        <Route path="*" exact component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
