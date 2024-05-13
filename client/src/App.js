import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Post from './Post';


function App() {
  return (
    <Routes>
      <Route index element={
        <main> 
          <Header></Header>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </main>
      } />
      <Route path={'/login'} element={
        <main>
          <Header />
          <div>login page</div>
        </main>
      } />
      <Route path={'/register'} element={
        <div>register page</div>
      } />
    </Routes>
      
  );
}

export default App;
