import { Route } from 'react-router-dom';
import './App.css';
import LoginBox from './loginBox/loginBox'
function App() {
  const authed = null
  return (
    <div >
      {
        authed === null ?
          <LoginBox />
          :
          <Route exact path='/' render={() => <div>welcome to board</div>} />
      }
    </div>
  );
}

export default App;
