import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Users from './components/Users';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/Home' element={<Dashboard/>} />
        <Route path='/User' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
