
import './App.css';
import CheckoutSteps from './Components/CheckoutSteps';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Details2 from './Pages/Details2';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserDetail from './Pages/UserDetail';
import Home from './Pages/Home';
import Confirm from './Pages/Confirm';
import Customers from './Pages/Customers';
import Transaction from './Pages/Transaction';
import PageNotFound from './Pages/PageNotFound';
import ContactPage from './Pages/ContactPage';
import TransactionPage from './Pages/TransactionPage';

function App() {

  
  return (

    <div className="App text-white text-bold">
     <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
          {/* <Login /> */}
          {/* <SignUp /> */}
          {/* <Route path="/userDetail" element={<UserDetail />} /> */}
          <Route path="/userDetail" element={<UserDetail />} />
          <Route path="/details2" element={<Details2/> }  />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/customers" element={<Customers />    }  />
          <Route path="/yourTransaction/:id" element={<Transaction />  }/>
          <Route path="/transaction" element={<TransactionPage />  }/>
          <Route path="*" element={<PageNotFound />  }/>
          <Route path="/contactPage" element={<ContactPage />   }  />
            {/* <Details2 /> */}
            {/* <UserDetail /> */}
            {/* <CheckoutSteps /> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
