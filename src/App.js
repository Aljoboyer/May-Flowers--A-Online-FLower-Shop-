import React, { useEffect , useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Pages/UserPages/Userhompage/Homepage';
import Details from './Pages/UserPages/OrderNowDetailspage/Details';
import Usercart from './Pages/UserPages/UserCarts/Usercart';
import Login from './Pages/SharedPages/Login/Login';
import Register from './Pages/SharedPages/Register/Register';
import Yourorders from './Pages/UserPages/Yourorder/Yourorders';
import Dashboardhome from './Pages/Adminpages/AdminDashboard/Dashboardhome';
import Manageflower from './Pages/Adminpages/ManageFlower/Manageflower';
import Manageorders from './Pages/Adminpages/ManageOrder/Manageorders';
import Dashboard from './Pages/Adminpages/AdminDashboard/Dashboard';
import Makeadmin from './Pages/Adminpages/Makeadmin/Makeadmin';
import Addflower from './Pages/Adminpages/Addflower/Addflower';
import Footer from './Pages/UserPages/Footer/Footer';
import Allocassion from './Pages/UserPages/Ocassion/Allocassion'
import SeasonsCategory from './Pages/UserPages/SeasonalFlwoers/SeasonAndCategory/Seasoncategory';
import Privateroute from './Pages/Privateroute/Privateroute';
import Lessthensixty from './Pages/UserPages/Userhompage/Under60/Lessthensixty';
import Sharemoments from './Pages/UserPages/Sharemoments/Sharemoments';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

  return (
      <>
        {
          loading ? <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div> : <div className="container-fluid">
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<Homepage/>} />
               <Route path="/addflower" element={<Addflower/>} />
               <Route path="/details/:id" element={<Privateroute><Details/></Privateroute>} />
               <Route path="/usercart" element={<Usercart/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/yourorders" element={<Yourorders/>} />
               <Route path="/dashboard" element={<Dashboard/>}> 
                  <Route path="/dashboard" element={<Dashboardhome/>}/>
                  <Route path="/dashboard/makeadmin" element={<Makeadmin/>}/>
                  <Route path="/dashboard/manageflower" element={<Manageflower/>}/>
                  <Route path="/dashboard/manageorders" element={<Manageorders/>}/>
                  <Route path="/dashboard/addflower" element={<Addflower/>}/>
               </Route>
               <Route path="/allocassion" element={<Allocassion/>}/>
               <Route path="/seasonsCategory" element={<SeasonsCategory/>}/>
               <Route path="/lessthensixty" element={<Lessthensixty/>}/>
               <Route path="/sharemoments" element={<Sharemoments/>}/>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
    </div>
        }
      </>
  );
}

export default App;
