import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import AddServices from './components/AddServices/AddServices';
import ServiceDetail from './components/ServiceDetaile/ServiceDetail';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewServices from './components/AddNewServices/AddNewServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/myOrder'>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path='/manageAllOrder'>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path='/addNewService'>
              <AddNewServices></AddNewServices>
            </Route>
            <Route exact path='/addServices'>
              <AddServices></AddServices>
            </Route>
            <PrivateRouter exact path='/serviceDetail/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRouter>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
