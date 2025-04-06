import logo from './logo.svg';
import './App.css';
import './styles/global.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { AdminPanel } from './AdminPanel'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/admin/" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
