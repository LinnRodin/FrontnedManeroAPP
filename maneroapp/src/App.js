import './App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpView from './views/SignUpView';
import NotFoundView from './views/NotFoundView';
import AccountCreatedConfirmView from './views/AccountCreatedConfirmView';
import SignInView from './views/SignInView';
import ForgotPasswordView from './views/ForgotPasswordView';
import PasswordResetView from './views/PasswordResetView';
import PasswordResetComfirmView from './views/PasswordResetConfirmView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpView />} />
        <Route path="/accountcreatedcomfirm" element={<AccountCreatedConfirmView />} />
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

