import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddEditUser from './pages/AddEditUser';
import About from './pages/About';
import UserInfo from './pages/UserInfo';
import Header from './components/Header';


function App() {
  return (
      <div className="App">

        <Header />

         <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/addUser" element={<AddEditUser />} />
            <Route path="/editUser/:id" element={<AddEditUser />} />
            <Route path="/userInfo/:id" element={<UserInfo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
