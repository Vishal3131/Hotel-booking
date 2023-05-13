
import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';
import NavAdmin from './components/admin/NavAdmin';
import Site_setting from './components/admin/Site_setting';
import Admin_rooms from './components/admin/Admin_rooms';
import Dashboard from './components/admin/Dashboard';
import Booked from './components/admin/Booked';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";   


function App() {
    
  return (
    <div>
        
      
       <Router>
      <Navbar/>
      <Routes>
          <Route path="/Rooms" element={<Rooms />}/>
          
          <Route path="/" element={<Homepage/>}/>

          <Route path="/About" element={<About/>}/>
    
           </Routes>   
       </Router>
      
      
      {/*Admin panel  */}
       <Router>
       <NavAdmin>
      <Routes>
        
          <Route path="/Admin_rooms" element={<Admin_rooms/>} />
          <Route path="/Site_setting" element={<Site_setting/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Booked" element={<Booked/>} />
           </Routes>
           </NavAdmin>
           
       </Router>
        
    </div>
    
  );
}

export default App;
