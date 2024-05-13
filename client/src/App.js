import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Post from './Post';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path={'/'}index element={
          <IndexPage/>
        } />
        <Route path={'/login'} element={
          <LoginPage/>
        } />
        <Route path={'/register'} element={
          <RegisterPage/>
        } />
      </Route>
    </Routes>
      
  );
}

export default App;
