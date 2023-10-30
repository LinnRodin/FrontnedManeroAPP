import './App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpView from './views/SignUpView';
import NotFoundView from './views/NotFoundView';
import AccountCreatedConfirmView from './views/AccountCreatedConfirmView';
import SignInView from './views/SignInView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpView />} />
        <Route path="/accountcreatedcomfirm" element={<AccountCreatedConfirmView />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

