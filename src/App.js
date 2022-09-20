import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import SavedNews from './Components/SavedNews';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <Header />

      <Routes>
          
                <Route path='/' element={<Homepage />} />
                <Route path= '/login' element={<Login />} />
                <Route path= '/signup' element={<SignUp />} />
                <Route path= '/savednews' element={<SavedNews />} />
                <Route path= '/dashboard' element={<Dashboard />} />
              
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
