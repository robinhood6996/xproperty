
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Shared/Header/Header';
import Property from './pages/Properties/Property/Property';
import AllProperties from './pages/Properties/Properties/AllProperties';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AddProperties from './Admin/PropertiesManage/AddProperties';
import ManageProperties from './Admin/PropertiesManage/ManageProperties';
import ManageOrder from './Admin/OrderManage/ManageOrder';
import ManageAdmin from './Admin/MangeAdmin/ManageAdmin';
import AdminList from './Admin/MangeAdmin/AdminList';
import AdminDashboard from './Admin/Home/Home/AdminDashboard';
import AdminLogin from './pages/Login/Login/AdminLogin';
import Dashboard from './pages/Users/Dashboard/Dashboard';
import Orders from './pages/Users/Orders';
import Reviews from './pages/Users/Dashboard/Reviews';
import Pay from './pages/Users/Dashboard/Pay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/register">
            <Header></Header>
            <Register></Register>
          </Route>
          <Route path="/properties">
            <Header></Header>
            <AllProperties></AllProperties>
          </Route>
          <Route path="/property">
            <Header></Header>
            <Property></Property>
          </Route>
          <Route path="/profile">
            <Header></Header>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/orders">
            <Header></Header>
            <Dashboard></Dashboard>
            <Orders></Orders>
          </Route>
          <Route path="/reviews">
            <Header></Header>
            <Dashboard></Dashboard>
            <Reviews></Reviews>
          </Route>
          <Route path="/pay">
            <Header></Header>
            <Dashboard></Dashboard>
            <Pay></Pay>
          </Route>
          <Route exact path="/admin">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route path="/admin/login">
            <AdminLogin></AdminLogin>
          </Route>
          <Route path="/addproperty">
            <AddProperties></AddProperties>
          </Route>
          <Route path="/manage-property">
            <ManageProperties></ManageProperties>
          </Route>
          <Route path="/manage-orders">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/manage-admin">
            <ManageAdmin></ManageAdmin>
          </Route>
          <Route path="/admin-list">
            <AdminList></AdminList>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
