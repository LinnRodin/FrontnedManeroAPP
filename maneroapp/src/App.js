import './App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpView from './views/SignUpView';
import NotFoundView from './views/NotFoundView';
import AccountCreatedConfirmView from './views/AccountCreatedConfirmView';
import SignInView from './views/SignInView';
import ForgotPasswordView from './views/ForgotPasswordView';
import PasswordResetView from './views/PasswordResetView';
import PasswordResetComfirmView from './views/PasswordResetConfirmView';
import StartUpScreenView from './views/StartUpScreenView';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUpScreenView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/accountcreatedconfirm" element={<AccountCreatedConfirmView />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/forgotpassword" element={<ForgotPasswordView />} />
        <Route path="/passwordreset" element={<PasswordResetView/>} />
        <Route path="/passwordcomfirm" element={<PasswordResetComfirmView/>} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

