import './App.css';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import LoginForm from './components/login';
import CreatePassword from './components/setpassword';
import ViewForm from './components/view';
import VerifyEmail from './components/emailVerify';
import Failed from './components/error';
import Emailcheck from './components/mailCheck';
import Loading from './components/emailLoad';


function App() {
  return (
    <VerifyEmail/>
  );
}

export default App;

// <ViewForm/>
//<CreatePassword/>
//  <LoginForm/>
// <Failed/>