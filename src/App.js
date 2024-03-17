import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Theme/Layout';
import UserManagement from './pages/UserManagement';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
function App() {
  return (
    
    <div >
        <BrowserRouter>
        <Routes> 

          <Route path="/" element={<Layout/>}>
            <Route path="/user-management" element={ < UserManagement /> }/>
            <Route path="/Faq" element={ < FAQ /> }/>
            <Route path="/Contact" element={ < Contact /> }/>
          </Route>
        </Routes>
        </BrowserRouter>
  
        {/* <Layout /> */}
    </div>
  );
}

export default App;
